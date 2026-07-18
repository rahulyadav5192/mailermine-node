import type { JsonObject, JsonValue } from '../types/json.js';

export type SortDirection = 'asc' | 'desc';

export interface PaginationOptions {
  page?: number;
  perPage?: number;
}

export interface ListOptions extends PaginationOptions {
  search?: string;
  status?: string;
  sort?: string;
  direction?: SortDirection;
}

export interface EmailAttachmentInput {
  filename: string;
  /** Base64-encoded attachment content. */
  content: string;
  contentType?: string;
}

export interface SendEmailInput {
  from: string;
  to: string | readonly string[];
  cc?: readonly string[];
  bcc?: readonly string[];
  templateId?: string;
  variables?: JsonObject;
  subject?: string;
  html?: string;
  text?: string;
  replyTo?: string;
  metadata?: JsonObject;
  tags?: readonly string[];
  headers?: Readonly<Record<string, string>>;
  attachments?: readonly EmailAttachmentInput[];
  /** ISO-8601 delivery time. Passed through when supported by the API account. */
  scheduledAt?: string;
}

export interface EmailListOptions extends PaginationOptions {
  search?: string;
  status?: string;
  provider?: string;
  from?: string;
  to?: string;
}

export interface EmailMessage {
  id: string;
  fromEmail?: string;
  fromName?: string | null;
  toEmail?: string;
  to?: readonly string[];
  subject?: string;
  status: string;
  provider?: string;
  providerMessageId?: string | null;
  errorMessage?: string | null;
  metadata?: JsonObject;
  tags?: readonly string[];
  scheduledAt?: string | null;
  sentAt?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  timeline?: readonly EmailEvent[];
}

export interface EmailEvent {
  id?: string;
  type?: string;
  event?: string;
  status?: string;
  occurredAt?: string | null;
  createdAt?: string | null;
  metadata?: JsonObject;
  [key: string]: JsonValue | undefined;
}

export type ProjectEnvironment = 'production' | 'staging' | 'development' | 'test';

export interface CreateProjectInput {
  name: string;
  slug?: string | null;
  description?: string | null;
  environment?: ProjectEnvironment | null;
  timezone?: string | null;
  defaultSender?: string | null;
  settings?: JsonObject;
}

export interface UpdateProjectInput {
  name?: string;
  slug?: string | null;
  description?: string | null;
  environment?: ProjectEnvironment | null;
  timezone?: string | null;
  defaultSender?: string | null;
  status?: 'active' | 'archived';
  settings?: JsonObject;
}

export interface Project {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  environment: string;
  timezone: string;
  defaultSender: string | null;
  status: string;
  settings: JsonObject;
  emailCount: number;
  domainCount: number;
  apiKeyCount: number;
  createdAt: string | null;
  updatedAt: string | null;
}

export type ApiKeyScope =
  | 'emails.send'
  | 'emails.read'
  | 'templates.read'
  | 'templates.write'
  | 'domains.read'
  | 'domains.write'
  | 'contacts.read'
  | 'contacts.write'
  | 'campaigns.read'
  | 'campaigns.write'
  | 'analytics.read'
  | 'billing.read'
  | 'projects.read'
  | 'projects.write'
  | 'api_keys.read'
  | 'api_keys.write'
  | 'admin';

export interface CreateApiKeyInput {
  name: string;
  expiresAt?: string | null;
  scopes?: readonly ApiKeyScope[];
}

export interface UpdateApiKeyInput {
  name?: string;
  expiresAt?: string | null;
  scopes?: readonly ApiKeyScope[];
  status?: 'active' | 'disabled';
}

export interface ApiKey {
  id: string;
  name: string;
  prefix: string;
  maskedKey: string;
  status: string;
  scopes: readonly string[] | null;
  permissions: readonly string[] | null;
  environment: string | null;
  lastUsedAt: string | null;
  expiresAt: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  /** One-time plaintext secret returned only on create or rotation. */
  secret: string | null;
  key: string | null;
}

export interface CreateDomainInput {
  domain: string;
}

export interface DnsRecord {
  type: string;
  name: string;
  value: string;
  status?: string;
  verified?: boolean;
  purpose?: string;
  priority?: number | null;
}

export interface Domain {
  id: string;
  domain: string;
  status: string;
  verified: boolean;
  verificationStatus: string;
  provider: string | null;
  createdAt: string | null;
  verifiedAt: string | null;
  lastCheckedAt: string | null;
  dnsStatus: string;
  dkimStatus: string;
  spfStatus: string;
  trackingStatus: string;
  mailFrom: string | null;
  verificationError: string | null;
  verificationToken: string | null;
  dnsRecords: readonly DnsRecord[];
}

export interface DomainStatus {
  status: string;
  verified: boolean;
  verificationStatus: string;
  dnsStatus: string;
  dkimStatus: string;
  spfStatus: string;
  trackingStatus: string;
  lastCheckedAt: string | null;
  verificationError: string | null;
}

export type TemplateStatus = 'draft' | 'published' | 'archived';
export type TemplateVariableType = 'string' | 'number' | 'boolean' | 'date';

export interface TemplateVariableInput {
  name: string;
  type: TemplateVariableType;
  required?: boolean;
  defaultValue?: string | null;
}

export interface TemplateBrandingInput {
  layout?: string | null;
  logoUrl?: string | null;
  logoAlt?: string | null;
  companyName?: string | null;
  primaryColor?: string | null;
  backgroundColor?: string | null;
  contentBackgroundColor?: string | null;
  textColor?: string | null;
  mutedTextColor?: string | null;
  buttonTextColor?: string | null;
  fontFamily?: string | null;
  footerText?: string | null;
  supportEmail?: string | null;
  websiteUrl?: string | null;
}

export interface CreateTemplateInput {
  name: string;
  description?: string | null;
  subject: string;
  html?: string | null;
  text?: string | null;
  status?: TemplateStatus | null;
  editorType?: string | null;
  category?: string | null;
  tags?: readonly string[];
  variables?: readonly TemplateVariableInput[];
  branding?: TemplateBrandingInput;
}

export type UpdateTemplateInput = Partial<CreateTemplateInput>;

export interface PreviewTemplateInput {
  variables?: JsonObject;
}

export interface DuplicateTemplateInput {
  name?: string | null;
}

export interface TestTemplateInput {
  to?: string;
  /** Backward-compatible alias for `to`. */
  email?: string;
  variables?: JsonObject;
  subject?: string | null;
}

export interface TemplateTestResult {
  queued?: boolean;
  messageId?: string | null;
  [key: string]: JsonValue | undefined;
}

export interface Template {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  subject: string;
  status: string;
  editorType: string;
  category: string | null;
  tags: readonly string[];
  createdAt: string | null;
  updatedAt: string | null;
  html: string | null;
  text: string | null;
  htmlContent: string | null;
  textContent: string | null;
  branding: JsonObject | null;
  metadata: JsonObject | null;
  variables: readonly JsonObject[];
}

export interface TemplatePreview {
  subject: string;
  html: string | null;
  text: string | null;
  [key: string]: JsonValue | undefined;
}

export interface DeleteResult {
  deleted: true;
}
