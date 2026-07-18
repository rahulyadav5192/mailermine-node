/**
 * Manage webhook endpoints and verify signatures with the MailerMine Node.js SDK.
 *
 * Usage:
 *   MAILERMINE_API_KEY=mm_xxx npx tsx examples/webhooks.ts
 */
import { MailerMine, Webhooks } from '../src/index.js';

const apiKey = process.env.MAILERMINE_API_KEY;
if (apiKey === undefined || apiKey === '') {
  throw new Error('Set MAILERMINE_API_KEY before running this example.');
}

const mm = new MailerMine({ apiKey });

const webhook = await mm.webhooks.create({
  name: 'SDK example endpoint',
  url: process.env.MAILERMINE_WEBHOOK_URL ?? 'https://example.com/webhooks/mailermine',
  subscribedEvents: ['email.delivered', 'email.bounced'],
});

console.log('created webhook:', webhook.data.id);
console.log('signing secret (shown once):', webhook.data.signingSecret);

const deliveries = await mm.webhooks.deliveries(webhook.data.id);
console.log(`webhook has ${deliveries.items.length} deliveries.`);

// Local signature verification does not require a network call.
const secret = webhook.data.signingSecret ?? 'test-secret';
const payload = JSON.stringify({ event: 'email.delivered' });
const { createHmac } = await import('node:crypto');
const signature = createHmac('sha256', secret).update(payload).digest('hex');
console.log('signature valid:', Webhooks.verify(payload, signature, secret));

await mm.webhooks.delete(webhook.data.id);
console.log('cleaned up webhook.');
