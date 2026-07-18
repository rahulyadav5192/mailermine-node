import type { InternalTagsApi } from '../internal/generated-client.js';
import type { Collection } from '../support/responses.js';
import { Response } from '../support/responses.js';
import {
  toCollection,
  toGeneratedRequest,
  toResponse,
} from '../support/serialization.js';
import { BaseResource } from './base.js';
import type {
  CreateTagInput,
  Tag,
  TagAssignmentInput,
  TagAssignmentResult,
  TagListOptions,
  UpdateTagInput,
} from './marketing-types.js';
import type { DeleteResult } from './types.js';

/**
 * Contact tag operations.
 *
 * Wraps the generated TagsApi.
 */
export class Tags extends BaseResource {
  /** @internal */
  constructor(private readonly api: InternalTagsApi) {
    super();
  }

  /**
   * Create a tag.
   */
  async create(input: CreateTagInput): Promise<Response<Tag>> {
    return this.execute(async () =>
      toResponse<Tag>(await this.api.create(toGeneratedRequest(input))),
    );
  }

  /**
   * List tags with filters and pagination.
   */
  async list(options: TagListOptions = {}): Promise<Collection<Tag>> {
    return this.execute(async () => toCollection<Tag>(await this.api.list(options)));
  }

  /**
   * Retrieve a tag by UUID.
   */
  async get(tagId: string): Promise<Response<Tag>> {
    return this.execute(async () => toResponse<Tag>(await this.api.get(tagId)));
  }

  /**
   * Partially update a tag.
   */
  async update(tagId: string, input: UpdateTagInput): Promise<Response<Tag>> {
    return this.execute(async () =>
      toResponse<Tag>(await this.api.update(tagId, toGeneratedRequest(input))),
    );
  }

  /**
   * Delete a tag.
   */
  async delete(tagId: string): Promise<Response<DeleteResult>> {
    return this.execute(async () => {
      const envelope = await this.api.delete(tagId);
      const response = toResponse<unknown>(envelope);
      return new Response<DeleteResult>({ deleted: true }, response.message, response.success);
    });
  }

  /**
   * Assign one or more tags to one or more contacts.
   */
  async assign(input: TagAssignmentInput): Promise<Response<TagAssignmentResult>> {
    const body = toGeneratedRequest({
      contactIds: normalizeIds(input.contactIds, 'contactIds'),
      tagIds: normalizeIds(input.tagIds, 'tagIds'),
    });
    return this.execute(async () =>
      toResponse<TagAssignmentResult>(await this.api.assign(body)),
    );
  }

  /**
   * Remove one or more tags from one or more contacts.
   */
  async remove(input: TagAssignmentInput): Promise<Response<TagAssignmentResult>> {
    const body = toGeneratedRequest({
      contactIds: normalizeIds(input.contactIds, 'contactIds'),
      tagIds: normalizeIds(input.tagIds, 'tagIds'),
    });
    return this.execute(async () =>
      toResponse<TagAssignmentResult>(await this.api.remove(body)),
    );
  }
}

function normalizeIds(value: string | readonly string[], field: string): string[] {
  const ids = typeof value === 'string' ? [value] : [...value];
  if (ids.length === 0) {
    throw new Error(`The ${field} field must contain at least one id.`);
  }
  return ids;
}
