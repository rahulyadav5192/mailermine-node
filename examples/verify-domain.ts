/**
 * Verify a sending domain.
 *
 * Usage:
 *   MAILERMINE_API_KEY=mm_xxx MAILERMINE_DOMAIN_ID=uuid npx tsx examples/verify-domain.ts
 */
import { MailerMine } from '../src/index.js';

const apiKey = process.env.MAILERMINE_API_KEY;
const domainId = process.env.MAILERMINE_DOMAIN_ID;

if (apiKey === undefined || apiKey === '') {
  throw new Error('Set MAILERMINE_API_KEY before running this example.');
}
if (domainId === undefined || domainId === '') {
  throw new Error('Set MAILERMINE_DOMAIN_ID before running this example.');
}

const mm = new MailerMine({ apiKey });
const verified = await mm.domains.verify(domainId);
const records = await mm.domains.dnsRecords(domainId);
const status = await mm.domains.status(domainId);

console.log(verified.message);
console.log(status.data);
console.log(records.data);
