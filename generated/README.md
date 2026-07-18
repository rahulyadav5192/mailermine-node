# @mailermine/generated@1.0.0

A TypeScript SDK client for the 127.0.0.1 API.

## Usage

First, install the SDK from npm.

```bash
npm install @mailermine/generated --save
```

Next, try it out.


```ts
import {
  Configuration,
  APIKeysApi,
} from '@mailermine/generated';
import type { CreateApiKeyOperationRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new APIKeysApi(config);

  const body = {
    // string | Parent project UUID.
    project: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // CreateApiKeyRequest
    createApiKeyRequest: ...,
  } satisfies CreateApiKeyOperationRequest;

  try {
    const data = await api.createApiKey(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *http://127.0.0.1:8000/api/v1*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*APIKeysApi* | [**createApiKey**](docs/APIKeysApi.md#createapikeyoperation) | **POST** /projects/{project}/api-keys | Create API key
*APIKeysApi* | [**deleteApiKey**](docs/APIKeysApi.md#deleteapikey) | **DELETE** /projects/{project}/api-keys/{apiKey} | Delete API key
*APIKeysApi* | [**getApiKey**](docs/APIKeysApi.md#getapikey) | **GET** /projects/{project}/api-keys/{apiKey} | Get API key
*APIKeysApi* | [**listApiKeys**](docs/APIKeysApi.md#listapikeys) | **GET** /projects/{project}/api-keys | List API keys
*APIKeysApi* | [**revealApiKey**](docs/APIKeysApi.md#revealapikey) | **POST** /projects/{project}/api-keys/{apiKey}/reveal | Reveal API key
*APIKeysApi* | [**rotateApiKey**](docs/APIKeysApi.md#rotateapikey) | **POST** /projects/{project}/api-keys/{apiKey}/rotate | Rotate API key
*APIKeysApi* | [**updateApiKey**](docs/APIKeysApi.md#updateapikeyoperation) | **PATCH** /projects/{project}/api-keys/{apiKey} | Update API key
*AnalyticsApi* | [**analyticsCampaigns**](docs/AnalyticsApi.md#analyticscampaigns) | **GET** /analytics/campaigns | Campaign analytics breakdown
*AnalyticsApi* | [**analyticsDomains**](docs/AnalyticsApi.md#analyticsdomains) | **GET** /analytics/domains | Domain analytics
*AnalyticsApi* | [**analyticsEngagement**](docs/AnalyticsApi.md#analyticsengagement) | **GET** /analytics/engagement | Engagement analytics
*AnalyticsApi* | [**analyticsMessages**](docs/AnalyticsApi.md#analyticsmessages) | **GET** /analytics/messages | Message analytics
*AnalyticsApi* | [**analyticsOverview**](docs/AnalyticsApi.md#analyticsoverview) | **GET** /analytics/overview | Analytics overview
*AnalyticsApi* | [**analyticsProjects**](docs/AnalyticsApi.md#analyticsprojects) | **GET** /analytics/projects | Project analytics
*AnalyticsApi* | [**analyticsProviders**](docs/AnalyticsApi.md#analyticsproviders) | **GET** /analytics/providers | Provider analytics
*AudiencesApi* | [**addAudienceMembers**](docs/AudiencesApi.md#addaudiencemembers) | **POST** /audiences/{source}/{audience}/contacts | Add audience members
*AudiencesApi* | [**getAudience**](docs/AudiencesApi.md#getaudience) | **GET** /audiences/{source}/{audience} | Get audience
*AudiencesApi* | [**listAudiences**](docs/AudiencesApi.md#listaudiences) | **GET** /audiences | List audiences
*AudiencesApi* | [**removeAudienceMembers**](docs/AudiencesApi.md#removeaudiencemembers) | **DELETE** /audiences/{source}/{audience}/contacts | Remove audience members
*CampaignAnalyticsApi* | [**campaignAnalytics**](docs/CampaignAnalyticsApi.md#campaignanalytics) | **GET** /campaigns/{campaign}/analytics | Get campaign analytics
*CampaignAnalyticsApi* | [**campaignLinks**](docs/CampaignAnalyticsApi.md#campaignlinks) | **GET** /campaigns/{campaign}/links | Get campaign links
*CampaignEventsApi* | [**campaignActivities**](docs/CampaignEventsApi.md#campaignactivities) | **GET** /campaigns/{campaign}/activities | List campaign activities
*CampaignEventsApi* | [**campaignEvents**](docs/CampaignEventsApi.md#campaignevents) | **GET** /campaigns/{campaign}/events | List campaign events
*CampaignEventsApi* | [**campaignRecipients**](docs/CampaignEventsApi.md#campaignrecipients) | **GET** /campaigns/{campaign}/recipients | List campaign recipients
*CampaignEventsApi* | [**campaignTimeline**](docs/CampaignEventsApi.md#campaigntimeline) | **GET** /campaigns/{campaign}/timeline | Get campaign timeline
*CampaignLifecycleApi* | [**archiveCampaign**](docs/CampaignLifecycleApi.md#archivecampaign) | **POST** /campaigns/{campaign}/archive | Archive campaign
*CampaignLifecycleApi* | [**cancelCampaign**](docs/CampaignLifecycleApi.md#cancelcampaign) | **POST** /campaigns/{campaign}/cancel | Cancel campaign
*CampaignLifecycleApi* | [**duplicateCampaign**](docs/CampaignLifecycleApi.md#duplicatecampaignoperation) | **POST** /campaigns/{campaign}/duplicate | Duplicate campaign
*CampaignLifecycleApi* | [**getCampaignProgress**](docs/CampaignLifecycleApi.md#getcampaignprogress) | **GET** /campaigns/{campaign}/progress | Get campaign progress
*CampaignLifecycleApi* | [**pauseCampaign**](docs/CampaignLifecycleApi.md#pausecampaign) | **POST** /campaigns/{campaign}/pause | Pause campaign
*CampaignLifecycleApi* | [**readyCampaign**](docs/CampaignLifecycleApi.md#readycampaign) | **POST** /campaigns/{campaign}/mark-ready | Mark campaign ready
*CampaignLifecycleApi* | [**restoreCampaign**](docs/CampaignLifecycleApi.md#restorecampaign) | **POST** /campaigns/{campaignUuid}/restore | Restore campaign
*CampaignLifecycleApi* | [**resumeCampaign**](docs/CampaignLifecycleApi.md#resumecampaign) | **POST** /campaigns/{campaign}/resume | Resume campaign
*CampaignLifecycleApi* | [**scheduleCampaign**](docs/CampaignLifecycleApi.md#schedulecampaignoperation) | **POST** /campaigns/{campaign}/schedule | Schedule campaign
*CampaignLifecycleApi* | [**sendCampaign**](docs/CampaignLifecycleApi.md#sendcampaign) | **POST** /campaigns/{campaign}/send | Send campaign
*CampaignsApi* | [**createCampaign**](docs/CampaignsApi.md#createcampaignoperation) | **POST** /campaigns | Create campaign
*CampaignsApi* | [**deleteCampaign**](docs/CampaignsApi.md#deletecampaign) | **DELETE** /campaigns/{campaign} | Delete campaign
*CampaignsApi* | [**getCampaign**](docs/CampaignsApi.md#getcampaign) | **GET** /campaigns/{campaign} | Get campaign
*CampaignsApi* | [**listCampaigns**](docs/CampaignsApi.md#listcampaigns) | **GET** /campaigns | List campaigns
*CampaignsApi* | [**previewCampaign**](docs/CampaignsApi.md#previewcampaign) | **GET** /campaigns/{campaign}/preview | Preview campaign
*CampaignsApi* | [**previewCampaignRecipients**](docs/CampaignsApi.md#previewcampaignrecipients) | **GET** /campaigns/{campaign}/recipient-preview | Preview campaign recipients
*CampaignsApi* | [**updateCampaign**](docs/CampaignsApi.md#updatecampaignoperation) | **PATCH** /campaigns/{campaign} | Update campaign
*CampaignsApi* | [**validateCampaign**](docs/CampaignsApi.md#validatecampaign) | **GET** /campaigns/{campaign}/validate | Validate campaign
*ContactsApi* | [**bulkDeleteContacts**](docs/ContactsApi.md#bulkdeletecontacts) | **POST** /contacts/bulk-delete | Bulk delete contacts
*ContactsApi* | [**bulkRestoreContacts**](docs/ContactsApi.md#bulkrestorecontacts) | **POST** /contacts/restore | Bulk restore contacts
*ContactsApi* | [**bulkUpdateContacts**](docs/ContactsApi.md#bulkupdatecontactsoperation) | **POST** /contacts/bulk-update | Bulk update contacts
*ContactsApi* | [**createContact**](docs/ContactsApi.md#createcontactoperation) | **POST** /contacts | Create contact
*ContactsApi* | [**deleteContact**](docs/ContactsApi.md#deletecontact) | **DELETE** /contacts/{contact} | Delete contact
*ContactsApi* | [**getContact**](docs/ContactsApi.md#getcontact) | **GET** /contacts/{contact} | Get contact
*ContactsApi* | [**listContacts**](docs/ContactsApi.md#listcontacts) | **GET** /contacts | List contacts
*ContactsApi* | [**restoreContact**](docs/ContactsApi.md#restorecontact) | **POST** /contacts/{contact}/restore | Restore contact
*ContactsApi* | [**updateContact**](docs/ContactsApi.md#updatecontactoperation) | **PATCH** /contacts/{contact} | Update contact
*DomainsApi* | [**createDomain**](docs/DomainsApi.md#createdomainoperation) | **POST** /domains | Create domain
*DomainsApi* | [**deleteDomain**](docs/DomainsApi.md#deletedomain) | **DELETE** /domains/{domain} | Delete domain
*DomainsApi* | [**getDomain**](docs/DomainsApi.md#getdomain) | **GET** /domains/{domain} | Get domain
*DomainsApi* | [**listDomains**](docs/DomainsApi.md#listdomains) | **GET** /domains | List domains
*DomainsApi* | [**verifyDomain**](docs/DomainsApi.md#verifydomain) | **POST** /domains/{domain}/verify | Verify domain
*EmailsApi* | [**sendEmail**](docs/EmailsApi.md#sendemailoperation) | **POST** /emails | Send email
*EventsApi* | [**getEvent**](docs/EventsApi.md#getevent) | **GET** /events/{emailEvent} | Get event
*EventsApi* | [**listEvents**](docs/EventsApi.md#listevents) | **GET** /events | List events
*ExportsApi* | [**downloadContactExport**](docs/ExportsApi.md#downloadcontactexport) | **GET** /contacts/exports/{contactExport}/download | Download contact export
*ExportsApi* | [**exportContacts**](docs/ExportsApi.md#exportcontactsoperation) | **POST** /contacts/export | Export contacts
*ExportsApi* | [**getContactExport**](docs/ExportsApi.md#getcontactexport) | **GET** /contacts/exports/{contactExport} | Get contact export
*ImportsApi* | [**configureContactImport**](docs/ImportsApi.md#configurecontactimportoperation) | **POST** /contacts/imports/{contactImport}/config | Configure contact import
*ImportsApi* | [**downloadContactImportFailures**](docs/ImportsApi.md#downloadcontactimportfailures) | **GET** /contacts/imports/{contactImport}/failures | Download import failures
*ImportsApi* | [**getContactImport**](docs/ImportsApi.md#getcontactimport) | **GET** /contacts/imports/{contactImport} | Get contact import
*ImportsApi* | [**importContacts**](docs/ImportsApi.md#importcontactsoperation) | **POST** /contacts/import | Upload contact import
*ImportsApi* | [**listContactImports**](docs/ImportsApi.md#listcontactimports) | **GET** /contacts/imports | List contact imports
*ImportsApi* | [**startContactImport**](docs/ImportsApi.md#startcontactimport) | **POST** /contacts/imports/{contactImport}/start | Start contact import
*ListsApi* | [**addContactsToList**](docs/ListsApi.md#addcontactstolist) | **POST** /lists/{list}/contacts | Add contacts to list
*ListsApi* | [**bulkAddContactsToList**](docs/ListsApi.md#bulkaddcontactstolist) | **POST** /lists/{list}/contacts/bulk-add | Add contacts to list
*ListsApi* | [**bulkRemoveContactsFromList**](docs/ListsApi.md#bulkremovecontactsfromlist) | **POST** /lists/{list}/contacts/bulk-remove | Remove contacts from list
*ListsApi* | [**createList**](docs/ListsApi.md#createlistoperation) | **POST** /lists | Create contact list
*ListsApi* | [**deleteList**](docs/ListsApi.md#deletelist) | **DELETE** /lists/{list} | Delete contact list
*ListsApi* | [**getList**](docs/ListsApi.md#getlist) | **GET** /lists/{list} | Get contact list
*ListsApi* | [**listLists**](docs/ListsApi.md#listlists) | **GET** /lists | List contact lists
*ListsApi* | [**removeContactsFromList**](docs/ListsApi.md#removecontactsfromlist) | **DELETE** /lists/{list}/contacts | Remove contacts from list
*ListsApi* | [**removeContactsFromListLegacy**](docs/ListsApi.md#removecontactsfromlistlegacy) | **POST** /lists/{list}/contacts/remove | Remove contacts from list
*ListsApi* | [**updateList**](docs/ListsApi.md#updatelistoperation) | **PUT** /lists/{list} | Update contact list
*MarketingApi* | [**createCustomField**](docs/MarketingApi.md#createcustomfieldoperation) | **POST** /custom-fields | Create custom field
*MarketingApi* | [**deleteCustomField**](docs/MarketingApi.md#deletecustomfield) | **DELETE** /custom-fields/{customField} | Delete custom field
*MarketingApi* | [**getCustomField**](docs/MarketingApi.md#getcustomfield) | **GET** /custom-fields/{customField} | Get custom field
*MarketingApi* | [**listCustomFields**](docs/MarketingApi.md#listcustomfields) | **GET** /custom-fields | List custom fields
*MarketingApi* | [**updateCustomField**](docs/MarketingApi.md#updatecustomfieldoperation) | **PATCH** /custom-fields/{customField} | Update custom field
*MessagesApi* | [**getMessage**](docs/MessagesApi.md#getmessage) | **GET** /delivery-logs/{message} | Get message
*MessagesApi* | [**listMessages**](docs/MessagesApi.md#listmessages) | **GET** /delivery-logs | List messages
*MessagesApi* | [**messageEvents**](docs/MessagesApi.md#messageevents) | **GET** /messages/{message}/events | Message events
*ProjectsApi* | [**createProject**](docs/ProjectsApi.md#createprojectoperation) | **POST** /projects | Create project
*ProjectsApi* | [**deleteProject**](docs/ProjectsApi.md#deleteproject) | **DELETE** /projects/{project} | Delete project
*ProjectsApi* | [**getProject**](docs/ProjectsApi.md#getproject) | **GET** /projects/{project} | Get project
*ProjectsApi* | [**listProjects**](docs/ProjectsApi.md#listprojects) | **GET** /projects | List projects
*ProjectsApi* | [**updateProject**](docs/ProjectsApi.md#updateprojectoperation) | **PATCH** /projects/{project} | Update project
*SegmentsApi* | [**countSegment**](docs/SegmentsApi.md#countsegment) | **GET** /segments/{segment}/count | Refresh segment count
*SegmentsApi* | [**createSegment**](docs/SegmentsApi.md#createsegmentoperation) | **POST** /segments | Create segment
*SegmentsApi* | [**deleteSegment**](docs/SegmentsApi.md#deletesegment) | **DELETE** /segments/{segment} | Delete segment
*SegmentsApi* | [**getSegment**](docs/SegmentsApi.md#getsegment) | **GET** /segments/{segment} | Get segment
*SegmentsApi* | [**listSegments**](docs/SegmentsApi.md#listsegments) | **GET** /segments | List segments
*SegmentsApi* | [**previewSegment**](docs/SegmentsApi.md#previewsegment) | **POST** /segments/{segment}/preview | Preview segment
*SegmentsApi* | [**previewSegmentRules**](docs/SegmentsApi.md#previewsegmentrules) | **POST** /segments/preview | Preview segment rules
*SegmentsApi* | [**updateSegment**](docs/SegmentsApi.md#updatesegmentoperation) | **PUT** /segments/{segment} | Update segment
*SuppressionsApi* | [**createSuppression**](docs/SuppressionsApi.md#createsuppressionoperation) | **POST** /suppressions | Create suppression
*SuppressionsApi* | [**deleteSuppression**](docs/SuppressionsApi.md#deletesuppression) | **DELETE** /suppressions/{suppression} | Delete suppression
*SuppressionsApi* | [**getSuppression**](docs/SuppressionsApi.md#getsuppression) | **GET** /suppressions/{suppression} | Get suppression
*SuppressionsApi* | [**listSuppressions**](docs/SuppressionsApi.md#listsuppressions) | **GET** /suppressions | List suppressions
*SuppressionsApi* | [**restoreSuppression**](docs/SuppressionsApi.md#restoresuppression) | **POST** /suppressions/{suppression}/restore | Restore suppression
*TagsApi* | [**bulkAssignTags**](docs/TagsApi.md#bulkassigntags) | **POST** /tags/bulk-assign | Bulk assign tags
*TagsApi* | [**bulkRemoveTags**](docs/TagsApi.md#bulkremovetags) | **POST** /tags/bulk-remove | Bulk remove tags
*TagsApi* | [**createTag**](docs/TagsApi.md#createtagoperation) | **POST** /tags | Create tag
*TagsApi* | [**deleteTag**](docs/TagsApi.md#deletetag) | **DELETE** /tags/{tag} | Delete tag
*TagsApi* | [**getTag**](docs/TagsApi.md#gettag) | **GET** /tags/{tag} | Get tag
*TagsApi* | [**listTags**](docs/TagsApi.md#listtags) | **GET** /tags | List tags
*TagsApi* | [**updateTag**](docs/TagsApi.md#updatetagoperation) | **PATCH** /tags/{tag} | Update tag
*TemplatesApi* | [**createTemplate**](docs/TemplatesApi.md#createtemplateoperation) | **POST** /templates | Create template
*TemplatesApi* | [**deleteTemplate**](docs/TemplatesApi.md#deletetemplate) | **DELETE** /templates/{template} | Delete template
*TemplatesApi* | [**duplicateTemplate**](docs/TemplatesApi.md#duplicatetemplateoperation) | **POST** /templates/{template}/duplicate | Duplicate template
*TemplatesApi* | [**getTemplate**](docs/TemplatesApi.md#gettemplate) | **GET** /templates/{template} | Get template
*TemplatesApi* | [**listTemplates**](docs/TemplatesApi.md#listtemplates) | **GET** /templates | List templates
*TemplatesApi* | [**previewPublishedTemplate**](docs/TemplatesApi.md#previewpublishedtemplate) | **POST** /templates/preview | Preview published template
*TemplatesApi* | [**previewTemplate**](docs/TemplatesApi.md#previewtemplateoperation) | **POST** /templates/{template}/preview | Preview template
*TemplatesApi* | [**testTemplate**](docs/TemplatesApi.md#testtemplateoperation) | **POST** /templates/{template}/test | Test template
*TemplatesApi* | [**updateTemplate**](docs/TemplatesApi.md#updatetemplateoperation) | **PATCH** /templates/{template} | Update template
*WebhooksApi* | [**createWebhook**](docs/WebhooksApi.md#createwebhookoperation) | **POST** /webhooks | Create webhook
*WebhooksApi* | [**deleteWebhook**](docs/WebhooksApi.md#deletewebhook) | **DELETE** /webhooks/{webhook} | Delete webhook
*WebhooksApi* | [**disableWebhook**](docs/WebhooksApi.md#disablewebhook) | **POST** /webhooks/{webhook}/disable | Disable webhook
*WebhooksApi* | [**enableWebhook**](docs/WebhooksApi.md#enablewebhook) | **POST** /webhooks/{webhook}/enable | Enable webhook
*WebhooksApi* | [**getWebhook**](docs/WebhooksApi.md#getwebhook) | **GET** /webhooks/{webhook} | Get webhook
*WebhooksApi* | [**getWebhookDelivery**](docs/WebhooksApi.md#getwebhookdelivery) | **GET** /webhook-deliveries/{webhookDelivery} | Get webhook delivery
*WebhooksApi* | [**listWebhookDeliveries**](docs/WebhooksApi.md#listwebhookdeliveries) | **GET** /webhooks/{webhook}/deliveries | List webhook deliveries
*WebhooksApi* | [**listWebhooks**](docs/WebhooksApi.md#listwebhooks) | **GET** /webhooks | List webhooks
*WebhooksApi* | [**replayWebhookDeliveries**](docs/WebhooksApi.md#replaywebhookdeliveries) | **POST** /webhooks/{webhook}/replay | Replay webhook deliveries
*WebhooksApi* | [**replayWebhookDelivery**](docs/WebhooksApi.md#replaywebhookdelivery) | **POST** /webhook-deliveries/{webhookDelivery}/replay | Replay webhook delivery
*WebhooksApi* | [**rotateWebhookSecret**](docs/WebhooksApi.md#rotatewebhooksecret) | **POST** /webhooks/{webhook}/rotate-secret | Rotate webhook secret
*WebhooksApi* | [**testWebhook**](docs/WebhooksApi.md#testwebhookoperation) | **POST** /webhooks/{webhook}/test | Test webhook
*WebhooksApi* | [**updateWebhook**](docs/WebhooksApi.md#updatewebhookoperation) | **PATCH** /webhooks/{webhook} | Update webhook


### Models

- [AddAudienceMembers200Response](docs/AddAudienceMembers200Response.md)
- [AddAudienceMembers200ResponseData](docs/AddAudienceMembers200ResponseData.md)
- [AddContactsToList200Response](docs/AddContactsToList200Response.md)
- [AnalyticsCampaigns](docs/AnalyticsCampaigns.md)
- [AnalyticsCampaignsCampaignsInner](docs/AnalyticsCampaignsCampaignsInner.md)
- [AnalyticsCampaignsResponse](docs/AnalyticsCampaignsResponse.md)
- [AnalyticsDomains](docs/AnalyticsDomains.md)
- [AnalyticsDomainsDomainsInner](docs/AnalyticsDomainsDomainsInner.md)
- [AnalyticsDomainsResponse](docs/AnalyticsDomainsResponse.md)
- [AnalyticsEngagement](docs/AnalyticsEngagement.md)
- [AnalyticsEngagementResponse](docs/AnalyticsEngagementResponse.md)
- [AnalyticsMessages](docs/AnalyticsMessages.md)
- [AnalyticsMessagesDailyInner](docs/AnalyticsMessagesDailyInner.md)
- [AnalyticsMessagesResponse](docs/AnalyticsMessagesResponse.md)
- [AnalyticsMessagesTotals](docs/AnalyticsMessagesTotals.md)
- [AnalyticsOverview](docs/AnalyticsOverview.md)
- [AnalyticsOverviewDailySeriesInner](docs/AnalyticsOverviewDailySeriesInner.md)
- [AnalyticsOverviewRecentActivityInner](docs/AnalyticsOverviewRecentActivityInner.md)
- [AnalyticsOverviewResponse](docs/AnalyticsOverviewResponse.md)
- [AnalyticsOverviewTopCampaignsInner](docs/AnalyticsOverviewTopCampaignsInner.md)
- [AnalyticsOverviewTopLinksInner](docs/AnalyticsOverviewTopLinksInner.md)
- [AnalyticsProjects](docs/AnalyticsProjects.md)
- [AnalyticsProjectsProjectsInner](docs/AnalyticsProjectsProjectsInner.md)
- [AnalyticsProjectsResponse](docs/AnalyticsProjectsResponse.md)
- [AnalyticsProviders](docs/AnalyticsProviders.md)
- [AnalyticsProvidersProvidersInner](docs/AnalyticsProvidersProvidersInner.md)
- [AnalyticsProvidersResponse](docs/AnalyticsProvidersResponse.md)
- [ApiKeyListResponse](docs/ApiKeyListResponse.md)
- [ApiKeyResource](docs/ApiKeyResource.md)
- [ApiKeyResponse](docs/ApiKeyResponse.md)
- [AudienceCollection](docs/AudienceCollection.md)
- [AudienceResource](docs/AudienceResource.md)
- [AudienceResponse](docs/AudienceResponse.md)
- [BulkAssignTags200Response](docs/BulkAssignTags200Response.md)
- [BulkAssignTags200ResponseData](docs/BulkAssignTags200ResponseData.md)
- [BulkContactIdsRequest](docs/BulkContactIdsRequest.md)
- [BulkDeleteContacts200Response](docs/BulkDeleteContacts200Response.md)
- [BulkDeleteContacts200ResponseData](docs/BulkDeleteContacts200ResponseData.md)
- [BulkRemoveTags200Response](docs/BulkRemoveTags200Response.md)
- [BulkRestoreContacts200Response](docs/BulkRestoreContacts200Response.md)
- [BulkRestoreContacts200ResponseData](docs/BulkRestoreContacts200ResponseData.md)
- [BulkTagContactsRequest](docs/BulkTagContactsRequest.md)
- [BulkUpdateContacts200Response](docs/BulkUpdateContacts200Response.md)
- [BulkUpdateContacts200ResponseData](docs/BulkUpdateContacts200ResponseData.md)
- [BulkUpdateContactsRequest](docs/BulkUpdateContactsRequest.md)
- [CampaignActivity](docs/CampaignActivity.md)
- [CampaignActivityCollection](docs/CampaignActivityCollection.md)
- [CampaignActivityEvent](docs/CampaignActivityEvent.md)
- [CampaignAnalytics](docs/CampaignAnalytics.md)
- [CampaignAnalyticsResponse](docs/CampaignAnalyticsResponse.md)
- [CampaignCollection](docs/CampaignCollection.md)
- [CampaignEvent](docs/CampaignEvent.md)
- [CampaignEventsResponse](docs/CampaignEventsResponse.md)
- [CampaignLink](docs/CampaignLink.md)
- [CampaignLinksResponse](docs/CampaignLinksResponse.md)
- [CampaignPreview](docs/CampaignPreview.md)
- [CampaignPreviewResponse](docs/CampaignPreviewResponse.md)
- [CampaignRecipient](docs/CampaignRecipient.md)
- [CampaignRecipientCollection](docs/CampaignRecipientCollection.md)
- [CampaignRecipientPreview](docs/CampaignRecipientPreview.md)
- [CampaignRecipientPreviewResponse](docs/CampaignRecipientPreviewResponse.md)
- [CampaignRecipientStatus](docs/CampaignRecipientStatus.md)
- [CampaignResource](docs/CampaignResource.md)
- [CampaignResponse](docs/CampaignResponse.md)
- [CampaignStatistics](docs/CampaignStatistics.md)
- [CampaignStatisticsResponse](docs/CampaignStatisticsResponse.md)
- [CampaignStatus](docs/CampaignStatus.md)
- [CampaignTimeline](docs/CampaignTimeline.md)
- [CampaignTimelineResponse](docs/CampaignTimelineResponse.md)
- [CampaignValidation](docs/CampaignValidation.md)
- [CampaignValidationResponse](docs/CampaignValidationResponse.md)
- [ConfigureContactImportRequest](docs/ConfigureContactImportRequest.md)
- [ContactCollection](docs/ContactCollection.md)
- [ContactResource](docs/ContactResource.md)
- [ContactResponse](docs/ContactResponse.md)
- [CreateApiKeyRequest](docs/CreateApiKeyRequest.md)
- [CreateCampaignRequest](docs/CreateCampaignRequest.md)
- [CreateContactRequest](docs/CreateContactRequest.md)
- [CreateCustomFieldRequest](docs/CreateCustomFieldRequest.md)
- [CreateDomainRequest](docs/CreateDomainRequest.md)
- [CreateListRequest](docs/CreateListRequest.md)
- [CreateProjectRequest](docs/CreateProjectRequest.md)
- [CreateSegmentRequest](docs/CreateSegmentRequest.md)
- [CreateSegmentRequestRules](docs/CreateSegmentRequestRules.md)
- [CreateSuppressionRequest](docs/CreateSuppressionRequest.md)
- [CreateTagRequest](docs/CreateTagRequest.md)
- [CreateTemplateRequest](docs/CreateTemplateRequest.md)
- [CreateTemplateRequestBranding](docs/CreateTemplateRequestBranding.md)
- [CreateTemplateRequestVariablesInner](docs/CreateTemplateRequestVariablesInner.md)
- [CreateWebhookRequest](docs/CreateWebhookRequest.md)
- [CustomField](docs/CustomField.md)
- [CustomFieldCollection](docs/CustomFieldCollection.md)
- [CustomFieldResponse](docs/CustomFieldResponse.md)
- [CustomFieldType](docs/CustomFieldType.md)
- [DNSRecord](docs/DNSRecord.md)
- [DeleteResponse](docs/DeleteResponse.md)
- [DeliveryLog](docs/DeliveryLog.md)
- [DomainListResponse](docs/DomainListResponse.md)
- [DomainResource](docs/DomainResource.md)
- [DomainResponse](docs/DomainResponse.md)
- [DuplicateCampaignRequest](docs/DuplicateCampaignRequest.md)
- [DuplicateTemplateRequest](docs/DuplicateTemplateRequest.md)
- [EmailAttachment](docs/EmailAttachment.md)
- [EventListResponse](docs/EventListResponse.md)
- [EventResponse](docs/EventResponse.md)
- [ExportContactsRequest](docs/ExportContactsRequest.md)
- [ExportJob](docs/ExportJob.md)
- [ExportJobResponse](docs/ExportJobResponse.md)
- [ImportContactsRequest](docs/ImportContactsRequest.md)
- [ImportJob](docs/ImportJob.md)
- [ImportJobCollection](docs/ImportJobCollection.md)
- [ImportJobDetail](docs/ImportJobDetail.md)
- [ImportJobDetailResponse](docs/ImportJobDetailResponse.md)
- [ImportJobResponse](docs/ImportJobResponse.md)
- [ImportProgress](docs/ImportProgress.md)
- [InlineObject](docs/InlineObject.md)
- [InlineObject1](docs/InlineObject1.md)
- [ListCollection](docs/ListCollection.md)
- [ListContactsMembershipRequest](docs/ListContactsMembershipRequest.md)
- [ListResource](docs/ListResource.md)
- [ListResponse](docs/ListResponse.md)
- [Message](docs/Message.md)
- [MessageDetailResponse](docs/MessageDetailResponse.md)
- [MessageEventsResponse](docs/MessageEventsResponse.md)
- [MessageListResponse](docs/MessageListResponse.md)
- [MessageStatus](docs/MessageStatus.md)
- [PaginationMeta](docs/PaginationMeta.md)
- [PreviewSegmentRequest](docs/PreviewSegmentRequest.md)
- [PreviewSegmentRequestRules](docs/PreviewSegmentRequestRules.md)
- [PreviewSegmentRequestRulesRulesInner](docs/PreviewSegmentRequestRulesRulesInner.md)
- [PreviewTemplateByIdRequest](docs/PreviewTemplateByIdRequest.md)
- [PreviewTemplateRequest](docs/PreviewTemplateRequest.md)
- [ProjectListResponse](docs/ProjectListResponse.md)
- [ProjectResource](docs/ProjectResource.md)
- [ProjectResponse](docs/ProjectResponse.md)
- [RemoveAudienceMembers200Response](docs/RemoveAudienceMembers200Response.md)
- [RemoveAudienceMembers200ResponseData](docs/RemoveAudienceMembers200ResponseData.md)
- [RemoveContactsFromList200Response](docs/RemoveContactsFromList200Response.md)
- [ReplayWebhookRequest](docs/ReplayWebhookRequest.md)
- [ScheduleCampaignRequest](docs/ScheduleCampaignRequest.md)
- [SegmentCollection](docs/SegmentCollection.md)
- [SegmentCountResponse](docs/SegmentCountResponse.md)
- [SegmentCountResponseData](docs/SegmentCountResponseData.md)
- [SegmentPreviewResponse](docs/SegmentPreviewResponse.md)
- [SegmentPreviewResponseData](docs/SegmentPreviewResponseData.md)
- [SegmentResource](docs/SegmentResource.md)
- [SegmentResponse](docs/SegmentResponse.md)
- [SendEmailRequest](docs/SendEmailRequest.md)
- [SendEmailRequestAttachmentsInner](docs/SendEmailRequestAttachmentsInner.md)
- [SendEmailResponse](docs/SendEmailResponse.md)
- [Suppression](docs/Suppression.md)
- [SuppressionListResponse](docs/SuppressionListResponse.md)
- [SuppressionReason](docs/SuppressionReason.md)
- [SuppressionResponse](docs/SuppressionResponse.md)
- [TagCollection](docs/TagCollection.md)
- [TagResource](docs/TagResource.md)
- [TagResponse](docs/TagResponse.md)
- [TemplateLayoutStyle](docs/TemplateLayoutStyle.md)
- [TemplateListResponse](docs/TemplateListResponse.md)
- [TemplatePreview](docs/TemplatePreview.md)
- [TemplatePreviewResponse](docs/TemplatePreviewResponse.md)
- [TemplateResource](docs/TemplateResource.md)
- [TemplateResponse](docs/TemplateResponse.md)
- [TemplateStatus](docs/TemplateStatus.md)
- [TemplateTestResponse](docs/TemplateTestResponse.md)
- [TemplateTestResponseData](docs/TemplateTestResponseData.md)
- [TemplateVariable](docs/TemplateVariable.md)
- [TemplateVariableType](docs/TemplateVariableType.md)
- [TestTemplateRequest](docs/TestTemplateRequest.md)
- [TestWebhookRequest](docs/TestWebhookRequest.md)
- [TimelineEvent](docs/TimelineEvent.md)
- [UpdateApiKeyRequest](docs/UpdateApiKeyRequest.md)
- [UpdateCampaignRequest](docs/UpdateCampaignRequest.md)
- [UpdateContactRequest](docs/UpdateContactRequest.md)
- [UpdateCustomFieldRequest](docs/UpdateCustomFieldRequest.md)
- [UpdateListRequest](docs/UpdateListRequest.md)
- [UpdateProjectRequest](docs/UpdateProjectRequest.md)
- [UpdateSegmentRequest](docs/UpdateSegmentRequest.md)
- [UpdateSegmentRequestRules](docs/UpdateSegmentRequestRules.md)
- [UpdateTagRequest](docs/UpdateTagRequest.md)
- [UpdateTemplateRequest](docs/UpdateTemplateRequest.md)
- [UpdateWebhookRequest](docs/UpdateWebhookRequest.md)
- [Webhook](docs/Webhook.md)
- [WebhookDelivery](docs/WebhookDelivery.md)
- [WebhookDeliveryListResponse](docs/WebhookDeliveryListResponse.md)
- [WebhookDeliveryMessage](docs/WebhookDeliveryMessage.md)
- [WebhookDeliveryResponse](docs/WebhookDeliveryResponse.md)
- [WebhookDeliveryStatus](docs/WebhookDeliveryStatus.md)
- [WebhookDeliveryWebhook](docs/WebhookDeliveryWebhook.md)
- [WebhookLastDelivery](docs/WebhookLastDelivery.md)
- [WebhookListResponse](docs/WebhookListResponse.md)
- [WebhookProject](docs/WebhookProject.md)
- [WebhookReplayResponse](docs/WebhookReplayResponse.md)
- [WebhookReplayResponseData](docs/WebhookReplayResponseData.md)
- [WebhookResponse](docs/WebhookResponse.md)
- [WebhookRetryPolicy](docs/WebhookRetryPolicy.md)
- [WebhookSecretResponse](docs/WebhookSecretResponse.md)
- [WebhookWithSecret](docs/WebhookWithSecret.md)

### Authorization


Authentication schemes defined for the API:
<a id="bearerAuth"></a>
#### bearerAuth


- **Type**: HTTP Bearer Token authentication (API Key)

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.0.0`
- Package version: `1.0.0`
- Generator version: `7.23.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[MailerMine API License](http://127.0.0.1:8000/legal/terms)
