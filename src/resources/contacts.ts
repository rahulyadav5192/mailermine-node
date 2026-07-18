import { NotFoundError } from '../errors/index.js';
import type { InternalContactsApi } from '../internal/generated-client.js';
import type { Collection } from '../support/responses.js';
import { Response } from '../support/responses.js';
import {
  toCollection,
  toGeneratedRequest,
  toResponse,
} from '../support/serialization.js';
import { BaseResource } from './base.js';
import type {
  Contact,
  ContactListOptions,
  CreateContactInput,
  UpdateContactInput,
} from './marketing-types.js';
import type { DeleteResult } from './types.js';

/**
 * Contact operations.
 *
 * Wraps the generated ContactsApi.
 */
export class Contacts extends BaseResource {
  /** @internal */
  constructor(private readonly api: InternalContactsApi) {
    super();
  }

  /**
   * Create a contact with optional lists, tags, metadata, and custom fields.
   *
   * @example
   * ```ts
   * const contact = await mm.contacts.create({
   *   email: 'john@example.com',
   *   firstName: 'John',
   *   subscribed: true,
   * });
   * ```
   */
  async create(input: CreateContactInput): Promise<Response<Contact>> {
    return this.execute(async () =>
      toResponse<Contact>(await this.api.create(toGeneratedRequest(input))),
    );
  }

  /**
   * Create a contact or update the existing contact with the same email.
   */
  async upsert(input: CreateContactInput): Promise<Response<Contact>> {
    if (input.email.trim() === '') {
      throw new Error('The email field is required for upsert().');
    }

    const existing = await this.findByEmail(input.email);
    if (existing !== null) {
      return this.update(existing.id, input);
    }

    return this.create(input);
  }

  /**
   * List contacts with filters and pagination.
   */
  async list(options: ContactListOptions = {}): Promise<Collection<Contact>> {
    return this.execute(async () => toCollection<Contact>(await this.api.list(options)));
  }

  /**
   * Retrieve a contact by UUID.
   */
  async get(contactId: string): Promise<Response<Contact>> {
    return this.execute(async () =>
      toResponse<Contact>(await this.api.get(contactId)),
    );
  }

  /**
   * Partially update a contact.
   */
  async update(contactId: string, input: UpdateContactInput): Promise<Response<Contact>> {
    return this.execute(async () =>
      toResponse<Contact>(await this.api.update(contactId, toGeneratedRequest(input))),
    );
  }

  /**
   * Soft-delete a contact.
   */
  async delete(contactId: string): Promise<Response<DeleteResult>> {
    return this.execute(async () => {
      const envelope = await this.api.delete(contactId);
      const response = toResponse<unknown>(envelope);
      return new Response<DeleteResult>({ deleted: true }, response.message, response.success);
    });
  }

  /**
   * Search contacts by free-text query across email and name fields.
   */
  async search(query: string, options: ContactListOptions = {}): Promise<Collection<Contact>> {
    return this.list({ ...options, search: query });
  }

  /**
   * Identify an existing contact by exact email match (case-insensitive).
   *
   * @throws {NotFoundError} When no contact matches the email.
   */
  async identify(email: string): Promise<Response<Contact>> {
    const contact = await this.findByEmail(email);
    if (contact === null) {
      throw new NotFoundError(`No contact found for email [${email}].`, 404);
    }

    return new Response(contact, 'Contact identified.');
  }

  /**
   * Mark a contact as subscribed.
   */
  async subscribe(contactId: string): Promise<Response<Contact>> {
    return this.update(contactId, {
      subscribed: true,
      status: 'active',
    });
  }

  /**
   * Mark a contact as unsubscribed.
   */
  async unsubscribe(contactId: string): Promise<Response<Contact>> {
    return this.update(contactId, {
      subscribed: false,
      status: 'unsubscribed',
    });
  }

  private async findByEmail(email: string): Promise<Contact | null> {
    const matches = await this.list({
      search: email,
      perPage: 25,
    });

    for (const contact of matches) {
      if (contact.email.toLowerCase() === email.toLowerCase()) {
        return contact;
      }
    }

    return null;
  }
}
