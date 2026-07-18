/**
 * Create, identify, upsert, and manage contacts.
 *
 * Usage:
 *   MAILERMINE_API_KEY=mm_xxx npx tsx examples/contacts.ts
 */
import { MailerMine } from '../src/index.js';

const apiKey = process.env.MAILERMINE_API_KEY;
if (apiKey === undefined || apiKey === '') {
  throw new Error('Set MAILERMINE_API_KEY before running this example.');
}

const mm = new MailerMine({ apiKey });
const email = `sdk-contact-${Date.now()}@example.com`;

const created = await mm.contacts.create({
  email,
  firstName: 'SDK',
  lastName: 'Contact',
  subscribed: true,
});

const identified = await mm.contacts.identify(email);
const upserted = await mm.contacts.upsert({
  email,
  firstName: 'Updated',
});
const searched = await mm.contacts.search(email);
await mm.contacts.subscribe(created.data.id);
await mm.contacts.unsubscribe(created.data.id);
const deleted = await mm.contacts.delete(created.data.id);

console.log(created.data);
console.log(identified.data.email);
console.log(upserted.data.firstName);
console.log(`Matched ${searched.length} contact(s)`);
console.log(deleted.data);
