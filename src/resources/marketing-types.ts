import type { JsonObject, JsonValue } from '../types/json.js';
import type { ListOptions, PaginationOptions } from './types.js';

export type ContactStatus =
  | 'active'
  | 'unsubscribed'
  | 'suppressed'
  | 'bounced'
  | 'complained'
  | 'archived';

export interface CreateContactInput {
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  status?: ContactStatus | null;
  subscribed?: boolean | null;
  source?: string | null;
  metadata?: JsonObject;
  listIds?: readonly string[] | null;
  tagIds?: readonly string[] | null;
  tagNames?: readonly string[] | null;
  customFields?: JsonObject;
}

export type UpdateContactInput = Partial<CreateContactInput>;

export interface ContactListOptions extends PaginationOptions {
  search?: string;
  q?: string;
  status?: string;
  subscribed?: boolean;
  list?: string;
  tag?: string;
  tagName?: string;
  source?: string;
  createdFrom?: string;
  createdTo?: string;
  updatedFrom?: string;
  updatedTo?: string;
  segment?: string;
  sort?: string;
  direction?: 'asc' | 'desc';
}

export interface Contact {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  status: string;
  subscribed: boolean;
  source: string;
  metadata: JsonObject;
  tags: readonly JsonObject[];
  lists: readonly JsonObject[];
  customFields: JsonObject;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface CreateContactListInput {
  name: string;
  description?: string | null;
  color?: string | null;
}

export type UpdateContactListInput = Partial<CreateContactListInput>;

export interface ContactList {
  id: string;
  name: string;
  description: string | null;
  color: string;
  subscriberCount: number;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface ListMembershipResult {
  added?: number;
  removed?: number;
}

export type SegmentLogic = 'and' | 'or';

export interface SegmentRuleCondition {
  field: string;
  operator: string;
  value?: JsonValue;
  [key: string]: JsonValue | undefined;
}

export interface SegmentRules {
  logic: SegmentLogic;
  rules: readonly (SegmentRuleCondition | SegmentRules)[];
}

export interface CreateSegmentInput {
  name: string;
  description?: string | null;
  rules: SegmentRules;
}

export interface UpdateSegmentInput {
  name?: string;
  description?: string | null;
  rules?: SegmentRules;
}

export type SegmentListOptions = ListOptions;

export interface Segment {
  id: string;
  name: string;
  description: string | null;
  rules: SegmentRules | JsonObject;
  contactCount: number;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface SegmentPreview {
  count?: number;
  estimatedCount?: number;
  sampleContacts?: readonly JsonObject[];
}

export interface CreateTagInput {
  name: string;
  color?: string | null;
}

export type UpdateTagInput = Partial<CreateTagInput>;

export type TagListOptions = ListOptions;

export interface Tag {
  id: string;
  name: string;
  color: string;
  usageCount: number;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface TagAssignmentInput {
  contactIds: string | readonly string[];
  tagIds: string | readonly string[];
}

export interface TagAssignmentResult {
  assigned?: number;
  removed?: number;
}

export type AudienceSource = 'list' | 'segment';

export type AudienceListOptions = PaginationOptions;

export interface Audience {
  type: string;
  id: string;
  name: string;
  description: string | null;
  memberCount: number;
  source: string;
}

export interface CreateAudienceInput {
  source?: AudienceSource;
  name: string;
  description?: string | null;
  color?: string | null;
  rules?: SegmentRules;
}

export interface UpdateAudienceInput {
  name?: string;
  description?: string | null;
  color?: string | null;
  rules?: SegmentRules;
}

export interface CreateCampaignInput {
  name: string;
  subject?: string | null;
  previewText?: string | null;
  preheader?: string | null;
  fromName?: string | null;
  fromEmail?: string | null;
  replyTo?: string | null;
  templateUuid?: string | null;
  templateId?: string | null;
  segmentUuid?: string | null;
  segmentId?: string | null;
  audienceId?: string | null;
  sendImmediately?: boolean;
  scheduledAt?: string | null;
  timezone?: string | null;
  builderStep?: number;
}

export type UpdateCampaignInput = Partial<CreateCampaignInput>;

export interface CampaignListOptions extends PaginationOptions {
  search?: string;
  status?: string;
}

export interface DuplicateCampaignInput {
  includeSchedule?: boolean;
}

export interface ScheduleCampaignInput {
  sendImmediately?: boolean;
  scheduledAt?: string | Date | null;
  timezone?: string | null;
}

export interface CampaignSenderInput {
  fromName?: string | null;
  fromEmail?: string | null;
}

export interface CampaignRecipientListOptions extends PaginationOptions {
  search?: string;
  status?: string;
}

export interface Campaign {
  uuid: string;
  name: string;
  subject: string | null;
  previewText: string | null;
  fromName: string | null;
  fromEmail: string | null;
  replyTo: string | null;
  status: string;
  statusLabel: string;
  sendImmediately: boolean;
  scheduledAt: string | null;
  timezone: string;
  sentAt: string | null;
  estimatedRecipients: number;
  totalRecipients: number;
  queuedCount: number;
  sendingCount: number;
  sentCount: number;
  failedCount: number;
  completedCount: number;
  completionPercentage: number;
  startedAt: string | null;
  completedAt: string | null;
  lastProcessedAt: string | null;
  builderStep: number;
  createdAt: string | null;
  updatedAt: string | null;
  project: JsonObject | null;
  template: JsonObject | null;
  segment: JsonObject | null;
}

export interface CampaignStatusSummary {
  uuid?: string;
  status?: string;
  statusLabel?: string;
  sendImmediately?: boolean;
  scheduledAt?: string | null;
  timezone?: string;
  sentAt?: string | null;
  startedAt?: string | null;
  completedAt?: string | null;
  lastProcessedAt?: string | null;
}

export interface CampaignPreview {
  subject: string;
  html: string;
  text: string | null;
  previewText: string | null;
}

export interface CampaignValidation {
  valid?: boolean;
  errors?: readonly string[];
  warnings?: readonly string[];
}

export interface CampaignRecipientPreview {
  estimatedCount: number;
  subscribedCount: number;
  unsubscribedCount: number;
  suppressedCount: number;
  sampleContacts?: readonly JsonObject[];
  warnings?: readonly string[];
}

export interface CampaignRecipientCount {
  count: number;
  estimatedCount: number | null;
  subscribedCount: number | null;
  unsubscribedCount: number | null;
  suppressedCount: number | null;
}

export interface CampaignAnalytics {
  recipients: number;
  queued: number;
  sent: number;
  delivered: number;
  opened: number;
  uniqueOpens: number;
  clicked: number;
  uniqueClicks: number;
  bounced: number;
  complained: number;
  failed: number;
  unsubscribed: number;
  deliveryRate: number;
  openRate: number;
  clickRate: number;
  bounceRate: number;
  complaintRate: number;
  failureRate: number;
  unsubscribeRate: number;
  averageDeliveryTimeSeconds: number | null;
}

export interface CampaignProgress {
  totalRecipients?: number;
  sentCount?: number;
  completionPercentage?: number;
  [key: string]: JsonValue | undefined;
}

export interface CampaignLink {
  destinationUrl: string;
  clicks: number;
  uniqueClicks: number;
  ctr: number;
  lastClickedAt: string | null;
}

export interface CampaignEventEntry {
  [key: string]: JsonValue | undefined;
}

export interface CampaignActivityEntry {
  [key: string]: JsonValue | undefined;
}

export interface CampaignTimelineEntry {
  [key: string]: JsonValue | undefined;
}

export interface CampaignRecipient {
  [key: string]: JsonValue | undefined;
}

export type ImportFileInput = Blob | Buffer | Uint8Array | ArrayBuffer;

export interface CreateImportInput {
  file: ImportFileInput;
  /** Multipart filename; defaults to `contacts.csv`. */
  filename?: string;
}

export interface ConfigureImportInput {
  fieldMappings: JsonObject | readonly string[];
  duplicateStrategy?: string | null;
  defaultStatus?: string | null;
  importSource?: string | null;
  timezone?: string | null;
  country?: string | null;
  doubleOptIn?: boolean | null;
  tagSeparator?: string | null;
  createMissingTags?: boolean | null;
  audienceMode?: string | null;
  audienceUuid?: string | null;
  createMissingAudiences?: boolean | null;
  newProperties?: JsonObject | readonly string[] | null;
}

export interface ImportJob {
  id: string;
  status: string;
  progress: number;
  originalFilename: string;
  summary: string | null;
  metadata: JsonObject;
  counters: JsonObject;
  hasFailures: boolean;
  startedAt: string | null;
  completedAt: string | null;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface CreateExportInput {
  search?: string | null;
  status?: string | null;
  subscribed?: boolean | null;
  list?: string | null;
  tagName?: string | null;
  ids?: readonly string[] | null;
}

export interface ExportJob {
  id: string;
  status: string;
  contactCount: number;
  filters: JsonObject;
  downloadUrl: string | null;
  completedAt: string | null;
  createdAt: string | null;
  updatedAt: string | null;
}
