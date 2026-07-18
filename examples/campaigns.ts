/**
 * Create and configure a draft campaign.
 *
 * Usage:
 *   MAILERMINE_API_KEY=mm_xxx npx tsx examples/campaigns.ts
 */
import { MailerMine } from '../src/index.js';

const apiKey = process.env.MAILERMINE_API_KEY;
if (apiKey === undefined || apiKey === '') {
  throw new Error('Set MAILERMINE_API_KEY before running this example.');
}

const mm = new MailerMine({ apiKey });
const suffix = Date.now();

const campaign = await mm.campaigns.create({
  name: `SDK Campaign ${suffix}`,
  subject: 'Hello from the Node SDK',
  preheader: 'A short inbox teaser',
});

await mm.campaigns.setSender(campaign.data.uuid, 'hello@example.com', 'MailerMine');
const preview = await mm.campaigns.preview(campaign.data.uuid);
const status = await mm.campaigns.status(campaign.data.uuid);
const deleted = await mm.campaigns.delete(campaign.data.uuid);

console.log(campaign.data);
console.log(preview.data.subject);
console.log(status.data.status);
console.log(deleted.data);
