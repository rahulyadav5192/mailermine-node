/**
 * Upload a contact import file and poll status.
 *
 * Usage:
 *   MAILERMINE_API_KEY=mm_xxx npx tsx examples/imports.ts
 */
import { MailerMine } from '../src/index.js';

const apiKey = process.env.MAILERMINE_API_KEY;
if (apiKey === undefined || apiKey === '') {
  throw new Error('Set MAILERMINE_API_KEY before running this example.');
}

const mm = new MailerMine({ apiKey });
const csv = Buffer.from('email,first_name\nsdk-import@example.com,SDK\n');

const uploaded = await mm.imports.create({ file: csv });
const status = await mm.imports.status(uploaded.data.id);
const listed = await mm.imports.list();

console.log(uploaded.data);
console.log(status.data.status);
console.log(`Recent imports: ${listed.length}`);
