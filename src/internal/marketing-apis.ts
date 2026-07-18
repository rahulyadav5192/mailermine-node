import { AudiencesApi } from '../../generated/src/apis/AudiencesApi.js';
import { CampaignAnalyticsApi } from '../../generated/src/apis/CampaignAnalyticsApi.js';
import { CampaignEventsApi } from '../../generated/src/apis/CampaignEventsApi.js';
import { CampaignLifecycleApi } from '../../generated/src/apis/CampaignLifecycleApi.js';
import { CampaignsApi } from '../../generated/src/apis/CampaignsApi.js';
import { ContactsApi } from '../../generated/src/apis/ContactsApi.js';
import { ExportsApi } from '../../generated/src/apis/ExportsApi.js';
import { ImportsApi } from '../../generated/src/apis/ImportsApi.js';
import { ListsApi } from '../../generated/src/apis/ListsApi.js';
import { SegmentsApi } from '../../generated/src/apis/SegmentsApi.js';
import { TagsApi } from '../../generated/src/apis/TagsApi.js';
import type {
  BulkTagContactsRequest,
  CreateCampaignRequest,
  ConfigureContactImportRequest,
  CreateContactRequest,
  CreateListRequest,
  CreateSegmentRequest,
  CreateTagRequest,
  DuplicateCampaignRequest,
  ExportContactsRequest,
  ImportContactsRequest,
  ListContactsMembershipRequest,
  PreviewSegmentRequest,
  ScheduleCampaignRequest,
  UpdateCampaignRequest,
  UpdateContactRequest,
  UpdateListRequest,
  UpdateSegmentRequest,
  UpdateTagRequest,
} from '../../generated/src/models/index.js';
import type { Configuration as GeneratedConfiguration } from '../../generated/src/runtime.js';
import type { HTTPHeaders } from '../../generated/src/runtime.js';

export interface InternalContactsApi {
  create(body: object): Promise<unknown>;
  list(query: object): Promise<unknown>;
  get(contactId: string): Promise<unknown>;
  update(contactId: string, body: object): Promise<unknown>;
  delete(contactId: string): Promise<unknown>;
}

export interface InternalListsApi {
  create(body: object): Promise<unknown>;
  list(query: object): Promise<unknown>;
  get(listId: string): Promise<unknown>;
  update(listId: string, body: object): Promise<unknown>;
  delete(listId: string): Promise<unknown>;
  addContacts(listId: string, body: object): Promise<unknown>;
  removeContacts(listId: string, body: object): Promise<unknown>;
}

export interface InternalSegmentsApi {
  create(body: object): Promise<unknown>;
  list(query: object): Promise<unknown>;
  get(segmentId: string): Promise<unknown>;
  update(segmentId: string, body: object): Promise<unknown>;
  delete(segmentId: string): Promise<unknown>;
  preview(segmentId: string): Promise<unknown>;
  previewRules(body: object): Promise<unknown>;
}

export interface InternalTagsApi {
  create(body: object): Promise<unknown>;
  list(query: object): Promise<unknown>;
  get(tagId: string): Promise<unknown>;
  update(tagId: string, body: object): Promise<unknown>;
  delete(tagId: string): Promise<unknown>;
  assign(body: object): Promise<unknown>;
  remove(body: object): Promise<unknown>;
}

export interface InternalAudiencesApi {
  list(query: object): Promise<unknown>;
  get(source: string, audienceId: string): Promise<unknown>;
  addContacts(audienceId: string, body: object): Promise<unknown>;
  removeContacts(audienceId: string, contactIds: readonly string[]): Promise<unknown>;
}

export interface InternalCampaignsApi {
  create(body: object): Promise<unknown>;
  list(query: object): Promise<unknown>;
  get(campaignId: string): Promise<unknown>;
  update(campaignId: string, body: object): Promise<unknown>;
  delete(campaignId: string): Promise<unknown>;
  preview(campaignId: string): Promise<unknown>;
  previewRecipients(campaignId: string): Promise<unknown>;
  validate(campaignId: string): Promise<unknown>;
  duplicate(campaignId: string, body?: object): Promise<unknown>;
  archive(campaignId: string): Promise<unknown>;
  restore(campaignId: string): Promise<unknown>;
  progress(campaignId: string): Promise<unknown>;
  analytics(campaignId: string): Promise<unknown>;
  links(campaignId: string): Promise<unknown>;
  events(campaignId: string): Promise<unknown>;
  activity(campaignId: string): Promise<unknown>;
  timeline(campaignId: string): Promise<unknown>;
  recipients(campaignId: string, query: object): Promise<unknown>;
  ready(campaignId: string): Promise<unknown>;
  send(campaignId: string): Promise<unknown>;
  schedule(campaignId: string, body: object): Promise<unknown>;
  pause(campaignId: string): Promise<unknown>;
  resume(campaignId: string): Promise<unknown>;
  cancel(campaignId: string): Promise<unknown>;
}

export interface InternalImportsApi {
  list(): Promise<unknown>;
  create(body: object): Promise<unknown>;
  get(importId: string): Promise<unknown>;
  configure(importId: string, body: object): Promise<unknown>;
  start(importId: string): Promise<unknown>;
}

export interface InternalExportsApi {
  create(body?: object): Promise<unknown>;
  get(exportId: string): Promise<unknown>;
  download(exportId: string): Promise<string>;
}

export interface MarketingApis {
  contacts: InternalContactsApi;
  lists: InternalListsApi;
  segments: InternalSegmentsApi;
  tags: InternalTagsApi;
  audiences: InternalAudiencesApi;
  campaigns: InternalCampaignsApi;
  imports: InternalImportsApi;
  exports: InternalExportsApi;
}

export function createMarketingApis(generatedConfig: GeneratedConfiguration): MarketingApis {
  return {
    contacts: new ContactsAdapter(new ContactsApi(generatedConfig)),
    lists: new ListsAdapter(new ListsApi(generatedConfig)),
    segments: new SegmentsAdapter(new SegmentsApi(generatedConfig)),
    tags: new TagsAdapter(new TagsApi(generatedConfig)),
    audiences: new AudiencesAdapter(new AudiencesApi(generatedConfig)),
    campaigns: new CampaignsAdapter(
      new CampaignsApi(generatedConfig),
      new CampaignLifecycleApi(generatedConfig),
      new CampaignAnalyticsApi(generatedConfig),
      new CampaignEventsApi(generatedConfig),
    ),
    imports: new ImportsAdapter(new ImportsApi(generatedConfig)),
    exports: new ExportsAdapter(new ExportsApi(generatedConfig)),
  };
}

class ContactsAdapter implements InternalContactsApi {
  constructor(private readonly api: ContactsApi) {}

  create(body: object): Promise<unknown> {
    return this.api.createContact({ createContactRequest: body as CreateContactRequest });
  }

  list(query: object): Promise<unknown> {
    return this.api.listContacts(query);
  }

  get(contactId: string): Promise<unknown> {
    return this.api.getContact({ contact: contactId });
  }

  update(contactId: string, body: object): Promise<unknown> {
    return this.api.updateContact({
      contact: contactId,
      updateContactRequest: body as UpdateContactRequest,
    });
  }

  delete(contactId: string): Promise<unknown> {
    return this.api.deleteContact({ contact: contactId });
  }
}

class ListsAdapter implements InternalListsApi {
  constructor(private readonly api: ListsApi) {}

  create(body: object): Promise<unknown> {
    return this.api.createList({ createListRequest: body as CreateListRequest });
  }

  list(query: object): Promise<unknown> {
    return this.api.listLists(query);
  }

  get(listId: string): Promise<unknown> {
    return this.api.getList({ list: listId });
  }

  update(listId: string, body: object): Promise<unknown> {
    return this.api.updateList({
      list: listId,
      updateListRequest: body as UpdateListRequest,
    });
  }

  delete(listId: string): Promise<unknown> {
    return this.api.deleteList({ list: listId });
  }

  addContacts(listId: string, body: object): Promise<unknown> {
    return this.api.addContactsToList({
      list: listId,
      listContactsMembershipRequest: body as ListContactsMembershipRequest,
    });
  }

  removeContacts(listId: string, body: object): Promise<unknown> {
    return this.api.bulkRemoveContactsFromList({
      list: listId,
      listContactsMembershipRequest: body as ListContactsMembershipRequest,
    });
  }
}

class SegmentsAdapter implements InternalSegmentsApi {
  constructor(private readonly api: SegmentsApi) {}

  create(body: object): Promise<unknown> {
    return this.api.createSegment({ createSegmentRequest: body as CreateSegmentRequest });
  }

  list(query: object): Promise<unknown> {
    return this.api.listSegments(query);
  }

  get(segmentId: string): Promise<unknown> {
    return this.api.getSegment({ segment: segmentId });
  }

  update(segmentId: string, body: object): Promise<unknown> {
    return this.api.updateSegment({
      segment: segmentId,
      updateSegmentRequest: body as UpdateSegmentRequest,
    });
  }

  delete(segmentId: string): Promise<unknown> {
    return this.api.deleteSegment({ segment: segmentId });
  }

  preview(segmentId: string): Promise<unknown> {
    return this.api.previewSegment({ segment: segmentId });
  }

  previewRules(body: object): Promise<unknown> {
    return this.api.previewSegmentRules({
      previewSegmentRequest: body as PreviewSegmentRequest,
    });
  }
}

class TagsAdapter implements InternalTagsApi {
  constructor(private readonly api: TagsApi) {}

  create(body: object): Promise<unknown> {
    return this.api.createTag({ createTagRequest: body as CreateTagRequest });
  }

  list(query: object): Promise<unknown> {
    return this.api.listTags(query);
  }

  get(tagId: string): Promise<unknown> {
    return this.api.getTag({ tag: tagId });
  }

  update(tagId: string, body: object): Promise<unknown> {
    return this.api.updateTag({
      tag: tagId,
      updateTagRequest: body as UpdateTagRequest,
    });
  }

  delete(tagId: string): Promise<unknown> {
    return this.api.deleteTag({ tag: tagId });
  }

  assign(body: object): Promise<unknown> {
    return this.api.bulkAssignTags({
      bulkTagContactsRequest: body as BulkTagContactsRequest,
    });
  }

  remove(body: object): Promise<unknown> {
    return this.api.bulkRemoveTags({
      bulkTagContactsRequest: body as BulkTagContactsRequest,
    });
  }
}

class AudiencesAdapter implements InternalAudiencesApi {
  constructor(private readonly api: AudiencesApi) {}

  list(query: object): Promise<unknown> {
    return this.api.listAudiences(query);
  }

  get(source: string, audienceId: string): Promise<unknown> {
    return this.api.getAudience({ source, audience: audienceId });
  }

  addContacts(audienceId: string, body: object): Promise<unknown> {
    return this.api.addAudienceMembers({
      source: 'list',
      audience: audienceId,
      listContactsMembershipRequest: body as ListContactsMembershipRequest,
    });
  }

  removeContacts(audienceId: string, contactIds: readonly string[]): Promise<unknown> {
    return this.api.removeAudienceMembers({
      source: 'list',
      audience: audienceId,
      ids: [...contactIds],
    });
  }
}

class CampaignsAdapter implements InternalCampaignsApi {
  constructor(
    private readonly campaigns: CampaignsApi,
    private readonly lifecycle: CampaignLifecycleApi,
    private readonly analyticsApi: CampaignAnalyticsApi,
    private readonly eventsApi: CampaignEventsApi,
  ) {}

  create(body: object): Promise<unknown> {
    return this.campaigns.createCampaign({
      createCampaignRequest: body as CreateCampaignRequest,
    });
  }

  list(query: object): Promise<unknown> {
    return this.campaigns.listCampaigns(query);
  }

  get(campaignId: string): Promise<unknown> {
    return this.campaigns.getCampaign({ campaign: campaignId });
  }

  update(campaignId: string, body: object): Promise<unknown> {
    return this.campaigns.updateCampaign({
      campaign: campaignId,
      updateCampaignRequest: body as UpdateCampaignRequest,
    });
  }

  delete(campaignId: string): Promise<unknown> {
    return this.campaigns.deleteCampaign({ campaign: campaignId });
  }

  preview(campaignId: string): Promise<unknown> {
    return this.campaigns.previewCampaign({ campaign: campaignId });
  }

  previewRecipients(campaignId: string): Promise<unknown> {
    return this.campaigns.previewCampaignRecipients({ campaign: campaignId });
  }

  validate(campaignId: string): Promise<unknown> {
    return this.campaigns.validateCampaign({ campaign: campaignId });
  }

  duplicate(campaignId: string, body?: object): Promise<unknown> {
    return this.lifecycle.duplicateCampaign({
      campaign: campaignId,
      duplicateCampaignRequest:
        body === undefined ? undefined : (body as DuplicateCampaignRequest),
    });
  }

  archive(campaignId: string): Promise<unknown> {
    return this.lifecycle.archiveCampaign({ campaign: campaignId });
  }

  restore(campaignId: string): Promise<unknown> {
    return this.lifecycle.restoreCampaign({ campaignUuid: campaignId });
  }

  progress(campaignId: string): Promise<unknown> {
    return this.lifecycle.getCampaignProgress({ campaign: campaignId });
  }

  analytics(campaignId: string): Promise<unknown> {
    return this.analyticsApi.campaignAnalytics({ campaign: campaignId });
  }

  links(campaignId: string): Promise<unknown> {
    return this.analyticsApi.campaignLinks({ campaign: campaignId });
  }

  events(campaignId: string): Promise<unknown> {
    return this.eventsApi.campaignEvents({ campaign: campaignId });
  }

  activity(campaignId: string): Promise<unknown> {
    return this.eventsApi.campaignActivities({ campaign: campaignId });
  }

  timeline(campaignId: string): Promise<unknown> {
    return this.eventsApi.campaignTimeline({ campaign: campaignId });
  }

  recipients(campaignId: string, query: object): Promise<unknown> {
    return this.eventsApi.campaignRecipients({ campaign: campaignId, ...query });
  }

  ready(campaignId: string): Promise<unknown> {
    return this.lifecycle.readyCampaign({ campaign: campaignId });
  }

  send(campaignId: string): Promise<unknown> {
    return this.lifecycle.sendCampaign({ campaign: campaignId });
  }

  schedule(campaignId: string, body: object): Promise<unknown> {
    return this.lifecycle.scheduleCampaign({
      campaign: campaignId,
      scheduleCampaignRequest: body as ScheduleCampaignRequest,
    });
  }

  pause(campaignId: string): Promise<unknown> {
    return this.lifecycle.pauseCampaign({ campaign: campaignId });
  }

  resume(campaignId: string): Promise<unknown> {
    return this.lifecycle.resumeCampaign({ campaign: campaignId });
  }

  cancel(campaignId: string): Promise<unknown> {
    return this.lifecycle.cancelCampaign({ campaign: campaignId });
  }
}

class ImportsAdapter implements InternalImportsApi {
  constructor(private readonly api: ImportsApi) {}

  list(): Promise<unknown> {
    return this.api.listContactImports();
  }

  create(body: object): Promise<unknown> {
    const request = body as ImportContactsRequest & { filename?: string };
    const formData = new FormData();
    formData.append('file', request.file, request.filename ?? 'contacts.csv');

    return this.api.importContacts({ importContactsRequest: request }, async ({ init }) => {
      const headers = stripContentType(init.headers);
      return { ...init, body: formData, headers };
    });
  }

  get(importId: string): Promise<unknown> {
    return this.api.getContactImport({ contactImport: importId });
  }

  configure(importId: string, body: object): Promise<unknown> {
    return this.api.configureContactImport({
      contactImport: importId,
      configureContactImportRequest: body as ConfigureContactImportRequest,
    });
  }

  start(importId: string): Promise<unknown> {
    return this.api.startContactImport({ contactImport: importId });
  }
}

class ExportsAdapter implements InternalExportsApi {
  constructor(private readonly api: ExportsApi) {}

  create(body?: object): Promise<unknown> {
    return this.api.exportContacts({
      exportContactsRequest:
        body === undefined ? undefined : (body as ExportContactsRequest),
    });
  }

  get(exportId: string): Promise<unknown> {
    return this.api.getContactExport({ contactExport: exportId });
  }

  download(exportId: string): Promise<string> {
    return this.api.downloadContactExport({ contactExport: exportId });
  }
}

function stripContentType(headers: HeadersInit | undefined): HTTPHeaders {
  const result: HTTPHeaders = {};
  if (headers === undefined) {
    return result;
  }

  if (headers instanceof Headers) {
    headers.forEach((value, key) => {
      if (key.toLowerCase() !== 'content-type') {
        result[key] = value;
      }
    });
    return result;
  }

  const entries = Array.isArray(headers) ? headers : Object.entries(headers);
  for (const [key, value] of entries) {
    if (key.toLowerCase() === 'content-type') {
      continue;
    }
    result[key] = Array.isArray(value) ? value.join(', ') : value;
  }

  return result;
}
