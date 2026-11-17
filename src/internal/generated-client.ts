import { APIKeysApi } from '../../generated/src/apis/APIKeysApi.js';
import { DomainsApi } from '../../generated/src/apis/DomainsApi.js';
import { EmailsApi } from '../../generated/src/apis/EmailsApi.js';
import { MessagesApi } from '../../generated/src/apis/MessagesApi.js';
import { ProjectsApi } from '../../generated/src/apis/ProjectsApi.js';
import { TemplatesApi } from '../../generated/src/apis/TemplatesApi.js';
import type {
  CreateApiKeyRequest,
  CreateDomainRequest,
  CreateProjectRequest,
  CreateTemplateRequest,
  DuplicateTemplateRequest,
  PreviewTemplateRequest,
  SendEmailRequest,
  TestTemplateRequest,
  UpdateApiKeyRequest,
  UpdateProjectRequest,
  UpdateTemplateRequest,
} from '../../generated/src/models/index.js';
import { Configuration as GeneratedConfiguration } from '../../generated/src/runtime.js';
import type { ResolvedConfiguration } from '../config/types.js';
import { createDeliverabilityApis, type DeliverabilityApis } from './deliverability-apis.js';
import { createResilientFetch, type TransportState } from './http.js';
import { createMarketingApis, type MarketingApis } from './marketing-apis.js';

export type {
  DeliverabilityApis,
  InternalAnalyticsApi,
  InternalEventsApi,
  InternalMessagesApi,
  InternalSuppressionsApi,
  InternalWebhooksApi,
} from './deliverability-apis.js';
export type {
  InternalAudiencesApi,
  InternalCampaignsApi,
  InternalContactsApi,
  InternalExportsApi,
  InternalImportsApi,
  InternalListsApi,
  InternalSegmentsApi,
  InternalTagsApi,
  MarketingApis,
} from './marketing-apis.js';

export interface InternalEmailsApi {
  send(body: object, options?: { idempotencyKey?: string }): Promise<unknown>;
  list(query: object): Promise<unknown>;
  get(messageId: string): Promise<unknown>;
  events(messageId: string): Promise<unknown>;
}

export interface InternalProjectsApi {
  create(body: object): Promise<unknown>;
  list(query: object): Promise<unknown>;
  get(projectId: string): Promise<unknown>;
  update(projectId: string, body: object): Promise<unknown>;
  delete(projectId: string): Promise<unknown>;
}

export interface InternalApiKeysApi {
  create(projectId: string, body: object): Promise<unknown>;
  list(projectId: string, query: object): Promise<unknown>;
  get(projectId: string, apiKeyId: string): Promise<unknown>;
  update(projectId: string, apiKeyId: string, body: object): Promise<unknown>;
  delete(projectId: string, apiKeyId: string): Promise<unknown>;
  rotate(projectId: string, apiKeyId: string): Promise<unknown>;
  reveal(projectId: string, apiKeyId: string): Promise<unknown>;
}

export interface InternalDomainsApi {
  create(body: object): Promise<unknown>;
  list(query: object): Promise<unknown>;
  get(domainId: string): Promise<unknown>;
  verify(domainId: string): Promise<unknown>;
  delete(domainId: string): Promise<unknown>;
}

export interface InternalTemplatesApi {
  create(body: object): Promise<unknown>;
  list(query: object): Promise<unknown>;
  get(templateId: string): Promise<unknown>;
  update(templateId: string, body: object): Promise<unknown>;
  preview(templateId: string, body: object): Promise<unknown>;
  duplicate(templateId: string, body: object): Promise<unknown>;
  test(templateId: string, body: object): Promise<unknown>;
  delete(templateId: string): Promise<unknown>;
}

export interface InternalApis extends MarketingApis, DeliverabilityApis {
  emails: InternalEmailsApi;
  projects: InternalProjectsApi;
  apiKeys: InternalApiKeysApi;
  domains: InternalDomainsApi;
  templates: InternalTemplatesApi;
}

export function createInternalApis(
  configuration: ResolvedConfiguration,
  state: TransportState = { lastRateLimit: null },
): InternalApis {
  const generated = new GeneratedConfiguration({
    basePath: configuration.baseUrl,
    accessToken: configuration.apiKey,
    fetchApi: createResilientFetch(configuration, state),
    headers: {
      Accept: 'application/json',
      'User-Agent': configuration.userAgent,
    },
  });

  return {
    emails: new EmailsAdapter(new EmailsApi(generated), new MessagesApi(generated)),
    projects: new ProjectsAdapter(new ProjectsApi(generated)),
    apiKeys: new ApiKeysAdapter(new APIKeysApi(generated)),
    domains: new DomainsAdapter(new DomainsApi(generated)),
    templates: new TemplatesAdapter(new TemplatesApi(generated)),
    ...createMarketingApis(generated),
    ...createDeliverabilityApis(generated),
  };
}

class EmailsAdapter implements InternalEmailsApi {
  constructor(
    private readonly sending: EmailsApi,
    private readonly messages: MessagesApi,
  ) {}

  send(body: object, options: { idempotencyKey?: string } = {}): Promise<unknown> {
    return this.sending.sendEmail({
      sendEmailRequest: body as SendEmailRequest,
      ...(options.idempotencyKey !== undefined ? { idempotencyKey: options.idempotencyKey } : {}),
    });
  }

  list(query: object): Promise<unknown> {
    return this.messages.listMessages(query);
  }

  get(messageId: string): Promise<unknown> {
    return this.messages.getMessage({ message: messageId });
  }

  events(messageId: string): Promise<unknown> {
    return this.messages.messageEvents({ message: messageId });
  }
}

class ProjectsAdapter implements InternalProjectsApi {
  constructor(private readonly api: ProjectsApi) {}

  create(body: object): Promise<unknown> {
    return this.api.createProject({ createProjectRequest: body as CreateProjectRequest });
  }

  list(query: object): Promise<unknown> {
    return this.api.listProjects(query);
  }

  get(projectId: string): Promise<unknown> {
    return this.api.getProject({ project: projectId });
  }

  update(projectId: string, body: object): Promise<unknown> {
    return this.api.updateProject({
      project: projectId,
      updateProjectRequest: body as UpdateProjectRequest,
    });
  }

  delete(projectId: string): Promise<unknown> {
    return this.api.deleteProject({ project: projectId });
  }
}

class ApiKeysAdapter implements InternalApiKeysApi {
  constructor(private readonly api: APIKeysApi) {}

  create(projectId: string, body: object): Promise<unknown> {
    return this.api.createApiKey({
      project: projectId,
      createApiKeyRequest: body as CreateApiKeyRequest,
    });
  }

  list(projectId: string, query: object): Promise<unknown> {
    return this.api.listApiKeys({ project: projectId, ...query });
  }

  get(projectId: string, apiKeyId: string): Promise<unknown> {
    return this.api.getApiKey({ project: projectId, apiKey: apiKeyId });
  }

  update(projectId: string, apiKeyId: string, body: object): Promise<unknown> {
    return this.api.updateApiKey({
      project: projectId,
      apiKey: apiKeyId,
      updateApiKeyRequest: body as UpdateApiKeyRequest,
    });
  }

  delete(projectId: string, apiKeyId: string): Promise<unknown> {
    return this.api.deleteApiKey({ project: projectId, apiKey: apiKeyId });
  }

  rotate(projectId: string, apiKeyId: string): Promise<unknown> {
    return this.api.rotateApiKey({ project: projectId, apiKey: apiKeyId });
  }

  reveal(projectId: string, apiKeyId: string): Promise<unknown> {
    return this.api.revealApiKey({ project: projectId, apiKey: apiKeyId });
  }
}

class DomainsAdapter implements InternalDomainsApi {
  constructor(private readonly api: DomainsApi) {}

  create(body: object): Promise<unknown> {
    return this.api.createDomain({ createDomainRequest: body as CreateDomainRequest });
  }

  list(query: object): Promise<unknown> {
    return this.api.listDomains(query);
  }

  get(domainId: string): Promise<unknown> {
    return this.api.getDomain({ domain: domainId });
  }

  verify(domainId: string): Promise<unknown> {
    return this.api.verifyDomain({ domain: domainId });
  }

  delete(domainId: string): Promise<unknown> {
    return this.api.deleteDomain({ domain: domainId });
  }
}

class TemplatesAdapter implements InternalTemplatesApi {
  constructor(private readonly api: TemplatesApi) {}

  create(body: object): Promise<unknown> {
    return this.api.createTemplate({ createTemplateRequest: body as CreateTemplateRequest });
  }

  list(query: object): Promise<unknown> {
    return this.api.listTemplates(query);
  }

  get(templateId: string): Promise<unknown> {
    return this.api.getTemplate({ template: templateId });
  }

  update(templateId: string, body: object): Promise<unknown> {
    return this.api.updateTemplate({
      template: templateId,
      updateTemplateRequest: body as UpdateTemplateRequest,
    });
  }

  preview(templateId: string, body: object): Promise<unknown> {
    return this.api.previewTemplate({
      template: templateId,
      previewTemplateRequest: body as PreviewTemplateRequest,
    });
  }

  duplicate(templateId: string, body: object): Promise<unknown> {
    return this.api.duplicateTemplate({
      template: templateId,
      duplicateTemplateRequest: body as DuplicateTemplateRequest,
    });
  }

  test(templateId: string, body: object): Promise<unknown> {
    return this.api.testTemplate({
      template: templateId,
      testTemplateRequest: body as TestTemplateRequest,
    });
  }

  delete(templateId: string): Promise<unknown> {
    return this.api.deleteTemplate({ template: templateId });
  }
}
