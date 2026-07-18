/**
 * Browse delivery-log messages with the MailerMine Node.js SDK.
 *
 * Usage:
 *   MAILERMINE_API_KEY=mm_xxx npx tsx examples/messages.ts
 */
import { MailerMine } from '../src/index.js';

const apiKey = process.env.MAILERMINE_API_KEY;
if (apiKey === undefined || apiKey === '') {
  throw new Error('Set MAILERMINE_API_KEY before running this example.');
}

const mm = new MailerMine({ apiKey });

const messages = await mm.messages.list({ perPage: 25 });
console.log(`Loaded ${messages.items.length} messages.`);

const first = messages.items[0];
if (first !== undefined) {
  const message = await mm.messages.get(first.id);
  console.log('message:', message.data);

  const events = await mm.messages.events(first.id);
  console.log(`message has ${events.items.length} events.`);
}
