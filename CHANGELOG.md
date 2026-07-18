# Changelog

All notable changes to `@mailermine/node` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2026-07-18

First stable, production release. Full public-surface parity with the
MailerMine Laravel SDK (18 resources).

### Added

- Deliverability resources: `analytics`, `events`, `messages`, `webhooks`, and `suppressions`.
- `Webhooks.verify()` for local HMAC-SHA256 signature verification.
- Marketing resources: `contacts`, `lists`, `segments`, `tags`, `audiences`, `campaigns`, `imports`, and `exports`.
- Contact helpers: `search`, `identify`, `upsert`, `subscribe`, and `unsubscribe`.
- Campaign helpers mirroring the Laravel SDK (create-with-follow-up-update, analytics slices, recipient previews, full lifecycle).
- Core platform resources: `emails`, `projects`, `apiKeys` (incl. `rotate`/`reveal`), `domains`, and `templates` (incl. `test`).
- Public `MailerMine` client with `Response`, `Collection`, `Pagination`, and typed SDK exceptions.
- Runnable examples for every resource group.

### Changed

- **Exception encapsulation is now sealed.** Generated OpenAPI runtime errors
  (`ResponseError`, `RequiredError`, `FetchError`) never escape the SDK: they
  are no longer attached via `Error.cause`, and generated identifiers, response
  objects, and stacks are stripped from public errors. The public exception
  surface is exactly `ApiError`, `AuthenticationError`, `ValidationError`,
  `PlanError`, `NotFoundError`, and `RateLimitError`.

## [0.1.0] - 2026-07-17

### Added

- Phase 1 SDK foundation: TypeScript project, dual ESM/CJS build via tsup, ESLint, Prettier, Vitest, and GitHub Actions CI.
- Immutable `Configuration` with `apiKey`, `baseUrl`, `timeout`, and `userAgent` (defaults aligned with the Laravel SDK).
- Repository scaffolding: `src/`, `generated/`, `tests/`, `examples/`, `docs/`, `scripts/`.
- Initial public foundation release of `@mailermine/node`.
