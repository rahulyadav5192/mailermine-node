import type { InternalSegmentsApi } from '../internal/generated-client.js';
import type { Collection } from '../support/responses.js';
import { Response } from '../support/responses.js';
import {
  toCollection,
  toGeneratedRequest,
  toResponse,
} from '../support/serialization.js';
import { BaseResource } from './base.js';
import type {
  CreateSegmentInput,
  Segment,
  SegmentListOptions,
  SegmentPreview,
  SegmentRules,
  UpdateSegmentInput,
} from './marketing-types.js';
import type { DeleteResult } from './types.js';

/**
 * Dynamic segment operations.
 *
 * Wraps the generated SegmentsApi.
 */
export class Segments extends BaseResource {
  /** @internal */
  constructor(private readonly api: InternalSegmentsApi) {
    super();
  }

  /**
   * Create a dynamic segment.
   *
   * @example
   * ```ts
   * const segment = await mm.segments.create({
   *   name: 'Active subscribers',
   *   rules: {
   *     logic: 'and',
   *     rules: [{ field: 'subscribed', operator: 'equals', value: true }],
   *   },
   * });
   * ```
   */
  async create(input: CreateSegmentInput): Promise<Response<Segment>> {
    return this.execute(async () =>
      toResponse<Segment>(await this.api.create(toGeneratedRequest(input))),
    );
  }

  /**
   * List segments with filters and pagination.
   */
  async list(options: SegmentListOptions = {}): Promise<Collection<Segment>> {
    return this.execute(async () => toCollection<Segment>(await this.api.list(options)));
  }

  /**
   * Retrieve a segment by UUID.
   */
  async get(segmentId: string): Promise<Response<Segment>> {
    return this.execute(async () =>
      toResponse<Segment>(await this.api.get(segmentId)),
    );
  }

  /**
   * Partially update a segment.
   */
  async update(segmentId: string, input: UpdateSegmentInput): Promise<Response<Segment>> {
    return this.execute(async () =>
      toResponse<Segment>(await this.api.update(segmentId, toGeneratedRequest(input))),
    );
  }

  /**
   * Delete a segment.
   */
  async delete(segmentId: string): Promise<Response<DeleteResult>> {
    return this.execute(async () => {
      const envelope = await this.api.delete(segmentId);
      const response = toResponse<unknown>(envelope);
      return new Response<DeleteResult>({ deleted: true }, response.message, response.success);
    });
  }

  /**
   * Preview a saved segment or unsaved segment rules.
   *
   * Provide `segmentId` to preview a saved segment, or `rules` to preview
   * unsaved rule trees.
   */
  async preview(
    segmentId?: string | null,
    rules?: SegmentRules | null,
  ): Promise<Response<SegmentPreview>> {
    if (segmentId !== undefined && segmentId !== null && segmentId !== '') {
      return this.execute(async () =>
        toResponse<SegmentPreview>(await this.api.preview(segmentId)),
      );
    }

    if (rules === undefined || rules === null) {
      throw new Error('Provide a segment id or rules array when calling preview().');
    }

    return this.execute(async () =>
      toResponse<SegmentPreview>(
        await this.api.previewRules(toGeneratedRequest({ rules })),
      ),
    );
  }
}
