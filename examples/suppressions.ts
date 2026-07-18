/**
 * Manage the suppression list with the MailerMine Node.js SDK.
 *
 * Usage:
 *   MAILERMINE_API_KEY=mm_xxx npx tsx examples/suppressions.ts
 */
import { MailerMine } from '../src/index.js';

const apiKey = process.env.MAILERMINE_API_KEY;
if (apiKey === undefined || apiKey === '') {
  throw new Error('Set MAILERMINE_API_KEY before running this example.');
}

const mm = new MailerMine({ apiKey });

const email = process.env.MAILERMINE_SUPPRESS_EMAIL ?? 'bounce@example.com';

const added = await mm.suppressions.add({ email, reason: 'bounce' });
console.log('added suppression:', added.data.id);

const check = await mm.suppressions.check(email);
console.log('suppressed:', check.data.suppressed);

const list = await mm.suppressions.list({ perPage: 25 });
console.log(`Loaded ${list.items.length} suppressions.`);

await mm.suppressions.remove(added.data.id);
console.log('removed suppression.');
