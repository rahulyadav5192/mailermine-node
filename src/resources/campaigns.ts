import { ApiError } from '../errors/index.js';
import type { InternalCampaignsApi } from '../internal/generated-client.js';
import type { JsonObject, JsonValue } from '../types/json.js';
import type { Collection } from '../support/responses.js';
import { Response } from '../support/responses.js';
import {
  normalizeAs,
  toCollection,
  toGeneratedRequest,
  toResponse,
} from '../support/serialization.js';
import { BaseResource } from './base.js';
import type {
  Campaign,
  CampaignActivityEntry,
  CampaignAnalytics,
  CampaignEventEntry,
  CampaignLink,
  CampaignListOptions,
  CampaignPreview,
  CampaignProgress,
  CampaignRecipient,
  CampaignRecipientCount,
  CampaignRecipientListOptions,
  CampaignRecipientPreview,
  CampaignSenderInput,
  CampaignStatusSummary,
  CampaignTimelineEntry,
  CampaignValidation,
  CreateCampaignInput,
  DuplicateCampaignInput,
  ScheduleCampaignInput,
  UpdateCampaignInput,
} from './marketing-types.js';
import type { DeleteResult } from './types.js';

/**
 * Campaign operations.
 *
 * Provides a cohesive campaign API over the generated campaigns, lifecycle,
 * analytics, and events clients.
 */
export class Campaigns extends BaseResource {
  /** @internal */
  constructor(private readonly api: InternalCampaignsApi) {
    super();
  }

  /**
   * Create a campaign.
   *
   * The create endpoint accepts only a name. Extra configuration fields are
   * applied immediately through a follow-up update so callers can create a
   * fully configured draft in one SDK call.
   */
  async create(input: CreateCampaignInput): Promise<Response<Campaign>> {
    const normalized = normalizeCampaignParameters(input);
    const name = normalized.name;

    if (typeof name !== 'string' || name === '') {
      throw new Error('The name field is required.');
    }

    const created = await this.execute(async () =>
      toResponse<Campaign>(await this.api.create(toGeneratedRequest({ name }))),
    );

    const configuration = extractConfigurationParameters(normalized);
    if (Object.keys(configuration).length === 0) {
      return created;
    }

    return this.update(campaignIdFromResponse(created), configuration);
  }

  /**
   * List campaigns with filters and pagination.
   */
  async list(options: CampaignListOptions = {}): Promise<Collection<Campaign>> {
    return this.execute(async () => toCollection<Campaign>(await this.api.list(options)));
  }

  /**
   * Retrieve a campaign by UUID.
   */
  async get(campaignId: string): Promise<Response<Campaign>> {
    return this.execute(async () =>
      toResponse<Campaign>(await this.api.get(campaignId)),
    );
  }

  /**
   * Partially update an editable campaign.
   */
  async update(
    campaignId: string,
    input: UpdateCampaignInput,
  ): Promise<Response<Campaign>> {
    const body = toGeneratedRequest(normalizeCampaignParameters(input));
    return this.execute(async () =>
      toResponse<Campaign>(await this.api.update(campaignId, body)),
    );
  }

  /**
   * Soft-delete a campaign.
   */
  async delete(campaignId: string): Promise<Response<DeleteResult>> {
    return this.execute(async () => {
      const envelope = await this.api.delete(campaignId);
      const response = toResponse<unknown>(envelope);
      return new Response<DeleteResult>({ deleted: true }, response.message, response.success);
    });
  }

  /**
   * Duplicate a campaign.
   */
  async duplicate(
    campaignId: string,
    input: DuplicateCampaignInput = {},
  ): Promise<Response<Campaign>> {
    const body =
      Object.keys(input).length === 0 ? undefined : toGeneratedRequest(input);
    return this.execute(async () =>
      toResponse<Campaign>(await this.api.duplicate(campaignId, body)),
    );
  }

  /**
   * Archive a campaign.
   */
  async archive(campaignId: string): Promise<Response<Campaign>> {
    return this.execute(async () =>
      toResponse<Campaign>(await this.api.archive(campaignId)),
    );
  }

  /**
   * Restore an archived or soft-deleted campaign.
   */
  async restore(campaignId: string): Promise<Response<Campaign>> {
    return this.execute(async () =>
      toResponse<Campaign>(await this.api.restore(campaignId)),
    );
  }

  /**
   * Set the campaign subject.
   */
  async setSubject(campaignId: string, subject: string): Promise<Response<Campaign>> {
    return this.update(campaignId, { subject });
  }

  /**
   * Set the campaign sender.
   *
   * Accepts an email string (with optional `fromName`) or an object with
   * `fromEmail` / `fromName`.
   */
  async setSender(
    campaignId: string,
    sender: string | CampaignSenderInput,
    fromName?: string | null,
  ): Promise<Response<Campaign>> {
    if (typeof sender === 'string') {
      const payload: UpdateCampaignInput = { fromEmail: sender };
      if (fromName !== undefined) {
        payload.fromName = fromName;
      }
      return this.update(campaignId, payload);
    }

    const payload: UpdateCampaignInput = {};
    if (sender.fromEmail !== undefined) {
      payload.fromEmail = sender.fromEmail;
    }
    if (sender.fromName !== undefined) {
      payload.fromName = sender.fromName;
    }
    return this.update(campaignId, payload);
  }

  /**
   * Set the campaign reply-to address.
   */
  async setReplyTo(
    campaignId: string,
    replyTo: string | null,
  ): Promise<Response<Campaign>> {
    return this.update(campaignId, { replyTo });
  }

  /**
   * Set the campaign preheader / preview text.
   */
  async setPreheader(
    campaignId: string,
    preheader: string | null,
  ): Promise<Response<Campaign>> {
    return this.update(campaignId, { previewText: preheader });
  }

  /**
   * Set the campaign template.
   */
  async setTemplate(campaignId: string, templateId: string): Promise<Response<Campaign>> {
    return this.update(campaignId, { templateUuid: templateId });
  }

  /**
   * Estimate recipient counts for a campaign.
   */
  async recipientCount(campaignId: string): Promise<Response<CampaignRecipientCount>> {
    const preview = await this.previewRecipients(campaignId);
    const data = preview.data;
    return new Response(
      {
        count: data.estimatedCount ?? 0,
        estimatedCount: data.estimatedCount ?? null,
        subscribedCount: data.subscribedCount ?? null,
        unsubscribedCount: data.unsubscribedCount ?? null,
        suppressedCount: data.suppressedCount ?? null,
      },
      preview.message,
      preview.success,
    );
  }

  /**
   * Preview estimated recipients for a campaign.
   */
  async previewRecipients(
    campaignId: string,
  ): Promise<Response<CampaignRecipientPreview>> {
    return this.execute(async () =>
      toResponse<CampaignRecipientPreview>(await this.api.previewRecipients(campaignId)),
    );
  }

  /**
   * Validate campaign readiness.
   */
  async validate(campaignId: string): Promise<Response<CampaignValidation>> {
    return this.execute(async () =>
      toResponse<CampaignValidation>(await this.api.validate(campaignId)),
    );
  }

  /** Mark a campaign as ready to send or schedule. */
  async markReady(campaignId: string): Promise<Response<Campaign>> {
    return this.execute(async () =>
      toResponse<Campaign>(await this.api.ready(campaignId)),
    );
  }

  /** Send a ready campaign immediately. */
  async send(campaignId: string): Promise<Response<Campaign>> {
    return this.execute(async () =>
      toResponse<Campaign>(await this.api.send(campaignId)),
    );
  }

  /** Schedule a campaign for later delivery. */
  async schedule(
    campaignId: string,
    input: ScheduleCampaignInput = {},
  ): Promise<Response<Campaign>> {
    const body = toGeneratedRequest({
      sendImmediately: input.sendImmediately ?? false,
      scheduledAt: normalizeScheduleDate(input.scheduledAt),
      timezone: input.timezone ?? 'UTC',
    });
    return this.execute(async () =>
      toResponse<Campaign>(await this.api.schedule(campaignId, body)),
    );
  }

  /** Reschedule an already scheduled campaign. */
  async reschedule(
    campaignId: string,
    input: ScheduleCampaignInput = {},
  ): Promise<Response<Campaign>> {
    return this.schedule(campaignId, input);
  }

  /** Clear a pending campaign schedule. */
  async unschedule(
    campaignId: string,
    input: Pick<ScheduleCampaignInput, 'timezone'> = {},
  ): Promise<Response<Campaign>> {
    return this.update(campaignId, {
      sendImmediately: false,
      scheduledAt: null,
      ...(input.timezone !== undefined ? { timezone: input.timezone } : {}),
    });
  }

  /** Queue a campaign for immediate delivery through the schedule endpoint. */
  async sendNow(
    campaignId: string,
    input: Pick<ScheduleCampaignInput, 'timezone'> = {},
  ): Promise<Response<Campaign>> {
    return this.schedule(campaignId, {
      sendImmediately: true,
      timezone: input.timezone ?? 'UTC',
    });
  }

  /** Cancel a pending schedule. */
  async cancelSchedule(campaignId: string): Promise<Response<Campaign>> {
    return this.cancel(campaignId);
  }

  /** Pause a sending campaign. */
  async pause(campaignId: string): Promise<Response<Campaign>> {
    return this.execute(async () =>
      toResponse<Campaign>(await this.api.pause(campaignId)),
    );
  }

  /** Resume a paused campaign. */
  async resume(campaignId: string): Promise<Response<Campaign>> {
    return this.execute(async () =>
      toResponse<Campaign>(await this.api.resume(campaignId)),
    );
  }

  /** Cancel a scheduled or sending campaign. */
  async cancel(campaignId: string): Promise<Response<Campaign>> {
    return this.execute(async () =>
      toResponse<Campaign>(await this.api.cancel(campaignId)),
    );
  }

  /**
   * Preview rendered campaign content.
   */
  async preview(campaignId: string): Promise<Response<CampaignPreview>> {
    return this.execute(async () =>
      toResponse<CampaignPreview>(await this.api.preview(campaignId)),
    );
  }

  /**
   * Render campaign content.
   *
   * Alias of {@link Campaigns.preview} for content workflows.
   */
  async render(campaignId: string): Promise<Response<CampaignPreview>> {
    return this.preview(campaignId);
  }

  /**
   * Retrieve a status summary for a campaign.
   */
  async status(campaignId: string): Promise<Response<CampaignStatusSummary>> {
    const response = await this.get(campaignId);
    const campaign = response.data as unknown as JsonObject;
    return new Response(
      pickKeys(campaign, [
        'uuid',
        'status',
        'statusLabel',
        'sendImmediately',
        'scheduledAt',
        'timezone',
        'sentAt',
        'startedAt',
        'completedAt',
        'lastProcessedAt',
      ]) as CampaignStatusSummary,
      response.message,
      response.success,
    );
  }

  /**
   * Retrieve campaign send progress.
   */
  async progress(campaignId: string): Promise<Response<CampaignProgress>> {
    return this.execute(async () =>
      toResponse<CampaignProgress>(await this.api.progress(campaignId)),
    );
  }

  /**
   * Retrieve campaign analytics.
   */
  async analytics(campaignId: string): Promise<Response<CampaignAnalytics>> {
    return this.execute(async () =>
      toResponse<CampaignAnalytics>(await this.api.analytics(campaignId)),
    );
  }

  /**
   * Retrieve open metrics for a campaign.
   */
  async opens(campaignId: string): Promise<Response<JsonObject>> {
    return this.analyticsSlice(campaignId, ['opened', 'uniqueOpens', 'openRate']);
  }

  /**
   * Retrieve click metrics for a campaign.
   */
  async clicks(campaignId: string): Promise<Response<JsonObject>> {
    return this.analyticsSlice(campaignId, ['clicked', 'uniqueClicks', 'clickRate']);
  }

  /**
   * Retrieve bounce metrics for a campaign.
   */
  async bounces(campaignId: string): Promise<Response<JsonObject>> {
    return this.analyticsSlice(campaignId, ['bounced', 'bounceRate']);
  }

  /**
   * Retrieve complaint metrics for a campaign.
   */
  async complaints(campaignId: string): Promise<Response<JsonObject>> {
    return this.analyticsSlice(campaignId, ['complained', 'complaintRate']);
  }

  /**
   * Retrieve unsubscribe metrics for a campaign.
   */
  async unsubscribes(campaignId: string): Promise<Response<JsonObject>> {
    return this.analyticsSlice(campaignId, ['unsubscribed', 'unsubscribeRate']);
  }

  /**
   * Retrieve delivery count metrics for a campaign.
   */
  async deliveries(campaignId: string): Promise<Response<JsonObject>> {
    return this.analyticsSlice(campaignId, [
      'delivered',
      'deliveryRate',
      'sent',
      'failed',
    ]);
  }

  /**
   * Retrieve delivery-focused analytics for a campaign.
   */
  async delivery(campaignId: string): Promise<Response<JsonObject>> {
    return this.analyticsSlice(campaignId, [
      'recipients',
      'queued',
      'sent',
      'delivered',
      'failed',
      'deliveryRate',
      'failureRate',
      'averageDeliveryTimeSeconds',
    ]);
  }

  /**
   * Retrieve tracked campaign links.
   */
  async links(campaignId: string): Promise<Collection<CampaignLink>> {
    return this.execute(async () =>
      toCollection<CampaignLink>(await this.api.links(campaignId)),
    );
  }

  /**
   * Retrieve campaign events.
   */
  async events(campaignId: string): Promise<Collection<CampaignEventEntry>> {
    return this.execute(async () =>
      toCollection<CampaignEventEntry>(await this.api.events(campaignId)),
    );
  }

  /**
   * Retrieve campaign activity entries.
   */
  async activity(campaignId: string): Promise<Collection<CampaignActivityEntry>> {
    return this.execute(async () =>
      toCollection<CampaignActivityEntry>(await this.api.activity(campaignId)),
    );
  }

  /**
   * Retrieve the campaign timeline.
   */
  async timeline(campaignId: string): Promise<Collection<CampaignTimelineEntry>> {
    return this.execute(async () =>
      toCollection<CampaignTimelineEntry>(await this.api.timeline(campaignId)),
    );
  }

  /**
   * List campaign recipients with optional filters.
   */
  async recipients(
    campaignId: string,
    options: CampaignRecipientListOptions = {},
  ): Promise<Collection<CampaignRecipient>> {
    return this.execute(async () =>
      toCollection<CampaignRecipient>(await this.api.recipients(campaignId, options)),
    );
  }

  /**
   * Attach a segment to a campaign.
   */
  async addSegment(campaignId: string, segmentId: string): Promise<Response<Campaign>> {
    return this.update(campaignId, { segmentUuid: segmentId });
  }

  /** Attach an audience (segment) to a campaign. */
  async addAudience(
    campaignId: string,
    audienceId: string,
  ): Promise<Response<Campaign>> {
    return this.addSegment(campaignId, audienceId);
  }

  /** Remove the attached audience from a campaign. */
  async removeAudience(campaignId: string): Promise<Response<Campaign>> {
    return this.removeSegment(campaignId);
  }

  /**
   * Remove the attached segment from a campaign.
   */
  async removeSegment(campaignId: string): Promise<Response<Campaign>> {
    return this.update(campaignId, { segmentUuid: null });
  }

  private async analyticsSlice(
    campaignId: string,
    keys: readonly string[],
  ): Promise<Response<JsonObject>> {
    const response = await this.analytics(campaignId);
    const data = normalizeAs<JsonObject>(response.data);
    return new Response(pickKeys(data, keys), response.message, response.success);
  }
}

function normalizeCampaignParameters(
  parameters: CreateCampaignInput | UpdateCampaignInput,
): UpdateCampaignInput & { name?: string } {
  const normalized: UpdateCampaignInput & { name?: string } = { ...parameters };

  if (normalized.templateId !== undefined && normalized.templateUuid === undefined) {
    normalized.templateUuid = normalized.templateId;
  }

  if (normalized.segmentId !== undefined && normalized.segmentUuid === undefined) {
    normalized.segmentUuid = normalized.segmentId;
  }

  if (normalized.audienceId !== undefined && normalized.segmentUuid === undefined) {
    normalized.segmentUuid = normalized.audienceId;
  }

  if (normalized.preheader !== undefined && normalized.previewText === undefined) {
    normalized.previewText = normalized.preheader;
  }

  delete normalized.templateId;
  delete normalized.segmentId;
  delete normalized.audienceId;
  delete normalized.preheader;

  return normalized;
}

function extractConfigurationParameters(
  parameters: UpdateCampaignInput & { name?: string },
): UpdateCampaignInput {
  const { name: _name, ...rest } = parameters;
  const nullableKeys = new Set([
    'subject',
    'previewText',
    'fromName',
    'fromEmail',
    'replyTo',
    'templateUuid',
    'segmentUuid',
    'scheduledAt',
    'timezone',
  ]);

  return Object.fromEntries(
    Object.entries(rest).filter(([key, value]) => {
      if (key === 'name') {
        return false;
      }
      return value !== undefined && (value !== null || nullableKeys.has(key));
    }),
  ) as UpdateCampaignInput;
}

function campaignIdFromResponse(response: Response<Campaign>): string {
  const data = response.data as Campaign & { id?: string };
  const campaignId = data.uuid ?? data.id;
  if (typeof campaignId !== 'string' || campaignId === '') {
    throw new ApiError(
      'Campaign was created but the response did not include a UUID.',
      500,
      response,
    );
  }
  return campaignId;
}

function pickKeys(source: JsonObject, keys: readonly string[]): JsonObject {
  const result: JsonObject = {};
  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      result[key] = source[key] as JsonValue;
    }
  }
  return result;
}

function normalizeScheduleDate(
  value: string | Date | null | undefined,
): string | null | undefined {
  if (value === undefined || value === null) return value;
  return value instanceof Date ? value.toISOString() : value;
}
