import { Configuration } from './config/index.js';
import type { ConfigurationOptions } from './config/types.js';
import {
  createInternalApis,
  type InternalApis,
} from './internal/generated-client.js';
import { Analytics } from './resources/analytics.js';
import { ApiKeys } from './resources/api-keys.js';
import { Audiences } from './resources/audiences.js';
import { Campaigns } from './resources/campaigns.js';
import { Contacts } from './resources/contacts.js';
import { Domains } from './resources/domains.js';
import { Emails } from './resources/emails.js';
import { Exports } from './resources/exports.js';
import { Events } from './resources/events.js';
import { Imports } from './resources/imports.js';
import { Lists } from './resources/lists.js';
import { Messages } from './resources/messages.js';
import { Projects } from './resources/projects.js';
import { Segments } from './resources/segments.js';
import { Tags } from './resources/tags.js';
import { Templates } from './resources/templates.js';
import { Suppressions } from './resources/suppressions.js';
import { Webhooks } from './resources/webhooks.js';

/**
 * Official MailerMine Node.js SDK client.
 *
 * @example
 * ```ts
 * const mm = new MailerMine({
 *   apiKey: process.env.MAILERMINE_API_KEY!,
 * });
 *
 * await mm.emails.send({
 *   from: 'hello@example.com',
 *   to: 'user@example.com',
 *   subject: 'Welcome',
 *   html: '<p>Hello</p>',
 *   text: 'Hello',
 * });
 * ```
 */
export class MailerMine {
  readonly configuration: Configuration;

  private readonly apis: InternalApis;
  private emailsResource?: Emails;
  private projectsResource?: Projects;
  private apiKeysResource?: ApiKeys;
  private domainsResource?: Domains;
  private templatesResource?: Templates;
  private contactsResource?: Contacts;
  private listsResource?: Lists;
  private segmentsResource?: Segments;
  private tagsResource?: Tags;
  private audiencesResource?: Audiences;
  private campaignsResource?: Campaigns;
  private importsResource?: Imports;
  private exportsResource?: Exports;
  private analyticsResource?: Analytics;
  private eventsResource?: Events;
  private messagesResource?: Messages;
  private webhooksResource?: Webhooks;
  private suppressionsResource?: Suppressions;

  constructor(apiKeyOrOptions: string | ConfigurationOptions | Configuration) {
    this.configuration =
      apiKeyOrOptions instanceof Configuration
        ? apiKeyOrOptions
        : Configuration.create(apiKeyOrOptions);
    this.apis = createInternalApis(this.configuration);
  }

  /** Transactional email operations. */
  get emails(): Emails {
    return (this.emailsResource ??= new Emails(this.apis.emails));
  }

  /** Workspace project operations. */
  get projects(): Projects {
    return (this.projectsResource ??= new Projects(this.apis.projects));
  }

  /** Project API key operations. */
  get apiKeys(): ApiKeys {
    return (this.apiKeysResource ??= new ApiKeys(this.apis.apiKeys));
  }

  /** Sending domain operations. */
  get domains(): Domains {
    return (this.domainsResource ??= new Domains(this.apis.domains));
  }

  /** Email template operations. */
  get templates(): Templates {
    return (this.templatesResource ??= new Templates(this.apis.templates));
  }

  /** Contact operations. */
  get contacts(): Contacts {
    return (this.contactsResource ??= new Contacts(this.apis.contacts));
  }

  /** Static mailing list operations. */
  get lists(): Lists {
    return (this.listsResource ??= new Lists(this.apis.lists));
  }

  /** Dynamic segment operations. */
  get segments(): Segments {
    return (this.segmentsResource ??= new Segments(this.apis.segments));
  }

  /** Contact tag operations. */
  get tags(): Tags {
    return (this.tagsResource ??= new Tags(this.apis.tags));
  }

  /** Unified audience catalog (lists and segments). */
  get audiences(): Audiences {
    return (this.audiencesResource ??= new Audiences(
      this.apis.audiences,
      this.lists,
      this.segments,
      this.contacts,
    ));
  }

  /** Marketing campaign operations. */
  get campaigns(): Campaigns {
    return (this.campaignsResource ??= new Campaigns(this.apis.campaigns));
  }

  /** Contact import job operations. */
  get imports(): Imports {
    return (this.importsResource ??= new Imports(this.apis.imports));
  }

  /** Contact export job operations. */
  get exports(): Exports {
    return (this.exportsResource ??= new Exports(this.apis.exports));
  }

  /** Account-wide delivery and engagement analytics. */
  get analytics(): Analytics {
    return (this.analyticsResource ??= new Analytics(
      this.apis.analytics,
      this.campaigns,
      this.events,
    ));
  }

  /** Global message and delivery lifecycle events. */
  get events(): Events {
    return (this.eventsResource ??= new Events(this.apis.events));
  }

  /** Delivery logs and outbound message history. */
  get messages(): Messages {
    return (this.messagesResource ??= new Messages(this.apis.messages));
  }

  /** Webhook endpoint and delivery operations. */
  get webhooks(): Webhooks {
    return (this.webhooksResource ??= new Webhooks(this.apis.webhooks));
  }

  /** Account suppression-list operations. */
  get suppressions(): Suppressions {
    return (this.suppressionsResource ??= new Suppressions(this.apis.suppressions));
  }
}
