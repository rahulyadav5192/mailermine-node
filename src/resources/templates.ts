import type { InternalTemplatesApi } from '../internal/generated-client.js';
import type { Collection} from '../support/responses.js';
import { Response } from '../support/responses.js';
import {
  toCollection,
  toGeneratedRequest,
  toResponse,
} from '../support/serialization.js';
import { BaseResource } from './base.js';
import type {
  CreateTemplateInput,
  DeleteResult,
  DuplicateTemplateInput,
  ListOptions,
  PreviewTemplateInput,
  Template,
  TemplatePreview,
  TemplateTestResult,
  TestTemplateInput,
  UpdateTemplateInput,
} from './types.js';

/**
 * Email template operations.
 *
 * Wraps the generated TemplatesApi.
 */
export class Templates extends BaseResource {
  /** @internal */
  constructor(private readonly api: InternalTemplatesApi) {
    super();
  }

  /**
   * Create a reusable email template.
   */
  async create(input: CreateTemplateInput): Promise<Response<Template>> {
    return this.execute(async () =>
      toResponse<Template>(await this.api.create(toGeneratedRequest(input))),
    );
  }

  /**
   * List templates for the authenticated project.
   */
  async list(options: ListOptions = {}): Promise<Collection<Template>> {
    return this.execute(async () => toCollection<Template>(await this.api.list(options)));
  }

  /**
   * Retrieve full template content, variables, and branding.
   */
  async get(templateId: string): Promise<Response<Template>> {
    return this.execute(async () =>
      toResponse<Template>(await this.api.get(templateId)),
    );
  }

  /**
   * Partially update template content, variables, status, or branding.
   */
  async update(templateId: string, input: UpdateTemplateInput): Promise<Response<Template>> {
    return this.execute(async () =>
      toResponse<Template>(await this.api.update(templateId, toGeneratedRequest(input))),
    );
  }

  /**
   * Render a template with runtime variables without saving or sending.
   */
  async preview(
    templateId: string,
    input: PreviewTemplateInput = {},
  ): Promise<Response<TemplatePreview>> {
    return this.execute(async () =>
      toResponse<TemplatePreview>(
        await this.api.preview(templateId, toGeneratedRequest(input)),
      ),
    );
  }

  /**
   * Duplicate a template into a new draft.
   */
  async duplicate(
    templateId: string,
    input: DuplicateTemplateInput = {},
  ): Promise<Response<Template>> {
    return this.execute(async () =>
      toResponse<Template>(
        await this.api.duplicate(templateId, toGeneratedRequest(input)),
      ),
    );
  }

  /** Send a test rendering of a template. */
  async test(
    templateId: string,
    input: TestTemplateInput,
  ): Promise<Response<TemplateTestResult>> {
    const to = input.to ?? input.email;
    if (to === undefined || to === '') {
      throw new Error('The to field is required.');
    }
    return this.execute(async () =>
      toResponse<TemplateTestResult>(
        await this.api.test(
          templateId,
          toGeneratedRequest({ ...input, to }),
        ),
      ),
    );
  }

  /**
   * Soft-delete a template.
   */
  async delete(templateId: string): Promise<Response<DeleteResult>> {
    return this.execute(async () => {
      const envelope = await this.api.delete(templateId);
      const response = toResponse<unknown>(envelope);
      return new Response<DeleteResult>({ deleted: true }, response.message, response.success);
    });
  }
}
