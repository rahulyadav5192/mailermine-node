import { describe, expect, it } from 'vitest';

import { Collection, Response } from '../../src/index.js';
import {
  createMockClient,
  deleteResponse,
  jsonResponse,
  listResponse,
  resourceResponse,
} from '../helpers/mock-api.js';

const rules = {
  logic: 'and' as const,
  rules: [{ field: 'subscribed', operator: 'equals', value: true }],
};

const segment = {
  id: 'segment-1',
  name: 'Active subscribers',
  description: 'Subscribed contacts',
  rules,
  contact_count: 42,
  created_at: '2026-07-17T10:00:00Z',
  updated_at: '2026-07-17T11:00:00Z',
};

const preview = {
  count: 42,
  sample_contacts: [{ email: 'john@example.com' }],
};

describe('Segments', () => {
  it('implements create, list, get, update, delete, and preview', async () => {
    const { client, history } = createMockClient([
      jsonResponse(201, resourceResponse(segment, 'Created.')),
      jsonResponse(200, listResponse([segment], 1)),
      jsonResponse(200, resourceResponse(segment)),
      jsonResponse(200, resourceResponse({ ...segment, name: 'Engaged' })),
      jsonResponse(200, resourceResponse(preview)),
      jsonResponse(200, resourceResponse(preview)),
      jsonResponse(200, deleteResponse('Segment deleted.')),
    ]);

    const created = await client.segments.create({
      name: 'Active subscribers',
      rules,
    });
    const listed = await client.segments.list({ search: 'active' });
    const retrieved = await client.segments.get('segment-1');
    const updated = await client.segments.update('segment-1', { name: 'Engaged' });
    const savedPreview = await client.segments.preview('segment-1');
    const rulesPreview = await client.segments.preview(null, rules);
    const deleted = await client.segments.delete('segment-1');

    expect(created).toBeInstanceOf(Response);
    expect(created.data.contactCount).toBe(42);
    expect(listed).toBeInstanceOf(Collection);
    expect(retrieved.data.id).toBe('segment-1');
    expect(updated.data.name).toBe('Engaged');
    expect(savedPreview.data.count).toBe(42);
    expect(rulesPreview.data.count).toBe(42);
    expect(deleted.data.deleted).toBe(true);

    expect(history[0]?.method).toBe('POST');
    expect(history[0]?.path).toBe('/api/v1/segments');
    expect(history[0]?.body).toMatchObject({ name: 'Active subscribers' });
    expect(history[1]?.url).toContain('search=active');
    expect(history[2]?.path).toBe('/api/v1/segments/segment-1');
    expect(history[3]?.method).toBe('PUT');
    expect(history[4]?.path).toBe('/api/v1/segments/segment-1/preview');
    expect(history[5]?.method).toBe('POST');
    expect(history[5]?.path).toBe('/api/v1/segments/preview');
    expect(history[5]?.body).toMatchObject({ rules });
    expect(history[6]?.method).toBe('DELETE');
  });
});
