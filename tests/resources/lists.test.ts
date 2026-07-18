import { describe, expect, it } from 'vitest';

import { Collection, Response } from '../../src/index.js';
import {
  createMockClient,
  deleteResponse,
  jsonResponse,
  listResponse,
  resourceResponse,
} from '../helpers/mock-api.js';

const mailingList = {
  id: 'list-1',
  name: 'Newsletter',
  description: 'Weekly updates',
  color: '#22C55E',
  subscriber_count: 10,
  created_at: '2026-07-17T10:00:00Z',
  updated_at: '2026-07-17T11:00:00Z',
};

describe('Lists', () => {
  it('implements create, list, get, update, delete, addContact, removeContact', async () => {
    const { client, history } = createMockClient([
      jsonResponse(201, resourceResponse(mailingList, 'Created.')),
      jsonResponse(200, listResponse([mailingList], 2)),
      jsonResponse(200, resourceResponse(mailingList)),
      jsonResponse(200, resourceResponse({ ...mailingList, name: 'Product Updates' })),
      jsonResponse(200, resourceResponse({ added: 1 })),
      jsonResponse(200, resourceResponse({ removed: 2 })),
      jsonResponse(200, deleteResponse('List deleted.')),
    ]);

    const created = await client.lists.create({
      name: 'Newsletter',
      description: 'Weekly updates',
    });
    const listed = await client.lists.list({ search: 'news', page: 1 });
    const retrieved = await client.lists.get('list-1');
    const updated = await client.lists.update('list-1', { name: 'Product Updates' });
    const added = await client.lists.addContact('list-1', 'contact-1');
    const removed = await client.lists.removeContact('list-1', ['contact-1', 'contact-2']);
    const deleted = await client.lists.delete('list-1');

    expect(created).toBeInstanceOf(Response);
    expect(created.data.subscriberCount).toBe(10);
    expect(listed).toBeInstanceOf(Collection);
    expect(retrieved.data.id).toBe('list-1');
    expect(updated.data.name).toBe('Product Updates');
    expect(added.data.added).toBe(1);
    expect(removed.data.removed).toBe(2);
    expect(deleted.data.deleted).toBe(true);

    expect(history[0]?.method).toBe('POST');
    expect(history[0]?.path).toBe('/api/v1/lists');
    expect(history[0]?.body).toMatchObject({ name: 'Newsletter' });
    expect(history[1]?.url).toContain('search=news');
    expect(history[2]?.path).toBe('/api/v1/lists/list-1');
    expect(history[3]?.method).toBe('PUT');
    expect(history[4]?.method).toBe('POST');
    expect(history[4]?.path).toBe('/api/v1/lists/list-1/contacts');
    expect(history[4]?.body).toEqual({ ids: ['contact-1'] });
    expect(history[5]?.path).toBe('/api/v1/lists/list-1/contacts/bulk-remove');
    expect(history[5]?.body).toEqual({ ids: ['contact-1', 'contact-2'] });
    expect(history[6]?.method).toBe('DELETE');
  });
});
