/**
 * SDK version. Keep in sync with package.json when releasing.
 */
export const VERSION = '1.2.0';

/**
 * Default MailerMine API base URL.
 */
export const DEFAULT_BASE_URL = 'https://mailermine.com/api/v1';

/**
 * Default request timeout in milliseconds.
 */
export const DEFAULT_TIMEOUT_MS = 30_000;

/**
 * Default number of automatic retries for 429/502/503/504 and network errors.
 */
export const DEFAULT_MAX_RETRIES = 2;

/**
 * Default longest single wait between retries, in milliseconds.
 */
export const DEFAULT_MAX_RETRY_DELAY_MS = 30_000;

/**
 * Default User-Agent header value.
 */
export const DEFAULT_USER_AGENT = `mailermine-node/${VERSION}`;
