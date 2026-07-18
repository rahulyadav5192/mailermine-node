import type { InternalEventsApi } from '../internal/generated-client.js';
import type { Collection, Response } from '../support/responses.js';
import { toCollection, toResponse } from '../support/serialization.js';
import { BaseResource } from './base.js';
import type { Event, EventListOptions } from './deliverability-types.js';
import type { EmailMessage } from './types.js';

/** Global event querying and message timeline helpers. */
export class Events extends BaseResource {
  /** @internal */
  constructor(private readonly api: InternalEventsApi) {
    super();
  }

  /** List message events with filters. */
  async list(options: EventListOptions = {}): Promise<Collection<Event>> {
    const { campaignId, messageId, ...rest } = options;
    return this.execute(async () =>
      toCollection<Event>(
        await this.api.list({
          ...rest,
          campaign: options.campaign ?? campaignId,
          message: options.message ?? messageId,
          from: normalizeDate(options.from),
          to: normalizeDate(options.to),
        }),
      ),
    );
  }

  /** Retrieve a single event by UUID. */
  async get(eventId: string): Promise<Response<Event>> {
    return this.execute(async () => toResponse<Event>(await this.api.get(eventId)));
  }

  /** Retrieve the event timeline for a message. */
  async timeline(messageId: string): Promise<Collection<Event>> {
    return this.execute(async () =>
      toCollection<Event>(await this.api.timeline(messageId)),
    );
  }

  /** Alias of {@link Events.timeline}. */
  async history(messageId: string): Promise<Collection<Event>> {
    return this.timeline(messageId);
  }

  /** Retrieve delivery-log detail for a message. */
  async message(messageId: string): Promise<Response<EmailMessage>> {
    return this.execute(async () =>
      toResponse<EmailMessage>(await this.api.message(messageId)),
    );
  }
}

function normalizeDate(value: string | Date | undefined): string | undefined {
  if (value === undefined) return undefined;
  return value instanceof Date ? value.toISOString() : value;
}
