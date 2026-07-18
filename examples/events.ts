/**
 * Query message and delivery events with the MailerMine Node.js SDK.
 *
 * Usage:
 *   MAILERMINE_API_KEY=mm_xxx npx tsx examples/events.ts
 */
import { MailerMine } from '../src/index.js';

const apiKey = process.env.MAILERMINE_API_KEY;
if (apiKey === undefined || apiKey === '') {
  throw new Error('Set MAILERMINE_API_KEY before running this example.');
}

const mm = new MailerMine({ apiKey });

const events = await mm.events.list({ perPage: 25 });
console.log(`Loaded ${events.items.length} events.`);

const first = events.items[0];
if (first !== undefined) {
  const event = await mm.events.get(first.id);
  console.log('event:', event.data);
}
