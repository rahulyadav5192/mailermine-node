import type { InternalProjectsApi } from '../internal/generated-client.js';
import type { Collection} from '../support/responses.js';
import { Response } from '../support/responses.js';
import {
  toCollection,
  toGeneratedRequest,
  toResponse,
} from '../support/serialization.js';
import { BaseResource } from './base.js';
import type {
  CreateProjectInput,
  DeleteResult,
  ListOptions,
  Project,
  UpdateProjectInput,
} from './types.js';

/**
 * Workspace project operations.
 *
 * Wraps the generated ProjectsApi.
 */
export class Projects extends BaseResource {
  /** @internal */
  constructor(private readonly api: InternalProjectsApi) {
    super();
  }

  /**
   * Create a project for the authenticated workspace owner.
   */
  async create(input: CreateProjectInput): Promise<Response<Project>> {
    return this.execute(async () =>
      toResponse<Project>(await this.api.create(toGeneratedRequest(input))),
    );
  }

  /**
   * List projects owned by the authenticated workspace owner.
   */
  async list(options: ListOptions = {}): Promise<Collection<Project>> {
    return this.execute(async () => toCollection<Project>(await this.api.list(options)));
  }

  /**
   * Retrieve a project by UUID.
   */
  async get(projectId: string): Promise<Response<Project>> {
    return this.execute(async () =>
      toResponse<Project>(await this.api.get(projectId)),
    );
  }

  /**
   * Partially update a project.
   */
  async update(projectId: string, input: UpdateProjectInput): Promise<Response<Project>> {
    return this.execute(async () =>
      toResponse<Project>(await this.api.update(projectId, toGeneratedRequest(input))),
    );
  }

  /**
   * Soft-delete a project.
   */
  async delete(projectId: string): Promise<Response<DeleteResult>> {
    return this.execute(async () => {
      const envelope = await this.api.delete(projectId);
      const response = toResponse<unknown>(envelope);
      return new Response<DeleteResult>({ deleted: true }, response.message, response.success);
    });
  }
}
