import { describe, expect, it } from 'vitest';

import { Collection, Response } from '../../src/index.js';
import {
  createMockClient,
  deleteResponse,
  jsonResponse,
  listResponse,
  resourceResponse,
} from '../helpers/mock-api.js';

const template = {
  id: 'template-1',
  name: 'Welcome Email',
  slug: 'welcome-email',
  description: 'Sent after signup',
  subject: 'Welcome {{first_name}}',
  status: 'published',
  editor_type: 'html',
  category: 'onboarding',
  tags: ['welcome'],
  created_at: '2026-07-17T10:00:00Z',
  updated_at: '2026-07-17T10:00:00Z',
  html: '<p>Hello {{first_name}}</p>',
  text: 'Hello {{first_name}}',
  html_content: '<p>Hello {{first_name}}</p>',
  text_content: 'Hello {{first_name}}',
  branding: { company_name: 'MailerMine' },
  metadata: { category: 'onboarding' },
  variables: [{ name: 'first_name', type: 'string', required: true }],
};

describe('Templates', () => {
  it('implements create, list, get, update, preview, duplicate, and delete', async () => {
    const { client, history } = createMockClient([
      jsonResponse(201, resourceResponse(template)),
      jsonResponse(200, listResponse([template])),
      jsonResponse(200, resourceResponse(template)),
      jsonResponse(200, resourceResponse({ ...template, subject: 'Hi {{first_name}}' })),
      jsonResponse(
        200,
        resourceResponse({
          subject: 'Welcome Alex',
          html: '<p>Hello Alex</p>',
          text: 'Hello Alex',
        }),
      ),
      jsonResponse(201, resourceResponse({ ...template, id: 'template-2', name: 'Welcome Copy' })),
      jsonResponse(200, deleteResponse('Template deleted.')),
    ]);

    const created = await client.templates.create({
      name: 'Welcome Email',
      subject: 'Welcome {{first_name}}',
      html: '<p>Hello {{first_name}}</p>',
      text: 'Hello {{first_name}}',
      status: 'published',
      tags: ['welcome'],
      variables: [{ name: 'first_name', type: 'string', required: true }],
    });
    const listed = await client.templates.list({ status: 'published' });
    const retrieved = await client.templates.get('template-1');
    const updated = await client.templates.update('template-1', {
      subject: 'Hi {{first_name}}',
    });
    const preview = await client.templates.preview('template-1', {
      variables: { first_name: 'Alex' },
    });
    const duplicated = await client.templates.duplicate('template-1', {
      name: 'Welcome Copy',
    });
    const deleted = await client.templates.delete('template-1');

    expect(created).toBeInstanceOf(Response);
    expect(created.data.htmlContent).toContain('{{first_name}}');
    expect(listed).toBeInstanceOf(Collection);
    expect(retrieved.data.slug).toBe('welcome-email');
    expect(updated.data.subject).toBe('Hi {{first_name}}');
    expect(preview.data.subject).toBe('Welcome Alex');
    expect(duplicated.data.id).toBe('template-2');
    expect(deleted.data.deleted).toBe(true);

    expect(history[0]?.path).toBe('/api/v1/templates');
    expect(history[0]?.body).toMatchObject({
      name: 'Welcome Email',
      subject: 'Welcome {{first_name}}',
      html: '<p>Hello {{first_name}}</p>',
      tags: ['welcome'],
    });
    expect(history[1]?.url).toContain('status=published');
    expect(history[2]?.path).toBe('/api/v1/templates/template-1');
    expect(history[3]?.method).toBe('PATCH');
    expect(history[4]?.path).toBe('/api/v1/templates/template-1/preview');
    expect(history[4]?.body).toEqual({ variables: { first_name: 'Alex' } });
    expect(history[5]?.path).toBe('/api/v1/templates/template-1/duplicate');
    expect(history[6]?.method).toBe('DELETE');
  });
});
