# Phase 1 Report — `@mailermine/node` Foundation

**Date:** 2026-07-17  
**Package:** `@mailermine/node@0.1.0`  
**Scope:** Production-ready project architecture only (no OpenAPI client, no HTTP wrapper, no API resources)

---

## Summary

Phase 1 establishes the official MailerMine Node.js / TypeScript SDK repository: dual-format builds, strict TypeScript, linting/formatting, Vitest, GitHub Actions CI, documentation, and an immutable `Configuration` object aligned with the Laravel SDK.

All quality gates pass locally:

| Gate | Command | Result |
| --- | --- | --- |
| Lint | `npm run lint` | Pass |
| Typecheck | `npm run typecheck` | Pass |
| Tests | `npm run test` | Pass (3 tests) |
| Build | `npm run build` | Pass (ESM + CJS + DTS + sourcemaps) |

---

## Package

| Field | Value |
| --- | --- |
| Name | `@mailermine/node` |
| Version | `0.1.0` |
| Description | Official MailerMine SDK for Node.js and TypeScript. |
| License | MIT |
| Engines | Node.js `>=20` |
| Module system | ESM package (`"type": "module"`) with CJS dual export |
| Tree shaking | `"sideEffects": false` |

Published entry points (`package.json` `exports`):

- Types: `./dist/index.d.ts`
- ESM: `./dist/index.js`
- CJS: `./dist/index.cjs`

---

## Tooling & configuration

| Concern | Tool / file |
| --- | --- |
| TypeScript 5 (strict) | `tsconfig.json`, `tsconfig.build.json` |
| Bundler | `tsup` → `tsup.config.ts` |
| Linting | ESLint flat config → `eslint.config.js` |
| Formatting | Prettier → `prettier.config.js` |
| Tests | Vitest → `vitest.config.ts` |
| Editor | `.editorconfig`, `.vscode/settings.json`, `.vscode/extensions.json` |
| Ignore rules | `.gitignore`, `.npmignore`, `.prettierignore` |
| CI | `.github/workflows/ci.yml` (Node 20 & 22) |

### TypeScript DX

Enabled for excellent IntelliSense and safe public APIs:

- `strict: true`
- `declaration` / `declarationMap`
- `noUncheckedIndexedAccess`
- `exactOptionalPropertyTypes`
- `verbatimModuleSyntax`
- `isolatedModules`

### Build outputs

`tsup` produces:

- ESM + CommonJS
- `.d.ts` / `.d.cts` declarations
- Source maps
- Tree-shaking enabled
- Target: `node20`

---

## Folder structure

```text
mailermine-node-sdk/
├── .github/workflows/ci.yml
├── .editorconfig
├── .gitignore
├── .npmignore
├── .prettierignore
├── .vscode/
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── PHASE_1_REPORT.md
├── README.md
├── docs/                 # reserved (placeholder)
├── examples/             # reserved (placeholder)
├── generated/            # reserved for OpenAPI client (do not hand-edit)
├── scripts/              # reserved (placeholder)
├── src/
│   ├── constants.ts
│   ├── index.ts
│   └── config/
│       ├── index.ts      # Configuration class
│       └── types.ts
├── tests/
│   └── configuration.test.ts
├── eslint.config.js
├── package.json
├── prettier.config.js
├── tsconfig.json
├── tsconfig.build.json
├── tsup.config.ts
└── vitest.config.ts
```

---

## Configuration API (Phase 1 surface)

Public exports from `@mailermine/node`:

- `Configuration`
- `ConfigurationOptions` / `ResolvedConfiguration` (types)
- `DEFAULT_BASE_URL`
- `DEFAULT_TIMEOUT_MS`
- `DEFAULT_USER_AGENT`
- `VERSION`

| Option | Default | Notes |
| --- | --- | --- |
| `apiKey` | — (required) | Non-empty string; trimmed |
| `baseUrl` | `https://mailermine.com/api/v1` | Trailing slashes stripped; must be absolute URL |
| `timeout` | `30000` ms | Must be a positive finite number |
| `userAgent` | `mailermine-node/0.1.0` | Non-empty string |

Aligned with the Laravel SDK (`mailermine-php`): same production base URL and 30s timeout semantics (Node uses milliseconds).

Helpers:

- `Configuration.create(apiKey)` — string shorthand
- `Configuration.create(options)` / `new Configuration(options)` — full options
- `config.toJSON()` — plain snapshot

---

## Testing

- Framework: Vitest (Node environment)
- Sample suite: `tests/configuration.test.ts`
- Coverage: defaults, custom options / trailing-slash stripping, empty `apiKey` rejection
- Result: **3/3 passing**

---

## CI (GitHub Actions)

Workflow: `.github/workflows/ci.yml`

Triggers: push/PR to `main` or `master`

Matrix: Node **20** and **22**

Steps:

1. `npm install`
2. `npm run lint`
3. `npm run typecheck`
4. `npm run test`
5. `npm run build`

---

## Documentation

| File | Purpose |
| --- | --- |
| `README.md` | Install, configuration table, repo layout, roadmap |
| `CHANGELOG.md` | Keep a Changelog + SemVer |
| `CONTRIBUTING.md` | Setup, quality scripts, `generated/` policy |
| `LICENSE` | MIT (MailerMine) |

---

## Explicitly out of scope (Phase 1)

- OpenAPI client generation into `generated/`
- HTTP client / request wrapper
- API resources (emails, contacts, campaigns, etc.)
- Runtime dependency on `fetch`/HTTP libraries beyond configuration validation
- npm publish

---

## Suggested next phases

1. **Phase 2** — Generate OpenAPI client into `generated/` (never hand-edit)
2. **Phase 3** — Handwritten HTTP client wrapper using `Configuration` (auth, timeout, user agent, error mapping)
3. **Phase 4** — Typed resource APIs, examples under `examples/`, expanded docs

---

## Verification commands

```bash
npm install
npm run check   # lint + typecheck + test + build
```

Build artifacts confirmed under `dist/`:

- `index.js` / `index.js.map` (ESM)
- `index.cjs` / `index.cjs.map` (CJS)
- `index.d.ts` / `index.d.cts` (types)
