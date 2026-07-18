import type { InternalMessagesApi } from '../internal/generated-client.js';
import type { Collection, Response } from '../support/responses.js';
import { toCollection, toResponse } from '../support/serialization.js';
import { BaseResource } from './base.js';
import type { Event, MessageListOptions } from './deliverability-types.js';
import type { EmailMessage } from './types.js';

/** Delivery-log and outbound message history operations. */
export class Messages extends BaseResource {
  /** @internal */
  constructor(private readonly api: InternalMessagesApi) {
    super();
  }

  /** List delivery logs with filters and pagination. */
  async list(options: MessageListOptions = {}): Promise<Collection<EmailMessage>> {
    return this.execute(async () =>
      toCollection<EmailMessage>(await this.api.list(normalizeDates(options))),
    );
  }

  /** Retrieve a delivery log by message UUID. */
  async get(messageId: string): Promise<Response<EmailMessage>> {
    return this.execute(async () =>
      toResponse<EmailMessage>(await this.api.get(messageId)),
    );
  }

  /** Search delivery logs. */
  async search(
    query: string,
    options: Omit<MessageListOptions, 'search'> = {},
  ): Promise<Collection<EmailMessage>> {
    return this.list({ ...options, search: query });
  }

  /** Alias of {@link Messages.list}. */
  async filter(options: MessageListOptions = {}): Promise<Collection<EmailMessage>> {
    return this.list(options);
  }

  /** Retrieve lifecycle events for a message. */
  async events(messageId: string): Promise<Collection<Event>> {
    return this.execute(async () =>
      toCollection<Event>(await this.api.events(messageId)),
    );
  }

  /** Alias of {@link Messages.events}. */
  async timeline(messageId: string): Promise<Collection<Event>> {
    return this.events(messageId);
  }
}

function normalizeDates<T extends { from?: string | Date; to?: string | Date }>(
  options: T,
): object {
  return {
    ...options,
    from: normalizeDate(options.from),
    to: normalizeDate(options.to),
  };
}

function normalizeDate(value: string | Date | undefined): string | undefined {
  if (value === undefined) return undefined;
  return value instanceof Date ? value.toISOString() : value;
}
