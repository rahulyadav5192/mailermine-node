import { describe, expect, it } from 'vitest';

import { Collection, Response } from '../../src/index.js';
import {
  createMockClient,
  deleteResponse,
  jsonResponse,
  listResponse,
  resourceResponse,
} from '../helpers/mock-api.js';

const apiKey = {
  id: 'key-1',
  name: 'CI Production',
  prefix: 'mm_live_abcd',
  masked_key: 'mm_live_abcd...',
  status: 'active',
  scopes: ['emails.send', 'emails.read'],
  permissions: ['emails.send', 'emails.read'],
  environment: 'production',
  last_used_at: null,
  expires_at: null,
  created_at: '2026-07-17T10:00:00Z',
  updated_at: '2026-07-17T10:00:00Z',
  secret: 'mm_live_secret',
  key: 'mm_live_secret',
};

describe('ApiKeys', () => {
  it('implements create, list, get, update, and delete', async () => {
    const { client, history } = createMockClient([
      jsonResponse(201, resourceResponse(apiKey, 'Created.')),
      jsonResponse(200, listResponse([{ ...apiKey, secret: null, key: null }])),
      jsonResponse(200, resourceResponse({ ...apiKey, secret: null, key: null })),
      jsonResponse(
        200,
        resourceResponse({ ...apiKey, name: 'CI Staging', secret: null, key: null }),
      ),
      jsonResponse(200, deleteResponse('API key deleted.')),
    ]);

    const created = await client.apiKeys.create('project-1', {
      name: 'CI Production',
      scopes: ['emails.send', 'emails.read'],
    });
    const listed = await client.apiKeys.list('project-1', { status: 'active' });
    const retrieved = await client.apiKeys.get('project-1', 'key-1');
    const updated = await client.apiKeys.update('project-1', 'key-1', {
      name: 'CI Staging',
    });
    const deleted = await client.apiKeys.delete('project-1', 'key-1');

    expect(created).toBeInstanceOf(Response);
    expect(created.data.secret).toBe('mm_live_secret');
    expect(listed).toBeInstanceOf(Collection);
    expect(listed.items[0]?.maskedKey).toBe('mm_live_abcd...');
    expect(retrieved.data.id).toBe('key-1');
    expect(updated.data.name).toBe('CI Staging');
    expect(deleted.data.deleted).toBe(true);

    expect(history[0]?.path).toBe('/api/v1/projects/project-1/api-keys');
    expect(history[0]?.body).toEqual({
      name: 'CI Production',
      scopes: ['emails.send', 'emails.read'],
    });
    expect(history[1]?.path).toBe('/api/v1/projects/project-1/api-keys');
    expect(history[1]?.url).toContain('status=active');
    expect(history[2]?.path).toBe('/api/v1/projects/project-1/api-keys/key-1');
    expect(history[3]?.method).toBe('PATCH');
    expect(history[4]?.method).toBe('DELETE');
  });
});
