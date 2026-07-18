# Exception Encapsulation Audit

## Overall verdict

**PASS — the public SDK is fully isolated from generated OpenAPI exception
objects and exception implementation details.**

All generated API calls pass through `BaseResource.execute()` and the
central error mapper. Generated `ResponseError`, `RequiredError`, and
`FetchError` instances are converted to fresh SDK exceptions. The generated
error, its response object, and its cause are not attached to the public
exception.

## Files inspected

- `src/internal/error-mapper.ts`
- `src/internal/generated-client.ts`
- `src/internal/marketing-apis.ts`
- `src/internal/deliverability-apis.ts`
- `src/errors/index.ts`
- `src/resources/base.ts`
- Every file under `src/resources/`
- `src/client.ts`
- `src/config/index.ts`
- `src/index.ts`
- `generated/src/runtime.ts`
- Public declarations in `dist/index.d.ts` and `dist/index.d.cts`
- Existing tests under `tests/`

No `ExceptionFactory` class exists in this SDK. Its responsibility is
implemented by the centralized `mapGeneratedError()` function.

## Files changed

- `src/internal/error-mapper.ts`
- `tests/exception-encapsulation.test.ts`
- `EXCEPTION_AUDIT.md`

No resource method, public signature, exported type, OpenAPI specification, or
backend behavior was changed.

## Generated exception leak audit

### Before

- `ResponseError` was mapped to an SDK exception, but the generated exception
  was retained as `Error.cause`.
- `RequiredError` was mapped to `ValidationError`, but was also retained as
  `Error.cause`.
- `FetchError` had no explicit mapping. It reached the generic branch and was
  retained as `Error.cause`, including its nested transport cause.
- Generic runtime errors were wrapped with the original value attached as
  `Error.cause`.

Consequently, inspecting or logging a public SDK error could reveal generated
class names, generated stacks, runtime response objects, or nested transport
errors.

### After

- `ResponseError` is reduced to status, sanitized message, sanitized response
  body, validation errors, and rate-limit metadata before a fresh SDK
  exception is created.
- `RequiredError` is replaced with a fresh `ValidationError`. Generated
  request-body parameter names and generated method names are discarded.
  Only simple public parameter names (for example `project`) are retained.
- `FetchError` is reduced to a sanitized transport message before a fresh
  status-`0` `ApiError` is created.
- Unknown thrown values are converted to a fresh `ApiError` without retaining
  the original value.
- Response bodies are copied into plain JSON-compatible values. Error
  instances, custom prototypes, cycles, and generated identifiers are not
  exposed.
- The mapper has a final isolation fallback, so failures while reading or
  sanitizing an error cannot make the original runtime exception escape.

Request IDs and API error codes remain available when supplied in the
sanitized response body. `Retry-After` is extracted from headers into
`RateLimitError.retryAfter`. Raw `Response` and `Headers` objects are never
attached.

## Error.cause audit

SDK errors created by request failure mapping have no own `cause` property.
Generated exceptions and nested transport causes are never passed to an SDK
error constructor.

The existing public error constructors still accept the standard
`ErrorOptions` argument for compatibility. The SDK's own mapping path never
uses it, so this audit did not change the public API.

## Stack trace audit

Mapped errors receive a new SDK stack at the mapping boundary. Generated
stacks are neither reused nor linked through `cause`.

Regression tests inspect errors using Node's `util.inspect`, which is the
representation used by `console.log(error)`, and inspect `error.stack`.
Neither representation contains:

- `ResponseError`
- `RequiredError`
- `FetchError`
- `OpenAPI`
- `generated/src/runtime`

## Public exception hierarchy

```text
Error
└── ApiError
    ├── AuthenticationError
    ├── ValidationError
    ├── PlanError
    ├── NotFoundError
    └── RateLimitError
```

Runtime export inspection confirms these are the only public exports whose
names end in `Error`. Generated runtime classes are absent from the public
declaration files and root module exports.

HTTP mapping remains:

- `401` → `AuthenticationError`
- `403` → `PlanError`
- `404` → `NotFoundError`
- `422` → `ValidationError`
- `429` → `RateLimitError`
- Other HTTP failures → `ApiError`
- Transport failures → `ApiError` with status `0`

## Regression verification

- `npm run build` — passed
- `npm test` — passed: 17 files, 31 tests
- `npm run lint` — passed
- `npm run typecheck` — passed, including generated-client typecheck
- Public runtime export check — passed: no generated error exports
- Public declaration scan — passed: no generated error types or runtime paths

## Remaining leaks

None found.

Generated clients and runtime classes remain private implementation
dependencies inside internal adapters, as required for API operation. They are
not part of the public exports, public declarations, thrown public errors,
causes, bodies, or observable error stacks.
