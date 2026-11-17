import {
  DEFAULT_BASE_URL,
  DEFAULT_MAX_RETRIES,
  DEFAULT_MAX_RETRY_DELAY_MS,
  DEFAULT_TIMEOUT_MS,
  DEFAULT_USER_AGENT,
} from '../constants.js';
import type { ConfigurationOptions, ResolvedConfiguration } from './types.js';

/**
 * Immutable configuration for the MailerMine Node.js SDK.
 *
 * Validates inputs once and exposes read-only getters used by the HTTP client.
 */
export class Configuration implements ResolvedConfiguration {
  readonly apiKey: string;
  readonly baseUrl: string;
  readonly timeout: number;
  readonly userAgent: string;
  readonly maxRetries: number;
  readonly maxRetryDelay: number;
  readonly fetchApi?: typeof fetch;

  constructor(options: ConfigurationOptions) {
    this.apiKey = normalizeApiKey(options.apiKey);
    this.baseUrl = normalizeBaseUrl(options.baseUrl ?? DEFAULT_BASE_URL);
    this.timeout = normalizeTimeout(options.timeout ?? DEFAULT_TIMEOUT_MS);
    this.userAgent = normalizeUserAgent(options.userAgent ?? DEFAULT_USER_AGENT);
    this.maxRetries = normalizeNonNegativeInteger(
      options.maxRetries ?? DEFAULT_MAX_RETRIES,
      'maxRetries',
    );
    this.maxRetryDelay = normalizeNonNegativeInteger(
      options.maxRetryDelay ?? DEFAULT_MAX_RETRY_DELAY_MS,
      'maxRetryDelay',
    );
    if (options.fetchApi !== undefined) {
      this.fetchApi = options.fetchApi;
    }
  }

  /**
   * Create a Configuration from an API key string or a full options object.
   */
  static create(apiKeyOrOptions: string | ConfigurationOptions): Configuration {
    if (typeof apiKeyOrOptions === 'string') {
      return new Configuration({ apiKey: apiKeyOrOptions });
    }

    return new Configuration(apiKeyOrOptions);
  }

  /**
   * Return a plain object snapshot of the resolved configuration.
   */
  toJSON(): ResolvedConfiguration {
    const snapshot: ResolvedConfiguration = {
      apiKey: this.apiKey,
      baseUrl: this.baseUrl,
      timeout: this.timeout,
      userAgent: this.userAgent,
      maxRetries: this.maxRetries,
      maxRetryDelay: this.maxRetryDelay,
    };

    if (this.fetchApi !== undefined) {
      return { ...snapshot, fetchApi: this.fetchApi };
    }

    return snapshot;
  }
}

function normalizeNonNegativeInteger(value: number, name: string): number {
  if (typeof value !== 'number' || !Number.isInteger(value) || value < 0) {
    throw new TypeError(`MailerMine Configuration ${name} must be a non-negative integer.`);
  }

  return value;
}

function normalizeApiKey(apiKey: string): string {
  if (typeof apiKey !== 'string' || apiKey.trim() === '') {
    throw new TypeError('MailerMine Configuration requires a non-empty apiKey string.');
  }

  return apiKey.trim();
}

function normalizeBaseUrl(baseUrl: string): string {
  if (typeof baseUrl !== 'string' || baseUrl.trim() === '') {
    throw new TypeError('MailerMine Configuration baseUrl must be a non-empty string.');
  }

  const trimmed = baseUrl.trim().replace(/\/+$/, '');

  try {
    assertAbsoluteUrl(trimmed);
  } catch {
    throw new TypeError(`MailerMine Configuration baseUrl is not a valid URL: ${baseUrl}`);
  }

  return trimmed;
}

function assertAbsoluteUrl(value: string): void {
  void new URL(value);
}

function normalizeTimeout(timeout: number): number {
  if (typeof timeout !== 'number' || !Number.isFinite(timeout) || timeout <= 0) {
    throw new TypeError(
      'MailerMine Configuration timeout must be a positive number (milliseconds).',
    );
  }

  return timeout;
}

function normalizeUserAgent(userAgent: string): string {
  if (typeof userAgent !== 'string' || userAgent.trim() === '') {
    throw new TypeError('MailerMine Configuration userAgent must be a non-empty string.');
  }

  return userAgent.trim();
}
