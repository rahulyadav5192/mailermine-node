/**
 * Create and manage project API keys.
 *
 * Usage:
 *   MAILERMINE_API_KEY=mm_xxx MAILERMINE_PROJECT_ID=uuid npx tsx examples/api-keys.ts
 */
import { MailerMine } from '../src/index.js';

const apiKey = process.env.MAILERMINE_API_KEY;
const projectId = process.env.MAILERMINE_PROJECT_ID;

if (apiKey === undefined || apiKey === '') {
  throw new Error('Set MAILERMINE_API_KEY before running this example.');
}
if (projectId === undefined || projectId === '') {
  throw new Error('Set MAILERMINE_PROJECT_ID before running this example.');
}

const mm = new MailerMine({ apiKey });

const created = await mm.apiKeys.create(projectId, {
  name: `SDK Key ${Date.now()}`,
  scopes: ['emails.send', 'emails.read'],
});

const listed = await mm.apiKeys.list(projectId, { status: 'active' });
const retrieved = await mm.apiKeys.get(projectId, created.data.id);
const updated = await mm.apiKeys.update(projectId, created.data.id, {
  name: `SDK Key Updated ${Date.now()}`,
});
const deleted = await mm.apiKeys.delete(projectId, created.data.id);

console.log('Created secret (shown once):', created.data.secret);
console.log(`Active keys: ${listed.length}`);
console.log(retrieved.data.prefix);
console.log(updated.data.name);
console.log(deleted.data);
