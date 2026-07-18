import type { InternalDomainsApi } from '../internal/generated-client.js';
import type { Collection} from '../support/responses.js';
import { Response } from '../support/responses.js';
import {
  toCollection,
  toGeneratedRequest,
  toResponse,
} from '../support/serialization.js';
import { BaseResource } from './base.js';
import type {
  CreateDomainInput,
  DeleteResult,
  DnsRecord,
  Domain,
  DomainStatus,
  ListOptions,
} from './types.js';

/**
 * Sending domain operations.
 *
 * Wraps the generated DomainsApi.
 */
export class Domains extends BaseResource {
  /** @internal */
  constructor(private readonly api: InternalDomainsApi) {
    super();
  }

  /**
   * Create a sending domain and return required DNS records.
   */
  async create(input: CreateDomainInput): Promise<Response<Domain>> {
    return this.execute(async () =>
      toResponse<Domain>(await this.api.create(toGeneratedRequest(input))),
    );
  }

  /**
   * List sending domains for the authenticated project.
   */
  async list(options: ListOptions = {}): Promise<Collection<Domain>> {
    return this.execute(async () => toCollection<Domain>(await this.api.list(options)));
  }

  /**
   * Retrieve domain details, DNS records, and verification status.
   */
  async get(domainId: string): Promise<Response<Domain>> {
    return this.execute(async () =>
      toResponse<Domain>(await this.api.get(domainId)),
    );
  }

  /**
   * Check DNS and provider verification state.
   */
  async verify(domainId: string): Promise<Response<Domain>> {
    return this.execute(async () =>
      toResponse<Domain>(await this.api.verify(domainId)),
    );
  }

  /**
   * Return DNS records required for domain verification.
   *
   * Convenience helper over {@link Domains.get}.
   */
  async dnsRecords(domainId: string): Promise<Response<readonly DnsRecord[]>> {
    const domain = await this.get(domainId);
    return new Response(domain.data.dnsRecords ?? [], domain.message, domain.success);
  }

  /**
   * Return a compact verification status view.
   *
   * Convenience helper over {@link Domains.get}.
   */
  async status(domainId: string): Promise<Response<DomainStatus>> {
    const domain = await this.get(domainId);
    return new Response(
      {
        status: domain.data.status,
        verified: domain.data.verified,
        verificationStatus: domain.data.verificationStatus,
        dnsStatus: domain.data.dnsStatus,
        dkimStatus: domain.data.dkimStatus,
        spfStatus: domain.data.spfStatus,
        trackingStatus: domain.data.trackingStatus,
        lastCheckedAt: domain.data.lastCheckedAt,
        verificationError: domain.data.verificationError,
      },
      domain.message,
      domain.success,
    );
  }

  /**
   * Soft-delete a sending domain.
   */
  async delete(domainId: string): Promise<Response<DeleteResult>> {
    return this.execute(async () => {
      const envelope = await this.api.delete(domainId);
      const response = toResponse<unknown>(envelope);
      return new Response<DeleteResult>({ deleted: true }, response.message, response.success);
    });
  }
}
