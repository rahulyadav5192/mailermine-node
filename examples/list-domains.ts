/**
 * List sending domains.
 *
 * Usage:
 *   MAILERMINE_API_KEY=mm_xxx npx tsx examples/list-domains.ts
 */
import { MailerMine } from '../src/index.js';

const apiKey = process.env.MAILERMINE_API_KEY;
if (apiKey === undefined || apiKey === '') {
  throw new Error('Set MAILERMINE_API_KEY before running this example.');
}

const mm = new MailerMine({ apiKey });
const domains = await mm.domains.list({ perPage: 25 });

console.log(domains.message);
for (const domain of domains) {
  console.log(`${domain.domain} — ${domain.verificationStatus}`);
}
