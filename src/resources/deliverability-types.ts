import type { JsonObject, JsonValue } from '../types/json.js';
import type { PaginationOptions } from './types.js';

export interface AnalyticsFilters {
  from?: string | Date;
  to?: string | Date;
  campaign?: string;
  campaignId?: string;
  project?: string;
  projectId?: string;
  domain?: string;
  domainId?: string;
  perPage?: number;
}

export interface EventListOptions {
  eventType?: string;
  source?: string;
  campaign?: string;
  campaignId?: string;
  message?: string;
  messageId?: string;
  search?: string;
  from?: string | Date;
  to?: string | Date;
  perPage?: number;
}

export interface Event {
  id: string;
  eventType: string;
  eventLabel?: string;
  source?: string;
  payload?: JsonValue;
  occurredAt?: string | null;
  messageId?: string | null;
  recipient?: string | null;
  metadata?: JsonObject;
  tags?: readonly string[];
}

export interface MessageListOptions extends PaginationOptions {
  search?: string;
  status?: string;
  provider?: string;
  from?: string | Date;
  to?: string | Date;
}

export type WebhookEventType =
  | 'email.sent'
  | 'email.delivered'
  | 'email.failed'
  | 'email.bounced'
  | 'email.complained'
  | 'email.opened'
  | 'email.clicked'
  | 'email.queued'
  | 'email.delivery_delayed'
  | 'email.suppressed'
  | 'email.unsubscribed'
  | 'campaign.created'
  | 'campaign.scheduled'
  | 'campaign.started'
  | 'campaign.completed'
  | 'contact.created'
  | 'contact.updated'
  | 'contact.deleted'
  | 'domain.verified'
  | 'project.created'
  | 'api_key.created';

/**
 * Body of a webhook delivery, as sent by MailerMine (keys are snake_case on
 * the wire). Verify the signature with {@link Webhooks.verifyHeaders} before
 * trusting it.
 */
export interface WebhookEventPayload {
  id: string;
  type: WebhookEventType;
  created_at: string;
  project: { id: string; name: string };
  email: {
    id: string;
    message_id: string | null;
    from: string;
    to: string;
    subject: string;
    status: string;
    provider: string;
    tags: string[];
    metadata: Record<string, unknown>;
  };
  /** Present on `email.clicked`. */
  click?: {
    url: string | null;
    link_id: string | null;
    is_unique: boolean | null;
    clicked_at: string | null;
  };
  /** Present on `email.opened`. */
  open?: { is_unique: boolean | null; opened_at: string | null };
}

export interface CreateWebhookInput {
  name: string;
  url: string;
  subscribedEvents: readonly WebhookEventType[];
  isActive?: boolean;
}

export type UpdateWebhookInput = Partial<CreateWebhookInput>;

export interface TestWebhookInput {
  eventType?: WebhookEventType | 'test.webhook' | null;
}

export interface ReplayWebhookInput {
  failedOnly?: boolean;
  from?: string | Date | null;
  to?: string | Date | null;
  eventTypes?: readonly (WebhookEventType | 'test.webhook')[];
  deliveryIds?: readonly string[];
}

export interface WebhookListOptions extends PaginationOptions {
  search?: string;
  status?: string;
  sort?: string;
  direction?: string;
}

export interface WebhookDeliveryListOptions {
  status?: string;
  eventType?: string;
  search?: string;
  httpStatus?: number;
  from?: string | Date;
  to?: string | Date;
  perPage?: number;
}

export interface Webhook {
  id: string;
  name: string;
  url: string;
  subscribedEvents: readonly string[];
  isActive: boolean;
  signingSecret?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
}

export interface WebhookDelivery {
  id: string;
  status: string;
  eventType?: string;
  httpStatus?: number | null;
  attemptCount?: number;
  request?: JsonObject | null;
  response?: JsonObject | null;
  createdAt?: string | null;
  [key: string]: JsonValue | undefined;
}

export type SuppressionReason = 'bounce' | 'complaint' | 'manual' | 'unsubscribe';

export interface CreateSuppressionInput {
  email: string;
  reason: SuppressionReason;
  notes?: string | null;
}

export interface SuppressionListOptions {
  search?: string;
  reason?: string;
  perPage?: number;
}

export interface Suppression {
  id: string;
  email: string;
  reason: string;
  notes?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  [key: string]: JsonValue | undefined;
}

export interface SuppressionCheck {
  email: string;
  suppressed: boolean;
  suppression: Suppression | null;
}
