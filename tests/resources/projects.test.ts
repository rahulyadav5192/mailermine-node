import { describe, expect, it } from 'vitest';

import { Collection, Response } from '../../src/index.js';
import {
  createMockClient,
  deleteResponse,
  jsonResponse,
  listResponse,
  resourceResponse,
} from '../helpers/mock-api.js';

const project = {
  id: 'project-1',
  name: 'Production Mail',
  slug: 'production-mail',
  description: 'Customer email',
  environment: 'production',
  timezone: 'UTC',
  default_sender: 'hello@example.com',
  status: 'active',
  settings: { track_opens: true },
  email_count: 10,
  domain_count: 2,
  api_key_count: 1,
  created_at: '2026-07-17T10:00:00Z',
  updated_at: '2026-07-17T11:00:00Z',
};

describe('Projects', () => {
  it('sends settings.tracking and keeps custom settings keys', async () => {
    const { client, history } = createMockClient([
      jsonResponse(201, resourceResponse(project, 'Created.')),
      jsonResponse(200, resourceResponse(project)),
    ]);

    await client.projects.create({
      name: 'P',
      settings: { region: 'eu-west-1', tracking: { opens: true, clicks: false } },
    });
    await client.projects.update('project-1', { settings: { tracking: { clicks: true } } });

    expect(history[0]?.body).toMatchObject({
      settings: { region: 'eu-west-1', tracking: { opens: true, clicks: false } },
    });
    expect(history[1]?.body).toMatchObject({ settings: { tracking: { clicks: true } } });
  });

  it('implements create, list, get, update, and delete', async () => {
    const { client, history } = createMockClient([
      jsonResponse(201, resourceResponse(project, 'Created.')),
      jsonResponse(200, listResponse([project], 3)),
      jsonResponse(200, resourceResponse(project)),
      jsonResponse(200, resourceResponse({ ...project, name: 'Updated Mail' })),
      jsonResponse(200, deleteResponse('Project deleted.')),
    ]);

    const created = await client.projects.create({
      name: 'Production Mail',
      slug: 'production-mail',
      environment: 'production',
      defaultSender: 'hello@example.com',
      settings: { track_opens: true },
    });
    const listed = await client.projects.list({ status: 'active', page: 1 });
    const retrieved = await client.projects.get('project-1');
    const updated = await client.projects.update('project-1', { name: 'Updated Mail' });
    const deleted = await client.projects.delete('project-1');

    expect(created).toBeInstanceOf(Response);
    expect(created.data.defaultSender).toBe('hello@example.com');
    expect(listed).toBeInstanceOf(Collection);
    expect(listed.pagination.total).toBe(3);
    expect(retrieved.data.id).toBe('project-1');
    expect(updated.data.name).toBe('Updated Mail');
    expect(deleted.data.deleted).toBe(true);

    expect(history[0]?.method).toBe('POST');
    expect(history[0]?.path).toBe('/api/v1/projects');
    expect(history[0]?.body).toMatchObject({
      name: 'Production Mail',
      default_sender: 'hello@example.com',
      settings: { track_opens: true },
    });
    expect(history[1]?.path).toBe('/api/v1/projects');
    expect(history[1]?.url).toContain('status=active');
    expect(history[2]?.path).toBe('/api/v1/projects/project-1');
    expect(history[3]?.method).toBe('PATCH');
    expect(history[3]?.body).toEqual({ name: 'Updated Mail' });
    expect(history[4]?.method).toBe('DELETE');
  });
});
