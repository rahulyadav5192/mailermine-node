import SwaggerParser from '@apidevtools/swagger-parser';
import { execFileSync, spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import {
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { basename, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const OPENAPI_URL = 'https://mailermine.com/openapi.json';
const GENERATOR_VERSION = '7.23.0';
const GENERATOR_NAME = 'typescript-fetch';
const GENERATOR_SHA256 = 'cb087e40001e31eb08ef6140dd5de10938dbeb89016a1fe0481eaa25cd569026';
const GENERATOR_URL =
  `https://repo.maven.apache.org/maven2/org/openapitools/openapi-generator-cli/` +
  `${GENERATOR_VERSION}/openapi-generator-cli-${GENERATOR_VERSION}.jar`;

const repositoryRoot = fileURLToPath(new URL('..', import.meta.url));
const specPath = join(repositoryRoot, 'openapi.json');
const generatedPath = join(repositoryRoot, 'generated');
const reportPath = join(repositoryRoot, 'PHASE_2_REPORT.md');
const generatorPath = join(
  repositoryRoot,
  '.cache',
  'openapi-generator',
  `openapi-generator-cli-${GENERATOR_VERSION}.jar`,
);
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const npxCommand = process.platform === 'win32' ? 'npx.cmd' : 'npx';

interface OpenApiDocument {
  openapi?: string;
  swagger?: string;
  info?: {
    title?: string;
    version?: string;
  };
  paths?: Record<string, unknown>;
}

interface CommandResult {
  output: string;
  warnings: string[];
}

const startedAt = performance.now();
const allWarnings: string[] = [];

try {
  printStep(1, 'Downloading the latest OpenAPI specification');
  await downloadSpecification();

  printStep(2, 'Validating the OpenAPI specification');
  const specification = (await SwaggerParser.validate(specPath)) as OpenApiDocument;
  const specificationVersion = specification.openapi ?? specification.swagger ?? 'unknown';
  const apiVersion = specification.info?.version ?? 'unknown';
  const pathCount = Object.keys(specification.paths ?? {}).length;
  console.log(
    `Validated ${specification.info?.title ?? 'OpenAPI specification'} ${apiVersion} ` +
      `(OpenAPI ${specificationVersion}, ${pathCount} paths).`,
  );

  printStep(3, 'Removing the previous generated client');
  rmSync(generatedPath, { recursive: true, force: true });

  printStep(4, `Generating ${GENERATOR_NAME} client with OpenAPI Generator ${GENERATOR_VERSION}`);
  assertJavaAvailable();
  await ensureGenerator();
  const generation = run('java', [
    '-jar',
    generatorPath,
    'generate',
    '--input-spec',
    specPath,
    '--generator-name',
    GENERATOR_NAME,
    '--output',
    generatedPath,
    '--additional-properties',
    [
      'supportsES6=true',
      'typescriptThreePlus=true',
      'useSingleRequestParameter=true',
      'prefixParameterInterfaces=true',
      'withoutRuntimeChecks=true',
      'npmName=@mailermine/generated',
      `npmVersion=${apiVersion}`,
    ].join(','),
  ]);
  allWarnings.push(...generation.warnings);

  printStep(5, 'Formatting generated TypeScript');
  const formatting = run(npxCommand, [
    '--no-install',
    'prettier',
    '--write',
    'generated/**/*.ts',
  ]);
  allWarnings.push(...formatting.warnings);

  printStep(6, 'Compiling generated APIs and building the SDK');
  const generatedTypecheck = run(npmCommand, ['run', 'typecheck:generated']);
  const sdkBuild = run(npmCommand, ['run', 'build']);
  allWarnings.push(...generatedTypecheck.warnings, ...sdkBuild.warnings);

  const files = listFiles(generatedPath);
  const apiFiles = listTypeScriptModules(join(generatedPath, 'src', 'apis'));
  const modelFiles = listGeneratedModels(join(generatedPath, 'src', 'models', 'index.ts'));
  const elapsedSeconds = (performance.now() - startedAt) / 1_000;

  writeReport({
    apiVersion,
    specificationVersion,
    pathCount,
    apiFiles,
    modelFiles,
    files,
    elapsedSeconds,
    warnings: unique(allWarnings),
  });

  printStep(7, 'Generation complete');
  console.log('');
  console.log(`  Spec version:    ${apiVersion} (OpenAPI ${specificationVersion})`);
  console.log(`  Generator:       OpenAPI Generator ${GENERATOR_VERSION} / ${GENERATOR_NAME}`);
  console.log(`  Generated APIs:  ${apiFiles.length}`);
  console.log(`  Generated models:${modelFiles.length.toString().padStart(3)}`);
  console.log(`  Files created:   ${files.length}`);
  console.log(`  Generation time: ${elapsedSeconds.toFixed(2)}s`);
  console.log(`  Compilation:     passed`);
  console.log(`  Report:          ${relative(repositoryRoot, reportPath)}`);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`\nGeneration failed: ${message}`);
  process.exitCode = 1;
}

async function downloadSpecification(): Promise<void> {
  const response = await fetch(OPENAPI_URL, {
    headers: {
      Accept: 'application/json',
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      'User-Agent': '@mailermine/node OpenAPI generator',
    },
    signal: AbortSignal.timeout(60_000),
  });

  if (!response.ok) {
    throw new Error(`could not download ${OPENAPI_URL}: HTTP ${response.status}`);
  }

  const body = await response.text();
  try {
    JSON.parse(body);
  } catch {
    throw new Error(`${OPENAPI_URL} did not return valid JSON`);
  }

  writeFileSync(specPath, `${body.trim()}\n`, 'utf8');
  console.log(`Downloaded ${Buffer.byteLength(body).toLocaleString()} bytes to openapi.json.`);
}

async function ensureGenerator(): Promise<void> {
  if (exists(generatorPath) && sha256(generatorPath) === GENERATOR_SHA256) {
    return;
  }

  console.log(`Downloading OpenAPI Generator ${GENERATOR_VERSION} from Maven Central.`);
  const response = await fetch(GENERATOR_URL, {
    headers: { 'User-Agent': '@mailermine/node OpenAPI generator' },
    signal: AbortSignal.timeout(120_000),
  });
  if (!response.ok) {
    throw new Error(`could not download OpenAPI Generator: HTTP ${response.status}`);
  }

  mkdirSync(resolve(generatorPath, '..'), { recursive: true });
  writeFileSync(generatorPath, Buffer.from(await response.arrayBuffer()));

  const actualChecksum = sha256(generatorPath);
  if (actualChecksum !== GENERATOR_SHA256) {
    rmSync(generatorPath, { force: true });
    throw new Error(
      `OpenAPI Generator checksum mismatch: expected ${GENERATOR_SHA256}, got ${actualChecksum}`,
    );
  }
}

function assertJavaAvailable(): void {
  try {
    execFileSync('java', ['-version'], { stdio: 'ignore' });
  } catch {
    throw new Error(
      'OpenAPI Generator requires Java. Install a supported JRE (Java 11 or newer) and retry.',
    );
  }
}

function sha256(path: string): string {
  return createHash('sha256').update(readFileSync(path)).digest('hex');
}

function run(command: string, args: string[]): CommandResult {
  const result = spawnSync(command, args, {
    cwd: repositoryRoot,
    encoding: 'utf8',
    env: { ...process.env, FORCE_COLOR: '0' },
    maxBuffer: 50 * 1024 * 1024,
  });

  const output = [result.stdout, result.stderr].filter(Boolean).join('\n').trim();
  if (output !== '') {
    console.log(output);
  }

  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(' ')} exited with status ${result.status ?? 'unknown'}`);
  }

  const warnings = output
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => /\bwarn(?:ing)?\b/i.test(line));

  return { output, warnings };
}

function listFiles(directory: string): string[] {
  if (!exists(directory)) {
    return [];
  }

  return readdirSync(directory)
    .flatMap((entry) => {
      const fullPath = join(directory, entry);
      return statSync(fullPath).isDirectory() ? listFiles(fullPath) : [fullPath];
    })
    .sort();
}

function listTypeScriptModules(directory: string): string[] {
  return listFiles(directory)
    .filter((file) => file.endsWith('.ts') && basename(file) !== 'index.ts')
    .map((file) => basename(file, '.ts'))
    .sort();
}

function listGeneratedModels(indexPath: string): string[] {
  const source = readFileSync(indexPath, 'utf8');
  const interfaces = [...source.matchAll(/^export interface ([A-Za-z_$][\w$]*)/gm)].flatMap(
    (match) => (match[1] === undefined ? [] : [match[1]]),
  );
  const aliases = [...source.matchAll(/^export type ([A-Za-z_$][\w$]*)/gm)]
    .flatMap((match) => (match[1] === undefined ? [] : [match[1]]))
    .filter((name) => !name.endsWith('Enum'));

  return unique([...interfaces, ...aliases]).sort();
}

function exists(path: string): boolean {
  try {
    statSync(path);
    return true;
  } catch {
    return false;
  }
}

function unique(values: string[]): string[] {
  return [...new Set(values)];
}

function writeReport(input: {
  apiVersion: string;
  specificationVersion: string;
  pathCount: number;
  apiFiles: string[];
  modelFiles: string[];
  files: string[];
  elapsedSeconds: number;
  warnings: string[];
}): void {
  const warningLines =
    input.warnings.length === 0
      ? '- None.'
      : input.warnings.map((warning) => `- ${escapeMarkdown(warning)}`).join('\n');
  const apiLines = input.apiFiles.map((api) => `- \`${api}\``).join('\n');

  const report = `# Phase 2 Report — OpenAPI Client Generation

**Generated:** ${new Date().toISOString()}  
**Source:** ${OPENAPI_URL}  
**Overall Success:** Yes

## Results

| Item | Result |
| --- | --- |
| Downloaded spec version | ${input.apiVersion} |
| OpenAPI document version | ${input.specificationVersion} |
| Paths | ${input.pathCount} |
| Generator | OpenAPI Generator ${GENERATOR_VERSION} |
| Generator template | \`${GENERATOR_NAME}\` |
| Generated APIs | ${input.apiFiles.length} |
| Generated models | ${input.modelFiles.length} |
| Files created | ${input.files.length} |
| Generated compilation | Passed |
| SDK build | Passed |
| Generation time | ${input.elapsedSeconds.toFixed(2)} seconds |

## Generated APIs

${apiLines}

## Generated Models

${input.modelFiles.length} model declarations were generated in
\`generated/src/models/index.ts\`.

${input.modelFiles.map((model) => `- \`${model}\``).join('\n')}

## Compilation Result

\`npm run typecheck:generated\` and \`npm run build\` completed successfully. The
compile-only smoke test in \`scripts/test-generated.ts\` instantiates representative
generated API classes.

## Warnings

${warningLines}

## Reproducibility

The checked-out \`openapi.json\` is not used as a source of truth and is ignored by
Git. Every \`npm run generate\` execution downloads and validates the current document
from ${OPENAPI_URL} before deleting and recreating \`generated/\`.

\`\`\`bash
npm install
npm run generate
npm run build
\`\`\`

Generated files must never be edited manually.
`;

  mkdirSync(resolve(reportPath, '..'), { recursive: true });
  writeFileSync(reportPath, report, 'utf8');
}

function escapeMarkdown(value: string): string {
  return value.replaceAll('|', '\\|');
}

function printStep(step: number, message: string): void {
  console.log(`\n[${step}/7] ${message}`);
}
