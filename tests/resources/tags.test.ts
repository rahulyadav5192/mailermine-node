import { describe, expect, it } from 'vitest';

import { Collection, Response } from '../../src/index.js';
import {
  createMockClient,
  deleteResponse,
  jsonResponse,
  listResponse,
  resourceResponse,
} from '../helpers/mock-api.js';

const tag = {
  id: 'tag-1',
  name: 'vip',
  color: '#111827',
  usage_count: 5,
  created_at: '2026-07-17T10:00:00Z',
  updated_at: '2026-07-17T11:00:00Z',
};

describe('Tags', () => {
  it('implements create, list, get, update, delete, assign, remove', async () => {
    const { client, history } = createMockClient([
      jsonResponse(201, resourceResponse(tag, 'Created.')),
      jsonResponse(200, listResponse([tag], 1)),
      jsonResponse(200, resourceResponse(tag)),
      jsonResponse(200, resourceResponse({ ...tag, name: 'priority' })),
      jsonResponse(200, resourceResponse({ assigned: 1 })),
      jsonResponse(200, resourceResponse({ removed: 1 })),
      jsonResponse(200, deleteResponse('Tag deleted.')),
    ]);

    const created = await client.tags.create({ name: 'vip', color: '#111827' });
    const listed = await client.tags.list({ search: 'vip' });
    const retrieved = await client.tags.get('tag-1');
    const updated = await client.tags.update('tag-1', { name: 'priority' });
    const assigned = await client.tags.assign({
      contactIds: ['contact-1'],
      tagIds: 'tag-1',
    });
    const removed = await client.tags.remove({
      contactIds: 'contact-1',
      tagIds: ['tag-1'],
    });
    const deleted = await client.tags.delete('tag-1');

    expect(created).toBeInstanceOf(Response);
    expect(created.data.usageCount).toBe(5);
    expect(listed).toBeInstanceOf(Collection);
    expect(retrieved.data.id).toBe('tag-1');
    expect(updated.data.name).toBe('priority');
    expect(assigned.data.assigned).toBe(1);
    expect(removed.data.removed).toBe(1);
    expect(deleted.data.deleted).toBe(true);

    expect(history[0]?.path).toBe('/api/v1/tags');
    expect(history[0]?.body).toMatchObject({ name: 'vip', color: '#111827' });
    expect(history[1]?.url).toContain('search=vip');
    expect(history[2]?.path).toBe('/api/v1/tags/tag-1');
    expect(history[3]?.method).toBe('PATCH');
    expect(history[4]?.method).toBe('POST');
    expect(history[4]?.path).toBe('/api/v1/tags/bulk-assign');
    expect(history[4]?.body).toEqual({
      contact_ids: ['contact-1'],
      tag_ids: ['tag-1'],
    });
    expect(history[5]?.path).toBe('/api/v1/tags/bulk-remove');
    expect(history[5]?.body).toEqual({
      contact_ids: ['contact-1'],
      tag_ids: ['tag-1'],
    });
    expect(history[6]?.method).toBe('DELETE');
  });
});
