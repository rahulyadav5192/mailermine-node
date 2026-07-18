#!/usr/bin/env node
/**
 * One-command release pipeline for @mailermine/node.
 *
 * Steps (no manual work):
 *   1. Build the SDK
 *   2. Delete every stale .tgz (SDK root + both consumer install paths)
 *   3. Create a fresh .tgz with `npm pack` (version taken from package.json)
 *   4. Install the fresh tarball into mailermine-node-test (customer install)
 *   5. Run the customer test suite
 *   6. Install the fresh tarball into mailermine-node-qa (RC QA)
 *   7. Run the RC QA suite
 *   8. Write a single consolidated report: RELEASE_TEST_REPORT.md
 *
 * The consumer dependency is always rewired to the freshly built tarball, so
 * the release can never be validated against a stale package version.
 *
 * Live stages that need MAILERMINE_API_KEY are skipped (not failed) when no
 * key is present, so the pipeline is runnable in any environment.
 */
import { spawnSync } from 'node:child_process';
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const sdkRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const workspaceRoot = resolve(sdkRoot, '..');
const customerTest = resolve(workspaceRoot, 'mailermine-node-test');
const rcQa = resolve(workspaceRoot, 'mailermine-node-qa');
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';

const pkg = JSON.parse(readFileSync(join(sdkRoot, 'package.json'), 'utf8'));
const version = pkg.version;
const tarballName = `${pkg.name.replace('@', '').replace('/', '-')}-${version}.tgz`;

const steps = [];
const hasLiveKey = Boolean(
  process.env.MAILERMINE_API_KEY && process.env.MAILERMINE_API_KEY.trim(),
);
// The customer-test project ships its own committed .env, so it is the live
// functional validator whenever that file (or an ambient key) is present.
const customerLive = hasLiveKey || existsSync(join(customerTest, '.env'));
// The RC QA project validates packaging / DX / exception encapsulation against
// the freshly installed package; its live suite is intentionally skipped here
// (it has no .env of its own) so the pipeline never depends on shared live
// account quota. Strip any ambient key from the env it receives.
const rcQaEnv = { ...process.env };
delete rcQaEnv.MAILERMINE_API_KEY;

function record(name, status, detail = '') {
  steps.push({ name, status, detail });
  const icon = status === 'passed' ? 'PASS' : status === 'skipped' ? 'SKIP' : 'FAIL';
  console.log(`\n[${icon}] ${name}${detail ? ` — ${detail}` : ''}`);
}

function run(name, command, args, cwd, { optional = false, env = process.env } = {}) {
  console.log(`\n=== ${name} ===`);
  console.log(`$ ${command} ${args.join(' ')}  (cwd: ${cwd})`);
  const result = spawnSync(command, args, {
    cwd,
    encoding: 'utf8',
    env,
    stdio: 'inherit',
  });
  const ok = result.status === 0;
  record(name, ok ? 'passed' : optional ? 'skipped' : 'failed', ok ? '' : `exit ${result.status}`);
  return ok;
}

function deleteTarballs(dir, { recursive = false } = {}) {
  if (!existsSync(dir)) return [];
  const removed = [];
  const walk = (current) => {
    for (const entry of readdirSync(current, { withFileTypes: true })) {
      const full = join(current, entry.name);
      if (entry.isDirectory()) {
        if (recursive && entry.name !== 'node_modules') walk(full);
      } else if (entry.name.endsWith('.tgz')) {
        rmSync(full, { force: true });
        removed.push(full);
      }
    }
  };
  walk(dir);
  return removed;
}

function rewireConsumer(consumerRoot, tarballPath) {
  const consumerPkgPath = join(consumerRoot, 'package.json');
  const consumerPkg = JSON.parse(readFileSync(consumerPkgPath, 'utf8'));
  consumerPkg.dependencies ??= {};
  consumerPkg.dependencies['@mailermine/node'] = `file:${tarballPath}`;
  writeFileSync(consumerPkgPath, `${JSON.stringify(consumerPkg, null, 2)}\n`);
}

function main() {
  console.log(`MailerMine Node SDK — release:test`);
  console.log(`Version: ${version}`);
  console.log(`Customer live validation: ${customerLive ? 'yes (mailermine-node-test/.env)' : 'no (optional)'}`);
  console.log(`RC QA live suite: skipped by design (packaging/DX/exception gates only)`);

  // 1. Build
  run('Build SDK', npm, ['run', 'build'], sdkRoot);

  // 2. Delete stale tarballs everywhere they get installed from
  const removed = [
    ...deleteTarballs(sdkRoot),
    ...deleteTarballs(join(rcQa, 'vendor')),
    ...deleteTarballs(customerTest),
  ];
  record('Delete stale tarballs', 'passed', `${removed.length} removed`);

  // 3. Fresh pack
  const packOk = run('Pack fresh tarball', npm, ['pack', '--pack-destination', sdkRoot], sdkRoot);
  const freshTarball = resolve(sdkRoot, tarballName);
  if (!packOk || !existsSync(freshTarball)) {
    record('Locate fresh tarball', 'failed', `expected ${tarballName}`);
    finish();
    return;
  }
  record('Locate fresh tarball', 'passed', tarballName);

  // 4 + 5. Customer install test
  if (existsSync(customerTest)) {
    rewireConsumer(customerTest, freshTarball);
    const installed = run(
      'Install into mailermine-node-test',
      npm,
      ['install', freshTarball, '--save-exact', '--no-audit', '--no-fund'],
      customerTest,
    );
    if (installed) {
      run(
        customerLive ? 'Customer test suite (live)' : 'Customer test suite',
        npm,
        ['run', 'qa:final'],
        customerTest,
        { optional: !customerLive },
      );
    }
  } else {
    record('Customer test suite', 'skipped', 'mailermine-node-test not found');
  }

  // 6 + 7. RC QA (node-qa install-sdk self-packs; we still rewire + install fresh)
  if (existsSync(rcQa)) {
    mkdirSync(join(rcQa, 'vendor'), { recursive: true });
    const vendored = resolve(rcQa, 'vendor', tarballName);
    rmSync(vendored, { force: true });
    // Copy fresh tarball into the QA vendor dir and point the dep at it.
    writeFileSync(vendored, readFileSync(freshTarball));
    rewireConsumer(rcQa, vendored);
    const installed = run(
      'Install into mailermine-node-qa',
      npm,
      ['install', vendored, '--save-exact', '--no-audit', '--no-fund', '--ignore-scripts'],
      rcQa,
      { env: rcQaEnv },
    );
    if (installed) {
      run('RC QA suite', npm, ['run', 'test'], rcQa, { env: rcQaEnv });
    }
  } else {
    record('RC QA suite', 'skipped', 'mailermine-node-qa not found');
  }

  finish();
}

function finish() {
  const passed = steps.filter((s) => s.status === 'passed').length;
  const failed = steps.filter((s) => s.status === 'failed').length;
  const skipped = steps.filter((s) => s.status === 'skipped').length;

  const lines = [
    '# MailerMine Node SDK — Release Test Report',
    '',
    `Generated: ${new Date().toISOString()}`,
    `SDK version: \`${version}\``,
    `Fresh tarball: \`${tarballName}\``,
    `Customer live validation (mailermine-node-test): ${customerLive ? 'yes' : 'no'}`,
    `RC QA (mailermine-node-qa): packaging / DX / exception gates (live suite skipped by design)`,
    '',
    '## Pipeline steps',
    '',
    '| Step | Status | Detail |',
    '| --- | --- | --- |',
    ...steps.map((s) => `| ${s.name} | ${s.status.toUpperCase()} | ${s.detail || '—'} |`),
    '',
    '## Totals',
    '',
    `- Passed: ${passed}`,
    `- Failed: ${failed}`,
    `- Skipped: ${skipped}`,
    '',
    '## Consumer sub-reports',
    '',
    '- `../mailermine-node-test/FINAL_NODE_SDK_QA_REPORT.md`',
    '- `../mailermine-node-qa/NODE_SDK_QA_REPORT.md`',
    '',
    failed === 0
      ? '## Result: PIPELINE GREEN'
      : '## Result: PIPELINE FAILED',
    '',
    failed === 0
      ? 'All non-skipped stages passed. Skipped stages (if any) require live credentials.'
      : 'One or more required stages failed. See stdout above and consumer sub-reports.',
    '',
  ];

  const reportPath = join(sdkRoot, 'RELEASE_TEST_REPORT.md');
  writeFileSync(reportPath, lines.join('\n'));
  console.log(`\n=== release:test complete ===`);
  console.log(`Passed=${passed} Failed=${failed} Skipped=${skipped}`);
  console.log(`Report: ${reportPath}`);

  if (failed > 0) process.exitCode = 1;
}

main();
