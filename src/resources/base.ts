import { mapGeneratedError } from '../internal/error-mapper.js';

export abstract class BaseResource {
  protected async execute<T>(operation: () => Promise<T>): Promise<T> {
    try {
      return await operation();
    } catch (error) {
      throw await mapGeneratedError(error);
    }
  }
}
