# Changelog

All notable changes to `@mailermine/node` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.0] - 2026-11-17

### Added

- Automatic retries with backoff for 429/502/503/504 and network errors,
  honouring `Retry-After` (`maxRetries`, default 2; `maxRetryDelay`, default
  30s). POSTs are only replayed when they carry an `Idempotency-Key`.
- `emails.send(input, { idempotencyKey })`; sends get a random key by default
  so SDK retries never deliver twice.
- `client.rateLimit` and `error.rateLimit` (`RateLimitInfo`), `error.isRetryable`.
- `MissingScopeError` (subclass of `PlanError`) with `missingScopes` for 403
  responses caused by a missing API key scope.
- `Scopes` / `ScopePresets`, including `webhooks.*`, `suppressions.*` and
  `events.read`.
- `Webhooks.verifyHeaders()`.
- `held` message status: messages held for MailerMine trust & safety review
  (the send call still succeeds). Blocked sends are `ValidationError`s with
  an `errors.content`, `errors.sending_limit`, `errors.recipients` or
  `errors.sending` entry.

### Fixed

- `Webhooks.verify()` could never validate a real MailerMine delivery: the
  server signs `{timestamp}.{body}`. It now accepts the timestamp and rejects
  stale deliveries (5 minute default); without a timestamp it keeps the old
  body-only check.

### Changed

- Regenerated the OpenAPI client from the current API spec.

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
