/**
 * Create and manage static mailing lists.
 *
 * Usage:
 *   MAILERMINE_API_KEY=mm_xxx npx tsx examples/lists.ts
 */
import { MailerMine } from '../src/index.js';

const apiKey = process.env.MAILERMINE_API_KEY;
if (apiKey === undefined || apiKey === '') {
  throw new Error('Set MAILERMINE_API_KEY before running this example.');
}

const mm = new MailerMine({ apiKey });
const suffix = Date.now();

const list = await mm.lists.create({
  name: `SDK List ${suffix}`,
  description: 'Created by examples/lists.ts',
});

const listed = await mm.lists.list({ search: list.data.name });
const updated = await mm.lists.update(list.data.id, {
  description: 'Updated by examples/lists.ts',
});
const deleted = await mm.lists.delete(list.data.id);

console.log(list.data);
console.log(`Matched ${listed.length} list(s)`);
console.log(updated.data.description);
console.log(deleted.data);
