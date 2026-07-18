import type { InternalListsApi } from '../internal/generated-client.js';
import type { Collection } from '../support/responses.js';
import { Response } from '../support/responses.js';
import {
  toCollection,
  toGeneratedRequest,
  toResponse,
} from '../support/serialization.js';
import { BaseResource } from './base.js';
import type {
  ContactList,
  CreateContactListInput,
  ListMembershipResult,
  UpdateContactListInput,
} from './marketing-types.js';
import type { DeleteResult, ListOptions } from './types.js';

/**
 * Static mailing list operations.
 *
 * Wraps the generated ListsApi.
 */
export class Lists extends BaseResource {
  /** @internal */
  constructor(private readonly api: InternalListsApi) {
    super();
  }

  /**
   * Create a static contact list.
   */
  async create(input: CreateContactListInput): Promise<Response<ContactList>> {
    return this.execute(async () =>
      toResponse<ContactList>(await this.api.create(toGeneratedRequest(input))),
    );
  }

  /**
   * List contact lists with filters and pagination.
   */
  async list(options: ListOptions = {}): Promise<Collection<ContactList>> {
    return this.execute(async () => toCollection<ContactList>(await this.api.list(options)));
  }

  /**
   * Retrieve a list by UUID.
   */
  async get(listId: string): Promise<Response<ContactList>> {
    return this.execute(async () =>
      toResponse<ContactList>(await this.api.get(listId)),
    );
  }

  /**
   * Partially update a list.
   */
  async update(listId: string, input: UpdateContactListInput): Promise<Response<ContactList>> {
    return this.execute(async () =>
      toResponse<ContactList>(await this.api.update(listId, toGeneratedRequest(input))),
    );
  }

  /**
   * Delete a list.
   */
  async delete(listId: string): Promise<Response<DeleteResult>> {
    return this.execute(async () => {
      const envelope = await this.api.delete(listId);
      const response = toResponse<unknown>(envelope);
      return new Response<DeleteResult>({ deleted: true }, response.message, response.success);
    });
  }

  /**
   * Add one or more contacts to a list.
   */
  async addContact(
    listId: string,
    contactIds: string | readonly string[],
  ): Promise<Response<ListMembershipResult>> {
    const ids = normalizeIds(contactIds);
    return this.execute(async () =>
      toResponse<ListMembershipResult>(
        await this.api.addContacts(listId, toGeneratedRequest({ ids })),
      ),
    );
  }

  /**
   * Remove one or more contacts from a list.
   */
  async removeContact(
    listId: string,
    contactIds: string | readonly string[],
  ): Promise<Response<ListMembershipResult>> {
    const ids = normalizeIds(contactIds);
    return this.execute(async () =>
      toResponse<ListMembershipResult>(
        await this.api.removeContacts(listId, toGeneratedRequest({ ids })),
      ),
    );
  }
}

function normalizeIds(contactIds: string | readonly string[]): string[] {
  const ids = typeof contactIds === 'string' ? [contactIds] : [...contactIds];
  if (ids.length === 0) {
    throw new Error('At least one contact id is required.');
  }
  return ids;
}
