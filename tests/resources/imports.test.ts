import { describe, expect, it } from 'vitest';

import { Collection, Response } from '../../src/index.js';
import {
  createMockClient,
  jsonResponse,
  listResponse,
  resourceResponse,
} from '../helpers/mock-api.js';

const importJob = {
  id: 'import-1',
  status: 'draft',
  progress: 0,
  original_filename: 'contacts.csv',
  summary: null,
  metadata: {},
  counters: {},
  has_failures: false,
  started_at: null,
  completed_at: null,
  created_at: '2026-07-17T10:00:00Z',
  updated_at: '2026-07-17T11:00:00Z',
};

describe('Imports', () => {
  it('implements list, create, and status', async () => {
    const { client, history } = createMockClient([
      jsonResponse(200, listResponse([importJob], 1)),
      jsonResponse(201, resourceResponse(importJob, 'Uploaded.')),
      jsonResponse(200, resourceResponse({ ...importJob, status: 'processing', progress: 40 })),
    ]);

    const listed = await client.imports.list();
    const created = await client.imports.create({
      file: Buffer.from('email,first_name\njohn@example.com,John\n'),
    });
    const status = await client.imports.status('import-1');

    expect(listed).toBeInstanceOf(Collection);
    expect(created).toBeInstanceOf(Response);
    expect(created.data.originalFilename).toBe('contacts.csv');
    expect(status.data.progress).toBe(40);

    expect(history[0]?.method).toBe('GET');
    expect(history[0]?.path).toBe('/api/v1/contacts/imports');
    expect(history[1]?.method).toBe('POST');
    expect(history[1]?.path).toBe('/api/v1/contacts/import');
    expect(history[1]?.body).toBeInstanceOf(FormData);
    expect(history[2]?.path).toBe('/api/v1/contacts/imports/import-1');
  });
});
