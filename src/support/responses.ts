/**
 * Pagination metadata returned by list endpoints.
 */
export class Pagination {
  readonly currentPage: number;
  readonly perPage: number;
  readonly total: number;
  readonly lastPage: number;

  constructor(values: {
    currentPage: number;
    perPage: number;
    total: number;
    lastPage: number;
  }) {
    this.currentPage = values.currentPage;
    this.perPage = values.perPage;
    this.total = values.total;
    this.lastPage = values.lastPage;
  }

  /** Whether another page is available. */
  get hasNextPage(): boolean {
    return this.currentPage < this.lastPage;
  }

  /** Whether a previous page is available. */
  get hasPreviousPage(): boolean {
    return this.currentPage > 1;
  }
}

/**
 * Successful single-object API response.
 */
export class Response<T> {
  constructor(
    readonly data: T,
    readonly message: string,
    readonly success = true,
  ) {}
}

/**
 * Successful list response with pagination metadata.
 */
export class Collection<T> extends Response<readonly T[]> implements Iterable<T> {
  readonly [index: number]: T;
  readonly items: readonly T[];

  constructor(
    items: readonly T[],
    readonly pagination: Pagination,
    message: string,
    success = true,
  ) {
    super(items, message, success);
    this.items = items;
    items.forEach((item, index) => {
      Object.defineProperty(this, index, {
        value: item,
        enumerable: true,
        writable: false,
        configurable: false,
      });
    });
  }

  get length(): number {
    return this.items.length;
  }

  [Symbol.iterator](): Iterator<T> {
    return this.items[Symbol.iterator]();
  }
}
