# Phase 5 Report — Marketing Resources

**Date:** 2026-07-17  
**Package:** `@mailermine/node@0.1.0`  
**Overall Success:** Yes  
**Overall Readiness:** Marketing audience and campaign resources are ready for integration testing and early adopters.

---

## Resources

| Resource | Public accessor | Generated API(s) |
| --- | --- | --- |
| Contacts | `mm.contacts` | `ContactsApi` |
| Lists | `mm.lists` | `ListsApi` |
| Segments | `mm.segments` | `SegmentsApi` |
| Tags | `mm.tags` | `TagsApi` |
| Audiences | `mm.audiences` | `AudiencesApi` |
| Campaigns | `mm.campaigns` | `CampaignsApi` + `CampaignLifecycleApi` + `CampaignAnalyticsApi` + `CampaignEventsApi` |
| Imports | `mm.imports` | `ImportsApi` |
| Exports | `mm.exports` | `ExportsApi` |

Internal adapters live in `src/internal/marketing-apis.ts` and are merged into `createInternalApis`.

---

## Methods

### Contacts

- `create` / `upsert` / `list` / `get` / `update` / `delete`
- `search` (list with `search`)
- `identify` (list by email + exact case-insensitive match; throws `NotFoundError`)
- `subscribe` / `unsubscribe`

### Lists

- `create` / `list` / `get` / `update` / `delete`
- `addContact` / `removeContact` (string or string[] → `ids`)

### Segments

- `create` / `list` / `get` / `update` / `delete`
- `preview(segmentId?, rules?)` → saved segment or unsaved rules

### Tags

- `create` / `list` / `get` / `update` / `delete`
- `assign` / `remove` (`contactIds`, `tagIds`)

### Audiences

- `list` / `get(source, audienceId)` only

### Campaigns

- CRUD: `create`, `list`, `get`, `update`, `delete`
- Lifecycle: `duplicate`, `archive`, `restore`
- Content: `setSubject`, `setSender`, `setReplyTo`, `setPreheader`, `setTemplate`
- Recipients: `recipientCount`, `previewRecipients`, `recipients`, `addSegment`, `removeSegment`
- Validation/content: `validate`, `preview`, `render`
- Status: `status`, `progress`
- Analytics: `analytics`, `opens`, `clicks`, `bounces`, `complaints`, `unsubscribes`, `deliveries`, `delivery`, `links`
- Events: `events`, `activity`, `timeline`

`create` POSTs `name` only, then PATCHes remaining fields (Laravel parity).

### Imports

- `list` / `create({ file })` / `status(id)`
- `file` accepts `Blob | Buffer | Uint8Array | ArrayBuffer`

### Exports

- `create(options?)` / `status(id)` / `download(id)` → `Response<string>` (CSV)

---

## Tests

Vitest suite uses mocked HTTP (Laravel-style), including FormData-aware request recording.

| File | Coverage |
| --- | --- |
| `tests/resources/contacts.test.ts` | CRUD + search/identify/upsert/subscribe/unsubscribe |
| `tests/resources/lists.test.ts` | CRUD + add/remove contact |
| `tests/resources/segments.test.ts` | CRUD + saved/unsaved preview |
| `tests/resources/tags.test.ts` | CRUD + assign/remove |
| `tests/resources/audiences.test.ts` | list + get |
| `tests/resources/campaigns.test.ts` | create follow-up, helpers, analytics slices, events |
| `tests/resources/imports.test.ts` | list/create/status + FormData body |
| `tests/resources/exports.test.ts` | create/status/download |

Plus existing Phase 4 resource and configuration tests.

---

## Examples

- `examples/contacts.ts`
- `examples/lists.ts`
- `examples/segments.ts`
- `examples/campaigns.ts`
- `examples/imports.ts`
- `examples/exports.ts`

All guard on `MAILERMINE_API_KEY`.

---

## Compilation

| Gate | Result |
| --- | --- |
| Lint | Passed |
| Typecheck (handwritten + generated) | Passed |
| Tests | Passed (22) |
| Build (ESM + CJS + DTS + sourcemaps) | Passed |

---

## Coverage

- Every public Phase 5 method covered with path/method/body assertions.
- Generated types remain internal; public inputs/outputs use `marketing-types.ts`.
- Error mapping continues through `BaseResource.execute`.
- **Result:** 22/22 tests passing (14 files).

---

## Known Issues

1. **Generated import upload** sets `Content-Type: application/json`; the SDK adapter replaces the body with `FormData` and strips `Content-Type` so the multipart boundary is set correctly.
2. **`restoreCampaign`** uses `{ campaignUuid }` in the generated client; the adapter maps the public campaign id accordingly.
3. **Audiences** are intentionally read-only at the top level; create/update/delete go through Lists/Segments.
4. **Top-level Analytics / Events / Webhooks / Suppressions / Delivery Logs** are deferred (not part of Phase 5).
5. Default tests remain mocked; live coverage is via examples + env credentials.

---

## Developer Experience

- CamelCase public inputs with snake_case wire conversion via `toGeneratedRequest`.
- Query params stay camelCase for generated list APIs.
- Rich JSDoc on public methods.
- Lazy getters on `MailerMine` for all marketing resources.

---

## Overall Readiness

Phase 5 completes the marketing audience and campaign surface for the Node SDK with Laravel parity on the methods listed above. The quality gate should be green after `npm run check`.

Next recommended phase: analytics, webhooks, suppressions, and delivery logs.
