import { describe, expect, it } from 'vitest';

import { Response } from '../../src/index.js';
import {
  createMockClient,
  jsonResponse,
  resourceResponse,
  textResponse,
} from '../helpers/mock-api.js';

const exportJob = {
  id: 'export-1',
  status: 'completed',
  contact_count: 2,
  filters: { status: 'active' },
  download_url: 'https://api.example.test/api/v1/contacts/exports/export-1/download',
  completed_at: '2026-07-17T12:00:00Z',
  created_at: '2026-07-17T10:00:00Z',
  updated_at: '2026-07-17T12:00:00Z',
};

describe('Exports', () => {
  it('implements create, status, and download', async () => {
    const csv = 'email,first_name\njohn@example.com,John\n';
    const { client, history } = createMockClient([
      jsonResponse(201, resourceResponse(exportJob, 'Queued.')),
      jsonResponse(200, resourceResponse(exportJob)),
      textResponse(200, csv),
    ]);

    const created = await client.exports.create({
      status: 'active',
      subscribed: true,
    });
    const status = await client.exports.status('export-1');
    const downloaded = await client.exports.download('export-1');

    expect(created).toBeInstanceOf(Response);
    expect(created.data.contactCount).toBe(2);
    expect(status.data.status).toBe('completed');
    expect(downloaded).toBeInstanceOf(Response);
    expect(downloaded.data).toBe(csv);

    expect(history[0]?.method).toBe('POST');
    expect(history[0]?.path).toBe('/api/v1/contacts/export');
    expect(history[0]?.body).toMatchObject({
      status: 'active',
      subscribed: true,
    });
    expect(history[1]?.path).toBe('/api/v1/contacts/exports/export-1');
    expect(history[2]?.path).toBe('/api/v1/contacts/exports/export-1/download');
  });
});
