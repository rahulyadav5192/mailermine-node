import { describe, expect, it } from 'vitest';

import { Collection, Response } from '../../src/index.js';
import {
  createMockClient,
  deleteResponse,
  jsonResponse,
  listResponse,
  resourceResponse,
} from '../helpers/mock-api.js';

const campaign = {
  uuid: 'campaign-1',
  name: 'March Newsletter',
  subject: 'Hello',
  preview_text: null,
  from_name: null,
  from_email: null,
  reply_to: null,
  status: 'draft',
  status_label: 'Draft',
  send_immediately: true,
  scheduled_at: null,
  timezone: 'UTC',
  sent_at: null,
  estimated_recipients: 0,
  total_recipients: 0,
  queued_count: 0,
  sending_count: 0,
  sent_count: 0,
  failed_count: 0,
  completed_count: 0,
  completion_percentage: 0,
  started_at: null,
  completed_at: null,
  last_processed_at: null,
  builder_step: 1,
  created_at: '2026-07-17T10:00:00Z',
  updated_at: '2026-07-17T11:00:00Z',
  project: null,
  template: null,
  segment: null,
};

const analytics = {
  recipients: 100,
  queued: 0,
  sent: 95,
  delivered: 90,
  opened: 40,
  unique_opens: 35,
  clicked: 10,
  unique_clicks: 8,
  bounced: 2,
  complained: 1,
  failed: 3,
  unsubscribed: 1,
  delivery_rate: 90,
  open_rate: 38.9,
  click_rate: 8.9,
  bounce_rate: 2,
  complaint_rate: 1,
  failure_rate: 3,
  unsubscribe_rate: 1,
  average_delivery_time_seconds: 1.2,
};

describe('Campaigns', () => {
  it('implements create with follow-up update and core content helpers', async () => {
    const { client, history } = createMockClient([
      jsonResponse(201, resourceResponse(campaign, 'Created.')),
      jsonResponse(
        200,
        resourceResponse({
          ...campaign,
          subject: 'What is new',
          preview_text: 'Inbox teaser',
          template: { uuid: 'template-1' },
          segment: { uuid: 'segment-1' },
        }),
      ),
      jsonResponse(200, listResponse([campaign], 1)),
      jsonResponse(200, resourceResponse(campaign)),
      jsonResponse(200, resourceResponse({ ...campaign, subject: 'Updated' })),
      jsonResponse(
        200,
        resourceResponse({
          subject: 'What is new',
          html: '<h1>Hi</h1>',
          text: 'Hi',
          preview_text: 'Inbox teaser',
        }),
      ),
      jsonResponse(
        200,
        resourceResponse({
          subject: 'What is new',
          html: '<h1>Hi</h1>',
          text: 'Hi',
          preview_text: 'Inbox teaser',
        }),
      ),
      jsonResponse(200, resourceResponse({ ...campaign, template: { uuid: 'template-2' } })),
      jsonResponse(200, resourceResponse({ ...campaign, subject: 'Fresh subject' })),
      jsonResponse(
        200,
        resourceResponse({
          ...campaign,
          from_name: 'MailerMine',
          from_email: 'hello@mailermine.com',
        }),
      ),
      jsonResponse(200, resourceResponse({ ...campaign, reply_to: 'support@mailermine.com' })),
      jsonResponse(200, resourceResponse({ ...campaign, preview_text: 'Teaser' })),
      jsonResponse(200, resourceResponse({ ...campaign, segment: { uuid: 'segment-2' } })),
      jsonResponse(200, resourceResponse({ ...campaign, segment: null })),
      jsonResponse(
        200,
        resourceResponse({
          estimated_count: 42,
          subscribed_count: 40,
          unsubscribed_count: 1,
          suppressed_count: 1,
          sample_contacts: [{ email: 'john@example.com' }],
        }),
      ),
      jsonResponse(
        200,
        resourceResponse({
          estimated_count: 42,
          subscribed_count: 40,
          unsubscribed_count: 1,
          suppressed_count: 1,
        }),
      ),
      jsonResponse(200, resourceResponse({ valid: true, errors: [], warnings: [] })),
      jsonResponse(200, resourceResponse({ ...campaign, uuid: 'campaign-2' })),
      jsonResponse(200, resourceResponse({ ...campaign, status: 'archived' })),
      jsonResponse(200, resourceResponse(campaign)),
      jsonResponse(200, deleteResponse('Deleted.')),
    ]);

    const created = await client.campaigns.create({
      name: 'March Newsletter',
      subject: 'What is new',
      templateId: 'template-1',
      segmentId: 'segment-1',
      preheader: 'Inbox teaser',
    });
    const listed = await client.campaigns.list({ status: 'draft', page: 1 });
    const retrieved = await client.campaigns.get('campaign-1');
    const updated = await client.campaigns.update('campaign-1', { subject: 'Updated' });
    const preview = await client.campaigns.preview('campaign-1');
    const rendered = await client.campaigns.render('campaign-1');
    await client.campaigns.setTemplate('campaign-1', 'template-2');
    await client.campaigns.setSubject('campaign-1', 'Fresh subject');
    await client.campaigns.setSender('campaign-1', {
      fromName: 'MailerMine',
      fromEmail: 'hello@mailermine.com',
    });
    await client.campaigns.setReplyTo('campaign-1', 'support@mailermine.com');
    await client.campaigns.setPreheader('campaign-1', 'Teaser');
    await client.campaigns.addSegment('campaign-1', 'segment-2');
    await client.campaigns.removeSegment('campaign-1');
    const recipients = await client.campaigns.previewRecipients('campaign-1');
    const count = await client.campaigns.recipientCount('campaign-1');
    const validation = await client.campaigns.validate('campaign-1');
    const duplicated = await client.campaigns.duplicate('campaign-1');
    const archived = await client.campaigns.archive('campaign-1');
    const restored = await client.campaigns.restore('campaign-1');
    const deleted = await client.campaigns.delete('campaign-1');

    expect(created).toBeInstanceOf(Response);
    expect(created.data.subject).toBe('What is new');
    expect(listed).toBeInstanceOf(Collection);
    expect(retrieved.data.uuid).toBe('campaign-1');
    expect(updated.data.subject).toBe('Updated');
    expect(preview.data.html).toBe('<h1>Hi</h1>');
    expect(rendered.data.html).toBe('<h1>Hi</h1>');
    expect(recipients.data.estimatedCount).toBe(42);
    expect(count.data.count).toBe(42);
    expect(validation.data.valid).toBe(true);
    expect(duplicated.data.uuid).toBe('campaign-2');
    expect(archived.data.status).toBe('archived');
    expect(restored.data.uuid).toBe('campaign-1');
    expect(deleted.data.deleted).toBe(true);

    expect(history[0]?.method).toBe('POST');
    expect(history[0]?.path).toBe('/api/v1/campaigns');
    expect(history[0]?.body).toEqual({ name: 'March Newsletter' });
    expect(history[1]?.method).toBe('PATCH');
    expect(history[1]?.body).toEqual({
      subject: 'What is new',
      preview_text: 'Inbox teaser',
      template_uuid: 'template-1',
      segment_uuid: 'segment-1',
    });
    expect(history[2]?.url).toContain('status=draft');
    expect(history[7]?.body).toEqual({ template_uuid: 'template-2' });
    expect(history[8]?.body).toEqual({ subject: 'Fresh subject' });
    expect(history[9]?.body).toEqual({
      from_name: 'MailerMine',
      from_email: 'hello@mailermine.com',
    });
    expect(history[10]?.body).toEqual({ reply_to: 'support@mailermine.com' });
    expect(history[11]?.body).toEqual({ preview_text: 'Teaser' });
    expect(history[12]?.body).toEqual({ segment_uuid: 'segment-2' });
    expect(history[13]?.body).toEqual({ segment_uuid: null });
    expect(history[17]?.path).toBe('/api/v1/campaigns/campaign-1/duplicate');
    expect(history[18]?.path).toBe('/api/v1/campaigns/campaign-1/archive');
    expect(history[19]?.path).toBe('/api/v1/campaigns/campaign-1/restore');
  });

  it('projects status, progress, analytics slices, and event collections', async () => {
    const { client, history } = createMockClient([
      jsonResponse(200, resourceResponse(campaign)),
      jsonResponse(
        200,
        resourceResponse({
          total_recipients: 100,
          sent_count: 50,
          completion_percentage: 50,
        }),
      ),
      jsonResponse(200, resourceResponse(analytics)),
      jsonResponse(200, resourceResponse(analytics)),
      jsonResponse(200, resourceResponse(analytics)),
      jsonResponse(200, resourceResponse(analytics)),
      jsonResponse(200, resourceResponse(analytics)),
      jsonResponse(200, resourceResponse(analytics)),
      jsonResponse(200, resourceResponse(analytics)),
      jsonResponse(200, resourceResponse(analytics)),
      jsonResponse(
        200,
        listResponse([{ destination_url: 'https://example.com', clicks: 3, unique_clicks: 2, ctr: 2, last_clicked_at: null }]),
      ),
      jsonResponse(200, listResponse([{ id: 'event-1', type: 'opened' }])),
      jsonResponse(200, listResponse([{ event: 'opened', occurred_at: '2026-07-17T12:00:00Z' }])),
      jsonResponse(200, listResponse([{ label: 'Created', occurred_at: '2026-07-17T10:00:00Z' }])),
      jsonResponse(200, listResponse([{ email: 'john@example.com', status: 'delivered' }])),
    ]);

    const status = await client.campaigns.status('campaign-1');
    const progress = await client.campaigns.progress('campaign-1');
    const metrics = await client.campaigns.analytics('campaign-1');
    const opens = await client.campaigns.opens('campaign-1');
    const clicks = await client.campaigns.clicks('campaign-1');
    const bounces = await client.campaigns.bounces('campaign-1');
    const complaints = await client.campaigns.complaints('campaign-1');
    const unsubscribes = await client.campaigns.unsubscribes('campaign-1');
    const deliveries = await client.campaigns.deliveries('campaign-1');
    const delivery = await client.campaigns.delivery('campaign-1');
    const links = await client.campaigns.links('campaign-1');
    const events = await client.campaigns.events('campaign-1');
    const activity = await client.campaigns.activity('campaign-1');
    const timeline = await client.campaigns.timeline('campaign-1');
    const recipients = await client.campaigns.recipients('campaign-1', {
      status: 'delivered',
      page: 1,
    });

    expect(status.data.status).toBe('draft');
    expect(progress.data.completionPercentage).toBe(50);
    expect(metrics.data.delivered).toBe(90);
    expect(opens.data).toMatchObject({ opened: 40, uniqueOpens: 35, openRate: 38.9 });
    expect(clicks.data).toMatchObject({ clicked: 10, uniqueClicks: 8 });
    expect(bounces.data).toMatchObject({ bounced: 2 });
    expect(complaints.data).toMatchObject({ complained: 1 });
    expect(unsubscribes.data).toMatchObject({ unsubscribed: 1 });
    expect(deliveries.data).toMatchObject({ delivered: 90, sent: 95 });
    expect(delivery.data).toMatchObject({ recipients: 100, delivered: 90 });
    expect(links).toBeInstanceOf(Collection);
    expect(events).toBeInstanceOf(Collection);
    expect(activity).toBeInstanceOf(Collection);
    expect(timeline).toBeInstanceOf(Collection);
    expect(recipients).toBeInstanceOf(Collection);

    expect(history[0]?.path).toBe('/api/v1/campaigns/campaign-1');
    expect(history[1]?.path).toBe('/api/v1/campaigns/campaign-1/progress');
    expect(history[2]?.path).toBe('/api/v1/campaigns/campaign-1/analytics');
    expect(history[10]?.path).toBe('/api/v1/campaigns/campaign-1/links');
    expect(history[11]?.path).toBe('/api/v1/campaigns/campaign-1/events');
    expect(history[12]?.path).toBe('/api/v1/campaigns/campaign-1/activities');
    expect(history[13]?.path).toBe('/api/v1/campaigns/campaign-1/timeline');
    expect(history[14]?.path).toBe('/api/v1/campaigns/campaign-1/recipients');
    expect(history[14]?.url).toContain('status=delivered');
  });

  it('setSender accepts an email string with optional fromName', async () => {
    const { client, history } = createMockClient([
      jsonResponse(
        200,
        resourceResponse({
          ...campaign,
          from_email: 'hello@mailermine.com',
          from_name: 'Team',
        }),
      ),
    ]);

    await client.campaigns.setSender('campaign-1', 'hello@mailermine.com', 'Team');
    expect(history[0]?.body).toEqual({
      from_email: 'hello@mailermine.com',
      from_name: 'Team',
    });
  });
});
