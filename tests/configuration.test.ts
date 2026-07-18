import { describe, expect, it } from 'vitest';

import {
  Configuration,
  DEFAULT_BASE_URL,
  DEFAULT_TIMEOUT_MS,
  DEFAULT_USER_AGENT,
  VERSION,
} from '../src/index.js';

describe('Configuration', () => {
  it('applies production defaults when only an apiKey is provided', () => {
    const config = Configuration.create('mm_test_key');

    expect(config.apiKey).toBe('mm_test_key');
    expect(config.baseUrl).toBe(DEFAULT_BASE_URL);
    expect(config.timeout).toBe(DEFAULT_TIMEOUT_MS);
    expect(config.userAgent).toBe(DEFAULT_USER_AGENT);
    expect(VERSION).toMatch(/^\d+\.\d+\.\d+/);
  });

  it('strips trailing slashes from baseUrl and accepts custom options', () => {
    const config = new Configuration({
      apiKey: ' mm_custom ',
      baseUrl: 'https://staging.mailermine.com/api/v1/',
      timeout: 5_000,
      userAgent: 'mailermine-node-test/0.0.0',
    });

    expect(config.apiKey).toBe('mm_custom');
    expect(config.baseUrl).toBe('https://staging.mailermine.com/api/v1');
    expect(config.timeout).toBe(5_000);
    expect(config.userAgent).toBe('mailermine-node-test/0.0.0');
  });

  it('rejects an empty apiKey', () => {
    expect(() => Configuration.create('')).toThrow(/non-empty apiKey/i);
  });
});
