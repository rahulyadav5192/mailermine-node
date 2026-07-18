# Phase 2 Report — OpenAPI Client Generation

**Generated:** 2026-07-17T13:36:45.354Z  
**Source:** https://mailermine.com/openapi.json  
**Overall Success:** Yes

## Results

| Item | Result |
| --- | --- |
| Downloaded spec version | 1.0.0 |
| OpenAPI document version | 3.1.0 |
| Paths | 97 |
| Generator | OpenAPI Generator 7.23.0 |
| Generator template | `typescript-fetch` |
| Generated APIs | 22 |
| Generated models | 198 |
| Files created | 255 |
| Generated compilation | Passed |
| SDK build | Passed |
| Generation time | 15.41 seconds |

## Generated APIs

- `APIKeysApi`
- `AnalyticsApi`
- `AudiencesApi`
- `CampaignAnalyticsApi`
- `CampaignEventsApi`
- `CampaignLifecycleApi`
- `CampaignsApi`
- `ContactsApi`
- `DomainsApi`
- `EmailsApi`
- `EventsApi`
- `ExportsApi`
- `ImportsApi`
- `ListsApi`
- `MarketingApi`
- `MessagesApi`
- `ProjectsApi`
- `SegmentsApi`
- `SuppressionsApi`
- `TagsApi`
- `TemplatesApi`
- `WebhooksApi`

## Generated Models

198 model declarations were generated in
`generated/src/models/index.ts`.

- `AddAudienceMembers200Response`
- `AddAudienceMembers200ResponseData`
- `AddContactsToList200Response`
- `AnalyticsCampaigns`
- `AnalyticsCampaignsCampaignsInner`
- `AnalyticsCampaignsResponse`
- `AnalyticsDomains`
- `AnalyticsDomainsDomainsInner`
- `AnalyticsDomainsResponse`
- `AnalyticsEngagement`
- `AnalyticsEngagementResponse`
- `AnalyticsMessages`
- `AnalyticsMessagesDailyInner`
- `AnalyticsMessagesResponse`
- `AnalyticsMessagesTotals`
- `AnalyticsOverview`
- `AnalyticsOverviewDailySeriesInner`
- `AnalyticsOverviewRecentActivityInner`
- `AnalyticsOverviewResponse`
- `AnalyticsOverviewTopCampaignsInner`
- `AnalyticsOverviewTopLinksInner`
- `AnalyticsProjects`
- `AnalyticsProjectsProjectsInner`
- `AnalyticsProjectsResponse`
- `AnalyticsProviders`
- `AnalyticsProvidersProvidersInner`
- `AnalyticsProvidersResponse`
- `ApiKeyListResponse`
- `ApiKeyResource`
- `ApiKeyResponse`
- `AudienceCollection`
- `AudienceResource`
- `AudienceResponse`
- `BulkAssignTags200Response`
- `BulkAssignTags200ResponseData`
- `BulkContactIdsRequest`
- `BulkDeleteContacts200Response`
- `BulkDeleteContacts200ResponseData`
- `BulkRemoveTags200Response`
- `BulkRestoreContacts200Response`
- `BulkRestoreContacts200ResponseData`
- `BulkTagContactsRequest`
- `BulkUpdateContacts200Response`
- `BulkUpdateContacts200ResponseData`
- `BulkUpdateContactsRequest`
- `CampaignActivity`
- `CampaignActivityCollection`
- `CampaignActivityEvent`
- `CampaignAnalytics`
- `CampaignAnalyticsResponse`
- `CampaignCollection`
- `CampaignEvent`
- `CampaignEventsResponse`
- `CampaignLink`
- `CampaignLinksResponse`
- `CampaignPreview`
- `CampaignPreviewResponse`
- `CampaignRecipient`
- `CampaignRecipientCollection`
- `CampaignRecipientPreview`
- `CampaignRecipientPreviewResponse`
- `CampaignRecipientStatus`
- `CampaignResource`
- `CampaignResponse`
- `CampaignStatistics`
- `CampaignStatisticsResponse`
- `CampaignStatus`
- `CampaignTimeline`
- `CampaignTimelineResponse`
- `CampaignValidation`
- `CampaignValidationResponse`
- `ConfigureContactImportRequest`
- `ContactCollection`
- `ContactResource`
- `ContactResponse`
- `CreateApiKeyRequest`
- `CreateCampaignRequest`
- `CreateContactRequest`
- `CreateCustomFieldRequest`
- `CreateDomainRequest`
- `CreateListRequest`
- `CreateProjectRequest`
- `CreateSegmentRequest`
- `CreateSegmentRequestRules`
- `CreateSuppressionRequest`
- `CreateTagRequest`
- `CreateTemplateRequest`
- `CreateTemplateRequestBranding`
- `CreateTemplateRequestVariablesInner`
- `CreateWebhookRequest`
- `CustomField`
- `CustomFieldCollection`
- `CustomFieldResponse`
- `CustomFieldType`
- `DNSRecord`
- `DeleteResponse`
- `DeliveryLog`
- `DomainListResponse`
- `DomainResource`
- `DomainResponse`
- `DuplicateCampaignRequest`
- `DuplicateTemplateRequest`
- `EmailAttachment`
- `EventListResponse`
- `EventResponse`
- `ExportContactsRequest`
- `ExportJob`
- `ExportJobResponse`
- `ImportContactsRequest`
- `ImportJob`
- `ImportJobCollection`
- `ImportJobDetail`
- `ImportJobDetailResponse`
- `ImportJobResponse`
- `ImportProgress`
- `InlineObject`
- `InlineObject1`
- `ListCollection`
- `ListContactsMembershipRequest`
- `ListResource`
- `ListResponse`
- `Message`
- `MessageDetailResponse`
- `MessageEventsResponse`
- `MessageListResponse`
- `MessageStatus`
- `PaginationMeta`
- `PreviewSegmentRequest`
- `PreviewSegmentRequestRules`
- `PreviewSegmentRequestRulesRulesInner`
- `PreviewTemplateByIdRequest`
- `PreviewTemplateRequest`
- `ProjectListResponse`
- `ProjectResource`
- `ProjectResponse`
- `RemoveAudienceMembers200Response`
- `RemoveAudienceMembers200ResponseData`
- `RemoveContactsFromList200Response`
- `ReplayWebhookRequest`
- `ScheduleCampaignRequest`
- `SegmentCollection`
- `SegmentCountResponse`
- `SegmentCountResponseData`
- `SegmentPreviewResponse`
- `SegmentPreviewResponseData`
- `SegmentResource`
- `SegmentResponse`
- `SendEmailRequest`
- `SendEmailRequestAttachmentsInner`
- `SendEmailResponse`
- `Suppression`
- `SuppressionListResponse`
- `SuppressionReason`
- `SuppressionResponse`
- `TagCollection`
- `TagResource`
- `TagResponse`
- `TemplateLayoutStyle`
- `TemplateListResponse`
- `TemplatePreview`
- `TemplatePreviewResponse`
- `TemplateResource`
- `TemplateResponse`
- `TemplateStatus`
- `TemplateTestResponse`
- `TemplateTestResponseData`
- `TemplateVariable`
- `TemplateVariableType`
- `TestTemplateRequest`
- `TestWebhookRequest`
- `TimelineEvent`
- `UpdateApiKeyRequest`
- `UpdateCampaignRequest`
- `UpdateContactRequest`
- `UpdateCustomFieldRequest`
- `UpdateListRequest`
- `UpdateProjectRequest`
- `UpdateSegmentRequest`
- `UpdateSegmentRequestRules`
- `UpdateTagRequest`
- `UpdateTemplateRequest`
- `UpdateWebhookRequest`
- `Webhook`
- `WebhookDelivery`
- `WebhookDeliveryListResponse`
- `WebhookDeliveryMessage`
- `WebhookDeliveryResponse`
- `WebhookDeliveryStatus`
- `WebhookDeliveryWebhook`
- `WebhookLastDelivery`
- `WebhookListResponse`
- `WebhookProject`
- `WebhookReplayResponse`
- `WebhookReplayResponseData`
- `WebhookResponse`
- `WebhookRetryPolicy`
- `WebhookSecretResponse`
- `WebhookWithSecret`

## Compilation Result

`npm run typecheck:generated` and `npm run build` completed successfully. The
compile-only smoke test in `scripts/test-generated.ts` instantiates representative
generated API classes.

## Warnings

- [main] WARN  o.o.codegen.DefaultCodegen - OpenAPI 3.1 support is still in beta. To report an issue related to 3.1 spec, please kindly open an issue in the Github repo: https://github.com/openAPITools/openapi-generator.

## Reproducibility

The checked-out `openapi.json` is not used as a source of truth and is ignored by
Git. Every `npm run generate` execution downloads and validates the current document
from https://mailermine.com/openapi.json before deleting and recreating `generated/`.

```bash
npm install
npm run generate
npm run build
```

Generated files must never be edited manually.
