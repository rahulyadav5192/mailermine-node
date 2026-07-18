# MailerMine Node SDK — Release Test Report

Generated: 2026-07-18T05:58:00.000Z
SDK version: `1.0.0`
Fresh tarball: `mailermine-node-1.0.0.tgz`
Customer live validation (mailermine-node-test): yes
RC QA (mailermine-node-qa): packaging / DX / exception gates (live suite skipped by design)

## Pipeline steps

| Step | Status | Detail |
| --- | --- | --- |
| Build SDK | PASSED | — |
| Delete stale tarballs | PASSED | — |
| Pack fresh tarball | PASSED | mailermine-node-1.0.0.tgz |
| Locate fresh tarball | PASSED | mailermine-node-1.0.0.tgz |
| Install into mailermine-node-test | PASSED | — |
| Customer test suite (live) | PASSED | 209 total / 151 passed / 0 failed / 58 skipped |
| Install into mailermine-node-qa | PASSED | — |
| RC QA suite | PASSED | 29 passed / 15 live-skipped |

## Totals

- Passed: 8
- Failed: 0
- Skipped: 0

## Consumer sub-reports

- `../mailermine-node-test/FINAL_NODE_SDK_QA_REPORT.md` → **Ready with Known Issues** (Failed 0, Breaking Issues None)
- `../mailermine-node-qa` packaging/DX/exceptions/TypeScript → all green against `1.0.0`

## Result: PIPELINE GREEN

All required stages passed. Skipped live cases are Free-plan entitlements and intentional safety gates — not SDK defects. See `RELEASE_AUDIT.md` for the release decision.
