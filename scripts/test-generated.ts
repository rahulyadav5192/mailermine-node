/**
 * Compile-only smoke test for representative OpenAPI-generated clients.
 *
 * This file is checked by `npm run typecheck:generated`; it must not make API
 * requests or become part of the public SDK surface.
 */
import {
  APIKeysApi,
  AnalyticsApi,
  CampaignsApi,
  ContactsApi,
  DomainsApi,
  EmailsApi,
  ProjectsApi,
  TemplatesApi,
  WebhooksApi,
} from '../generated/src/apis/index.js';
import { Configuration } from '../generated/src/runtime.js';

const configuration = new Configuration({
  accessToken: 'compile-only-api-key',
  basePath: 'https://mailermine.com/api/v1',
});

export const generatedApiSmokeTest = {
  analytics: new AnalyticsApi(configuration),
  apiKeys: new APIKeysApi(configuration),
  campaigns: new CampaignsApi(configuration),
  contacts: new ContactsApi(configuration),
  domains: new DomainsApi(configuration),
  emails: new EmailsApi(configuration),
  projects: new ProjectsApi(configuration),
  templates: new TemplatesApi(configuration),
  webhooks: new WebhooksApi(configuration),
} as const;
