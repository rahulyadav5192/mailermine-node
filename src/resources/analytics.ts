import type { InternalAnalyticsApi } from '../internal/generated-client.js';
import type { JsonObject, JsonValue } from '../types/json.js';
import { Collection, Pagination, Response } from '../support/responses.js';
import {
  normalizeAs,
  toJsonObject,
  toResponse,
} from '../support/serialization.js';
import { BaseResource } from './base.js';
import type { AnalyticsFilters, Event } from './deliverability-types.js';
import type { Campaigns } from './campaigns.js';
import type { Events } from './events.js';

/** Account-wide delivery and engagement analytics. */
export class Analytics extends BaseResource {
  /** @internal */
  constructor(
    private readonly api: InternalAnalyticsApi,
    private readonly campaignResource: Campaigns,
    private readonly eventResource: Events,
  ) {
    super();
  }

  /** Retrieve the analytics overview for a date range. */
  async overview(filters: AnalyticsFilters = {}): Promise<Response<JsonObject>> {
    const campaignId = getCampaignId(filters);
    if (campaignId !== undefined) {
      const response = await this.campaignResource.analytics(campaignId);
      return new Response(
        normalizeAs<JsonObject>(response.data),
        response.message,
        response.success,
      );
    }
    return this.request('overview', filters);
  }

  /** Retrieve delivery metrics. */
  async deliveries(filters: AnalyticsFilters = {}): Promise<Response<JsonObject>> {
    const campaignId = getCampaignId(filters);
    if (campaignId !== undefined) return this.campaignResource.deliveries(campaignId);
    return this.messageSlice(filters, ['sent', 'delivered']);
  }

  /** Retrieve open metrics. */
  async opens(filters: AnalyticsFilters = {}): Promise<Response<JsonObject>> {
    const campaignId = getCampaignId(filters);
    if (campaignId !== undefined) return this.campaignResource.opens(campaignId);
    return this.engagementSlice(filters, [
      'opens',
      'uniqueOpens',
      'openRate',
      'sent',
      'delivered',
    ]);
  }

  /** Retrieve click metrics. */
  async clicks(filters: AnalyticsFilters = {}): Promise<Response<JsonObject>> {
    const campaignId = getCampaignId(filters);
    if (campaignId !== undefined) return this.campaignResource.clicks(campaignId);
    return this.engagementSlice(filters, [
      'clicks',
      'uniqueClicks',
      'ctr',
      'ctor',
      'sent',
      'delivered',
    ]);
  }

  /** Retrieve bounce metrics. */
  async bounces(filters: AnalyticsFilters = {}): Promise<Response<JsonObject>> {
    const campaignId = getCampaignId(filters);
    if (campaignId !== undefined) return this.campaignResource.bounces(campaignId);
    return this.messageSlice(filters, ['bounced', 'sent', 'delivered']);
  }

  /** Retrieve complaint metrics. */
  async complaints(filters: AnalyticsFilters = {}): Promise<Response<JsonObject>> {
    const campaignId = getCampaignId(filters);
    if (campaignId !== undefined) return this.campaignResource.complaints(campaignId);
    return this.messageSlice(filters, ['complained', 'sent', 'delivered']);
  }

  /** Retrieve unsubscribe metrics or event summary. */
  async unsubscribes(filters: AnalyticsFilters = {}): Promise<Response<JsonObject>> {
    const campaignId = getCampaignId(filters);
    if (campaignId !== undefined) return this.campaignResource.unsubscribes(campaignId);

    const events = await this.eventResource.list({
      eventType: 'email.unsubscribed',
      from: filters.from,
      to: filters.to,
      perPage: filters.perPage ?? 100,
    });

    return new Response(
      normalizeAs<JsonObject>({
        count: events.length,
        events: events.items,
      }),
      'OK',
    );
  }

  /** Retrieve usage-oriented message totals. */
  async usage(filters: AnalyticsFilters = {}): Promise<Response<JsonObject>> {
    const campaignId = getCampaignId(filters);
    if (campaignId !== undefined) return this.campaignResource.delivery(campaignId);

    const response = await this.messages(filters);
    const data = toJsonObject(response.data);
    const totals = toJsonObject(data['totals'] ?? data);
    return new Response(
      pickKeys(totals, ['sent', 'delivered', 'opened', 'clicked', 'bounced', 'complained']),
      response.message,
      response.success,
    );
  }

  /** Retrieve recent analytics activity. */
  async activity(filters: AnalyticsFilters = {}): Promise<Collection<Event>> {
    const response = await this.overview(filters);
    const items = Array.isArray(response.data['recentActivity'])
      ? normalizeAs<Event[]>(response.data['recentActivity'])
      : [];
    return new Collection(
      items,
      new Pagination({
        currentPage: 1,
        perPage: items.length,
        total: items.length,
        lastPage: 1,
      }),
      response.message,
      response.success,
    );
  }

  /** Retrieve message analytics. */
  async messages(filters: AnalyticsFilters = {}): Promise<Response<JsonObject>> {
    return this.request('messages', filters);
  }

  /** Retrieve engagement analytics. */
  async engagement(filters: AnalyticsFilters = {}): Promise<Response<JsonObject>> {
    return this.request('engagement', filters);
  }

  /** Retrieve campaign ranking analytics. */
  async campaigns(filters: AnalyticsFilters = {}): Promise<Response<JsonObject>> {
    return this.request('campaigns', filters);
  }

  /** Retrieve domain analytics. */
  async domains(filters: AnalyticsFilters = {}): Promise<Response<JsonObject>> {
    return this.request('domains', filters);
  }

  /** Retrieve project analytics. */
  async projects(filters: AnalyticsFilters = {}): Promise<Response<JsonObject>> {
    return this.request('projects', filters);
  }

  /** Retrieve provider analytics. */
  async providers(filters: AnalyticsFilters = {}): Promise<Response<JsonObject>> {
    return this.request('providers', filters);
  }

  private async request(
    operation:
      | 'overview'
      | 'messages'
      | 'engagement'
      | 'campaigns'
      | 'domains'
      | 'projects'
      | 'providers',
    filters: AnalyticsFilters,
  ): Promise<Response<JsonObject>> {
    const query = {
      from: normalizeDate(filters.from),
      to: normalizeDate(filters.to),
    };
    return this.execute(async () =>
      toResponse<JsonObject>(await this.api[operation](query)),
    );
  }

  private async messageSlice(
    filters: AnalyticsFilters,
    keys: readonly string[],
  ): Promise<Response<JsonObject>> {
    const response = await this.messages(filters);
    const data = toJsonObject(response.data);
    const totals = toJsonObject(data['totals'] ?? data);
    return new Response(pickKeys(totals, keys), response.message, response.success);
  }

  private async engagementSlice(
    filters: AnalyticsFilters,
    keys: readonly string[],
  ): Promise<Response<JsonObject>> {
    const response = await this.engagement(filters);
    return new Response(
      pickKeys(toJsonObject(response.data), keys),
      response.message,
      response.success,
    );
  }
}

function getCampaignId(filters: AnalyticsFilters): string | undefined {
  const value = filters.campaign ?? filters.campaignId;
  return typeof value === 'string' && value !== '' ? value : undefined;
}

function normalizeDate(value: string | Date | undefined): string | undefined {
  if (value === undefined) return undefined;
  return value instanceof Date ? value.toISOString() : value;
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
