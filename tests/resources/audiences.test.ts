import { describe, expect, it } from 'vitest';

import { Collection, Response } from '../../src/index.js';
import {
  createMockClient,
  jsonResponse,
  listResponse,
  resourceResponse,
} from '../helpers/mock-api.js';

const audience = {
  type: 'list',
  id: 'list-1',
  name: 'Newsletter',
  description: 'Weekly',
  member_count: 10,
  source: 'list',
};

describe('Audiences', () => {
  it('implements list and get', async () => {
    const { client, history } = createMockClient([
      jsonResponse(200, listResponse([audience], 1)),
      jsonResponse(200, resourceResponse(audience)),
    ]);

    const listed = await client.audiences.list({ page: 1, perPage: 25 });
    const retrieved = await client.audiences.get('list', 'list-1');

    expect(listed).toBeInstanceOf(Collection);
    expect(listed.items[0]?.memberCount).toBe(10);
    expect(retrieved).toBeInstanceOf(Response);
    expect(retrieved.data.id).toBe('list-1');

    expect(history[0]?.path).toBe('/api/v1/audiences');
    expect(history[0]?.url).toContain('page=1');
    expect(history[1]?.path).toBe('/api/v1/audiences/list/list-1');
  });
});
