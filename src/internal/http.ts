import type { ResolvedConfiguration } from '../config/types.js';
import { RateLimitInfo } from '../support/rate-limit.js';

/** Mutable per-client transport state shared with the MailerMine client. */
export interface TransportState {
  lastRateLimit: RateLimitInfo | null;
}

const IDEMPOTENCY_HEADER = 'Idempotency-Key';
const SAFE_METHODS = new Set(['GET', 'HEAD', 'OPTIONS', 'PUT', 'DELETE']);
const RETRYABLE_STATUSES = new Set([502, 503, 504]);

/**
 * Wraps fetch with:
 * - a per-attempt timeout,
 * - an automatic `Idempotency-Key` on `POST /emails` (reused across retries),
 * - retries for 429 / 502 / 503 / 504 and network errors, honouring
 *   `Retry-After` and backing off exponentially with jitter. Non-idempotent
 *   requests (POST/PATCH without an Idempotency-Key) are only retried on 429,
 *   which the API returns before doing any work,
 * - capture of the latest `X-RateLimit-*` headers.
 */
export function createResilientFetch(
  configuration: ResolvedConfiguration,
  state: TransportState,
): typeof fetch {
  const baseFetch = configuration.fetchApi ?? globalThis.fetch.bind(globalThis);

  return async (input, init) => {
    const method = (init?.method ?? 'GET').toUpperCase();
    const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;
    const headers = new Headers(init?.headers);

    if (
      method === 'POST' &&
      !headers.has(IDEMPOTENCY_HEADER) &&
      /\/emails\/?$/.test(new URL(url).pathname)
    ) {
      headers.set(IDEMPOTENCY_HEADER, globalThis.crypto.randomUUID());
    }

    const replayable = SAFE_METHODS.has(method) || headers.has(IDEMPOTENCY_HEADER);
    const callerSignal = init?.signal ?? undefined;

    for (let attempt = 0; ; attempt++) {
      const timeoutSignal = AbortSignal.timeout(configuration.timeout);
      const signal = callerSignal ? AbortSignal.any([callerSignal, timeoutSignal]) : timeoutSignal;

      let response: globalThis.Response;
      try {
        response = await baseFetch(input, { ...init, headers, signal });
      } catch (error) {
        const callerAborted = callerSignal?.aborted === true;
        if (callerAborted || !replayable || attempt >= configuration.maxRetries) {
          throw error;
        }
        await sleep(backoff(attempt, configuration.maxRetryDelay), callerSignal);
        continue;
      }

      const rateLimit = RateLimitInfo.fromHeaders(response.headers);
      if (rateLimit) state.lastRateLimit = rateLimit;

      if (attempt >= configuration.maxRetries) return response;

      const status = response.status;
      let delay: number | null = null;

      if (status === 429) {
        const retryAfter = retryAfterMs(response.headers);
        // Do not block longer than allowed; surface a RateLimitError instead.
        if (retryAfter === null) delay = backoff(attempt, configuration.maxRetryDelay);
        else if (retryAfter <= configuration.maxRetryDelay) delay = retryAfter;
      } else if (RETRYABLE_STATUSES.has(status) && replayable) {
        delay = retryAfterMs(response.headers) ?? backoff(attempt, configuration.maxRetryDelay);
        delay = Math.min(delay, configuration.maxRetryDelay);
      }

      if (delay === null) return response;

      // Free the connection before retrying.
      await response.body?.cancel().catch(() => undefined);
      await sleep(delay, callerSignal);
    }
  };
}

function backoff(attempt: number, max: number): number {
  return Math.min(500 * 2 ** attempt + Math.floor(Math.random() * 250), max);
}

function retryAfterMs(headers: Headers): number | null {
  const value = headers.get('retry-after');
  if (value === null || value.trim() === '') return null;

  const seconds = Number(value);
  if (Number.isFinite(seconds)) return Math.max(0, seconds * 1000);

  const date = Date.parse(value);
  return Number.isNaN(date) ? null : Math.max(0, date - Date.now());
}

function sleep(ms: number, signal?: AbortSignal): Promise<void> {
  if (ms <= 0) return Promise.resolve();

  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      signal?.removeEventListener('abort', onAbort);
      resolve();
    }, ms);
    const onAbort = (): void => {
      clearTimeout(timer);
      reject(signal?.reason ?? new Error('Aborted'));
    };
    signal?.addEventListener('abort', onAbort, { once: true });
  });
}
