import { AnalyticsApi } from '../../generated/src/apis/AnalyticsApi.js';
import { EventsApi } from '../../generated/src/apis/EventsApi.js';
import { MessagesApi } from '../../generated/src/apis/MessagesApi.js';
import { SuppressionsApi } from '../../generated/src/apis/SuppressionsApi.js';
import { WebhooksApi } from '../../generated/src/apis/WebhooksApi.js';
import type {
  CreateSuppressionRequest,
  CreateWebhookRequest,
  ReplayWebhookRequest,
  TestWebhookRequest,
  UpdateWebhookRequest,
} from '../../generated/src/models/index.js';
import type { Configuration as GeneratedConfiguration } from '../../generated/src/runtime.js';

export interface InternalAnalyticsApi {
  overview(query: object): Promise<unknown>;
  messages(query: object): Promise<unknown>;
  engagement(query: object): Promise<unknown>;
  campaigns(query: object): Promise<unknown>;
  domains(query: object): Promise<unknown>;
  projects(query: object): Promise<unknown>;
  providers(query: object): Promise<unknown>;
}

export interface InternalEventsApi {
  list(query: object): Promise<unknown>;
  get(eventId: string): Promise<unknown>;
  timeline(messageId: string): Promise<unknown>;
  message(messageId: string): Promise<unknown>;
}

export interface InternalMessagesApi {
  list(query: object): Promise<unknown>;
  get(messageId: string): Promise<unknown>;
  events(messageId: string): Promise<unknown>;
}

export interface InternalWebhooksApi {
  create(body: object): Promise<unknown>;
  list(query: object): Promise<unknown>;
  get(webhookId: string): Promise<unknown>;
  update(webhookId: string, body?: object): Promise<unknown>;
  delete(webhookId: string): Promise<unknown>;
  test(webhookId: string, body?: object): Promise<unknown>;
  rotateSecret(webhookId: string): Promise<unknown>;
  enable(webhookId: string): Promise<unknown>;
  disable(webhookId: string): Promise<unknown>;
  deliveries(webhookId: string, query: object): Promise<unknown>;
  delivery(deliveryId: string): Promise<unknown>;
  replay(webhookId: string, body?: object): Promise<unknown>;
  retry(deliveryId: string): Promise<unknown>;
}

export interface InternalSuppressionsApi {
  list(query: object): Promise<unknown>;
  get(suppressionId: string): Promise<unknown>;
  create(body: object): Promise<unknown>;
  delete(suppressionId: string): Promise<unknown>;
  restore(suppressionId: string): Promise<unknown>;
}

export interface DeliverabilityApis {
  analytics: InternalAnalyticsApi;
  events: InternalEventsApi;
  messages: InternalMessagesApi;
  webhooks: InternalWebhooksApi;
  suppressions: InternalSuppressionsApi;
}

export function createDeliverabilityApis(
  configuration: GeneratedConfiguration,
): DeliverabilityApis {
  const messages = new MessagesApi(configuration);
  return {
    analytics: new AnalyticsAdapter(new AnalyticsApi(configuration)),
    events: new EventsAdapter(new EventsApi(configuration), messages),
    messages: new MessagesAdapter(messages),
    webhooks: new WebhooksAdapter(new WebhooksApi(configuration)),
    suppressions: new SuppressionsAdapter(new SuppressionsApi(configuration)),
  };
}

class AnalyticsAdapter implements InternalAnalyticsApi {
  constructor(private readonly api: AnalyticsApi) {}

  overview(query: object): Promise<unknown> {
    return this.api.analyticsOverview(query);
  }

  messages(query: object): Promise<unknown> {
    return this.api.analyticsMessages(query);
  }

  engagement(query: object): Promise<unknown> {
    return this.api.analyticsEngagement(query);
  }

  campaigns(query: object): Promise<unknown> {
    return this.api.analyticsCampaigns(query);
  }

  domains(query: object): Promise<unknown> {
    return this.api.analyticsDomains(query);
  }

  projects(query: object): Promise<unknown> {
    return this.api.analyticsProjects(query);
  }

  providers(query: object): Promise<unknown> {
    return this.api.analyticsProviders(query);
  }
}

class EventsAdapter implements InternalEventsApi {
  constructor(
    private readonly api: EventsApi,
    private readonly messages: MessagesApi,
  ) {}

  list(query: object): Promise<unknown> {
    return this.api.listEvents(query);
  }

  get(eventId: string): Promise<unknown> {
    return this.api.getEvent({ emailEvent: eventId });
  }

  timeline(messageId: string): Promise<unknown> {
    return this.messages.messageEvents({ message: messageId });
  }

  message(messageId: string): Promise<unknown> {
    return this.messages.getMessage({ message: messageId });
  }
}

class MessagesAdapter implements InternalMessagesApi {
  constructor(private readonly api: MessagesApi) {}

  list(query: object): Promise<unknown> {
    return this.api.listMessages(query);
  }

  get(messageId: string): Promise<unknown> {
    return this.api.getMessage({ message: messageId });
  }

  events(messageId: string): Promise<unknown> {
    return this.api.messageEvents({ message: messageId });
  }
}

class WebhooksAdapter implements InternalWebhooksApi {
  constructor(private readonly api: WebhooksApi) {}

  create(body: object): Promise<unknown> {
    return this.api.createWebhook({ createWebhookRequest: body as CreateWebhookRequest });
  }

  list(query: object): Promise<unknown> {
    return this.api.listWebhooks(query);
  }

  get(webhookId: string): Promise<unknown> {
    return this.api.getWebhook({ webhook: webhookId });
  }

  update(webhookId: string, body?: object): Promise<unknown> {
    return this.api.updateWebhook({
      webhook: webhookId,
      updateWebhookRequest: body as UpdateWebhookRequest | undefined,
    });
  }

  delete(webhookId: string): Promise<unknown> {
    return this.api.deleteWebhook({ webhook: webhookId });
  }

  test(webhookId: string, body?: object): Promise<unknown> {
    return this.api.testWebhook({
      webhook: webhookId,
      testWebhookRequest: body as TestWebhookRequest | undefined,
    });
  }

  rotateSecret(webhookId: string): Promise<unknown> {
    return this.api.rotateWebhookSecret({ webhook: webhookId });
  }

  enable(webhookId: string): Promise<unknown> {
    return this.api.enableWebhook({ webhook: webhookId });
  }

  disable(webhookId: string): Promise<unknown> {
    return this.api.disableWebhook({ webhook: webhookId });
  }

  deliveries(webhookId: string, query: object): Promise<unknown> {
    return this.api.listWebhookDeliveries({ webhook: webhookId, ...query });
  }

  delivery(deliveryId: string): Promise<unknown> {
    return this.api.getWebhookDelivery({ webhookDelivery: deliveryId });
  }

  replay(webhookId: string, body?: object): Promise<unknown> {
    return this.api.replayWebhookDeliveries({
      webhook: webhookId,
      replayWebhookRequest: body as ReplayWebhookRequest | undefined,
    });
  }

  retry(deliveryId: string): Promise<unknown> {
    return this.api.replayWebhookDelivery({ webhookDelivery: deliveryId });
  }
}

class SuppressionsAdapter implements InternalSuppressionsApi {
  constructor(private readonly api: SuppressionsApi) {}

  list(query: object): Promise<unknown> {
    return this.api.listSuppressions(query);
  }

  get(suppressionId: string): Promise<unknown> {
    return this.api.getSuppression({ suppression: suppressionId });
  }

  create(body: object): Promise<unknown> {
    return this.api.createSuppression({
      createSuppressionRequest: body as CreateSuppressionRequest,
    });
  }

  delete(suppressionId: string): Promise<unknown> {
    return this.api.deleteSuppression({ suppression: suppressionId });
  }

  restore(suppressionId: string): Promise<unknown> {
    return this.api.restoreSuppression({ suppression: suppressionId });
  }
}
