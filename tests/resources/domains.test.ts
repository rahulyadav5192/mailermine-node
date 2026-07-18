import { describe, expect, it } from 'vitest';

import type { ApiError} from '../../src/index.js';
import { Collection, Response } from '../../src/index.js';
import {
  createMockClient,
  deleteResponse,
  jsonResponse,
  listResponse,
  resourceResponse,
} from '../helpers/mock-api.js';

const domain = {
  id: 'domain-1',
  domain: 'mail.example.com',
  status: 'pending',
  verified: false,
  verification_status: 'pending',
  provider: 'Amazon SES',
  created_at: '2026-07-17T10:00:00Z',
  verified_at: null,
  last_checked_at: null,
  dns_status: 'pending',
  dkim_status: 'verified',
  spf_status: 'pending',
  tracking_status: 'verified',
  mail_from: null,
  verification_error: null,
  verification_token: 'token',
  dns_records: [
    {
      type: 'TXT',
      name: 'mail.example.com',
      value: 'mailermine-verification=value',
      status: 'pending',
    },
  ],
};

describe('Domains', () => {
  it('implements create, list, get, verify, dnsRecords, status, and delete', async () => {
    const { client, history } = createMockClient([
      jsonResponse(201, resourceResponse(domain)),
      jsonResponse(200, listResponse([domain])),
      jsonResponse(200, resourceResponse(domain)),
      jsonResponse(200, resourceResponse({ ...domain, verified: true })),
      jsonResponse(200, resourceResponse(domain)),
      jsonResponse(200, resourceResponse(domain)),
      jsonResponse(200, deleteResponse('Domain deleted.')),
    ]);

    const created = await client.domains.create({ domain: 'mail.example.com' });
    const listed = await client.domains.list({ status: 'pending' });
    const retrieved = await client.domains.get('domain-1');
    const verified = await client.domains.verify('domain-1');
    const records = await client.domains.dnsRecords('domain-1');
    const status = await client.domains.status('domain-1');
    const deleted = await client.domains.delete('domain-1');

    expect(created).toBeInstanceOf(Response);
    expect(created.data.domain).toBe('mail.example.com');
    expect(listed).toBeInstanceOf(Collection);
    expect(retrieved.data.verificationStatus).toBe('pending');
    expect(verified.data.verified).toBe(true);
    expect(records.data[0]?.type).toBe('TXT');
    expect(status.data.dnsStatus).toBe('pending');
    expect(status.data).not.toHaveProperty('dnsRecords');
    expect(deleted.data.deleted).toBe(true);

    expect(history[0]?.method).toBe('POST');
    expect(history[0]?.body).toEqual({ domain: 'mail.example.com' });
    expect(history[1]?.url).toContain('status=pending');
    expect(history[2]?.path).toBe('/api/v1/domains/domain-1');
    expect(history[3]?.path).toBe('/api/v1/domains/domain-1/verify');
    expect(history[4]?.path).toBe('/api/v1/domains/domain-1');
    expect(history[5]?.path).toBe('/api/v1/domains/domain-1');
    expect(history[6]?.method).toBe('DELETE');
  });

  it('maps domain verification server errors', async () => {
    const { client } = createMockClient([
      jsonResponse(503, {
        success: false,
        message: 'DNS provider is unavailable.',
      }),
    ]);

    await expect(client.domains.verify('domain-1')).rejects.toMatchObject({
      name: 'ApiError',
      status: 503,
      message: 'DNS provider is unavailable.',
    } satisfies Partial<ApiError>);
  });
});
