import type { InternalEmailsApi } from '../internal/generated-client.js';
import type { Collection, Response } from '../support/responses.js';
import {
  toCollection,
  toGeneratedRequest,
  toResponse,
} from '../support/serialization.js';
import { BaseResource } from './base.js';
import type {
  EmailEvent,
  EmailListOptions,
  EmailMessage,
  SendEmailInput,
} from './types.js';

/**
 * Transactional email operations.
 *
 * Wraps the generated EmailsApi for sending and MessagesApi for list/get/events.
 */
export class Emails extends BaseResource {
  /** @internal */
  constructor(private readonly api: InternalEmailsApi) {
    super();
  }

  /**
   * Queue a transactional email for delivery.
   *
   * Supports attachments, CC/BCC, reply-to, headers, tags, metadata, and an
   * optional `scheduledAt` delivery time.
   *
   * @example
   * ```ts
   * const result = await mm.emails.send({
   *   from: 'MailerMine <hello@example.com>',
   *   to: 'user@example.com',
   *   subject: 'Welcome',
   *   html: '<p>Hello</p>',
   *   text: 'Hello',
   * });
   * ```
   */
  async send(input: SendEmailInput): Promise<Response<EmailMessage>> {
    return this.execute(async () => {
      const body = toGeneratedRequest({
        ...input,
        to: Array.isArray(input.to) ? [...input.to] : [input.to],
      });
      return toResponse<EmailMessage>(await this.api.send(body));
    });
  }

  /**
   * List recently sent and queued messages for the authenticated project.
   */
  async list(options: EmailListOptions = {}): Promise<Collection<EmailMessage>> {
    return this.execute(async () => toCollection<EmailMessage>(await this.api.list(options)));
  }

  /**
   * Retrieve a single message by UUID.
   */
  async get(messageId: string): Promise<Response<EmailMessage>> {
    return this.execute(async () =>
      toResponse<EmailMessage>(await this.api.get(messageId)),
    );
  }

  /**
   * Retrieve lifecycle events for a single message.
   */
  async events(messageId: string): Promise<Collection<EmailEvent>> {
    return this.execute(async () =>
      toCollection<EmailEvent>(await this.api.events(messageId)),
    );
  }
}
