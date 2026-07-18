# Contributing

Thanks for your interest in improving the MailerMine Node.js SDK. This document explains how to set up your environment and the standards we hold code to.

## Important: the `generated/` directory

The `generated/` directory is reserved for the OpenAPI-generated client and must **not** be edited by hand. It will be regenerated from the MailerMine OpenAPI specification. Pull requests that modify files under `generated/` will not be accepted. All handwritten SDK behaviour lives under `src/`.

## Getting started

```bash
git clone https://github.com/mailermine/mailermine-node-sdk.git
cd mailermine-node-sdk
npm install
```

## Development workflow

```bash
npm run lint         # ESLint
npm run lint:fix    # Auto-fix lint issues where possible
npm run format       # Prettier write
npm run format:check # Prettier check
npm run typecheck    # TypeScript --noEmit
npm run test         # Vitest
npm run build        # tsup (ESM + CJS + d.ts + sourcemaps)
npm run check        # lint + typecheck + test + build
```

Before opening a pull request, make sure `npm run check` passes.

## Standards

- **Node.js:** 20.19+
- **TypeScript:** Strict mode. Prefer explicit public types and `import type` for type-only imports.
- **Code style:** ESLint + Prettier. Do not fight the formatter.
- **Tests:** New features and bug fixes must include tests under `tests/`. Prefer Vitest unit tests; mock network I/O when the HTTP layer exists.
- **Backwards compatibility:** Follow [Semantic Versioning](https://semver.org). Avoid breaking public APIs outside of a major release.
- **Scope:** Do not implement API resources or commit generated OpenAPI output unless that work is explicitly in scope for the PR.

## Commit messages & pull requests

- Write clear, descriptive commit messages.
- Reference related issues (for example `Fixes #123`).
- Keep pull requests focused on a single change.
- Ensure CI is green on Node 20 and Node 22.

## Reporting bugs & requesting features

Open an issue on the repository. For security-sensitive reports, email the MailerMine security contact instead of filing a public issue.
