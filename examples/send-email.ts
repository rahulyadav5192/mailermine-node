/**
 * Send a transactional email with the MailerMine Node.js SDK.
 *
 * Usage:
 *   MAILERMINE_API_KEY=mm_xxx npx tsx examples/send-email.ts
 */
import { MailerMine } from '../src/index.js';

const apiKey = process.env.MAILERMINE_API_KEY;
if (apiKey === undefined || apiKey === '') {
  throw new Error('Set MAILERMINE_API_KEY before running this example.');
}

const mm = new MailerMine({ apiKey });

const result = await mm.emails.send({
  from: process.env.MAILERMINE_FROM ?? 'hello@example.com',
  to: process.env.MAILERMINE_TO ?? 'user@example.com',
  subject: 'Hello from @mailermine/node',
  html: '<p>Sent with the official MailerMine Node.js SDK.</p>',
  text: 'Sent with the official MailerMine Node.js SDK.',
  replyTo: 'support@example.com',
  tags: ['sdk-example'],
  metadata: { source: 'examples/send-email.ts' },
});

console.log(result.message);
console.log(result.data);
