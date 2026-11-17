/**
 * Options accepted when creating a {@link Configuration}.
 */
export interface ConfigurationOptions {
  /**
   * MailerMine API key (Bearer token). Required and must be non-empty.
   */
  apiKey: string;

  /**
   * API base URL. Defaults to the production endpoint.
   * Trailing slashes are stripped.
   */
  baseUrl?: string;

  /**
   * Request timeout in milliseconds. Must be a positive number.
   * Defaults to 30_000 (30 seconds).
   */
  timeout?: number;

  /**
   * User-Agent header value sent with every request.
   */
  userAgent?: string;

  /**
   * How many times a rate-limited (429), temporarily unavailable
   * (502/503/504) or network-failed request is retried. Defaults to 2;
   * 0 disables retries. Email sends always carry an Idempotency-Key, so a
   * retry is never delivered twice.
   */
  maxRetries?: number;

  /**
   * Longest single wait between retries, in milliseconds. A 429 asking to
   * wait longer than this is thrown as a RateLimitError. Defaults to 30_000.
   */
  maxRetryDelay?: number;

  /**
   * Optional fetch implementation. Useful for tests and custom transports.
   * @internal
   */
  fetchApi?: typeof fetch;
}

/**
 * Immutable, validated SDK configuration.
 */
export interface ResolvedConfiguration {
  readonly apiKey: string;
  readonly baseUrl: string;
  readonly timeout: number;
  readonly userAgent: string;
  readonly maxRetries: number;
  readonly maxRetryDelay: number;
  readonly fetchApi?: typeof fetch;
}
