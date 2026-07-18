import { createHmac } from 'node:crypto';

import { describe, expect, it } from 'vitest';

import {
  Collection,
  Response,
  Webhooks,
} from '../../src/index.js';
import {
  createMockClient,
  deleteResponse,
  jsonResponse,
  listResponse,
  resourceResponse,
} from '../helpers/mock-api.js';

describe('Phase 6 deliverability resources', () => {
  it('wraps analytics endpoints and normalizes date filters', async () => {
    const { client, history } = createMockClient([
      jsonResponse(200, resourceResponse({ totals: { sent: 10 } })),
      jsonResponse(200, resourceResponse({ opens: 4, unique_opens: 3 })),
    ]);

    const messages = await client.analytics.messages({
      from: new Date('2026-07-01T00:00:00Z'),
      to: '2026-07-17',
    });
    const opens = await client.analytics.opens();

    expect(messages).toBeInstanceOf(Response);
    expect(messages.data.totals).toEqual({ sent: 10 });
    expect(opens.data).toEqual({ opens: 4, uniqueOpens: 3 });
    expect(history[0]?.path).toBe('/api/v1/analytics/messages');
    expect(history[0]?.url).toContain('from=2026-07-01T00%3A00%3A00.000Z');
    expect(history[1]?.path).toBe('/api/v1/analytics/engagement');
  });

  it('wraps global events and message history', async () => {
    const { client, history } = createMockClient([
      jsonResponse(
        200,
        listResponse([{ id: 'event-1', event_type: 'email.delivered' }]),
      ),
      jsonResponse(
        200,
        resourceResponse({ id: 'message-1', status: 'delivered' }),
      ),
      jsonResponse(200, {
        success: true,
        message: 'OK',
        data: [{ id: 'event-2', event_type: 'delivered' }],
      }),
    ]);

    const events = await client.events.list({ eventType: 'email.delivered' });
    const message = await client.messages.get('message-1');
    const timeline = await client.messages.timeline('message-1');

    expect(events).toBeInstanceOf(Collection);
    expect(events.items[0]?.eventType).toBe('email.delivered');
    expect(message.data.status).toBe('delivered');
    expect(timeline.items[0]?.eventType).toBe('delivered');
    expect(history.map((request) => request.path)).toEqual([
      '/api/v1/events',
      '/api/v1/delivery-logs/message-1',
      '/api/v1/messages/message-1/events',
    ]);
  });

  it('wraps webhook CRUD, deliveries, replay, retry, and local verification', async () => {
    const { client, history } = createMockClient([
      jsonResponse(
        201,
        resourceResponse({
          id: 'webhook-1',
          name: 'Production',
          url: 'https://example.com/hook',
          subscribed_events: ['email.delivered'],
          is_active: true,
          signing_secret: 'secret-once',
        }),
      ),
      jsonResponse(
        200,
        listResponse([{ id: 'delivery-1', status: 'failed' }]),
      ),
      jsonResponse(200, resourceResponse({ replayed: 1 })),
      jsonResponse(200, resourceResponse({ id: 'delivery-1', status: 'queued' })),
      jsonResponse(200, deleteResponse()),
    ]);

    const created = await client.webhooks.create({
      name: 'Production',
      url: 'https://example.com/hook',
      subscribedEvents: ['email.delivered'],
    });
    const failures = await client.webhooks.failures('webhook-1');
    await client.webhooks.replay('webhook-1', { failedOnly: true });
    await client.webhooks.retry('delivery-1');
    await client.webhooks.delete('webhook-1');

    expect(created.data.signingSecret).toBe('secret-once');
    expect(failures).toBeInstanceOf(Collection);
    expect(history[0]?.body).toMatchObject({
      subscribed_events: ['email.delivered'],
    });
    expect(history[1]?.url).toContain('status=failed');
    expect(history[2]?.path).toBe('/api/v1/webhooks/webhook-1/replay');
    expect(history[3]?.path).toBe('/api/v1/webhook-deliveries/delivery-1/replay');

    const payload = '{"id":"event-1"}';
    const signature = createHmac('sha256', 'secret').update(payload).digest('hex');
    expect(Webhooks.verify(payload, `sha256=${signature}`, 'secret')).toBe(true);
    expect(Webhooks.verify(payload, signature, 'wrong-secret')).toBe(false);
  });

  it('wraps suppression CRUD and exact-email checks', async () => {
    const suppression = {
      id: 'suppression-1',
      email: 'user@example.com',
      reason: 'manual',
    };
    const { client, history } = createMockClient([
      jsonResponse(201, resourceResponse(suppression)),
      jsonResponse(200, listResponse([suppression])),
      jsonResponse(200, resourceResponse(suppression)),
      jsonResponse(200, resourceResponse(suppression)),
      jsonResponse(200, deleteResponse()),
    ]);

    const added = await client.suppressions.add({
      email: 'user@example.com',
      reason: 'manual',
    });
    const checked = await client.suppressions.check(' USER@example.com ');
    await client.suppressions.get('suppression-1');
    await client.suppressions.restore('suppression-1');
    await client.suppressions.remove('suppression-1');

    expect(added.data.id).toBe('suppression-1');
    expect(checked.data.suppressed).toBe(true);
    expect(checked.data.email).toBe('user@example.com');
    expect(history.map((request) => request.path)).toEqual([
      '/api/v1/suppressions',
      '/api/v1/suppressions',
      '/api/v1/suppressions/suppression-1',
      '/api/v1/suppressions/suppression-1/restore',
      '/api/v1/suppressions/suppression-1',
    ]);
  });
});
