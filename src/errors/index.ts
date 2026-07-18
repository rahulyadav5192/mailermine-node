/** Base error thrown for MailerMine API and transport failures. */
export class ApiError extends Error {
  override readonly name: string = 'ApiError';

  constructor(
    message: string,
    readonly status: number,
    readonly body?: unknown,
    options?: ErrorOptions,
  ) {
    super(message, options);
  }
}

/** The API key is missing, invalid, expired, or revoked. */
export class AuthenticationError extends ApiError {
  override readonly name = 'AuthenticationError';
}

/** The account plan or API-key scope does not permit the operation. */
export class PlanError extends ApiError {
  override readonly name = 'PlanError';
}

/** The requested MailerMine object does not exist. */
export class NotFoundError extends ApiError {
  override readonly name = 'NotFoundError';
}

/** The request failed server-side validation. */
export class ValidationError extends ApiError {
  override readonly name = 'ValidationError';

  constructor(
    message: string,
    status: number,
    readonly errors: Readonly<Record<string, readonly string[]>>,
    body?: unknown,
    options?: ErrorOptions,
  ) {
    super(message, status, body, options);
  }
}

/** The API rate limit was exceeded. */
export class RateLimitError extends ApiError {
  override readonly name = 'RateLimitError';

  constructor(
    message: string,
    status: number,
    readonly retryAfter: number | null,
    body?: unknown,
    options?: ErrorOptions,
  ) {
    super(message, status, body, options);
  }
}
