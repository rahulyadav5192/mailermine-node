import type { InternalAudiencesApi } from '../internal/generated-client.js';
import type { Collection, Response } from '../support/responses.js';
import {
  toCollection,
  toGeneratedRequest,
  toResponse,
} from '../support/serialization.js';
import { BaseResource } from './base.js';
import type {
  Audience,
  AudienceListOptions,
  AudienceSource,
  Contact,
  ContactList,
  ContactListOptions,
  CreateAudienceInput,
  ListMembershipResult,
  Segment,
  UpdateAudienceInput,
} from './marketing-types.js';
import type { DeleteResult } from './types.js';
import type { Contacts } from './contacts.js';
import type { Lists } from './lists.js';
import type { Segments } from './segments.js';

/**
 * Unified audience catalog (lists and segments).
 *
 * Wraps the generated AudiencesApi. Creation and mutation are handled via
 * {@link Lists} or {@link Segments} based on source.
 */
export class Audiences extends BaseResource {
  /** @internal */
  constructor(
    private readonly api: InternalAudiencesApi,
    private readonly listResource: Lists,
    private readonly segmentResource: Segments,
    private readonly contactResource: Contacts,
  ) {
    super();
  }

  /** Create a list- or segment-backed audience. */
  async create(
    input: CreateAudienceInput,
  ): Promise<Response<ContactList | Segment>> {
    const { source = 'list', ...parameters } = input;
    assertSource(source);
    if (source === 'segment') {
      return this.segmentResource.create({
        name: parameters.name,
        description: parameters.description,
        rules: parameters.rules ?? { logic: 'and', rules: [] },
      });
    }
    return this.listResource.create({
      name: parameters.name,
      description: parameters.description,
      color: parameters.color,
    });
  }

  /**
   * List audiences with pagination.
   */
  async list(options: AudienceListOptions = {}): Promise<Collection<Audience>> {
    return this.execute(async () => toCollection<Audience>(await this.api.list(options)));
  }

  /**
   * Retrieve an audience by source and UUID.
   *
   * @param source Audience backing type (`list` or `segment`).
   * @param audienceId List or segment UUID.
   */
  async get(source: AudienceSource, audienceId: string): Promise<Response<Audience>> {
    assertSource(source);

    return this.execute(async () =>
      toResponse<Audience>(await this.api.get(source, audienceId)),
    );
  }

  /** Update a list- or segment-backed audience. */
  async update(
    source: AudienceSource,
    audienceId: string,
    input: UpdateAudienceInput,
  ): Promise<Response<ContactList | Segment>> {
    assertSource(source);
    if (source === 'segment') {
      const { color: _color, ...segmentInput } = input;
      return this.segmentResource.update(audienceId, segmentInput);
    }
    const { rules: _rules, ...listInput } = input;
    return this.listResource.update(audienceId, listInput);
  }

  /** Delete a list- or segment-backed audience. */
  async delete(
    source: AudienceSource,
    audienceId: string,
  ): Promise<Response<DeleteResult>> {
    assertSource(source);
    return source === 'segment'
      ? this.segmentResource.delete(audienceId)
      : this.listResource.delete(audienceId);
  }

  /** List contacts belonging to an audience. */
  async contacts(
    source: AudienceSource,
    audienceId: string,
    options: ContactListOptions = {},
  ): Promise<Collection<Contact>> {
    assertSource(source);
    return this.contactResource.list({
      ...options,
      [source === 'segment' ? 'segment' : 'list']: audienceId,
    });
  }

  /** Add contacts to a list-backed audience. */
  async addContacts(
    audienceId: string,
    contactIds: string | readonly string[],
  ): Promise<Response<ListMembershipResult>> {
    const ids = normalizeIds(contactIds);
    return this.execute(async () =>
      toResponse<ListMembershipResult>(
        await this.api.addContacts(audienceId, toGeneratedRequest({ ids })),
      ),
    );
  }

  /** Remove contacts from a list-backed audience. */
  async removeContacts(
    audienceId: string,
    contactIds: string | readonly string[],
  ): Promise<Response<ListMembershipResult>> {
    const ids = normalizeIds(contactIds);
    return this.execute(async () =>
      toResponse<ListMembershipResult>(
        await this.api.removeContacts(audienceId, ids),
      ),
    );
  }
}

function assertSource(source: string): asserts source is AudienceSource {
  if (source !== 'list' && source !== 'segment') {
    throw new Error('Audience source must be "list" or "segment".');
  }
}

function normalizeIds(value: string | readonly string[]): string[] {
  const ids = typeof value === 'string' ? [value] : [...value];
  if (ids.length === 0) throw new Error('At least one contact id is required.');
  return ids;
}
