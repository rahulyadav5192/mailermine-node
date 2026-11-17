import { createHmac } from 'node:crypto';
import { describe, expect, it } from 'vitest';

import {
  ApiError,
  MissingScopeError,
  PlanError,
  RateLimitError,
  ScopePresets,
  Scopes,
  Webhooks,
} from '../src/index.js';
import { createMockClient, jsonResponse } from './helpers/mock-api.js';

const email = { from: 'hi@example.com', to: 'user@example.com', subject: 'Hi', html: '<p>Hi</p>' };
const sent = (headers: Record<string, string> = {}) =>
  jsonResponse(202, { success: true, data: { id: 'msg_1' } }, headers);
const retrying = { maxRetries: 2, maxRetryDelay: 0 };

describe('retries and idempotency', () => {
  it('adds an Idempotency-Key to sends and reuses it on retry', async () => {
    const { client, history } = createMockClient(
      [jsonResponse(503, { message: 'down' }), sent()],
      retrying,
    );

    await client.emails.send(email);

    expect(history).toHaveLength(2);
    const key = history[0]!.headers.get('idempotency-key');
    expect(key).toMatch(/^[0-9a-f-]{36}$/);
    expect(history[1]!.headers.get('idempotency-key')).toBe(key);
  });

  it('sends a caller-supplied idempotency key', async () => {
    const { client, history } = createMockClient([sent()]);

    await client.emails.send(email, { idempotencyKey: 'order-42' });

    expect(history[0]!.headers.get('idempotency-key')).toBe('order-42');
  });

  it('rejects an invalid idempotency key', async () => {
    const { client } = createMockClient([]);

    await expect(client.emails.send(email, { idempotencyKey: '' })).rejects.toThrow(TypeError);
  });

  it('retries rate-limited requests then gives up with RateLimitError', async () => {
    const limited = () =>
      jsonResponse(
        429,
        { message: 'slow down' },
        { 'X-RateLimit-Limit': '10', 'X-RateLimit-Remaining': '0' },
      );
    const { client, history } = createMockClient([limited(), limited(), limited()], retrying);

    const error = await client.emails.send(email).catch((e: unknown) => e);

    expect(history).toHaveLength(3);
    expect(error).toBeInstanceOf(RateLimitError);
    expect((error as RateLimitError).rateLimit?.remaining).toBe(0);
    expect((error as RateLimitError).isRetryable).toBe(true);
  });

  it('does not wait for a Retry-After longer than maxRetryDelay', async () => {
    const { client, history } = createMockClient(
      [jsonResponse(429, { message: 'slow down' }, { 'Retry-After': '120' })],
      { maxRetries: 2, maxRetryDelay: 5_000 },
    );

    const error = await client.domains.list().catch((e: unknown) => e);

    expect(history).toHaveLength(1);
    expect((error as RateLimitError).retryAfter).toBe(120);
  });

  it('does not replay non-idempotent POSTs after a server error', async () => {
    const { client, history } = createMockClient(
      [jsonResponse(503, { message: 'down' })],
      retrying,
    );

    await expect(client.contacts.create({ email: 'a@example.com' })).rejects.toBeInstanceOf(
      ApiError,
    );
    expect(history).toHaveLength(1);
  });

  it('retries GETs after a network error', async () => {
    const { client, history } = createMockClient(
      [new TypeError('fetch failed'), jsonResponse(200, { success: true, data: [] })],
      retrying,
    );

    await client.domains.list();

    expect(history).toHaveLength(2);
  });

  it('exposes the latest rate-limit state on the client', async () => {
    const reset = Math.floor(Date.now() / 1000) + 30;
    const { client } = createMockClient([
      sent({
        'X-RateLimit-Limit': '600',
        'X-RateLimit-Remaining': '42',
        'X-RateLimit-Reset': String(reset),
      }),
    ]);

    await client.emails.send(email);

    expect(client.rateLimit?.limit).toBe(600);
    expect(client.rateLimit?.remaining).toBe(42);
    expect(client.rateLimit?.secondsUntilReset).toBeGreaterThan(0);
  });
});

describe('scope errors', () => {
  it('maps a 403 with errors.scope to MissingScopeError (still a PlanError)', async () => {
    const { client } = createMockClient([
      jsonResponse(403, {
        success: false,
        message: 'This API key is missing the required scope: domains.read.',
        errors: { scope: ['domains.read'] },
      }),
    ]);

    const error = await client.domains.list().catch((e: unknown) => e);

    expect(error).toBeInstanceOf(MissingScopeError);
    expect(error).toBeInstanceOf(PlanError);
    expect((error as MissingScopeError).missingScopes).toEqual(['domains.read']);
  });

  it('keeps plain PlanError for plan restrictions', async () => {
    const { client } = createMockClient([
      jsonResponse(403, { success: false, message: 'Not on Free.' }),
    ]);

    const error = await client.domains.list().catch((e: unknown) => e);

    expect(error).toBeInstanceOf(PlanError);
    expect(error).not.toBeInstanceOf(MissingScopeError);
  });

  it('exports the new scopes and presets', () => {
    expect(Scopes.WebhooksWrite).toBe('webhooks.write');
    expect(ScopePresets.sendingOnly).toEqual(['emails.send']);
  });
});

describe('webhook verification', () => {
  const secret = 'whsec_test';
  const payload = '{"type":"email.delivered","data":{"id":"msg_1"}}';
  const sign = (timestamp: number) =>
    'sha256=' + createHmac('sha256', secret).update(`${timestamp}.${payload}`).digest('hex');

  it('accepts signatures produced the way the MailerMine server signs them', () => {
    const timestamp = Math.floor(Date.now() / 1000);
    const signature = sign(timestamp);

    expect(Webhooks.verify(payload, signature, secret, timestamp)).toBe(true);
    expect(
      Webhooks.verifyHeaders(
        payload,
        { 'X-MailerMine-Signature': signature, 'X-MailerMine-Timestamp': String(timestamp) },
        secret,
      ),
    ).toBe(true);
    expect(
      Webhooks.verifyHeaders(
        payload,
        new Headers({ 'x-relay-signature': signature, 'x-relay-timestamp': String(timestamp) }),
        secret,
      ),
    ).toBe(true);
  });

  it('rejects tampered, stale or incomplete deliveries', () => {
    const timestamp = Math.floor(Date.now() / 1000);
    const signature = sign(timestamp);

    expect(Webhooks.verify(payload + ' ', signature, secret, timestamp)).toBe(false);
    expect(Webhooks.verify(payload, signature, 'other', timestamp)).toBe(false);
    expect(Webhooks.verify(payload, signature, secret, timestamp + 1)).toBe(false);
    expect(Webhooks.verifyHeaders(payload, {}, secret)).toBe(false);

    const old = timestamp - 3600;
    expect(Webhooks.verify(payload, sign(old), secret, old)).toBe(false);
    expect(Webhooks.verify(payload, sign(old), secret, old, 0)).toBe(true);
  });
});
