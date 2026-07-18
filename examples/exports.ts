/**
 * Queue a contact export and download CSV when complete.
 *
 * Usage:
 *   MAILERMINE_API_KEY=mm_xxx npx tsx examples/exports.ts
 */
import { MailerMine } from '../src/index.js';

const apiKey = process.env.MAILERMINE_API_KEY;
if (apiKey === undefined || apiKey === '') {
  throw new Error('Set MAILERMINE_API_KEY before running this example.');
}

const mm = new MailerMine({ apiKey });

const queued = await mm.exports.create({ subscribed: true });
const status = await mm.exports.status(queued.data.id);

console.log(queued.data);
console.log(status.data.status);

if (status.data.status === 'completed') {
  const csv = await mm.exports.download(queued.data.id);
  console.log(csv.data.slice(0, 200));
}
