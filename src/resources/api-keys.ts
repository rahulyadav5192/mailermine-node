import type { InternalApiKeysApi } from '../internal/generated-client.js';
import type { Collection} from '../support/responses.js';
import { Response } from '../support/responses.js';
import {
  toCollection,
  toGeneratedRequest,
  toResponse,
} from '../support/serialization.js';
import { BaseResource } from './base.js';
import type {
  ApiKey,
  CreateApiKeyInput,
  DeleteResult,
  ListOptions,
  UpdateApiKeyInput,
} from './types.js';

/**
 * Project API key operations.
 *
 * Wraps the generated APIKeysApi.
 */
export class ApiKeys extends BaseResource {
  /** @internal */
  constructor(private readonly api: InternalApiKeysApi) {
    super();
  }

  /**
   * Create an API key. The plaintext secret is returned once.
   */
  async create(projectId: string, input: CreateApiKeyInput): Promise<Response<ApiKey>> {
    return this.execute(async () =>
      toResponse<ApiKey>(await this.api.create(projectId, toGeneratedRequest(input))),
    );
  }

  /**
   * List masked API keys for a project. Secrets are never returned.
   */
  async list(projectId: string, options: ListOptions = {}): Promise<Collection<ApiKey>> {
    return this.execute(async () =>
      toCollection<ApiKey>(await this.api.list(projectId, options)),
    );
  }

  /**
   * Retrieve API key metadata without the secret.
   */
  async get(projectId: string, apiKeyId: string): Promise<Response<ApiKey>> {
    return this.execute(async () =>
      toResponse<ApiKey>(await this.api.get(projectId, apiKeyId)),
    );
  }

  /**
   * Update API key name, expiry, status, or scopes.
   */
  async update(
    projectId: string,
    apiKeyId: string,
    input: UpdateApiKeyInput,
  ): Promise<Response<ApiKey>> {
    return this.execute(async () =>
      toResponse<ApiKey>(
        await this.api.update(projectId, apiKeyId, toGeneratedRequest(input)),
      ),
    );
  }

  /**
   * Soft-delete and revoke an API key.
   */
  async delete(projectId: string, apiKeyId: string): Promise<Response<DeleteResult>> {
    return this.execute(async () => {
      const envelope = await this.api.delete(projectId, apiKeyId);
      const response = toResponse<unknown>(envelope);
      return new Response<DeleteResult>({ deleted: true }, response.message, response.success);
    });
  }

  /** Rotate an API key and return its new one-time plaintext secret. */
  async rotate(projectId: string, apiKeyId: string): Promise<Response<ApiKey>> {
    return this.execute(async () =>
      toResponse<ApiKey>(await this.api.rotate(projectId, apiKeyId)),
    );
  }

  /**
   * Attempt to reveal an API key.
   *
   * MailerMine normally rejects this operation because secrets are irreversibly
   * hashed; the API error is mapped to the public SDK exception hierarchy.
   */
  async reveal(projectId: string, apiKeyId: string): Promise<Response<ApiKey>> {
    return this.execute(async () =>
      toResponse<ApiKey>(await this.api.reveal(projectId, apiKeyId)),
    );
  }
}
