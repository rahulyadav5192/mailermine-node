import type { InternalSuppressionsApi } from '../internal/generated-client.js';
import { Response, type Collection } from '../support/responses.js';
import {
  toCollection,
  toGeneratedRequest,
  toResponse,
} from '../support/serialization.js';
import { BaseResource } from './base.js';
import type {
  CreateSuppressionInput,
  Suppression,
  SuppressionCheck,
  SuppressionListOptions,
} from './deliverability-types.js';
import type { DeleteResult } from './types.js';

/** Account suppression-list operations. */
export class Suppressions extends BaseResource {
  /** @internal */
  constructor(private readonly api: InternalSuppressionsApi) {
    super();
  }

  /** List suppressions with filters. */
  async list(options: SuppressionListOptions = {}): Promise<Collection<Suppression>> {
    return this.execute(async () =>
      toCollection<Suppression>(await this.api.list(options)),
    );
  }

  /** Retrieve a suppression by UUID. */
  async get(suppressionId: string): Promise<Response<Suppression>> {
    return this.execute(async () =>
      toResponse<Suppression>(await this.api.get(suppressionId)),
    );
  }

  /** Add an email address to the suppression list. */
  async add(input: CreateSuppressionInput): Promise<Response<Suppression>> {
    return this.execute(async () =>
      toResponse<Suppression>(
        await this.api.create(toGeneratedRequest(input)),
      ),
    );
  }

  /** Remove a suppression by UUID. */
  async remove(suppressionId: string): Promise<Response<DeleteResult>> {
    return this.execute(async () => {
      const response = toResponse<unknown>(await this.api.delete(suppressionId));
      return new Response({ deleted: true }, response.message, response.success);
    });
  }

  /** Restore a removed or soft-deleted suppression. */
  async restore(suppressionId: string): Promise<Response<Suppression>> {
    return this.execute(async () =>
      toResponse<Suppression>(await this.api.restore(suppressionId)),
    );
  }

  /** Check whether an exact email address is suppressed. */
  async check(email: string): Promise<Response<SuppressionCheck>> {
    const normalized = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
      throw new Error('A valid email address is required.');
    }

    const matches = await this.list({ search: normalized, perPage: 100 });
    const suppression =
      matches.items.find((item) => item.email.toLowerCase() === normalized) ?? null;

    return new Response(
      { email: normalized, suppressed: suppression !== null, suppression },
      'OK',
    );
  }
}
