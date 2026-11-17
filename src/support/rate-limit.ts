/** Rate-limit state reported by the API in `X-RateLimit-*` headers. */
export class RateLimitInfo {
  constructor(
    /** Requests allowed per window. */
    readonly limit: number,
    /** Requests left in the current window. */
    readonly remaining: number,
    /** When the window resets, or null if unknown. */
    readonly resetsAt: Date | null,
  ) {}

  /** Seconds until the window resets (0 when unknown or past). */
  get secondsUntilReset(): number {
    return this.resetsAt === null
      ? 0
      : Math.max(0, Math.ceil((this.resetsAt.getTime() - Date.now()) / 1000));
  }

  static fromHeaders(headers: Headers): RateLimitInfo | null {
    const limit = Number(headers.get('x-ratelimit-limit'));
    const remaining = Number(headers.get('x-ratelimit-remaining'));
    if (
      headers.get('x-ratelimit-limit') === null ||
      headers.get('x-ratelimit-remaining') === null ||
      !Number.isFinite(limit) ||
      !Number.isFinite(remaining)
    ) {
      return null;
    }

    const reset = Number(headers.get('x-ratelimit-reset'));
    return new RateLimitInfo(
      limit,
      remaining,
      headers.get('x-ratelimit-reset') !== null && Number.isFinite(reset)
        ? new Date(reset * 1000)
        : null,
    );
  }
}
