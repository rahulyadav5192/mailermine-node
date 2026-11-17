# MailerMine Node SDK: notes for Claude

This SDK mirrors the MailerMine API defined in `rahulyadav5192/resend`. Any
change that comes from an API change must follow the shared runbook:
**`docs/SDK_SYNC.md` in the resend repo** (https://github.com/rahulyadav5192/resend/blob/main/docs/SDK_SYNC.md).
Its public method list is the parity reference for the Python SDK (`tests/test_parity.py` there).

## Layout
- `generated/`: openapi-generator **7.23.0** `typescript-fetch` output. Never edit it by hand.
- Hand-written: `src/internal/generated-client.ts` + `marketing-apis.ts` + `deliverability-apis.ts`
  (adapters), `src/internal/http.ts` (retries, idempotency, rate limits),
  `src/internal/error-mapper.ts`, `src/errors/index.ts`, `src/resources/*` (including hand-written
  type unions such as webhook event names in `deliverability-types.ts`), `src/support/*`.

## Regenerate from an unreleased spec
`npm run generate` downloads the *production* spec. For local changes:
```bash
java -jar openapi-generator-cli-7.23.0.jar generate --input-spec <resend>/public/openapi.json \
  --generator-name typescript-fetch --output generated \
  --additional-properties supportsES6=true,typescriptThreePlus=true,useSingleRequestParameter=true,prefixParameterInterfaces=true,withoutRuntimeChecks=true,npmName=@mailermine/generated,npmVersion=1.0.0
npx --no-install prettier --write "generated/**/*.ts"
```

## Check
`npm run lint && npm run typecheck && npx vitest run && npm run build`

Test notes: `createMockClient` defaults to `maxRetries: 0`. The encapsulation test rejects any stack
frame matching `ResponseError|RequiredError|FetchError|OpenAPI`, function names included.

## Release
Bump `package.json`, both root versions in `package-lock.json`, `src/constants.ts` `VERSION`, and
`CHANGELOG.md`. Don't commit packed `*.tgz` files.
