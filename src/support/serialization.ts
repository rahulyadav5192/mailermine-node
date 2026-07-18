import type { JsonObject, JsonValue } from '../types/json.js';
import { Collection, Pagination, Response } from './responses.js';

type UnknownRecord = Record<string, unknown>;

/**
 * Convert a plain SDK request object into the wire format expected by the API.
 *
 * Top-level keys and attachment object keys are snake_cased. Nested maps such as
 * `metadata`, `variables`, and `headers` are left untouched so developer-defined
 * keys remain intact.
 */
export function toGeneratedRequest(value: object): object {
  return Object.fromEntries(
    Object.entries(value).flatMap(([key, item]) => {
      if (item === undefined) {
        return [];
      }

      const snakeKey = toSnakeCase(key);
      if (key === 'attachments' && Array.isArray(item)) {
        return [
          [
            snakeKey,
            item.map((attachment) =>
              isRecord(attachment) ? shallowSnakeCase(attachment) : attachment,
            ),
          ],
        ];
      }

      return [[snakeKey, item]];
    }),
  );
}

export function toResponse<T>(value: unknown): Response<T> {
  const envelope = toCamelRecord(value);
  return new Response<T>(
    normalizeAs<T>(envelope['data']),
    asString(envelope['message'], ''),
    asBoolean(envelope['success'], true),
  );
}

export function toCollection<T>(value: unknown): Collection<T> {
  const envelope = toCamelRecord(value);
  const data = Array.isArray(envelope['data'])
    ? envelope['data'].map((item) => normalizeAs<T>(item))
    : [];
  const meta = toCamelRecord(envelope['meta']);

  return new Collection<T>(
    data,
    new Pagination({
      currentPage: asNumber(meta['currentPage'], 1),
      perPage: asNumber(meta['perPage'], data.length),
      total: asNumber(meta['total'], data.length),
      lastPage: asNumber(meta['lastPage'], 1),
    }),
    asString(envelope['message'], ''),
    asBoolean(envelope['success'], true),
  );
}

export function normalizeAs<T>(value: unknown): T {
  return camelCaseDeep(value) as T;
}

export function toCamelRecord(value: unknown): UnknownRecord {
  const normalized = camelCaseDeep(value);
  return isRecord(normalized) ? normalized : {};
}

export function toJsonObject(value: unknown): JsonObject {
  const normalized = camelCaseDeep(value);
  return isRecord(normalized) ? (normalized as JsonObject) : {};
}

function shallowSnakeCase(value: UnknownRecord): UnknownRecord {
  return Object.fromEntries(
    Object.entries(value).flatMap(([key, item]) =>
      item === undefined ? [] : [[toSnakeCase(key), item]],
    ),
  );
}

function camelCaseDeep(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(camelCaseDeep);
  }
  if (!isRecord(value)) {
    return value;
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, item]) => [toCamelCase(key), camelCaseDeep(item)]),
  );
}

function toSnakeCase(value: string): string {
  return value
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .replace(/[\s-]+/g, '_')
    .toLowerCase();
}

function toCamelCase(value: string): string {
  return value.replace(/_([a-z0-9])/g, (_, letter: string) => letter.toUpperCase());
}

function isRecord(value: unknown): value is UnknownRecord {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function asString(value: unknown, fallback: string): string {
  return typeof value === 'string' ? value : fallback;
}

function asNumber(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

function asBoolean(value: unknown, fallback: boolean): boolean {
  return typeof value === 'boolean' ? value : fallback;
}

export function isJsonValue(value: unknown): value is JsonValue {
  if (value === null || ['string', 'number', 'boolean'].includes(typeof value)) {
    return true;
  }
  if (Array.isArray(value)) {
    return value.every(isJsonValue);
  }
  return isRecord(value) && Object.values(value).every(isJsonValue);
}
