import { describe, expect, it } from 'vitest';

import { Collection, NotFoundError, Response } from '../../src/index.js';
import {
  createMockClient,
  deleteResponse,
  jsonResponse,
  listResponse,
  resourceResponse,
} from '../helpers/mock-api.js';

const contact = {
  id: 'contact-1',
  email: 'john@example.com',
  first_name: 'John',
  last_name: 'Doe',
  status: 'active',
  subscribed: true,
  source: 'api',
  metadata: {},
  tags: [],
  lists: [],
  custom_fields: {},
  created_at: '2026-07-17T10:00:00Z',
  updated_at: '2026-07-17T11:00:00Z',
};

describe('Contacts', () => {
  it('implements create, list, get, update, delete, search, subscribe, unsubscribe', async () => {
    const { client, history } = createMockClient([
      jsonResponse(201, resourceResponse(contact, 'Created.')),
      jsonResponse(200, listResponse([contact], 3)),
      jsonResponse(200, resourceResponse(contact)),
      jsonResponse(200, resourceResponse({ ...contact, first_name: 'Jonathan' })),
      jsonResponse(200, deleteResponse('Contact deleted.')),
      jsonResponse(200, listResponse([contact])),
      jsonResponse(200, resourceResponse({ ...contact, subscribed: true, status: 'active' })),
      jsonResponse(
        200,
        resourceResponse({ ...contact, subscribed: false, status: 'unsubscribed' }),
      ),
    ]);

    const created = await client.contacts.create({
      email: 'john@example.com',
      firstName: 'John',
      subscribed: true,
    });
    const listed = await client.contacts.list({ subscribed: true, page: 1 });
    const retrieved = await client.contacts.get('contact-1');
    const updated = await client.contacts.update('contact-1', { firstName: 'Jonathan' });
    const deleted = await client.contacts.delete('contact-1');
    const searched = await client.contacts.search('john@example.com');
    const subscribed = await client.contacts.subscribe('contact-1');
    const unsubscribed = await client.contacts.unsubscribe('contact-1');

    expect(created).toBeInstanceOf(Response);
    expect(created.data.firstName).toBe('John');
    expect(listed).toBeInstanceOf(Collection);
    expect(listed.pagination.total).toBe(3);
    expect(retrieved.data.id).toBe('contact-1');
    expect(updated.data.firstName).toBe('Jonathan');
    expect(deleted.data.deleted).toBe(true);
    expect(searched.items[0]?.email).toBe('john@example.com');
    expect(subscribed.data.subscribed).toBe(true);
    expect(unsubscribed.data.subscribed).toBe(false);

    expect(history[0]?.method).toBe('POST');
    expect(history[0]?.path).toBe('/api/v1/contacts');
    expect(history[0]?.body).toMatchObject({
      email: 'john@example.com',
      first_name: 'John',
      subscribed: true,
    });
    expect(history[1]?.url).toContain('subscribed=true');
    expect(history[2]?.path).toBe('/api/v1/contacts/contact-1');
    expect(history[3]?.method).toBe('PATCH');
    expect(history[3]?.body).toEqual({ first_name: 'Jonathan' });
    expect(history[4]?.method).toBe('DELETE');
    expect(history[5]?.url).toContain('search=john%40example.com');
    expect(history[6]?.body).toMatchObject({ subscribed: true, status: 'active' });
    expect(history[7]?.body).toMatchObject({ subscribed: false, status: 'unsubscribed' });
  });

  it('identify and upsert use email lookup', async () => {
    const { client, history } = createMockClient([
      jsonResponse(200, listResponse([contact])),
      jsonResponse(200, listResponse([contact])),
      jsonResponse(200, resourceResponse({ ...contact, first_name: 'Johnny' })),
      jsonResponse(200, listResponse([])),
      jsonResponse(201, resourceResponse({ ...contact, id: 'contact-2', email: 'new@example.com' })),
      jsonResponse(200, listResponse([])),
    ]);

    const identified = await client.contacts.identify('john@example.com');
    const upserted = await client.contacts.upsert({
      email: 'john@example.com',
      firstName: 'Johnny',
    });
    const created = await client.contacts.upsert({
      email: 'new@example.com',
      firstName: 'New',
    });

    expect(identified.data.id).toBe('contact-1');
    expect(upserted.data.firstName).toBe('Johnny');
    expect(created.data.id).toBe('contact-2');

    expect(history[0]?.path).toBe('/api/v1/contacts');
    expect(history[2]?.method).toBe('PATCH');
    expect(history[2]?.path).toBe('/api/v1/contacts/contact-1');
    expect(history[4]?.method).toBe('POST');

    await expect(client.contacts.identify('missing@example.com')).rejects.toBeInstanceOf(
      NotFoundError,
    );
  });
});
