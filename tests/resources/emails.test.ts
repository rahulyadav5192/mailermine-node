import { describe, expect, it } from 'vitest';

import {
  AuthenticationError,
  Collection,
  NotFoundError,
  PlanError,
  RateLimitError,
  Response,
  ValidationError,
} from '../../src/index.js';
import {
  createMockClient,
  jsonResponse,
  listResponse,
  resourceResponse,
} from '../helpers/mock-api.js';

describe('Emails', () => {
  it('send maps plain objects and returns Response', async () => {
    const { client, history } = createMockClient([
      jsonResponse(
        202,
        resourceResponse(
          {
            id: 'message-1',
            status: 'queued',
            from_email: 'hello@mailermine.com',
            to_email: 'john@example.com',
            subject: 'Hello',
            tags: ['welcome'],
            metadata: { customer_id: '123' },
          },
          'Message queued successfully.',
        ),
      ),
    ]);

    const response = await client.emails.send({
      from: 'hello@mailermine.com',
      to: 'john@example.com',
      cc: ['copy@example.com'],
      bcc: ['audit@example.com'],
      replyTo: 'support@mailermine.com',
      subject: 'Hello',
      html: '<h1>Hello</h1>',
      text: 'Hello',
      tags: ['welcome'],
      metadata: { customer_id: '123' },
      headers: { 'X-Customer-ID': '123' },
      attachments: [
        {
          filename: 'hello.txt',
          content: Buffer.from('Hello').toString('base64'),
          contentType: 'text/plain',
        },
      ],
      scheduledAt: '2026-07-18T10:00:00Z',
    });

    expect(response).toBeInstanceOf(Response);
    expect(response.data.id).toBe('message-1');
    expect(response.data.metadata).toEqual({ customerId: '123' });

    expect(history[0]?.method).toBe('POST');
    expect(history[0]?.path).toBe('/api/v1/emails');
    expect(history[0]?.headers.get('Authorization')).toBe('Bearer test-api-key');
    expect(history[0]?.body).toMatchObject({
      from: 'hello@mailermine.com',
      to: ['john@example.com'],
      cc: ['copy@example.com'],
      bcc: ['audit@example.com'],
      reply_to: 'support@mailermine.com',
      subject: 'Hello',
      tags: ['welcome'],
      metadata: { customer_id: '123' },
      headers: { 'X-Customer-ID': '123' },
      scheduled_at: '2026-07-18T10:00:00Z',
      attachments: [
        {
          filename: 'hello.txt',
          content: expect.any(String),
          content_type: 'text/plain',
        },
      ],
    });
  });

  it('list, get, and events map through MessagesApi paths', async () => {
    const { client, history } = createMockClient([
      jsonResponse(
        200,
        listResponse([
          {
            id: 'message-1',
            status: 'delivered',
            subject: 'Hello',
          },
        ]),
      ),
      jsonResponse(
        200,
        resourceResponse({
          id: 'message-1',
          status: 'delivered',
          subject: 'Hello',
        }),
      ),
      jsonResponse(200, {
        data: [{ id: 'event-1', type: 'delivered', created_at: '2026-07-17T10:00:00Z' }],
      }),
    ]);

    const listed = await client.emails.list({ status: 'delivered', page: 1, perPage: 10 });
    const retrieved = await client.emails.get('message-1');
    const events = await client.emails.events('message-1');

    expect(listed).toBeInstanceOf(Collection);
    expect(listed.items[0]?.id).toBe('message-1');
    expect(listed.pagination.total).toBe(1);
    expect(retrieved.data.status).toBe('delivered');
    expect(events.data[0]?.type).toBe('delivered');

    expect(history[0]?.path).toBe('/api/v1/delivery-logs');
    expect(history[0]?.url).toContain('status=delivered');
    expect(history[0]?.url).toContain('per_page=10');
    expect(history[1]?.path).toBe('/api/v1/delivery-logs/message-1');
    expect(history[2]?.path).toBe('/api/v1/messages/message-1/events');
  });

  it('maps authentication, validation, plan, not found, and rate limit errors', async () => {
    const cases = [
      { status: 401, ErrorClass: AuthenticationError },
      {
        status: 422,
        ErrorClass: ValidationError,
        body: { message: 'Invalid.', errors: { to: ['required'] } },
      },
      { status: 403, ErrorClass: PlanError },
      { status: 404, ErrorClass: NotFoundError },
      { status: 429, ErrorClass: RateLimitError, headers: { 'Retry-After': '30' } },
    ] as const;

    for (const testCase of cases) {
      const { client } = createMockClient([
        jsonResponse(
          testCase.status,
          'body' in testCase ? testCase.body : { message: 'failed' },
          'headers' in testCase ? testCase.headers : {},
        ),
      ]);

      await expect(client.emails.get('missing')).rejects.toBeInstanceOf(testCase.ErrorClass);
    }
  });
});
