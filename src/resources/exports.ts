import type { InternalExportsApi } from '../internal/generated-client.js';
import { Response } from '../support/responses.js';
import {
  toGeneratedRequest,
  toResponse,
} from '../support/serialization.js';
import { BaseResource } from './base.js';
import type { CreateExportInput, ExportJob } from './marketing-types.js';

/**
 * Contact export job operations.
 *
 * Wraps the generated ExportsApi.
 */
export class Exports extends BaseResource {
  /** @internal */
  constructor(private readonly api: InternalExportsApi) {
    super();
  }

  /**
   * Queue an asynchronous CSV contact export.
   */
  async create(options: CreateExportInput = {}): Promise<Response<ExportJob>> {
    const body =
      Object.keys(options).length === 0 ? undefined : toGeneratedRequest(options);
    return this.execute(async () =>
      toResponse<ExportJob>(await this.api.create(body)),
    );
  }

  /**
   * Retrieve export job status and download metadata.
   */
  async status(exportId: string): Promise<Response<ExportJob>> {
    return this.execute(async () =>
      toResponse<ExportJob>(await this.api.get(exportId)),
    );
  }

  /**
   * Download a completed export as CSV content.
   *
   * The CSV payload is available from `response.data`.
   */
  async download(exportId: string): Promise<Response<string>> {
    return this.execute(async () => {
      const csv = await this.api.download(exportId);
      return new Response(csv, '');
    });
  }
}
