/**
 * Query account-wide analytics with the MailerMine Node.js SDK.
 *
 * Usage:
 *   MAILERMINE_API_KEY=mm_xxx npx tsx examples/analytics.ts
 */
import { MailerMine } from '../src/index.js';

const apiKey = process.env.MAILERMINE_API_KEY;
if (apiKey === undefined || apiKey === '') {
  throw new Error('Set MAILERMINE_API_KEY before running this example.');
}

const mm = new MailerMine({ apiKey });

const range = { from: '2026-01-01', to: '2026-12-31' };

const overview = await mm.analytics.overview(range);
console.log('overview:', overview.data);

const opens = await mm.analytics.opens(range);
console.log('opens:', opens.data);

const clicks = await mm.analytics.clicks(range);
console.log('clicks:', clicks.data);

const engagement = await mm.analytics.engagement(range);
console.log('engagement:', engagement.data);
