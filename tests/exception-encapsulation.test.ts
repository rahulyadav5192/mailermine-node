import { inspect } from 'node:util';

import { describe, expect, it } from 'vitest';

import {
  ApiError,
  MailerMine,
  ValidationError,
} from '../src/index.js';
import { createMockClient, jsonResponse } from './helpers/mock-api.js';

const GENERATED_NAMES =
  /ResponseError|RequiredError|FetchError|OpenAPI|generated[\\/]src[\\/]runtime/i;

describe('generated exception encapsulation', () => {
  it('maps HTTP failures to fresh SDK errors without generated causes or details', async () => {
    const { client } = createMockClient([
      jsonResponse(500, {
        message: 'ResponseError from OpenAPI runtime',
        code: 'server_failure',
        request_id: 'req-123',
        nested: {
          detail: 'FetchError at generated/src/runtime.ts',
        },
      }),
    ]);

    const error = await capture(() => client.projects.get('project-1'));

    expect(error).toBeInstanceOf(ApiError);
    expect((error as ApiError).status).toBe(500);
    expect((error as ApiError).body).toMatchObject({
      code: 'server_failure',
      request_id: 'req-123',
    });
    expectIsolated(error);
  });

  it('maps generated required-parameter failures to ValidationError', async () => {
    const { client } = createMockClient([]);

    const error = await capture(() =>
      client.projects.get(undefined as unknown as string),
    );

    expect(error).toBeInstanceOf(ValidationError);
    expect((error as ValidationError).status).toBe(422);
    expect((error as ValidationError).errors).toEqual({
      project: ['The project field is required.'],
    });
    expect(error.message).toBe('The project field is required.');
    expect(error.message).not.toMatch(/when calling|null or undefined/i);
    expectIsolated(error);
  });

  it('does not expose generated request-body parameter names from RequiredError', async () => {
    const { RequiredError } = await import('../generated/src/runtime.js');
    const { mapGeneratedError } = await import(
      '../src/internal/error-mapper.js'
    );

    const error = await mapGeneratedError(
      new RequiredError(
        'createWebhookRequest',
        'Required parameter "createWebhookRequest" was null or undefined when calling createWebhook().',
      ),
    );

    expect(error).toBeInstanceOf(ValidationError);
    expect(error.message).toBe('A required field is missing.');
    expect((error as ValidationError).errors).toEqual({});
    expect(inspect(error, { depth: null })).not.toMatch(
      /createWebhookRequest|createWebhook\(\)/i,
    );
    expectIsolated(error);
  });

  it('maps generated transport failures without retaining FetchError or its cause', async () => {
    const client = new MailerMine({
      apiKey: 'test-api-key',
      baseUrl: 'https://api.example.test/api/v1',
      fetchApi: async () => {
        throw new Error('socket closed after FetchError in OpenAPI transport');
      },
    });

    const error = await capture(() => client.projects.list());

    expect(error).toBeInstanceOf(ApiError);
    expect((error as ApiError).status).toBe(0);
    expect(error.message).toContain('socket closed');
    expectIsolated(error);
  });
});

async function capture(operation: () => Promise<unknown>): Promise<Error> {
  try {
    await operation();
  } catch (error) {
    expect(error).toBeInstanceOf(Error);
    return error as Error;
  }
  throw new Error('Expected operation to fail.');
}

function expectIsolated(error: Error): void {
  const output = inspect(error, { depth: null });
  expect(output).not.toMatch(GENERATED_NAMES);
  expect(error.stack ?? '').not.toMatch(GENERATED_NAMES);
  expect(Object.prototype.hasOwnProperty.call(error, 'cause')).toBe(false);
  expect((error as Error & { cause?: unknown }).cause).toBeUndefined();
}
