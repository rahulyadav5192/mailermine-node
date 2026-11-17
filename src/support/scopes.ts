/**
 * API key scopes. A `.write` scope also grants the matching `.read`;
 * `admin` grants everything; a key created without scopes has full access.
 *
 * @example
 * ```ts
 * await mm.apiKeys.create(projectId, { name: 'Mailer', scopes: ScopePresets.sendingOnly });
 * ```
 */
export const Scopes = {
  EmailsSend: 'emails.send',
  EmailsRead: 'emails.read',
  TemplatesRead: 'templates.read',
  TemplatesWrite: 'templates.write',
  DomainsRead: 'domains.read',
  DomainsWrite: 'domains.write',
  ContactsRead: 'contacts.read',
  ContactsWrite: 'contacts.write',
  CampaignsRead: 'campaigns.read',
  CampaignsWrite: 'campaigns.write',
  AnalyticsRead: 'analytics.read',
  BillingRead: 'billing.read',
  ProjectsRead: 'projects.read',
  ProjectsWrite: 'projects.write',
  ApiKeysRead: 'api_keys.read',
  ApiKeysWrite: 'api_keys.write',
  WebhooksRead: 'webhooks.read',
  WebhooksWrite: 'webhooks.write',
  SuppressionsRead: 'suppressions.read',
  SuppressionsWrite: 'suppressions.write',
  EventsRead: 'events.read',
  Admin: 'admin',
} as const;

export type Scope = (typeof Scopes)[keyof typeof Scopes];

/** Ready-made scope bundles. */
export const ScopePresets = {
  /** Send email only. */
  sendingOnly: [Scopes.EmailsSend],
  /** Send email and read delivery logs, events and analytics. */
  sendingAndLogs: [Scopes.EmailsSend, Scopes.EmailsRead, Scopes.EventsRead, Scopes.AnalyticsRead],
  /** Manage contacts and campaigns; read templates and analytics. */
  marketing: [
    Scopes.ContactsRead,
    Scopes.ContactsWrite,
    Scopes.CampaignsRead,
    Scopes.CampaignsWrite,
    Scopes.TemplatesRead,
    Scopes.AnalyticsRead,
  ],
} as const satisfies Record<string, readonly Scope[]>;
