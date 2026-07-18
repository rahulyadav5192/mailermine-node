# Phase 4 Report — Core Platform Resources

**Date:** 2026-07-17  
**Package:** `@mailermine/node@0.1.0`  
**Overall Success:** Yes  
**Overall Readiness:** Core transactional platform resources are production-ready for integration testing and early adopters.

---

## Important note about Phase 3

At the start of this phase the repository still only contained Phase 1 configuration plus the Phase 2 generated client. The handwritten wrapper architecture required by Phase 4 (`MailerMine` client, response envelopes, exception mapping, request serialization, and resource base) was therefore implemented as part of this work so the five core resources could ship against an isolated `generated/` layer.

---

## Resources Implemented

| Resource  | Public accessor | Generated API(s)            |
| --------- | --------------- | --------------------------- |
| Emails    | `mm.emails`     | `EmailsApi` + `MessagesApi` |
| Projects  | `mm.projects`   | `ProjectsApi`               |
| API Keys  | `mm.apiKeys`    | `APIKeysApi`                |
| Domains   | `mm.domains`    | `DomainsApi`                |
| Templates | `mm.templates`  | `TemplatesApi`              |

## Methods

### Emails

- `send()`
- `list()`
- `get()`
- `events()`

Supports attachments, cc, bcc, replyTo, headers, tags, metadata, and `scheduledAt` (forwarded when present).

`list` / `get` / `events` are exposed on the Emails resource for developer ergonomics and map to the generated Messages API (`/delivery-logs`, `/messages/{id}/events`).

### Projects

- `create()` / `list()` / `get()` / `update()` / `delete()`

### API Keys

- `create(projectId, …)` / `list(projectId, …)` / `get(projectId, id)` / `update(projectId, id, …)` / `delete(projectId, id)`

### Domains

- `create()` / `list()` / `get()` / `verify()` / `dnsRecords()` / `status()` / `delete()`

`dnsRecords()` and `status()` are convenience projections over `get()`, matching the Laravel SDK.

### Templates

- `create()` / `list()` / `get()` / `update()` / `preview()` / `duplicate()` / `delete()`

---

## Design guarantees

- Developers write `new MailerMine({ apiKey })` and call `mm.emails.send(...)`.
- Each resource wraps one generated API surface (Emails additionally composes Messages for read/event operations).
- Generated models are never exported.
- Inputs are plain TypeScript objects.
- Bodies are converted to API wire format internally.
- Single objects return `Response<T>`.
- Lists return `Collection<T>` with `Pagination`.
- Generated errors never escape:
  - 401 → `AuthenticationError`
  - 403 → `PlanError`
  - 404 → `NotFoundError`
  - 422 → `ValidationError`
  - 429 → `RateLimitError`
  - other → `ApiError`

---

## Tests

Vitest suite mirrors the Laravel SDK QA strategy: mocked HTTP transport with request/response assertions (not live side-effecting API calls by default).

| File                                | Coverage                                                      |
| ----------------------------------- | ------------------------------------------------------------- |
| `tests/resources/emails.test.ts`    | send/list/get/events + exception mapping                      |
| `tests/resources/projects.test.ts`  | create/list/get/update/delete                                 |
| `tests/resources/api-keys.test.ts`  | create/list/get/update/delete                                 |
| `tests/resources/domains.test.ts`   | create/list/get/verify/dnsRecords/status/delete + 503 mapping |
| `tests/resources/templates.test.ts` | create/list/get/update/preview/duplicate/delete               |
| `tests/configuration.test.ts`       | configuration defaults                                        |

**Result:** 11/11 tests passing.

Live examples under `examples/` exercise the real API when `MAILERMINE_API_KEY` (and related IDs) are provided.

---

## Examples

- `examples/send-email.ts`
- `examples/list-domains.ts`
- `examples/verify-domain.ts`
- `examples/create-template.ts`
- `examples/projects.ts`
- `examples/api-keys.ts`

---

## Compilation Status

| Gate                                 | Result      |
| ------------------------------------ | ----------- |
| Lint                                 | Passed      |
| Typecheck (handwritten + generated)  | Passed      |
| Tests                                | Passed (11) |
| Build (ESM + CJS + DTS + sourcemaps) | Passed      |

---

## Developer Experience

- Strict TypeScript public surface with rich JSDoc.
- Excellent IntelliSense for resource methods and input objects.
- Tree-shakeable dual package exports.
- README updated with Installation, Quick Start, Emails, Domains, Templates, Projects, and API Keys.

---

## Known Limitations

1. **`scheduledAt` on send:** accepted and forwarded by the SDK, but the current OpenAPI `SendEmailRequest` schema does not document the field. Delivery depends on API-side support.
2. **Emails read APIs:** live under Messages/`delivery-logs` in the OpenAPI document; the SDK presents them as `mm.emails.list/get/events` for the intended DX.
3. **Domain `dnsRecords` / `status`:** convenience methods, not distinct OpenAPI operations.
4. **Default tests are mocked:** same approach as the Laravel SDK. Destructive live coverage is available via examples/env credentials, not the default CI suite.
5. **Not implemented yet (by design):** Contacts, Lists, Segments, Campaigns, Analytics, Webhooks, Suppressions.

---

## Overall Readiness

Phase 4 delivers the first production resource surface for the transactional platform. The public API shape matches the Laravel reference, generated types remain internal, and the quality gate is green.

Next recommended phase: contacts / lists / segments.
