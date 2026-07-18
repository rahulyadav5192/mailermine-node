import { ApiError } from '../errors/index.js';
import type { InternalImportsApi } from '../internal/generated-client.js';
import type { Collection, Response } from '../support/responses.js';
import {
  toCollection,
  toGeneratedRequest,
  toResponse,
} from '../support/serialization.js';
import { BaseResource } from './base.js';
import type {
  ConfigureImportInput,
  CreateImportInput,
  ImportFileInput,
  ImportJob,
} from './marketing-types.js';

/**
 * Contact import job operations.
 *
 * Wraps the generated ImportsApi.
 */
export class Imports extends BaseResource {
  /** @internal */
  constructor(private readonly api: InternalImportsApi) {
    super();
  }

  /**
   * List recent contact import jobs.
   */
  async list(): Promise<Collection<ImportJob>> {
    return this.execute(async () => toCollection<ImportJob>(await this.api.list()));
  }

  /**
   * Upload a contact import file (CSV, TSV, XLSX, or XLS).
   *
   * Accepts `Blob`, `Buffer`, `Uint8Array`, or `ArrayBuffer`.
   */
  async create(input: CreateImportInput): Promise<Response<ImportJob>> {
    const file = toBlob(input.file);
    return this.execute(async () =>
      toResponse<ImportJob>(
        await this.api.create({
          file,
          filename: input.filename ?? 'contacts.csv',
        }),
      ),
    );
  }

  /**
   * Retrieve import job status and progress.
   */
  async status(importId: string): Promise<Response<ImportJob>> {
    return this.execute(async () =>
      toResponse<ImportJob>(await this.api.get(importId)),
    );
  }

  /** Configure field mappings and import options. */
  async configure(
    importId: string,
    input: ConfigureImportInput,
  ): Promise<Response<ImportJob>> {
    return this.execute(async () =>
      toResponse<ImportJob>(
        await this.api.configure(importId, toGeneratedRequest(input)),
      ),
    );
  }

  /** Start processing a configured import. */
  async start(importId: string): Promise<Response<ImportJob>> {
    return this.execute(async () =>
      toResponse<ImportJob>(await this.api.start(importId)),
    );
  }

  /** Import cancellation is not supported by the MailerMine API. */
  async cancel(importId: string): Promise<Response<ImportJob>> {
    throw new ApiError(
      `MailerMine does not support cancelling import [${importId}]. Poll status() instead.`,
      405,
    );
  }
}

function toBlob(file: ImportFileInput): Blob {
  if (file instanceof Blob) {
    return file;
  }

  if (typeof Buffer !== 'undefined' && Buffer.isBuffer(file)) {
    const copy = new Uint8Array(file.byteLength);
    copy.set(file);
    return new Blob([copy]);
  }

  if (file instanceof ArrayBuffer) {
    return new Blob([file]);
  }

  if (file instanceof Uint8Array) {
    const copy = new Uint8Array(file.byteLength);
    copy.set(file);
    return new Blob([copy]);
  }

  throw new Error(
    'The file field must be a Blob, Buffer, Uint8Array, or ArrayBuffer.',
  );
}
