# @mailermine/node

Official MailerMine SDK for Node.js and TypeScript.

> **Status:** `1.0.0` — stable. Full public-surface parity with the MailerMine Laravel SDK across all 18 resources: emails, projects, API keys, domains, templates, contacts, lists, segments, tags, audiences, campaigns, imports, exports, analytics, events, messages, webhooks, and suppressions.

## Requirements

- Node.js **20.19+**
- TypeScript **5+** (optional but recommended)

## Installation

```bash
npm install @mailermine/node
```

```bash
pnpm add @mailermine/node
```

```bash
yarn add @mailermine/node
```

## Quick Start

```ts
import { MailerMine } from '@mailermine/node';

const mm = new MailerMine({
  apiKey: process.env.MAILERMINE_API_KEY!,
});

const sent = await mm.emails.send({
  from: 'MailerMine <hello@example.com>',
  to: 'user@example.com',
  subject: 'Welcome',
  html: '<p>Hello from MailerMine</p>',
  text: 'Hello from MailerMine',
});

console.log(sent.data.id);
```

## Configuration

```ts
import { MailerMine, DEFAULT_BASE_URL } from '@mailermine/node';

const mm = new MailerMine({
  apiKey: process.env.MAILERMINE_API_KEY!,
  baseUrl: DEFAULT_BASE_URL, // https://mailermine.com/api/v1
  timeout: 30_000,
  userAgent: 'mailermine-node/1.0.0',
});
```

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `apiKey` | `string` | — | Required MailerMine API key |
| `baseUrl` | `string` | `https://mailermine.com/api/v1` | API base URL |
| `timeout` | `number` | `30000` | Request timeout in milliseconds |
| `userAgent` | `string` | `mailermine-node/<version>` | User-Agent header value |

## Emails

```ts
await mm.emails.send({
  from: 'hello@example.com',
  to: ['user@example.com'],
  cc: ['copy@example.com'],
  bcc: ['audit@example.com'],
  replyTo: 'support@example.com',
  subject: 'Invoice ready',
  html: '<p>Your invoice is ready.</p>',
  text: 'Your invoice is ready.',
  tags: ['invoice'],
  metadata: { order_id: '123' },
  headers: { 'X-Customer-ID': '123' },
  attachments: [
    {
      filename: 'invoice.pdf',
      content: pdfBase64,
      contentType: 'application/pdf',
    },
  ],
  scheduledAt: '2026-07-18T10:00:00Z',
});

const messages = await mm.emails.list({ status: 'delivered', perPage: 25 });
const message = await mm.emails.get(messages.items[0]!.id);
const events = await mm.emails.events(message.data.id);
```

## Domains

```ts
const created = await mm.domains.create({ domain: 'mail.example.com' });
const domains = await mm.domains.list();
const domain = await mm.domains.get(created.data.id);
const verified = await mm.domains.verify(created.data.id);
const records = await mm.domains.dnsRecords(created.data.id);
const status = await mm.domains.status(created.data.id);
await mm.domains.delete(created.data.id);
```

## Templates

```ts
const template = await mm.templates.create({
  name: 'Welcome Email',
  subject: 'Welcome {{first_name}}',
  html: '<p>Hello {{first_name}}</p>',
  text: 'Hello {{first_name}}',
  status: 'draft',
  variables: [{ name: 'first_name', type: 'string', required: true }],
});

const preview = await mm.templates.preview(template.data.id, {
  variables: { first_name: 'Alex' },
});

await mm.templates.update(template.data.id, { status: 'published' });
await mm.templates.duplicate(template.data.id, { name: 'Welcome Copy' });
await mm.templates.delete(template.data.id);
```

## Projects

```ts
const project = await mm.projects.create({
  name: 'Production Mail',
  environment: 'production',
});

const projects = await mm.projects.list();
await mm.projects.update(project.data.id, { description: 'Transactional email' });
await mm.projects.delete(project.data.id);
```

## API Keys

```ts
const key = await mm.apiKeys.create(projectId, {
  name: 'CI Production',
  scopes: ['emails.send', 'emails.read'],
});

console.log(key.data.secret); // shown once

const keys = await mm.apiKeys.list(projectId);
await mm.apiKeys.update(projectId, key.data.id, { name: 'CI Staging' });
await mm.apiKeys.delete(projectId, key.data.id);
```

## Contacts

```ts
const contact = await mm.contacts.create({
  email: 'john@example.com',
  firstName: 'John',
  subscribed: true,
});

const found = await mm.contacts.identify('john@example.com');
const upserted = await mm.contacts.upsert({
  email: 'john@example.com',
  firstName: 'Jonathan',
});

await mm.contacts.subscribe(contact.data.id);
await mm.contacts.unsubscribe(contact.data.id);
const matches = await mm.contacts.search('john');
```

## Lists

```ts
const list = await mm.lists.create({ name: 'Newsletter' });
await mm.lists.addContact(list.data.id, contactId);
await mm.lists.removeContact(list.data.id, [contactId]);
await mm.lists.update(list.data.id, { description: 'Weekly updates' });
```

## Segments

```ts
const segment = await mm.segments.create({
  name: 'Active subscribers',
  rules: {
    logic: 'and',
    rules: [{ field: 'subscribed', operator: 'equals', value: true }],
  },
});

const preview = await mm.segments.preview(segment.data.id);
const rulesPreview = await mm.segments.preview(null, {
  logic: 'and',
  rules: [{ field: 'subscribed', operator: 'equals', value: true }],
});
```

## Tags

```ts
const tag = await mm.tags.create({ name: 'vip', color: '#111827' });
await mm.tags.assign({ contactIds: [contactId], tagIds: [tag.data.id] });
await mm.tags.remove({ contactIds: [contactId], tagIds: [tag.data.id] });
```

## Audiences

```ts
const audiences = await mm.audiences.list({ page: 1 });
const audience = await mm.audiences.get('list', listId);
```

## Campaigns

```ts
const campaign = await mm.campaigns.create({
  name: 'March Newsletter',
  subject: 'What is new',
  templateId,
  segmentId,
  preheader: 'Inbox teaser',
});

await mm.campaigns.setSender(campaign.data.uuid, {
  fromName: 'MailerMine',
  fromEmail: 'hello@example.com',
});

const preview = await mm.campaigns.preview(campaign.data.uuid);
const analytics = await mm.campaigns.analytics(campaign.data.uuid);
const opens = await mm.campaigns.opens(campaign.data.uuid);
```

## Imports

```ts
const job = await mm.imports.create({
  file: Buffer.from('email,first_name\nada@example.com,Ada\n'),
});
const status = await mm.imports.status(job.data.id);
const recent = await mm.imports.list();
```

## Exports

```ts
const exportJob = await mm.exports.create({ subscribed: true });
const status = await mm.exports.status(exportJob.data.id);
const csv = await mm.exports.download(exportJob.data.id);
```

## Analytics

```ts
const overview = await mm.analytics.overview({ from: '2026-01-01', to: '2026-01-31' });
const opens = await mm.analytics.opens({ from: '2026-01-01', to: '2026-01-31' });
const clicks = await mm.analytics.clicks();
const bounces = await mm.analytics.bounces();
const engagement = await mm.analytics.engagement();
const topCampaigns = await mm.analytics.campaigns();

// Passing a campaign id delegates to campaign-level analytics.
const campaignOpens = await mm.analytics.opens({ campaign: campaignId });
```

Also available: `deliveries`, `complaints`, `unsubscribes`, `usage`, `activity`, `messages`, `domains`, `projects`, and `providers`.

## Events

```ts
const events = await mm.events.list({ eventType: 'email.delivered', perPage: 50 });
const event = await mm.events.get(events.items[0]!.id);
const timeline = await mm.events.timeline(messageId);
const message = await mm.events.message(messageId);
```

## Messages

```ts
const logs = await mm.messages.list({ status: 'delivered', perPage: 25 });
const message = await mm.messages.get(logs.items[0]!.id);
const results = await mm.messages.search('user@example.com');
const events = await mm.messages.events(message.data.id);
```

## Webhooks

```ts
const webhook = await mm.webhooks.create({
  name: 'Delivery events',
  url: 'https://example.com/webhooks/mailermine',
  subscribedEvents: ['email.delivered', 'email.bounced'],
});

console.log(webhook.data.signingSecret); // shown once

const deliveries = await mm.webhooks.deliveries(webhook.data.id);
await mm.webhooks.disable(webhook.data.id);
await mm.webhooks.rotateSecret(webhook.data.id);

// Verify an incoming signature locally (HMAC-SHA256).
import { Webhooks } from '@mailermine/node';
const valid = Webhooks.verify(rawBody, signatureHeader, signingSecret);
```

Also available: `get`, `list`, `update`, `delete`, `test`, `enable`, `delivery`, `logs`, `failures`, `replay`, and `retry`.

## Suppressions

```ts
const added = await mm.suppressions.add({ email: 'bounce@example.com', reason: 'bounce' });
const list = await mm.suppressions.list({ perPage: 50 });
const check = await mm.suppressions.check('bounce@example.com');
console.log(check.data.suppressed);
await mm.suppressions.remove(added.data.id);
```

## Responses & errors

- Single objects return `Response<T>`
- Lists return `Collection<T>` with a `Pagination` object
- Generated OpenAPI types never leak into the public API

| Status | Exception |
| --- | --- |
| 401 | `AuthenticationError` |
| 403 | `PlanError` |
| 404 | `NotFoundError` |
| 422 | `ValidationError` |
| 429 | `RateLimitError` |
| 5xx / other | `ApiError` |

## Development

```bash
npm install
npm run generate
npm run lint
npm run typecheck
npm run test
npm run build
```

Or run the full quality gate:

```bash
npm run check
```

## Repository layout

```text
src/          Handwritten public SDK
generated/    OpenAPI client (do not edit by hand)
tests/        Vitest suite (Laravel-style mocked HTTP)
examples/     Runnable usage examples
docs/         Extended documentation
scripts/      Generation and maintenance scripts
```

## Resource coverage

All 18 Laravel SDK resources are available on the client:

`emails`, `projects`, `apiKeys`, `domains`, `templates`, `contacts`, `lists`,
`segments`, `tags`, `audiences`, `campaigns`, `imports`, `exports`,
`analytics`, `events`, `messages`, `webhooks`, `suppressions`.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

[MIT](./LICENSE) © MailerMine
# mailermine-node
# mailermine-node
