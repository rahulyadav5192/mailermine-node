/**
 * Create and preview an email template.
 *
 * Usage:
 *   MAILERMINE_API_KEY=mm_xxx npx tsx examples/create-template.ts
 */
import { MailerMine } from '../src/index.js';

const apiKey = process.env.MAILERMINE_API_KEY;
if (apiKey === undefined || apiKey === '') {
  throw new Error('Set MAILERMINE_API_KEY before running this example.');
}

const mm = new MailerMine({ apiKey });

const created = await mm.templates.create({
  name: `SDK Welcome ${Date.now()}`,
  subject: 'Welcome {{first_name}}',
  html: '<p>Hello {{first_name}}</p>',
  text: 'Hello {{first_name}}',
  status: 'draft',
  tags: ['sdk-example'],
  variables: [{ name: 'first_name', type: 'string', required: true }],
});

const preview = await mm.templates.preview(created.data.id, {
  variables: { first_name: 'Alex' },
});

console.log(created.message);
console.log(created.data.id);
console.log(preview.data);
