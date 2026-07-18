/**
 * Create, list, update, and delete a project.
 *
 * Usage:
 *   MAILERMINE_API_KEY=mm_xxx npx tsx examples/projects.ts
 */
import { MailerMine } from '../src/index.js';

const apiKey = process.env.MAILERMINE_API_KEY;
if (apiKey === undefined || apiKey === '') {
  throw new Error('Set MAILERMINE_API_KEY before running this example.');
}

const mm = new MailerMine({ apiKey });
const suffix = Date.now();

const created = await mm.projects.create({
  name: `SDK Project ${suffix}`,
  slug: `sdk-project-${suffix}`,
  environment: 'development',
  description: 'Created by examples/projects.ts',
});

const listed = await mm.projects.list({ search: created.data.slug });
const updated = await mm.projects.update(created.data.id, {
  description: 'Updated by examples/projects.ts',
});
const deleted = await mm.projects.delete(created.data.id);

console.log(created.data);
console.log(`Matched ${listed.length} project(s)`);
console.log(updated.data.description);
console.log(deleted.data);
