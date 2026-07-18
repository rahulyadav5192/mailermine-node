import { createHmac, timingSafeEqual } from 'node:crypto';

import type { InternalWebhooksApi } from '../internal/generated-client.js';
import { Response, type Collection } from '../support/responses.js';
import {
  toCollection,
  toGeneratedRequest,
  toResponse,
} from '../support/serialization.js';
import { BaseResource } from './base.js';
import type {
  CreateWebhookInput,
  ReplayWebhookInput,
  TestWebhookInput,
  UpdateWebhookInput,
  Webhook,
  WebhookDelivery,
  WebhookDeliveryListOptions,
  WebhookListOptions,
} from './deliverability-types.js';
import type { DeleteResult } from './types.js';

/** Webhook endpoints, deliveries, replay, and signature verification. */
export class Webhooks extends BaseResource {
  /** @internal */
  constructor(private readonly api: InternalWebhooksApi) {
    super();
  }

  /** Create a webhook. Its signing secret is returned only once. */
  async create(input: CreateWebhookInput): Promise<Response<Webhook>> {
    return this.execute(async () =>
      toResponse<Webhook>(await this.api.create(toGeneratedRequest(input))),
    );
  }

  /** List webhook endpoints. */
  async list(options: WebhookListOptions = {}): Promise<Collection<Webhook>> {
    return this.execute(async () =>
      toCollection<Webhook>(await this.api.list(options)),
    );
  }

  /** Retrieve a webhook by UUID. */
  async get(webhookId: string): Promise<Response<Webhook>> {
    return this.execute(async () =>
      toResponse<Webhook>(await this.api.get(webhookId)),
    );
  }

  /** Update a webhook endpoint. */
  async update(
    webhookId: string,
    input: UpdateWebhookInput,
  ): Promise<Response<Webhook>> {
    const body = Object.keys(input).length === 0 ? undefined : toGeneratedRequest(input);
    return this.execute(async () =>
      toResponse<Webhook>(await this.api.update(webhookId, body)),
    );
  }

  /** Delete a webhook endpoint. */
  async delete(webhookId: string): Promise<Response<DeleteResult>> {
    return this.execute(async () => {
      const response = toResponse<unknown>(await this.api.delete(webhookId));
      return new Response({ deleted: true }, response.message, response.success);
    });
  }

  /** Queue a test webhook delivery. */
  async test(
    webhookId: string,
    input: TestWebhookInput = {},
  ): Promise<Response<WebhookDelivery>> {
    const body = Object.keys(input).length === 0 ? undefined : toGeneratedRequest(input);
    return this.execute(async () =>
      toResponse<WebhookDelivery>(await this.api.test(webhookId, body)),
    );
  }

  /** Rotate the signing secret. The new secret is returned only once. */
  async rotateSecret(webhookId: string): Promise<Response<Webhook>> {
    return this.execute(async () =>
      toResponse<Webhook>(await this.api.rotateSecret(webhookId)),
    );
  }

  /** Enable a webhook endpoint. */
  async enable(webhookId: string): Promise<Response<Webhook>> {
    return this.execute(async () =>
      toResponse<Webhook>(await this.api.enable(webhookId)),
    );
  }

  /** Disable a webhook endpoint. */
  async disable(webhookId: string): Promise<Response<Webhook>> {
    return this.execute(async () =>
      toResponse<Webhook>(await this.api.disable(webhookId)),
    );
  }

  /** List deliveries for a webhook. */
  async deliveries(
    webhookId: string,
    options: WebhookDeliveryListOptions = {},
  ): Promise<Collection<WebhookDelivery>> {
    return this.execute(async () =>
      toCollection<WebhookDelivery>(
        await this.api.deliveries(webhookId, normalizeDeliveryOptions(options)),
      ),
    );
  }

  /** Retrieve one webhook delivery. */
  async delivery(deliveryId: string): Promise<Response<WebhookDelivery>> {
    return this.execute(async () =>
      toResponse<WebhookDelivery>(await this.api.delivery(deliveryId)),
    );
  }

  /** Alias of {@link Webhooks.deliveries}. */
  async logs(
    webhookId: string,
    options: WebhookDeliveryListOptions = {},
  ): Promise<Collection<WebhookDelivery>> {
    return this.deliveries(webhookId, options);
  }

  /** List failed deliveries for a webhook. */
  async failures(
    webhookId: string,
    options: Omit<WebhookDeliveryListOptions, 'status'> = {},
  ): Promise<Collection<WebhookDelivery>> {
    return this.deliveries(webhookId, { ...options, status: 'failed' });
  }

  /** Replay webhook deliveries in bulk. */
  async replay(
    webhookId: string,
    input: ReplayWebhookInput = {},
  ): Promise<Response<Record<string, unknown>>> {
    const normalized = {
      ...input,
      from: normalizeNullableDate(input.from),
      to: normalizeNullableDate(input.to),
    };
    const body =
      Object.keys(input).length === 0 ? undefined : toGeneratedRequest(normalized);
    return this.execute(async () =>
      toResponse<Record<string, unknown>>(await this.api.replay(webhookId, body)),
    );
  }

  /** Retry one webhook delivery. */
  async retry(deliveryId: string): Promise<Response<WebhookDelivery>> {
    return this.execute(async () =>
      toResponse<WebhookDelivery>(await this.api.retry(deliveryId)),
    );
  }

  /** Verify a MailerMine HMAC-SHA256 webhook signature locally. */
  static verify(payload: string, signature: string, secret: string): boolean {
    const expected = createHmac('sha256', secret).update(payload).digest('hex');
    const normalized = signature.toLowerCase().startsWith('sha256=')
      ? signature.slice(7)
      : signature;

    if (!/^[a-f\d]{64}$/i.test(normalized)) return false;
    return timingSafeEqual(Buffer.from(expected, 'hex'), Buffer.from(normalized, 'hex'));
  }
}

function normalizeDeliveryOptions(options: WebhookDeliveryListOptions): object {
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

function normalizeNullableDate(
  value: string | Date | null | undefined,
): string | null | undefined {
  if (value === undefined || value === null) return value;
  return value instanceof Date ? value.toISOString() : value;
}
