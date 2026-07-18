# Phase 6 — Laravel Parity Report

## Outcome

The Node SDK now exposes the complete Laravel SDK resource and method surface.
All resources remain handwritten wrappers over generated OpenAPI APIs; generated
models are not exported through the public SDK.

**Publication status: DO NOT PUBLISH.** Public-surface parity is complete, but
the full live RC suite still contains two non-parity integration blockers
described below.

## Resources Added

| Accessor | Resource class | Generated APIs |
| --- | --- | --- |
| `mm.analytics` | `Analytics` | `AnalyticsApi` plus campaign/event delegation |
| `mm.events` | `Events` | `EventsApi`, `MessagesApi` |
| `mm.messages` | `Messages` | `MessagesApi` |
| `mm.webhooks` | `Webhooks` | `WebhooksApi` |
| `mm.suppressions` | `Suppressions` | `SuppressionsApi` |

All five accessors are lazily instantiated and cached by `MailerMine`.

## Methods Added

### New resources

- `analytics`: `overview`, `deliveries`, `opens`, `clicks`, `bounces`,
  `complaints`, `unsubscribes`, `usage`, `activity`, `messages`, `engagement`,
  `campaigns`, `domains`, `projects`, `providers`
- `events`: `list`, `get`, `timeline`, `history`, `message`
- `messages`: `list`, `get`, `search`, `filter`, `events`, `timeline`
- `webhooks`: `create`, `list`, `get`, `update`, `delete`, `test`,
  `rotateSecret`, `enable`, `disable`, `deliveries`, `delivery`, `logs`,
  `failures`, `replay`, `retry`, plus static local `verify`
- `suppressions`: `list`, `get`, `add`, `remove`, `restore`, `check`

### Existing resources completed

- `apiKeys`: `rotate`, `reveal`
- `templates`: `test`
- `audiences`: `create`, `update`, `delete`, `contacts`, `addContacts`,
  `removeContacts`
- `imports`: `configure`, `start`, `cancel`
- `campaigns`: `markReady`, `send`, `schedule`, `reschedule`, `unschedule`,
  `sendNow`, `cancelSchedule`, `pause`, `resume`, `cancel`, `addAudience`,
  `removeAudience`

Total additions: **72 public methods** across new and existing resources.

## Public SDK Surface

`MailerMine` exposes these 18 lazy resource accessors:

1. `emails`
2. `projects`
3. `apiKeys`
4. `domains`
5. `templates`
6. `contacts`
7. `lists`
8. `segments`
9. `tags`
10. `audiences`
11. `campaigns`
12. `imports`
13. `exports`
14. `analytics`
15. `events`
16. `messages`
17. `webhooks`
18. `suppressions`

The built declaration files contain typed getters and resource classes for all
five Phase 6 accessors, so TypeScript autocomplete resolves:

```ts
mm.analytics
mm.events
mm.messages
mm.webhooks
mm.suppressions
```

`Collection<T>` now supports iteration, `.items`, `.data`, `.length`, numeric
index access, pagination, and is also a `Response<readonly T[]>`. This preserves
Laravel-style collection ergonomics while remaining compatible with the RC
response-envelope checks.

## Laravel Parity

| Metric | Result |
| --- | --- |
| Resource accessors | 18 / 18 |
| Public resource methods | 173 / 173 |
| Accessor parity | 100% |
| Method parity | 100% |
| Overall public-surface parity | **100%** |

Naming follows TypeScript conventions (`camelCase`) while preserving the same
operations and behavior as the Laravel SDK.

## Verification

### SDK validation

- `npm run lint`: passed
- `npm run typecheck`: passed
- `npm run test`: **28 / 28 passed**
- `npm run build`: passed for ESM, CommonJS, and declaration output
- Full `npm run check`: passed

### Unchanged RC QA project

- Customer-style `npm pack` tarball install: passed
- Non-live RC tests: **29 passed, 0 failed, 15 skipped**
- Previously failing accessor tests: **5 / 5 passed**
- TypeScript customer compilation: passed

### Live API verification

Read-only production smoke checks passed for:

- `mm.analytics.overview()`
- `mm.events.list()`
- `mm.messages.list()`
- `mm.webhooks.list()`
- `mm.suppressions.list()`

Additional corrected live flows passed for audiences, imports, and email
message/event collection handling.

## Remaining Gaps

There are **no remaining Laravel public-surface gaps**.

Two unchanged live RC scenarios remain red:

1. Campaign preview returns HTTP 422 when the QA-created campaign has no
   renderable template/content. This is valid API validation, not a missing SDK
   method.
2. The tag QA scenario expects a `description` field, while the current
   OpenAPI `CreateTagRequest`/`UpdateTagRequest` and Laravel SDK support
   `name`/`color`, not `description`.

The QA suite was not modified. These scenarios require API/OpenAPI alignment or
QA fixture correction before the complete RC run can be green.

## Overall Readiness

**Laravel parity: Complete (100%).**

**Release readiness: Not Ready — do not publish yet.**

The implementation, build, package types, accessor autocomplete, and Phase 6
live read operations are ready. Publication should remain blocked until the two
remaining live RC scenarios are resolved and the complete unchanged QA suite
passes.
