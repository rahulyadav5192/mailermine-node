import {
  FetchError,
  RequiredError,
  ResponseError,
} from '../../generated/src/runtime.js';
import {
  ApiError,
  AuthenticationError,
  NotFoundError,
  PlanError,
  RateLimitError,
  ValidationError,
} from '../errors/index.js';
import { toCamelRecord } from '../support/serialization.js';

export async function mapGeneratedError(error: unknown): Promise<ApiError> {
  try {
    return await mapError(error);
  } catch {
    return new ApiError('MailerMine API request failed', 0);
  }
}

async function mapError(error: unknown): Promise<ApiError> {
  if (error instanceof ResponseError) {
    const body = sanitizeValue(await readErrorBody(error.response));
    const record = toCamelRecord(body);
    const message = getMessage(
      record,
      error.response.statusText || 'MailerMine API request failed',
    );
    const status = error.response.status;

    switch (status) {
      case 401:
        return new AuthenticationError(message, status, body);
      case 403:
        return new PlanError(message, status, body);
      case 404:
        return new NotFoundError(message, status, body);
      case 422:
        return new ValidationError(
          message,
          status,
          getValidationErrors(record['errors']),
          body,
        );
      case 429:
        return new RateLimitError(
          message,
          status,
          parseRetryAfter(error.response.headers.get('retry-after')),
          body,
        );
      default:
        return new ApiError(message, status, body);
    }
  }

  if (error instanceof RequiredError) {
    const field = sanitizeRequiredField(error.field);
    const message = field
      ? `The ${field} field is required.`
      : 'A required field is missing.';
    return new ValidationError(
      message,
      422,
      field ? { [field]: [message] } : {},
      undefined,
    );
  }

  if (error instanceof FetchError) {
    return new ApiError(getTransportMessage(error.cause), 0);
  }

  if (error instanceof ApiError) {
    return cloneSdkError(error);
  }

  const message =
    error instanceof Error
      ? sanitizeText(error.message)
      : 'Unknown MailerMine SDK error';
  return new ApiError(message, 0);
}

async function readErrorBody(response: globalThis.Response): Promise<unknown> {
  try {
    const clone = response.clone();
    return await clone.json();
  } catch {
    try {
      return await response.text();
    } catch {
      return undefined;
    }
  }
}

function getMessage(record: Record<string, unknown>, fallback: string): string {
  const value = record['message'] ?? record['error'];
  return sanitizeText(
    typeof value === 'string' && value !== '' ? value : fallback,
  );
}

function getValidationErrors(value: unknown): Readonly<Record<string, readonly string[]>> {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(value).map(([field, messages]) => [
      field,
      Array.isArray(messages)
        ? messages
            .filter((message): message is string => typeof message === 'string')
            .map(sanitizeText)
        : [sanitizeText(String(messages))],
    ]),
  );
}

function parseRetryAfter(value: string | null): number | null {
  if (value === null) {
    return null;
  }
  const seconds = Number.parseInt(value, 10);
  return Number.isFinite(seconds) ? seconds : null;
}

function getTransportMessage(cause: Error): string {
  const message = sanitizeText(cause.message);
  return message === ''
    ? 'Unable to connect to the MailerMine API.'
    : message;
}

function cloneSdkError(error: ApiError): ApiError {
  const message = sanitizeText(error.message);
  const body = sanitizeValue(error.body);

  if (error instanceof ValidationError) {
    return new ValidationError(
      message,
      error.status,
      getValidationErrors(error.errors),
      body,
    );
  }
  if (error instanceof RateLimitError) {
    return new RateLimitError(
      message,
      error.status,
      error.retryAfter,
      body,
    );
  }
  if (error instanceof AuthenticationError) {
    return new AuthenticationError(message, error.status, body);
  }
  if (error instanceof PlanError) {
    return new PlanError(message, error.status, body);
  }
  if (error instanceof NotFoundError) {
    return new NotFoundError(message, error.status, body);
  }
  return new ApiError(message, error.status, body);
}

const GENERATED_DETAIL_PATTERN =
  /\b(?:ResponseError|RequiredError|FetchError)\b|(?:@openapitools|OpenAPI(?:\\Client)?)|(?:generated[\\/]+src[\\/]+runtime(?:\.[cm]?[jt]s)?)/gi;

const GENERATED_REQUIRED_FIELD_PATTERN =
  /(?:Request|Response|Body|Params?)$|^(?:request|response|body|params?)$/i;

function sanitizeText(value: string): string {
  return value
    .replace(GENERATED_DETAIL_PATTERN, 'MailerMine API error')
    .trim();
}

function sanitizeRequiredField(field: string): string | undefined {
  const sanitized = sanitizeText(field);
  if (sanitized === '' || GENERATED_REQUIRED_FIELD_PATTERN.test(sanitized)) {
    return undefined;
  }

  return sanitized;
}

function sanitizeValue(value: unknown, seen = new WeakSet<object>()): unknown {
  if (
    value === null ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  ) {
    return value;
  }

  if (typeof value === 'string') {
    return sanitizeText(value);
  }

  if (typeof value !== 'object') {
    return undefined;
  }

  if (value instanceof Error) {
    return sanitizeText(value.message);
  }

  if (seen.has(value)) {
    return undefined;
  }
  seen.add(value);

  if (Array.isArray(value)) {
    return value.map((item) => sanitizeValue(item, seen));
  }

  const prototype = Object.getPrototypeOf(value);
  if (prototype !== Object.prototype && prototype !== null) {
    return undefined;
  }

  return Object.fromEntries(
    Object.entries(value).flatMap(([key, item]) => {
      const sanitized = sanitizeValue(item, seen);
      return sanitized === undefined
        ? []
        : [[sanitizeText(key), sanitized]];
    }),
  );
}
