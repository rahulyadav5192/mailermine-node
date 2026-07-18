import { describe, expect, it } from 'vitest';

import { MailerMine, Webhooks } from '../../src/index.js';

const EXPECTED_METHODS = {
  emails: ['send', 'list', 'get', 'events'],
  projects: ['create', 'list', 'get', 'update', 'delete'],
  apiKeys: ['create', 'list', 'get', 'update', 'delete', 'rotate', 'reveal'],
  domains: ['create', 'list', 'get', 'delete', 'verify', 'dnsRecords', 'status'],
  templates: ['create', 'list', 'get', 'update', 'delete', 'duplicate', 'preview', 'test'],
  contacts: [
    'create',
    'list',
    'search',
    'get',
    'update',
    'delete',
    'identify',
    'upsert',
    'subscribe',
    'unsubscribe',
  ],
  lists: ['create', 'list', 'get', 'update', 'delete', 'addContact', 'removeContact'],
  segments: ['create', 'list', 'get', 'update', 'delete', 'preview'],
  tags: ['create', 'list', 'get', 'update', 'delete', 'assign', 'remove'],
  audiences: [
    'create',
    'list',
    'get',
    'update',
    'delete',
    'contacts',
    'addContacts',
    'removeContacts',
  ],
  campaigns: [
    'create',
    'list',
    'get',
    'update',
    'delete',
    'duplicate',
    'preview',
    'render',
    'validate',
    'markReady',
    'send',
    'schedule',
    'reschedule',
    'unschedule',
    'sendNow',
    'cancelSchedule',
    'pause',
    'resume',
    'cancel',
    'archive',
    'restore',
    'addAudience',
    'removeAudience',
    'addSegment',
    'removeSegment',
    'recipientCount',
    'previewRecipients',
    'recipients',
    'setTemplate',
    'setSubject',
    'setSender',
    'setReplyTo',
    'setPreheader',
    'status',
    'progress',
    'delivery',
    'analytics',
    'opens',
    'clicks',
    'bounces',
    'complaints',
    'unsubscribes',
    'deliveries',
    'links',
    'events',
    'activity',
    'timeline',
  ],
  imports: ['create', 'configure', 'start', 'status', 'list', 'cancel'],
  exports: ['create', 'status', 'download'],
  analytics: [
    'overview',
    'deliveries',
    'opens',
    'clicks',
    'bounces',
    'complaints',
    'unsubscribes',
    'usage',
    'activity',
    'messages',
    'engagement',
    'campaigns',
    'domains',
    'projects',
    'providers',
  ],
  events: ['list', 'get', 'timeline', 'history', 'message'],
  messages: ['list', 'get', 'search', 'filter', 'events', 'timeline'],
  webhooks: [
    'create',
    'list',
    'get',
    'update',
    'delete',
    'test',
    'rotateSecret',
    'enable',
    'disable',
    'deliveries',
    'delivery',
    'logs',
    'failures',
    'replay',
    'retry',
  ],
  suppressions: ['list', 'get', 'add', 'remove', 'restore', 'check'],
} as const;

describe('Laravel public surface parity', () => {
  it('exposes all 18 resources and every Laravel-equivalent method', () => {
    const mm = new MailerMine('test-api-key');

    for (const [resourceName, methods] of Object.entries(EXPECTED_METHODS)) {
      const resource = (mm as unknown as Record<string, object>)[resourceName];
      expect(resource, `mm.${resourceName}`).toBeTruthy();
      for (const method of methods) {
        expect(
          typeof (resource as unknown as Record<string, unknown>)[method],
          `mm.${resourceName}.${method}`,
        ).toBe('function');
      }
    }
  });

  it('exposes local webhook signature verification', () => {
    expect(typeof Webhooks.verify).toBe('function');
  });
});
