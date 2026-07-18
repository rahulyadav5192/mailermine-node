/**
 * Create and preview dynamic segments.
 *
 * Usage:
 *   MAILERMINE_API_KEY=mm_xxx npx tsx examples/segments.ts
 */
import { MailerMine } from '../src/index.js';

const apiKey = process.env.MAILERMINE_API_KEY;
if (apiKey === undefined || apiKey === '') {
  throw new Error('Set MAILERMINE_API_KEY before running this example.');
}

const mm = new MailerMine({ apiKey });
const suffix = Date.now();

const rules = {
  logic: 'and' as const,
  rules: [{ field: 'subscribed', operator: 'equals', value: true }],
};

const segment = await mm.segments.create({
  name: `SDK Segment ${suffix}`,
  description: 'Created by examples/segments.ts',
  rules,
});

const preview = await mm.segments.preview(segment.data.id);
const rulesPreview = await mm.segments.preview(null, rules);
const deleted = await mm.segments.delete(segment.data.id);

console.log(segment.data);
console.log(preview.data);
console.log(rulesPreview.data);
console.log(deleted.data);
