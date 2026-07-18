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
  readonly fetchApi?: typeof fetch;
}
