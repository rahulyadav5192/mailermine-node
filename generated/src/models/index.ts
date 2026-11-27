/* tslint:disable */
/* eslint-disable */
/**
 *
 * @export
 * @interface AddAudienceMembers200Response
 */
export interface AddAudienceMembers200Response {
  /**
   *
   * @type {boolean}
   * @memberof AddAudienceMembers200Response
   */
  success: boolean;
  /**
   *
   * @type {AddAudienceMembers200ResponseMessageEnum}
   * @memberof AddAudienceMembers200Response
   */
  message: AddAudienceMembers200ResponseMessageEnum;
  /**
   *
   * @type {AddAudienceMembers200ResponseData}
   * @memberof AddAudienceMembers200Response
   */
  data: AddAudienceMembers200ResponseData;
}

/**
 * @export
 */
export const AddAudienceMembers200ResponseMessageEnum = {
  ContactsAddedToAudience: 'Contacts added to audience.',
} as const;
export type AddAudienceMembers200ResponseMessageEnum =
  (typeof AddAudienceMembers200ResponseMessageEnum)[keyof typeof AddAudienceMembers200ResponseMessageEnum];

/**
 *
 * @export
 * @interface AddAudienceMembers200ResponseData
 */
export interface AddAudienceMembers200ResponseData {
  /**
   *
   * @type {number}
   * @memberof AddAudienceMembers200ResponseData
   */
  added: number;
}
/**
 *
 * @export
 * @interface AddContactsToList200Response
 */
export interface AddContactsToList200Response {
  /**
   *
   * @type {boolean}
   * @memberof AddContactsToList200Response
   */
  success: boolean;
  /**
   *
   * @type {AddContactsToList200ResponseMessageEnum}
   * @memberof AddContactsToList200Response
   */
  message: AddContactsToList200ResponseMessageEnum;
  /**
   *
   * @type {AddAudienceMembers200ResponseData}
   * @memberof AddContactsToList200Response
   */
  data: AddAudienceMembers200ResponseData;
}

/**
 * @export
 */
export const AddContactsToList200ResponseMessageEnum = {
  ContactsAddedToList: 'Contacts added to list.',
} as const;
export type AddContactsToList200ResponseMessageEnum =
  (typeof AddContactsToList200ResponseMessageEnum)[keyof typeof AddContactsToList200ResponseMessageEnum];

/**
 *
 * @export
 * @interface AnalyticsCampaigns
 */
export interface AnalyticsCampaigns {
  /**
   * Range start (ISO-8601).
   * @type {string}
   * @memberof AnalyticsCampaigns
   */
  from: string;
  /**
   * Range end (ISO-8601).
   * @type {string}
   * @memberof AnalyticsCampaigns
   */
  to: string;
  /**
   * Campaigns ranked by send volume.
   * @type {Array<AnalyticsCampaignsCampaignsInner>}
   * @memberof AnalyticsCampaigns
   */
  campaigns: Array<AnalyticsCampaignsCampaignsInner>;
}
/**
 *
 * @export
 * @interface AnalyticsCampaignsCampaignsInner
 */
export interface AnalyticsCampaignsCampaignsInner {
  /**
   *
   * @type {string}
   * @memberof AnalyticsCampaignsCampaignsInner
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof AnalyticsCampaignsCampaignsInner
   */
  name: string;
  /**
   *
   * @type {number}
   * @memberof AnalyticsCampaignsCampaignsInner
   */
  sent: number;
  /**
   *
   * @type {number}
   * @memberof AnalyticsCampaignsCampaignsInner
   */
  delivered: number;
  /**
   *
   * @type {number}
   * @memberof AnalyticsCampaignsCampaignsInner
   */
  opened: number;
  /**
   *
   * @type {number}
   * @memberof AnalyticsCampaignsCampaignsInner
   */
  clicked: number;
  /**
   *
   * @type {number}
   * @memberof AnalyticsCampaignsCampaignsInner
   */
  openRate: number;
  /**
   *
   * @type {number}
   * @memberof AnalyticsCampaignsCampaignsInner
   */
  clickRate: number;
}
/**
 *
 * @export
 * @interface AnalyticsCampaignsResponse
 */
export interface AnalyticsCampaignsResponse {
  /**
   *
   * @type {boolean}
   * @memberof AnalyticsCampaignsResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof AnalyticsCampaignsResponse
   */
  message: string;
  /**
   *
   * @type {AnalyticsCampaigns}
   * @memberof AnalyticsCampaignsResponse
   */
  data: AnalyticsCampaigns;
}
/**
 *
 * @export
 * @interface AnalyticsDomains
 */
export interface AnalyticsDomains {
  /**
   * Range start (ISO-8601).
   * @type {string}
   * @memberof AnalyticsDomains
   */
  from: string;
  /**
   * Range end (ISO-8601).
   * @type {string}
   * @memberof AnalyticsDomains
   */
  to: string;
  /**
   * Sending domain volume, ordered by count descending (top 50).
   * @type {Array<AnalyticsDomainsDomainsInner>}
   * @memberof AnalyticsDomains
   */
  domains: Array<AnalyticsDomainsDomainsInner>;
}
/**
 *
 * @export
 * @interface AnalyticsDomainsDomainsInner
 */
export interface AnalyticsDomainsDomainsInner {
  /**
   *
   * @type {string}
   * @memberof AnalyticsDomainsDomainsInner
   */
  domain: string;
  /**
   *
   * @type {number}
   * @memberof AnalyticsDomainsDomainsInner
   */
  count: number;
}
/**
 *
 * @export
 * @interface AnalyticsDomainsResponse
 */
export interface AnalyticsDomainsResponse {
  /**
   *
   * @type {boolean}
   * @memberof AnalyticsDomainsResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof AnalyticsDomainsResponse
   */
  message: string;
  /**
   *
   * @type {AnalyticsDomains}
   * @memberof AnalyticsDomainsResponse
   */
  data: AnalyticsDomains;
}
/**
 *
 * @export
 * @interface AnalyticsEngagement
 */
export interface AnalyticsEngagement {
  /**
   * Range start (ISO-8601).
   * @type {string}
   * @memberof AnalyticsEngagement
   */
  from: string;
  /**
   * Range end (ISO-8601).
   * @type {string}
   * @memberof AnalyticsEngagement
   */
  to: string;
  /**
   * Total opens.
   * @type {number}
   * @memberof AnalyticsEngagement
   */
  opens: number;
  /**
   * Unique opens.
   * @type {number}
   * @memberof AnalyticsEngagement
   */
  uniqueOpens: number;
  /**
   * Total clicks.
   * @type {number}
   * @memberof AnalyticsEngagement
   */
  clicks: number;
  /**
   * Unique clicks.
   * @type {number}
   * @memberof AnalyticsEngagement
   */
  uniqueClicks: number;
  /**
   * Unique opens / delivered emails that had open tracking, as a percentage.
   * @type {number}
   * @memberof AnalyticsEngagement
   */
  openRate: number;
  /**
   * Click-through rate: unique clicks / delivered emails that had click tracking, as a percentage.
   * @type {number}
   * @memberof AnalyticsEngagement
   */
  ctr: number;
  /**
   * Click-to-open rate: clicks / opens as a percentage.
   * @type {number}
   * @memberof AnalyticsEngagement
   */
  ctor: number;
  /**
   * Total sent.
   * @type {number}
   * @memberof AnalyticsEngagement
   */
  sent: number;
  /**
   * Total delivered.
   * @type {number}
   * @memberof AnalyticsEngagement
   */
  delivered: number;
  /**
   * Delivered emails that had open tracking (the open-rate denominator).
   * @type {number}
   * @memberof AnalyticsEngagement
   */
  opensTrackedDelivered?: number | null;
  /**
   * Delivered emails that had click tracking (the CTR denominator).
   * @type {number}
   * @memberof AnalyticsEngagement
   */
  clicksTrackedDelivered?: number | null;
  /**
   * Volume and engagement per custom tracking domain. The row with `hostname: null` is the shared host. Empty when no tracking domain is configured.
   * @type {Array<AnalyticsEngagementByTrackingDomainInner>}
   * @memberof AnalyticsEngagement
   */
  byTrackingDomain?: Array<AnalyticsEngagementByTrackingDomainInner> | null;
}
/**
 *
 * @export
 * @interface AnalyticsEngagementByTrackingDomainInner
 */
export interface AnalyticsEngagementByTrackingDomainInner {
  /**
   *
   * @type {string}
   * @memberof AnalyticsEngagementByTrackingDomainInner
   */
  id: string | null;
  /**
   *
   * @type {string}
   * @memberof AnalyticsEngagementByTrackingDomainInner
   */
  hostname: string | null;
  /**
   *
   * @type {string}
   * @memberof AnalyticsEngagementByTrackingDomainInner
   */
  status: string;
  /**
   *
   * @type {string}
   * @memberof AnalyticsEngagementByTrackingDomainInner
   */
  statusLabel: string;
  /**
   *
   * @type {boolean}
   * @memberof AnalyticsEngagementByTrackingDomainInner
   */
  isDefault: boolean;
  /**
   *
   * @type {string}
   * @memberof AnalyticsEngagementByTrackingDomainInner
   */
  lastCheckedAt: string | null;
  /**
   *
   * @type {string}
   * @memberof AnalyticsEngagementByTrackingDomainInner
   */
  lastError: string | null;
  /**
   *
   * @type {number}
   * @memberof AnalyticsEngagementByTrackingDomainInner
   */
  sent: number;
  /**
   *
   * @type {number}
   * @memberof AnalyticsEngagementByTrackingDomainInner
   */
  delivered: number;
  /**
   *
   * @type {number}
   * @memberof AnalyticsEngagementByTrackingDomainInner
   */
  uniqueOpens: number;
  /**
   *
   * @type {number}
   * @memberof AnalyticsEngagementByTrackingDomainInner
   */
  uniqueClicks: number;
  /**
   *
   * @type {number}
   * @memberof AnalyticsEngagementByTrackingDomainInner
   */
  openRate: number;
  /**
   *
   * @type {number}
   * @memberof AnalyticsEngagementByTrackingDomainInner
   */
  clickRate: number;
}
/**
 *
 * @export
 * @interface AnalyticsEngagementResponse
 */
export interface AnalyticsEngagementResponse {
  /**
   *
   * @type {boolean}
   * @memberof AnalyticsEngagementResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof AnalyticsEngagementResponse
   */
  message: string;
  /**
   *
   * @type {AnalyticsEngagement}
   * @memberof AnalyticsEngagementResponse
   */
  data: AnalyticsEngagement;
}
/**
 *
 * @export
 * @interface AnalyticsMessages
 */
export interface AnalyticsMessages {
  /**
   * Range start (ISO-8601).
   * @type {string}
   * @memberof AnalyticsMessages
   */
  from: string;
  /**
   * Range end (ISO-8601).
   * @type {string}
   * @memberof AnalyticsMessages
   */
  to: string;
  /**
   *
   * @type {AnalyticsMessagesTotals}
   * @memberof AnalyticsMessages
   */
  totals: AnalyticsMessagesTotals;
  /**
   * Message count keyed by status.
   * @type {{ [key: string]: number; }}
   * @memberof AnalyticsMessages
   */
  byStatus: { [key: string]: number };
  /**
   * Daily message metrics.
   * @type {Array<AnalyticsMessagesDailyInner>}
   * @memberof AnalyticsMessages
   */
  daily: Array<AnalyticsMessagesDailyInner>;
}
/**
 *
 * @export
 * @interface AnalyticsMessagesDailyInner
 */
export interface AnalyticsMessagesDailyInner {
  /**
   *
   * @type {string}
   * @memberof AnalyticsMessagesDailyInner
   */
  date: string;
  /**
   *
   * @type {number}
   * @memberof AnalyticsMessagesDailyInner
   */
  sent: number;
  /**
   *
   * @type {number}
   * @memberof AnalyticsMessagesDailyInner
   */
  delivered: number;
  /**
   *
   * @type {number}
   * @memberof AnalyticsMessagesDailyInner
   */
  opened: number;
  /**
   *
   * @type {number}
   * @memberof AnalyticsMessagesDailyInner
   */
  clicked: number;
  /**
   *
   * @type {number}
   * @memberof AnalyticsMessagesDailyInner
   */
  bounced: number;
  /**
   *
   * @type {number}
   * @memberof AnalyticsMessagesDailyInner
   */
  complained: number;
}
/**
 *
 * @export
 * @interface AnalyticsMessagesResponse
 */
export interface AnalyticsMessagesResponse {
  /**
   *
   * @type {boolean}
   * @memberof AnalyticsMessagesResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof AnalyticsMessagesResponse
   */
  message: string;
  /**
   *
   * @type {AnalyticsMessages}
   * @memberof AnalyticsMessagesResponse
   */
  data: AnalyticsMessages;
}
/**
 * Aggregate totals for the range.
 * @export
 * @interface AnalyticsMessagesTotals
 */
export interface AnalyticsMessagesTotals {
  /**
   *
   * @type {number}
   * @memberof AnalyticsMessagesTotals
   */
  sent: number;
  /**
   *
   * @type {number}
   * @memberof AnalyticsMessagesTotals
   */
  delivered: number;
  /**
   *
   * @type {number}
   * @memberof AnalyticsMessagesTotals
   */
  opened: number;
  /**
   *
   * @type {number}
   * @memberof AnalyticsMessagesTotals
   */
  clicked: number;
  /**
   *
   * @type {number}
   * @memberof AnalyticsMessagesTotals
   */
  bounced: number;
  /**
   *
   * @type {number}
   * @memberof AnalyticsMessagesTotals
   */
  complained: number;
}
/**
 *
 * @export
 * @interface AnalyticsOverview
 */
export interface AnalyticsOverview {
  /**
   * Total emails sent in the selected range.
   * @type {number}
   * @memberof AnalyticsOverview
   */
  emailsSent: number;
  /**
   * Number of campaigns that sent in the selected range.
   * @type {number}
   * @memberof AnalyticsOverview
   */
  campaigns: number;
  /**
   * Delivered / sent as a percentage.
   * @type {number}
   * @memberof AnalyticsOverview
   */
  deliveryRate: number;
  /**
   * Unique opens / delivered emails that had open tracking, as a percentage.
   * @type {number}
   * @memberof AnalyticsOverview
   */
  openRate: number;
  /**
   * Unique clicks / delivered emails that had click tracking, as a percentage.
   * @type {number}
   * @memberof AnalyticsOverview
   */
  clickRate: number;
  /**
   * Bounced / sent as a percentage.
   * @type {number}
   * @memberof AnalyticsOverview
   */
  bounceRate: number;
  /**
   * Complaints / sent as a percentage.
   * @type {number}
   * @memberof AnalyticsOverview
   */
  complaintRate: number;
  /**
   * Daily performance series.
   * @type {Array<AnalyticsOverviewDailySeriesInner>}
   * @memberof AnalyticsOverview
   */
  dailySeries: Array<AnalyticsOverviewDailySeriesInner>;
  /**
   * Top campaigns by volume.
   * @type {Array<AnalyticsOverviewTopCampaignsInner>}
   * @memberof AnalyticsOverview
   */
  topCampaigns: Array<AnalyticsOverviewTopCampaignsInner>;
  /**
   * Top tracked links by clicks.
   * @type {Array<AnalyticsOverviewTopLinksInner>}
   * @memberof AnalyticsOverview
   */
  topLinks: Array<AnalyticsOverviewTopLinksInner>;
  /**
   * Recent recipient activity.
   * @type {Array<AnalyticsOverviewRecentActivityInner>}
   * @memberof AnalyticsOverview
   */
  recentActivity: Array<AnalyticsOverviewRecentActivityInner>;
  /**
   *
   * @type {AnalyticsOverviewTracking}
   * @memberof AnalyticsOverview
   */
  tracking?: AnalyticsOverviewTracking;
  /**
   * Volume, engagement and health per custom tracking domain. The row with `hostname: null` is the shared host. Empty when no tracking domain is configured.
   * @type {Array<AnalyticsEngagementByTrackingDomainInner>}
   * @memberof AnalyticsOverview
   */
  trackingDomains?: Array<AnalyticsEngagementByTrackingDomainInner> | null;
}
/**
 *
 * @export
 * @interface AnalyticsOverviewDailySeriesInner
 */
export interface AnalyticsOverviewDailySeriesInner {
  /**
   *
   * @type {string}
   * @memberof AnalyticsOverviewDailySeriesInner
   */
  date: string;
  /**
   *
   * @type {number}
   * @memberof AnalyticsOverviewDailySeriesInner
   */
  sent: number;
  /**
   *
   * @type {number}
   * @memberof AnalyticsOverviewDailySeriesInner
   */
  opened: number;
  /**
   *
   * @type {number}
   * @memberof AnalyticsOverviewDailySeriesInner
   */
  clicked: number;
}
/**
 *
 * @export
 * @interface AnalyticsOverviewRecentActivityInner
 */
export interface AnalyticsOverviewRecentActivityInner {
  /**
   *
   * @type {string}
   * @memberof AnalyticsOverviewRecentActivityInner
   */
  eventType: string;
  /**
   *
   * @type {string}
   * @memberof AnalyticsOverviewRecentActivityInner
   */
  eventLabel: string;
  /**
   *
   * @type {string}
   * @memberof AnalyticsOverviewRecentActivityInner
   */
  occurredAt: string;
  /**
   *
   * @type {string}
   * @memberof AnalyticsOverviewRecentActivityInner
   */
  messageUuid: string | null;
}
/**
 *
 * @export
 * @interface AnalyticsOverviewResponse
 */
export interface AnalyticsOverviewResponse {
  /**
   *
   * @type {boolean}
   * @memberof AnalyticsOverviewResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof AnalyticsOverviewResponse
   */
  message: string;
  /**
   *
   * @type {AnalyticsOverview}
   * @memberof AnalyticsOverviewResponse
   */
  data: AnalyticsOverview;
}
/**
 *
 * @export
 * @interface AnalyticsOverviewTopCampaignsInner
 */
export interface AnalyticsOverviewTopCampaignsInner {
  /**
   *
   * @type {string}
   * @memberof AnalyticsOverviewTopCampaignsInner
   */
  uuid: string;
  /**
   *
   * @type {string}
   * @memberof AnalyticsOverviewTopCampaignsInner
   */
  name: string;
  /**
   *
   * @type {number}
   * @memberof AnalyticsOverviewTopCampaignsInner
   */
  sent: number;
  /**
   *
   * @type {number}
   * @memberof AnalyticsOverviewTopCampaignsInner
   */
  openRate: number;
  /**
   *
   * @type {number}
   * @memberof AnalyticsOverviewTopCampaignsInner
   */
  clickRate: number;
}
/**
 *
 * @export
 * @interface AnalyticsOverviewTopLinksInner
 */
export interface AnalyticsOverviewTopLinksInner {
  /**
   *
   * @type {string}
   * @memberof AnalyticsOverviewTopLinksInner
   */
  destinationUrl: string;
  /**
   *
   * @type {number}
   * @memberof AnalyticsOverviewTopLinksInner
   */
  clicks: number;
  /**
   *
   * @type {number}
   * @memberof AnalyticsOverviewTopLinksInner
   */
  uniqueClicks: number;
  /**
   *
   * @type {number}
   * @memberof AnalyticsOverviewTopLinksInner
   */
  ctr: number;
  /**
   *
   * @type {string}
   * @memberof AnalyticsOverviewTopLinksInner
   */
  lastClickedAt: string | null;
}
/**
 * Delivered emails and how many had opens / clicks tracked (the rate denominators).
 * @export
 * @interface AnalyticsOverviewTracking
 */
export interface AnalyticsOverviewTracking {
  /**
   *
   * @type {number}
   * @memberof AnalyticsOverviewTracking
   */
  delivered: number;
  /**
   *
   * @type {number}
   * @memberof AnalyticsOverviewTracking
   */
  opensTracked: number;
  /**
   *
   * @type {number}
   * @memberof AnalyticsOverviewTracking
   */
  clicksTracked: number;
}
/**
 *
 * @export
 * @interface AnalyticsProjects
 */
export interface AnalyticsProjects {
  /**
   * Range start (ISO-8601).
   * @type {string}
   * @memberof AnalyticsProjects
   */
  from: string;
  /**
   * Range end (ISO-8601).
   * @type {string}
   * @memberof AnalyticsProjects
   */
  to: string;
  /**
   * Project metrics for the authenticated project.
   * @type {Array<AnalyticsProjectsProjectsInner>}
   * @memberof AnalyticsProjects
   */
  projects: Array<AnalyticsProjectsProjectsInner>;
  /**
   * Present when multiple projects are requested with a single-project key.
   * @type {string}
   * @memberof AnalyticsProjects
   */
  note: string | null;
}
/**
 *
 * @export
 * @interface AnalyticsProjectsProjectsInner
 */
export interface AnalyticsProjectsProjectsInner {
  /**
   *
   * @type {string}
   * @memberof AnalyticsProjectsProjectsInner
   */
  id: string | null;
  /**
   *
   * @type {string}
   * @memberof AnalyticsProjectsProjectsInner
   */
  name: string | null;
  /**
   *
   * @type {number}
   * @memberof AnalyticsProjectsProjectsInner
   */
  sent: number;
  /**
   *
   * @type {number}
   * @memberof AnalyticsProjectsProjectsInner
   */
  delivered: number;
  /**
   *
   * @type {number}
   * @memberof AnalyticsProjectsProjectsInner
   */
  opened: number;
  /**
   *
   * @type {number}
   * @memberof AnalyticsProjectsProjectsInner
   */
  clicked: number;
}
/**
 *
 * @export
 * @interface AnalyticsProjectsResponse
 */
export interface AnalyticsProjectsResponse {
  /**
   *
   * @type {boolean}
   * @memberof AnalyticsProjectsResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof AnalyticsProjectsResponse
   */
  message: string;
  /**
   *
   * @type {AnalyticsProjects}
   * @memberof AnalyticsProjectsResponse
   */
  data: AnalyticsProjects;
}
/**
 *
 * @export
 * @interface AnalyticsProviders
 */
export interface AnalyticsProviders {
  /**
   * Range start (ISO-8601).
   * @type {string}
   * @memberof AnalyticsProviders
   */
  from: string;
  /**
   * Range end (ISO-8601).
   * @type {string}
   * @memberof AnalyticsProviders
   */
  to: string;
  /**
   * Provider volume, ordered by count descending.
   * @type {Array<AnalyticsProvidersProvidersInner>}
   * @memberof AnalyticsProviders
   */
  providers: Array<AnalyticsProvidersProvidersInner>;
}
/**
 *
 * @export
 * @interface AnalyticsProvidersProvidersInner
 */
export interface AnalyticsProvidersProvidersInner {
  /**
   *
   * @type {string}
   * @memberof AnalyticsProvidersProvidersInner
   */
  provider: string;
  /**
   *
   * @type {number}
   * @memberof AnalyticsProvidersProvidersInner
   */
  count: number;
}
/**
 *
 * @export
 * @interface AnalyticsProvidersResponse
 */
export interface AnalyticsProvidersResponse {
  /**
   *
   * @type {boolean}
   * @memberof AnalyticsProvidersResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof AnalyticsProvidersResponse
   */
  message: string;
  /**
   *
   * @type {AnalyticsProviders}
   * @memberof AnalyticsProvidersResponse
   */
  data: AnalyticsProviders;
}
/**
 *
 * @export
 * @interface ApiKeyListResponse
 */
export interface ApiKeyListResponse {
  /**
   *
   * @type {boolean}
   * @memberof ApiKeyListResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof ApiKeyListResponse
   */
  message: string;
  /**
   *
   * @type {Array<ApiKeyResource>}
   * @memberof ApiKeyListResponse
   */
  data: Array<ApiKeyResource>;
  /**
   *
   * @type {PaginationMeta}
   * @memberof ApiKeyListResponse
   */
  meta: PaginationMeta;
}
/**
 *
 * @export
 * @interface ApiKeyResource
 */
export interface ApiKeyResource {
  /**
   * Public key UUID. @format uuid @example 550e8400-e29b-41d4-a716-446655440000
   * @type {string}
   * @memberof ApiKeyResource
   */
  id: string;
  /**
   * Human-readable key name. @example CI Production
   * @type {string}
   * @memberof ApiKeyResource
   */
  name: string;
  /**
   * Safe display prefix. @example mm_live_abcd...
   * @type {string}
   * @memberof ApiKeyResource
   */
  prefix: string;
  /**
   * Alias of prefix. @example mm_live_abcd...
   * @type {string}
   * @memberof ApiKeyResource
   */
  maskedKey: string;
  /**
   * Key lifecycle status. @var 'active'|'disabled'|'revoked'|'expired' @example active
   * @type {string}
   * @memberof ApiKeyResource
   */
  status: string;
  /**
   * Granted scopes; null means full legacy access. @var list<string>|null
   * @type {Array<any>}
   * @memberof ApiKeyResource
   */
  scopes: Array<any> | null;
  /**
   * Backward-compatible alias of scopes. @var list<string>|null
   * @type {Array<any>}
   * @memberof ApiKeyResource
   */
  permissions: Array<any> | null;
  /**
   * Parent project environment. @example production
   * @type {string}
   * @memberof ApiKeyResource
   */
  environment: string | null;
  /**
   * Last successful authentication time. @format date-time
   * @type {string}
   * @memberof ApiKeyResource
   */
  lastUsedAt: string | null;
  /**
   * Expiration time; null means no expiry. @format date-time
   * @type {string}
   * @memberof ApiKeyResource
   */
  expiresAt: string | null;
  /**
   * Creation time. @format date-time
   * @type {string}
   * @memberof ApiKeyResource
   */
  createdAt: string | null;
  /**
   * Last update time. @format date-time
   * @type {string}
   * @memberof ApiKeyResource
   */
  updatedAt: string | null;
  /**
   * One-time plaintext secret, returned only on create/rotate. @example mm_live_secret
   * @type {string}
   * @memberof ApiKeyResource
   */
  secret: string | null;
  /**
   * Backward-compatible alias of secret, returned only on create/rotate.
   * @type {string}
   * @memberof ApiKeyResource
   */
  key: string | null;
}
/**
 *
 * @export
 * @interface ApiKeyResponse
 */
export interface ApiKeyResponse {
  /**
   *
   * @type {boolean}
   * @memberof ApiKeyResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof ApiKeyResponse
   */
  message: string;
  /**
   *
   * @type {ApiKeyResource}
   * @memberof ApiKeyResponse
   */
  data: ApiKeyResource;
}
/**
 *
 * @export
 * @interface AudienceCollection
 */
export interface AudienceCollection {
  /**
   *
   * @type {boolean}
   * @memberof AudienceCollection
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof AudienceCollection
   */
  message: string;
  /**
   *
   * @type {Array<AudienceResource>}
   * @memberof AudienceCollection
   */
  data: Array<AudienceResource>;
  /**
   *
   * @type {PaginationMeta}
   * @memberof AudienceCollection
   */
  meta: PaginationMeta;
}
/**
 *
 * @export
 * @interface AudienceResource
 */
export interface AudienceResource {
  /**
   * Audience backing type. @var 'list'|'segment' @example list
   * @type {string}
   * @memberof AudienceResource
   */
  type: string;
  /**
   * Public list or segment UUID. @format uuid
   * @type {string}
   * @memberof AudienceResource
   */
  id: string;
  /**
   * Audience name. @example Product newsletter
   * @type {string}
   * @memberof AudienceResource
   */
  name: string;
  /**
   * Optional audience description.
   * @type {string}
   * @memberof AudienceResource
   */
  description: string | null;
  /**
   * Current list size or last evaluated segment size. @example 1250
   * @type {number}
   * @memberof AudienceResource
   */
  memberCount: number;
  /**
   * Backing resource discriminator. @var 'list'|'segment' @example list
   * @type {string}
   * @memberof AudienceResource
   */
  source: string;
}
/**
 *
 * @export
 * @interface AudienceResponse
 */
export interface AudienceResponse {
  /**
   *
   * @type {boolean}
   * @memberof AudienceResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof AudienceResponse
   */
  message: string;
  /**
   *
   * @type {AudienceResource}
   * @memberof AudienceResponse
   */
  data: AudienceResource;
}
/**
 *
 * @export
 * @interface BulkAssignTags200Response
 */
export interface BulkAssignTags200Response {
  /**
   *
   * @type {boolean}
   * @memberof BulkAssignTags200Response
   */
  success: boolean;
  /**
   *
   * @type {BulkAssignTags200ResponseMessageEnum}
   * @memberof BulkAssignTags200Response
   */
  message: BulkAssignTags200ResponseMessageEnum;
  /**
   *
   * @type {BulkAssignTags200ResponseData}
   * @memberof BulkAssignTags200Response
   */
  data: BulkAssignTags200ResponseData;
}

/**
 * @export
 */
export const BulkAssignTags200ResponseMessageEnum = {
  TagsAssignedSuccessfully: 'Tags assigned successfully.',
} as const;
export type BulkAssignTags200ResponseMessageEnum =
  (typeof BulkAssignTags200ResponseMessageEnum)[keyof typeof BulkAssignTags200ResponseMessageEnum];

/**
 *
 * @export
 * @interface BulkAssignTags200ResponseData
 */
export interface BulkAssignTags200ResponseData {
  /**
   *
   * @type {number}
   * @memberof BulkAssignTags200ResponseData
   */
  assigned: number;
}
/**
 *
 * @export
 * @interface BulkContactIdsRequest
 */
export interface BulkContactIdsRequest {
  /**
   *
   * @type {Array<string>}
   * @memberof BulkContactIdsRequest
   */
  ids: Array<string>;
}
/**
 *
 * @export
 * @interface BulkDeleteContacts200Response
 */
export interface BulkDeleteContacts200Response {
  /**
   *
   * @type {boolean}
   * @memberof BulkDeleteContacts200Response
   */
  success: boolean;
  /**
   *
   * @type {BulkDeleteContacts200ResponseMessageEnum}
   * @memberof BulkDeleteContacts200Response
   */
  message: BulkDeleteContacts200ResponseMessageEnum;
  /**
   *
   * @type {BulkDeleteContacts200ResponseData}
   * @memberof BulkDeleteContacts200Response
   */
  data: BulkDeleteContacts200ResponseData;
}

/**
 * @export
 */
export const BulkDeleteContacts200ResponseMessageEnum = {
  ContactsDeletedSuccessfully: 'Contacts deleted successfully.',
} as const;
export type BulkDeleteContacts200ResponseMessageEnum =
  (typeof BulkDeleteContacts200ResponseMessageEnum)[keyof typeof BulkDeleteContacts200ResponseMessageEnum];

/**
 *
 * @export
 * @interface BulkDeleteContacts200ResponseData
 */
export interface BulkDeleteContacts200ResponseData {
  /**
   *
   * @type {number}
   * @memberof BulkDeleteContacts200ResponseData
   */
  deleted: number;
}
/**
 *
 * @export
 * @interface BulkRemoveTags200Response
 */
export interface BulkRemoveTags200Response {
  /**
   *
   * @type {boolean}
   * @memberof BulkRemoveTags200Response
   */
  success: boolean;
  /**
   *
   * @type {BulkRemoveTags200ResponseMessageEnum}
   * @memberof BulkRemoveTags200Response
   */
  message: BulkRemoveTags200ResponseMessageEnum;
  /**
   *
   * @type {RemoveAudienceMembers200ResponseData}
   * @memberof BulkRemoveTags200Response
   */
  data: RemoveAudienceMembers200ResponseData;
}

/**
 * @export
 */
export const BulkRemoveTags200ResponseMessageEnum = {
  TagsRemovedSuccessfully: 'Tags removed successfully.',
} as const;
export type BulkRemoveTags200ResponseMessageEnum =
  (typeof BulkRemoveTags200ResponseMessageEnum)[keyof typeof BulkRemoveTags200ResponseMessageEnum];

/**
 *
 * @export
 * @interface BulkRestoreContacts200Response
 */
export interface BulkRestoreContacts200Response {
  /**
   *
   * @type {boolean}
   * @memberof BulkRestoreContacts200Response
   */
  success: boolean;
  /**
   *
   * @type {BulkRestoreContacts200ResponseMessageEnum}
   * @memberof BulkRestoreContacts200Response
   */
  message: BulkRestoreContacts200ResponseMessageEnum;
  /**
   *
   * @type {BulkRestoreContacts200ResponseData}
   * @memberof BulkRestoreContacts200Response
   */
  data: BulkRestoreContacts200ResponseData;
}

/**
 * @export
 */
export const BulkRestoreContacts200ResponseMessageEnum = {
  ContactsRestoredSuccessfully: 'Contacts restored successfully.',
} as const;
export type BulkRestoreContacts200ResponseMessageEnum =
  (typeof BulkRestoreContacts200ResponseMessageEnum)[keyof typeof BulkRestoreContacts200ResponseMessageEnum];

/**
 *
 * @export
 * @interface BulkRestoreContacts200ResponseData
 */
export interface BulkRestoreContacts200ResponseData {
  /**
   *
   * @type {number}
   * @memberof BulkRestoreContacts200ResponseData
   */
  restored: number;
}
/**
 *
 * @export
 * @interface BulkTagContactsRequest
 */
export interface BulkTagContactsRequest {
  /**
   * Contact UUIDs to mutate.
   * @type {Array<string>}
   * @memberof BulkTagContactsRequest
   */
  contactIds: Array<string>;
  /**
   * Tag UUIDs to assign or remove.
   * @type {Array<string>}
   * @memberof BulkTagContactsRequest
   */
  tagIds: Array<string>;
}
/**
 *
 * @export
 * @interface BulkUpdateContacts200Response
 */
export interface BulkUpdateContacts200Response {
  /**
   *
   * @type {boolean}
   * @memberof BulkUpdateContacts200Response
   */
  success: boolean;
  /**
   *
   * @type {BulkUpdateContacts200ResponseMessageEnum}
   * @memberof BulkUpdateContacts200Response
   */
  message: BulkUpdateContacts200ResponseMessageEnum;
  /**
   *
   * @type {BulkUpdateContacts200ResponseData}
   * @memberof BulkUpdateContacts200Response
   */
  data: BulkUpdateContacts200ResponseData;
}

/**
 * @export
 */
export const BulkUpdateContacts200ResponseMessageEnum = {
  ContactsUpdatedSuccessfully: 'Contacts updated successfully.',
} as const;
export type BulkUpdateContacts200ResponseMessageEnum =
  (typeof BulkUpdateContacts200ResponseMessageEnum)[keyof typeof BulkUpdateContacts200ResponseMessageEnum];

/**
 *
 * @export
 * @interface BulkUpdateContacts200ResponseData
 */
export interface BulkUpdateContacts200ResponseData {
  /**
   *
   * @type {number}
   * @memberof BulkUpdateContacts200ResponseData
   */
  updated: number;
}
/**
 *
 * @export
 * @interface BulkUpdateContactsRequest
 */
export interface BulkUpdateContactsRequest {
  /**
   * Contact UUIDs to update.
   * @type {Array<string>}
   * @memberof BulkUpdateContactsRequest
   */
  ids: Array<string>;
  /**
   * Status applied to every selected contact.
   * @type {BulkUpdateContactsRequestStatusEnum}
   * @memberof BulkUpdateContactsRequest
   */
  status: BulkUpdateContactsRequestStatusEnum;
}

/**
 * @export
 */
export const BulkUpdateContactsRequestStatusEnum = {
  Active: 'active',
  Unsubscribed: 'unsubscribed',
  Suppressed: 'suppressed',
  Bounced: 'bounced',
  Complained: 'complained',
  Archived: 'archived',
} as const;
export type BulkUpdateContactsRequestStatusEnum =
  (typeof BulkUpdateContactsRequestStatusEnum)[keyof typeof BulkUpdateContactsRequestStatusEnum];

/**
 *
 * @export
 * @interface CampaignActivity
 */
export interface CampaignActivity {
  /**
   *
   * @type {CampaignActivityEvent}
   * @memberof CampaignActivity
   */
  event: CampaignActivityEvent;
  /**
   *
   * @type {string}
   * @memberof CampaignActivity
   */
  eventLabel: string;
  /**
   * Activity-specific details. @var array<string, mixed>|null
   * @type {Array<any>}
   * @memberof CampaignActivity
   */
  payload: Array<any> | null;
  /**
   * Activity time. @format date-time
   * @type {string}
   * @memberof CampaignActivity
   */
  createdAt: string | null;
}

/**
 *
 * @export
 * @interface CampaignActivityCollection
 */
export interface CampaignActivityCollection {
  /**
   *
   * @type {boolean}
   * @memberof CampaignActivityCollection
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof CampaignActivityCollection
   */
  message: string;
  /**
   *
   * @type {Array<CampaignActivity>}
   * @memberof CampaignActivityCollection
   */
  data: Array<CampaignActivity>;
}

/**
 *
 * @export
 */
export const CampaignActivityEvent = {
  Created: 'created',
  Queued: 'queued',
  Started: 'started',
  Paused: 'paused',
  Resumed: 'resumed',
  Completed: 'completed',
  Cancelled: 'cancelled',
  Failed: 'failed',
} as const;
export type CampaignActivityEvent =
  (typeof CampaignActivityEvent)[keyof typeof CampaignActivityEvent];

/**
 *
 * @export
 * @interface CampaignAnalytics
 */
export interface CampaignAnalytics {
  /**
   *
   * @type {number}
   * @memberof CampaignAnalytics
   */
  recipients: number;
  /**
   *
   * @type {number}
   * @memberof CampaignAnalytics
   */
  queued: number;
  /**
   *
   * @type {number}
   * @memberof CampaignAnalytics
   */
  sent: number;
  /**
   *
   * @type {number}
   * @memberof CampaignAnalytics
   */
  delivered: number;
  /**
   *
   * @type {number}
   * @memberof CampaignAnalytics
   */
  opened: number;
  /**
   *
   * @type {number}
   * @memberof CampaignAnalytics
   */
  uniqueOpens: number;
  /**
   *
   * @type {number}
   * @memberof CampaignAnalytics
   */
  clicked: number;
  /**
   *
   * @type {number}
   * @memberof CampaignAnalytics
   */
  uniqueClicks: number;
  /**
   *
   * @type {number}
   * @memberof CampaignAnalytics
   */
  bounced: number;
  /**
   *
   * @type {number}
   * @memberof CampaignAnalytics
   */
  complained: number;
  /**
   *
   * @type {number}
   * @memberof CampaignAnalytics
   */
  failed: number;
  /**
   *
   * @type {number}
   * @memberof CampaignAnalytics
   */
  unsubscribed: number;
  /**
   * Delivered divided by recipients or sent, as a percentage. @example 98.4
   * @type {number}
   * @memberof CampaignAnalytics
   */
  deliveryRate: number;
  /**
   * Unique opens divided by delivered, as a percentage. @example 48.2
   * @type {number}
   * @memberof CampaignAnalytics
   */
  openRate: number;
  /**
   * Unique clicks divided by delivered, as a percentage. @example 12.7
   * @type {number}
   * @memberof CampaignAnalytics
   */
  clickRate: number;
  /**
   * Bounces divided by recipients or sent, as a percentage.
   * @type {number}
   * @memberof CampaignAnalytics
   */
  bounceRate: number;
  /**
   * Complaints divided by recipients or sent, as a percentage.
   * @type {number}
   * @memberof CampaignAnalytics
   */
  complaintRate: number;
  /**
   *
   * @type {number}
   * @memberof CampaignAnalytics
   */
  failureRate: number;
  /**
   *
   * @type {number}
   * @memberof CampaignAnalytics
   */
  unsubscribeRate: number;
  /**
   * Mean provider delivery latency in seconds.
   * @type {number}
   * @memberof CampaignAnalytics
   */
  averageDeliveryTimeSeconds: number | null;
}
/**
 *
 * @export
 * @interface CampaignAnalyticsResponse
 */
export interface CampaignAnalyticsResponse {
  /**
   *
   * @type {CampaignAnalytics}
   * @memberof CampaignAnalyticsResponse
   */
  data: CampaignAnalytics;
  /**
   *
   * @type {Array<CampaignLink>}
   * @memberof CampaignAnalyticsResponse
   */
  topLinks: Array<CampaignLink>;
}
/**
 *
 * @export
 * @interface CampaignCollection
 */
export interface CampaignCollection {
  /**
   *
   * @type {boolean}
   * @memberof CampaignCollection
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof CampaignCollection
   */
  message: string;
  /**
   *
   * @type {Array<CampaignResource>}
   * @memberof CampaignCollection
   */
  data: Array<CampaignResource>;
  /**
   *
   * @type {PaginationMeta}
   * @memberof CampaignCollection
   */
  meta: PaginationMeta;
}
/**
 *
 * @export
 * @interface CampaignEvent
 */
export interface CampaignEvent {
  /**
   * Event UUID. @format uuid
   * @type {string}
   * @memberof CampaignEvent
   */
  uuid: string;
  /**
   * Delivery or engagement event type. @example clicked
   * @type {string}
   * @memberof CampaignEvent
   */
  eventType: string;
  /**
   *
   * @type {string}
   * @memberof CampaignEvent
   */
  eventLabel: string;
  /**
   * Event ingestion source.
   * @type {string}
   * @memberof CampaignEvent
   */
  source: string;
  /**
   * Customer-safe event details. @var array<string, mixed>|null
   * @type {Array<any>}
   * @memberof CampaignEvent
   */
  payload: Array<any> | null;
  /**
   * Provider occurrence time. @format date-time
   * @type {string}
   * @memberof CampaignEvent
   */
  occurredAt: string | null;
  /**
   * Event persistence time. @format date-time
   * @type {string}
   * @memberof CampaignEvent
   */
  createdAt: string | null;
  /**
   * Related message UUID when loaded. @format uuid
   * @type {string}
   * @memberof CampaignEvent
   */
  messageUuid: string | null;
}
/**
 *
 * @export
 * @interface CampaignEventsResponse
 */
export interface CampaignEventsResponse {
  /**
   *
   * @type {Array<CampaignEvent>}
   * @memberof CampaignEventsResponse
   */
  data: Array<CampaignEvent>;
}
/**
 *
 * @export
 * @interface CampaignLink
 */
export interface CampaignLink {
  /**
   * Tracked destination URL. @format uri
   * @type {string}
   * @memberof CampaignLink
   */
  destinationUrl: string;
  /**
   *
   * @type {number}
   * @memberof CampaignLink
   */
  clicks: number;
  /**
   *
   * @type {number}
   * @memberof CampaignLink
   */
  uniqueClicks: number;
  /**
   * Unique click-through rate against delivered messages.
   * @type {number}
   * @memberof CampaignLink
   */
  ctr: number;
  /**
   * Last click time. @format date-time
   * @type {string}
   * @memberof CampaignLink
   */
  lastClickedAt: string | null;
}
/**
 *
 * @export
 * @interface CampaignLinksResponse
 */
export interface CampaignLinksResponse {
  /**
   *
   * @type {boolean}
   * @memberof CampaignLinksResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof CampaignLinksResponse
   */
  message: string;
  /**
   *
   * @type {Array<CampaignLink>}
   * @memberof CampaignLinksResponse
   */
  data: Array<CampaignLink>;
}
/**
 *
 * @export
 * @interface CampaignPreview
 */
export interface CampaignPreview {
  /**
   *
   * @type {string}
   * @memberof CampaignPreview
   */
  subject: string;
  /**
   * Rendered HTML body.
   * @type {string}
   * @memberof CampaignPreview
   */
  html: string;
  /**
   * Rendered plain-text body.
   * @type {string}
   * @memberof CampaignPreview
   */
  text: string | null;
  /**
   * Inbox preview text.
   * @type {string}
   * @memberof CampaignPreview
   */
  previewText: string | null;
}
/**
 *
 * @export
 * @interface CampaignPreviewResponse
 */
export interface CampaignPreviewResponse {
  /**
   *
   * @type {boolean}
   * @memberof CampaignPreviewResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof CampaignPreviewResponse
   */
  message: string;
  /**
   *
   * @type {CampaignPreview}
   * @memberof CampaignPreviewResponse
   */
  data: CampaignPreview;
}
/**
 *
 * @export
 * @interface CampaignRecipient
 */
export interface CampaignRecipient {
  /**
   *
   * @type {CampaignRecipientStatus}
   * @memberof CampaignRecipient
   */
  status: CampaignRecipientStatus;
  /**
   * Human-readable recipient status.
   * @type {string}
   * @memberof CampaignRecipient
   */
  statusLabel: string;
  /**
   *
   * @type {string}
   * @memberof CampaignRecipient
   */
  queuedAt: string | null;
  /**
   *
   * @type {string}
   * @memberof CampaignRecipient
   */
  sentAt: string | null;
  /**
   *
   * @type {string}
   * @memberof CampaignRecipient
   */
  deliveredAt: string | null;
  /**
   *
   * @type {string}
   * @memberof CampaignRecipient
   */
  failedAt: string | null;
  /**
   * Failure detail, present for failed recipients.
   * @type {string}
   * @memberof CampaignRecipient
   */
  failureReason: string | null;
  /**
   * Contact snapshot. @var array{uuid: string, email: string, full_name: string}|null
   * @type {Array<any>}
   * @memberof CampaignRecipient
   */
  contact: Array<any> | null;
  /**
   * Generated transactional message. @var array{uuid: string, status: string, status_label: string, error_message: string|null}|null
   * @type {Array<any>}
   * @memberof CampaignRecipient
   */
  message: Array<any> | null;
}

/**
 *
 * @export
 * @interface CampaignRecipientCollection
 */
export interface CampaignRecipientCollection {
  /**
   *
   * @type {boolean}
   * @memberof CampaignRecipientCollection
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof CampaignRecipientCollection
   */
  message: string;
  /**
   *
   * @type {Array<CampaignRecipient>}
   * @memberof CampaignRecipientCollection
   */
  data: Array<CampaignRecipient>;
  /**
   *
   * @type {PaginationMeta}
   * @memberof CampaignRecipientCollection
   */
  meta: PaginationMeta;
}
/**
 *
 * @export
 * @interface CampaignRecipientPreview
 */
export interface CampaignRecipientPreview {
  /**
   *
   * @type {number}
   * @memberof CampaignRecipientPreview
   */
  estimatedCount: number;
  /**
   *
   * @type {number}
   * @memberof CampaignRecipientPreview
   */
  subscribedCount: number;
  /**
   *
   * @type {number}
   * @memberof CampaignRecipientPreview
   */
  unsubscribedCount: number;
  /**
   *
   * @type {number}
   * @memberof CampaignRecipientPreview
   */
  suppressedCount: number;
  /**
   * Up to ten representative matching contacts. @var list<array<string, mixed>>
   * @type {Array<any>}
   * @memberof CampaignRecipientPreview
   */
  sampleContacts: Array<any>;
  /**
   * Audience warnings discovered during preview. @var list<string>
   * @type {Array<any>}
   * @memberof CampaignRecipientPreview
   */
  warnings: Array<any>;
}
/**
 *
 * @export
 * @interface CampaignRecipientPreviewResponse
 */
export interface CampaignRecipientPreviewResponse {
  /**
   *
   * @type {boolean}
   * @memberof CampaignRecipientPreviewResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof CampaignRecipientPreviewResponse
   */
  message: string;
  /**
   *
   * @type {CampaignRecipientPreview}
   * @memberof CampaignRecipientPreviewResponse
   */
  data: CampaignRecipientPreview;
}

/**
 *
 * @export
 */
export const CampaignRecipientStatus = {
  Queued: 'queued',
  Sending: 'sending',
  Sent: 'sent',
  Delivered: 'delivered',
  Failed: 'failed',
  Skipped: 'skipped',
} as const;
export type CampaignRecipientStatus =
  (typeof CampaignRecipientStatus)[keyof typeof CampaignRecipientStatus];

/**
 *
 * @export
 * @interface CampaignResource
 */
export interface CampaignResource {
  /**
   * Public campaign UUID. @format uuid
   * @type {string}
   * @memberof CampaignResource
   */
  uuid: string;
  /**
   * Campaign display name. @example August product newsletter
   * @type {string}
   * @memberof CampaignResource
   */
  name: string;
  /**
   * Email subject after campaign configuration. @example What is new in August
   * @type {string}
   * @memberof CampaignResource
   */
  subject: string | null;
  /**
   * Inbox preview text.
   * @type {string}
   * @memberof CampaignResource
   */
  previewText: string | null;
  /**
   * Sender display name. @example MailerMine
   * @type {string}
   * @memberof CampaignResource
   */
  fromName: string | null;
  /**
   * Verified sender email. @format email
   * @type {string}
   * @memberof CampaignResource
   */
  fromEmail: string | null;
  /**
   * Optional reply address. @format email
   * @type {string}
   * @memberof CampaignResource
   */
  replyTo: string | null;
  /**
   * Current lifecycle status.
   * @type {CampaignStatus}
   * @memberof CampaignResource
   */
  status: CampaignStatus;
  /**
   * Human-readable lifecycle status. @example Scheduled
   * @type {string}
   * @memberof CampaignResource
   */
  statusLabel: string;
  /**
   * Whether delivery is configured as immediate.
   * @type {boolean}
   * @memberof CampaignResource
   */
  sendImmediately: boolean;
  /**
   * Scheduled delivery time. @format date-time
   * @type {string}
   * @memberof CampaignResource
   */
  scheduledAt: string | null;
  /**
   * IANA delivery timezone. @example America/New_York
   * @type {string}
   * @memberof CampaignResource
   */
  timezone: string;
  /**
   * Actual send time. @format date-time
   * @type {string}
   * @memberof CampaignResource
   */
  sentAt: string | null;
  /**
   *
   * @type {number}
   * @memberof CampaignResource
   */
  estimatedRecipients: number;
  /**
   *
   * @type {number}
   * @memberof CampaignResource
   */
  totalRecipients: number;
  /**
   *
   * @type {number}
   * @memberof CampaignResource
   */
  queuedCount: number;
  /**
   *
   * @type {number}
   * @memberof CampaignResource
   */
  sendingCount: number;
  /**
   *
   * @type {number}
   * @memberof CampaignResource
   */
  sentCount: number;
  /**
   *
   * @type {number}
   * @memberof CampaignResource
   */
  failedCount: number;
  /**
   *
   * @type {number}
   * @memberof CampaignResource
   */
  completedCount: number;
  /**
   * Completion percentage from 0 through 100. @example 72.5
   * @type {number}
   * @memberof CampaignResource
   */
  completionPercentage: number;
  /**
   * Processing start time. @format date-time
   * @type {string}
   * @memberof CampaignResource
   */
  startedAt: string | null;
  /**
   * Processing completion time. @format date-time
   * @type {string}
   * @memberof CampaignResource
   */
  completedAt: string | null;
  /**
   * Last recipient processing time. @format date-time
   * @type {string}
   * @memberof CampaignResource
   */
  lastProcessedAt: string | null;
  /**
   * Last completed campaign-builder step (1-6).
   * @type {number}
   * @memberof CampaignResource
   */
  builderStep: number;
  /**
   * Creation time. @format date-time
   * @type {string}
   * @memberof CampaignResource
   */
  createdAt: string | null;
  /**
   * Last update time. @format date-time
   * @type {string}
   * @memberof CampaignResource
   */
  updatedAt: string | null;
  /**
   * Owning project relationship. @var array{uuid: string, name: string}|null
   * @type {Array<any>}
   * @memberof CampaignResource
   */
  project: Array<any> | null;
  /**
   * Selected template relationship. @var array{uuid: string, name: string, subject: string|null}|null
   * @type {Array<any>}
   * @memberof CampaignResource
   */
  template: Array<any> | null;
  /**
   * Selected audience segment relationship. @var array{uuid: string, name: string, contact_count: int}|null
   * @type {Array<any>}
   * @memberof CampaignResource
   */
  segment: Array<any> | null;
}

/**
 *
 * @export
 * @interface CampaignResponse
 */
export interface CampaignResponse {
  /**
   *
   * @type {boolean}
   * @memberof CampaignResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof CampaignResponse
   */
  message: string;
  /**
   *
   * @type {CampaignResource}
   * @memberof CampaignResponse
   */
  data: CampaignResource;
}
/**
 *
 * @export
 * @interface CampaignStatistics
 */
export interface CampaignStatistics {
  /**
   *
   * @type {CampaignStatus}
   * @memberof CampaignStatistics
   */
  status: CampaignStatus;
  /**
   *
   * @type {string}
   * @memberof CampaignStatistics
   */
  statusLabel: string;
  /**
   *
   * @type {number}
   * @memberof CampaignStatistics
   */
  totalRecipients: number;
  /**
   *
   * @type {number}
   * @memberof CampaignStatistics
   */
  queuedCount: number;
  /**
   *
   * @type {number}
   * @memberof CampaignStatistics
   */
  sendingCount: number;
  /**
   *
   * @type {number}
   * @memberof CampaignStatistics
   */
  sentCount: number;
  /**
   *
   * @type {number}
   * @memberof CampaignStatistics
   */
  failedCount: number;
  /**
   *
   * @type {number}
   * @memberof CampaignStatistics
   */
  completedCount: number;
  /**
   * Completion percentage.
   * @type {number}
   * @memberof CampaignStatistics
   */
  completionPercentage: number;
  /**
   *
   * @type {number}
   * @memberof CampaignStatistics
   */
  estimatedRemaining: number;
  /**
   *
   * @type {string}
   * @memberof CampaignStatistics
   */
  startedAt: string | null;
  /**
   *
   * @type {string}
   * @memberof CampaignStatistics
   */
  completedAt: string | null;
  /**
   *
   * @type {string}
   * @memberof CampaignStatistics
   */
  lastProcessedAt: string | null;
}

/**
 *
 * @export
 * @interface CampaignStatisticsResponse
 */
export interface CampaignStatisticsResponse {
  /**
   *
   * @type {boolean}
   * @memberof CampaignStatisticsResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof CampaignStatisticsResponse
   */
  message: string;
  /**
   *
   * @type {CampaignStatistics}
   * @memberof CampaignStatisticsResponse
   */
  data: CampaignStatistics;
}

/**
 *
 * @export
 */
export const CampaignStatus = {
  Draft: 'draft',
  Scheduled: 'scheduled',
  Ready: 'ready',
  Sending: 'sending',
  Paused: 'paused',
  Cancelled: 'cancelled',
  Completed: 'completed',
  Failed: 'failed',
  Archived: 'archived',
} as const;
export type CampaignStatus = (typeof CampaignStatus)[keyof typeof CampaignStatus];

/**
 *
 * @export
 * @interface CampaignTimeline
 */
export interface CampaignTimeline {
  /**
   * Machine-readable delivery event type. @example delivered
   * @type {string}
   * @memberof CampaignTimeline
   */
  eventType: string;
  /**
   *
   * @type {string}
   * @memberof CampaignTimeline
   */
  eventLabel: string;
  /**
   * Event time. @format date-time
   * @type {string}
   * @memberof CampaignTimeline
   */
  occurredAt: string;
  /**
   * Provider or recipient failure details. @var array<string, mixed>|null
   * @type {Array<any>}
   * @memberof CampaignTimeline
   */
  payload: Array<any> | null;
}
/**
 *
 * @export
 * @interface CampaignTimelineResponse
 */
export interface CampaignTimelineResponse {
  /**
   *
   * @type {boolean}
   * @memberof CampaignTimelineResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof CampaignTimelineResponse
   */
  message: string;
  /**
   *
   * @type {Array<CampaignTimeline>}
   * @memberof CampaignTimelineResponse
   */
  data: Array<CampaignTimeline>;
}
/**
 *
 * @export
 * @interface CampaignValidation
 */
export interface CampaignValidation {
  /**
   *
   * @type {boolean}
   * @memberof CampaignValidation
   */
  valid: boolean;
  /**
   * Blocking validation messages. @var list<string>
   * @type {Array<any>}
   * @memberof CampaignValidation
   */
  errors: Array<any>;
  /**
   * Non-blocking validation messages. @var list<string>
   * @type {Array<any>}
   * @memberof CampaignValidation
   */
  warnings: Array<any>;
}
/**
 *
 * @export
 * @interface CampaignValidationResponse
 */
export interface CampaignValidationResponse {
  /**
   *
   * @type {boolean}
   * @memberof CampaignValidationResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof CampaignValidationResponse
   */
  message: string;
  /**
   *
   * @type {CampaignValidation}
   * @memberof CampaignValidationResponse
   */
  data: CampaignValidation;
}
/**
 *
 * @export
 * @interface ConfigureContactImportRequest
 */
export interface ConfigureContactImportRequest {
  /**
   *
   * @type {Array<string>}
   * @memberof ConfigureContactImportRequest
   */
  fieldMappings: Array<string>;
  /**
   *
   * @type {string}
   * @memberof ConfigureContactImportRequest
   */
  duplicateStrategy?: string | null;
  /**
   *
   * @type {string}
   * @memberof ConfigureContactImportRequest
   */
  defaultStatus?: string | null;
  /**
   *
   * @type {string}
   * @memberof ConfigureContactImportRequest
   */
  importSource?: string | null;
  /**
   *
   * @type {string}
   * @memberof ConfigureContactImportRequest
   */
  timezone?: string | null;
  /**
   *
   * @type {string}
   * @memberof ConfigureContactImportRequest
   */
  country?: string | null;
  /**
   *
   * @type {boolean}
   * @memberof ConfigureContactImportRequest
   */
  doubleOptIn?: boolean | null;
  /**
   *
   * @type {string}
   * @memberof ConfigureContactImportRequest
   */
  tagSeparator?: string | null;
  /**
   *
   * @type {boolean}
   * @memberof ConfigureContactImportRequest
   */
  createMissingTags?: boolean | null;
  /**
   *
   * @type {string}
   * @memberof ConfigureContactImportRequest
   */
  audienceMode?: string | null;
  /**
   *
   * @type {string}
   * @memberof ConfigureContactImportRequest
   */
  audienceUuid?: string | null;
  /**
   *
   * @type {boolean}
   * @memberof ConfigureContactImportRequest
   */
  createMissingAudiences?: boolean | null;
  /**
   *
   * @type {Array<string>}
   * @memberof ConfigureContactImportRequest
   */
  newProperties?: Array<string> | null;
}
/**
 *
 * @export
 * @interface ContactCollection
 */
export interface ContactCollection {
  /**
   *
   * @type {boolean}
   * @memberof ContactCollection
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof ContactCollection
   */
  message: string;
  /**
   *
   * @type {Array<ContactResource>}
   * @memberof ContactCollection
   */
  data: Array<ContactResource>;
  /**
   *
   * @type {PaginationMeta}
   * @memberof ContactCollection
   */
  meta: PaginationMeta;
}
/**
 *
 * @export
 * @interface ContactResource
 */
export interface ContactResource {
  /**
   * Public contact UUID. @format uuid @example 550e8400-e29b-41d4-a716-446655440000
   * @type {string}
   * @memberof ContactResource
   */
  id: string;
  /**
   * Normalized email address. @format email @example ada@example.com
   * @type {string}
   * @memberof ContactResource
   */
  email: string;
  /**
   * Given name. @example Ada
   * @type {string}
   * @memberof ContactResource
   */
  firstName: string | null;
  /**
   * Family name. @example Lovelace
   * @type {string}
   * @memberof ContactResource
   */
  lastName: string | null;
  /**
   * Contact lifecycle status. @var 'active'|'unsubscribed'|'suppressed'|'bounced'|'complained'|'archived' @example active
   * @type {string}
   * @memberof ContactResource
   */
  status: string;
  /**
   * Whether the contact is subscribed to marketing email. @example true
   * @type {boolean}
   * @memberof ContactResource
   */
  subscribed: boolean;
  /**
   * Acquisition source. @example api
   * @type {string}
   * @memberof ContactResource
   */
  source: string;
  /**
   * Caller-defined metadata. @var array<string, mixed>
   * @type {Array<any>}
   * @memberof ContactResource
   */
  metadata: Array<any>;
  /**
   * Loaded tag relationships. @var list<array{id: string, name: string, color: string}>
   * @type {Array<any>}
   * @memberof ContactResource
   */
  tags: Array<any>;
  /**
   * Loaded list relationships. @var list<array{id: string, name: string}>
   * @type {Array<any>}
   * @memberof ContactResource
   */
  lists: Array<any>;
  /**
   * Custom field values keyed by field slug. @var array<string, mixed>
   * @type {Array<any>}
   * @memberof ContactResource
   */
  customFields: Array<any>;
  /**
   * Creation time (ISO-8601). @format date-time @example 2026-07-16T10:00:00.000000Z
   * @type {string}
   * @memberof ContactResource
   */
  createdAt: string | null;
  /**
   * Last update time (ISO-8601). @format date-time @example 2026-07-16T11:00:00.000000Z
   * @type {string}
   * @memberof ContactResource
   */
  updatedAt: string | null;
}
/**
 *
 * @export
 * @interface ContactResponse
 */
export interface ContactResponse {
  /**
   *
   * @type {boolean}
   * @memberof ContactResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof ContactResponse
   */
  message: string;
  /**
   *
   * @type {ContactResource}
   * @memberof ContactResponse
   */
  data: ContactResource;
}
/**
 *
 * @export
 * @interface CreateApiKeyRequest
 */
export interface CreateApiKeyRequest {
  /**
   * Human-readable key name.
   * @type {string}
   * @memberof CreateApiKeyRequest
   */
  name: string;
  /**
   * Future expiration time; omit for no expiry.
   * @type {string}
   * @memberof CreateApiKeyRequest
   */
  expiresAt?: string | null;
  /**
   * Granted API scopes; null means full legacy access.
   * @type {Array<CreateApiKeyRequestScopesEnum>}
   * @memberof CreateApiKeyRequest
   */
  scopes?: Array<CreateApiKeyRequestScopesEnum>;
  /**
   * Backward-compatible alias of scopes.
   * @type {Array<CreateApiKeyRequestPermissionsEnum>}
   * @memberof CreateApiKeyRequest
   */
  permissions?: Array<CreateApiKeyRequestPermissionsEnum>;
}

/**
 * @export
 */
export const CreateApiKeyRequestScopesEnum = {
  EmailsSend: 'emails.send',
  EmailsRead: 'emails.read',
  TemplatesRead: 'templates.read',
  TemplatesWrite: 'templates.write',
  DomainsRead: 'domains.read',
  DomainsWrite: 'domains.write',
  ContactsRead: 'contacts.read',
  ContactsWrite: 'contacts.write',
  CampaignsRead: 'campaigns.read',
  CampaignsWrite: 'campaigns.write',
  AnalyticsRead: 'analytics.read',
  BillingRead: 'billing.read',
  ProjectsRead: 'projects.read',
  ProjectsWrite: 'projects.write',
  ApiKeysRead: 'api_keys.read',
  ApiKeysWrite: 'api_keys.write',
  WebhooksRead: 'webhooks.read',
  WebhooksWrite: 'webhooks.write',
  SuppressionsRead: 'suppressions.read',
  SuppressionsWrite: 'suppressions.write',
  EventsRead: 'events.read',
  Admin: 'admin',
} as const;
export type CreateApiKeyRequestScopesEnum =
  (typeof CreateApiKeyRequestScopesEnum)[keyof typeof CreateApiKeyRequestScopesEnum];

/**
 * @export
 */
export const CreateApiKeyRequestPermissionsEnum = {
  EmailsSend: 'emails.send',
  EmailsRead: 'emails.read',
  TemplatesRead: 'templates.read',
  TemplatesWrite: 'templates.write',
  DomainsRead: 'domains.read',
  DomainsWrite: 'domains.write',
  ContactsRead: 'contacts.read',
  ContactsWrite: 'contacts.write',
  CampaignsRead: 'campaigns.read',
  CampaignsWrite: 'campaigns.write',
  AnalyticsRead: 'analytics.read',
  BillingRead: 'billing.read',
  ProjectsRead: 'projects.read',
  ProjectsWrite: 'projects.write',
  ApiKeysRead: 'api_keys.read',
  ApiKeysWrite: 'api_keys.write',
  WebhooksRead: 'webhooks.read',
  WebhooksWrite: 'webhooks.write',
  SuppressionsRead: 'suppressions.read',
  SuppressionsWrite: 'suppressions.write',
  EventsRead: 'events.read',
  Admin: 'admin',
} as const;
export type CreateApiKeyRequestPermissionsEnum =
  (typeof CreateApiKeyRequestPermissionsEnum)[keyof typeof CreateApiKeyRequestPermissionsEnum];

/**
 *
 * @export
 * @interface CreateCampaignRequest
 */
export interface CreateCampaignRequest {
  /**
   * Campaign display name.
   * @type {string}
   * @memberof CreateCampaignRequest
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof CreateCampaignRequest
   */
  subject?: string | null;
  /**
   *
   * @type {string}
   * @memberof CreateCampaignRequest
   */
  previewText?: string | null;
  /**
   *
   * @type {string}
   * @memberof CreateCampaignRequest
   */
  fromName?: string | null;
  /**
   *
   * @type {string}
   * @memberof CreateCampaignRequest
   */
  fromEmail?: string | null;
  /**
   *
   * @type {string}
   * @memberof CreateCampaignRequest
   */
  replyTo?: string | null;
  /**
   * Published template UUID.
   * @type {string}
   * @memberof CreateCampaignRequest
   */
  templateUuid?: string | null;
  /**
   * Published template UUID (alias of `template_uuid`).
   * @type {string}
   * @memberof CreateCampaignRequest
   */
  templateId?: string | null;
  /**
   * Audience segment UUID.
   * @type {string}
   * @memberof CreateCampaignRequest
   */
  segmentUuid?: string | null;
  /**
   * Audience segment UUID (alias of `segment_uuid`).
   * @type {string}
   * @memberof CreateCampaignRequest
   */
  segmentId?: string | null;
  /**
   * Whether delivery should be immediate. Defaults to true (draft).
   * @type {boolean}
   * @memberof CreateCampaignRequest
   */
  sendImmediately?: boolean;
  /**
   * Required when `send_immediately` is false. ISO-8601 date-time.
   * @type {string}
   * @memberof CreateCampaignRequest
   */
  scheduledAt?: string | null;
  /**
   * IANA timezone used to interpret `scheduled_at`. Required when scheduling.
   * @type {string}
   * @memberof CreateCampaignRequest
   */
  timezone?: string | null;
}
/**
 *
 * @export
 * @interface CreateContactRequest
 */
export interface CreateContactRequest {
  /**
   * Unique email address within the project.
   * @type {string}
   * @memberof CreateContactRequest
   */
  email: string;
  /**
   * Given name.
   * @type {string}
   * @memberof CreateContactRequest
   */
  firstName?: string | null;
  /**
   * Family name.
   * @type {string}
   * @memberof CreateContactRequest
   */
  lastName?: string | null;
  /**
   * Initial contact lifecycle status.
   * @type {CreateContactRequestStatusEnum}
   * @memberof CreateContactRequest
   */
  status?: CreateContactRequestStatusEnum | null;
  /**
   * Initial marketing subscription state.
   * @type {boolean}
   * @memberof CreateContactRequest
   */
  subscribed?: boolean | null;
  /**
   * Acquisition source.
   * @type {string}
   * @memberof CreateContactRequest
   */
  source?: string | null;
  /**
   * Caller-defined metadata object.
   * @type {object}
   * @memberof CreateContactRequest
   */
  metadata?: object;
  /**
   * List UUIDs to assign.
   * @type {Array<string>}
   * @memberof CreateContactRequest
   */
  listIds?: Array<string> | null;
  /**
   * Existing tag UUIDs to assign.
   * @type {Array<string>}
   * @memberof CreateContactRequest
   */
  tagIds?: Array<string> | null;
  /**
   * Tag names to resolve or create.
   * @type {Array<string>}
   * @memberof CreateContactRequest
   */
  tagNames?: Array<string> | null;
  /**
   * Custom values keyed by field slug.
   * @type {object}
   * @memberof CreateContactRequest
   */
  customFields?: object;
}

/**
 * @export
 */
export const CreateContactRequestStatusEnum = {
  Active: 'active',
  Unsubscribed: 'unsubscribed',
  Suppressed: 'suppressed',
  Bounced: 'bounced',
  Complained: 'complained',
  Archived: 'archived',
} as const;
export type CreateContactRequestStatusEnum =
  (typeof CreateContactRequestStatusEnum)[keyof typeof CreateContactRequestStatusEnum];

/**
 *
 * @export
 * @interface CreateCustomFieldRequest
 */
export interface CreateCustomFieldRequest {
  /**
   *
   * @type {string}
   * @memberof CreateCustomFieldRequest
   */
  name: string;
  /**
   *
   * @type {CustomFieldType}
   * @memberof CreateCustomFieldRequest
   */
  type?: CustomFieldType | null;
  /**
   *
   * @type {CustomFieldType}
   * @memberof CreateCustomFieldRequest
   */
  fieldType?: CustomFieldType | null;
  /**
   *
   * @type {string}
   * @memberof CreateCustomFieldRequest
   */
  description?: string | null;
  /**
   *
   * @type {boolean}
   * @memberof CreateCustomFieldRequest
   */
  required?: boolean | null;
  /**
   *
   * @type {boolean}
   * @memberof CreateCustomFieldRequest
   */
  isRequired?: boolean | null;
  /**
   *
   * @type {string}
   * @memberof CreateCustomFieldRequest
   */
  defaultValue?: string | null;
  /**
   *
   * @type {Array<string>}
   * @memberof CreateCustomFieldRequest
   */
  options?: Array<string> | null;
}

/**
 *
 * @export
 * @interface CreateDomainRequest
 */
export interface CreateDomainRequest {
  /**
   * Root domain or sending subdomain.
   * @type {string}
   * @memberof CreateDomainRequest
   */
  domain: string;
}
/**
 *
 * @export
 * @interface CreateListRequest
 */
export interface CreateListRequest {
  /**
   *
   * @type {string}
   * @memberof CreateListRequest
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof CreateListRequest
   */
  description?: string | null;
  /**
   *
   * @type {string}
   * @memberof CreateListRequest
   */
  color?: string | null;
}
/**
 *
 * @export
 * @interface CreateProjectRequest
 */
export interface CreateProjectRequest {
  /**
   * Project display name.
   * @type {string}
   * @memberof CreateProjectRequest
   */
  name: string;
  /**
   * Lowercase kebab-case slug; generated when omitted.
   * @type {string}
   * @memberof CreateProjectRequest
   */
  slug?: string | null;
  /**
   * Optional project description.
   * @type {string}
   * @memberof CreateProjectRequest
   */
  description?: string | null;
  /**
   * Runtime environment.
   * @type {CreateProjectRequestEnvironmentEnum}
   * @memberof CreateProjectRequest
   */
  environment?: CreateProjectRequestEnvironmentEnum | null;
  /**
   * IANA timezone.
   * @type {string}
   * @memberof CreateProjectRequest
   */
  timezone?: string | null;
  /**
   * Default sender address hint.
   * @type {string}
   * @memberof CreateProjectRequest
   */
  defaultSender?: string | null;
  /**
   *
   * @type {CreateProjectRequestSettings}
   * @memberof CreateProjectRequest
   */
  settings?: CreateProjectRequestSettings;
}

/**
 * @export
 */
export const CreateProjectRequestEnvironmentEnum = {
  Production: 'production',
  Staging: 'staging',
  Development: 'development',
  Test: 'test',
} as const;
export type CreateProjectRequestEnvironmentEnum =
  (typeof CreateProjectRequestEnvironmentEnum)[keyof typeof CreateProjectRequestEnvironmentEnum];

/**
 * Extensible project settings. `tracking.opens` and `tracking.clicks` (booleans, default true) set the project default for open and click tracking.
 * @export
 * @interface CreateProjectRequestSettings
 */
export interface CreateProjectRequestSettings {
  [key: string]: any | any;
  /**
   *
   * @type {CreateProjectRequestSettingsTracking}
   * @memberof CreateProjectRequestSettings
   */
  tracking?: CreateProjectRequestSettingsTracking;
}
/**
 * Project default for open and click tracking. Omitted keys default to true.
 * @export
 * @interface CreateProjectRequestSettingsTracking
 */
export interface CreateProjectRequestSettingsTracking {
  /**
   *
   * @type {boolean}
   * @memberof CreateProjectRequestSettingsTracking
   */
  opens?: boolean | null;
  /**
   *
   * @type {boolean}
   * @memberof CreateProjectRequestSettingsTracking
   */
  clicks?: boolean | null;
}
/**
 *
 * @export
 * @interface CreateSegmentRequest
 */
export interface CreateSegmentRequest {
  /**
   * Project-unique segment name.
   * @type {string}
   * @memberof CreateSegmentRequest
   */
  name: string;
  /**
   * Optional segment description.
   * @type {string}
   * @memberof CreateSegmentRequest
   */
  description?: string | null;
  /**
   *
   * @type {CreateSegmentRequestRules}
   * @memberof CreateSegmentRequest
   */
  rules: CreateSegmentRequestRules;
}
/**
 * Dynamic membership rule tree.
 * @export
 * @interface CreateSegmentRequestRules
 */
export interface CreateSegmentRequestRules {
  /**
   *
   * @type {CreateSegmentRequestRulesLogicEnum}
   * @memberof CreateSegmentRequestRules
   */
  logic: CreateSegmentRequestRulesLogicEnum;
  /**
   *
   * @type {Array<PreviewSegmentRequestRulesRulesInner>}
   * @memberof CreateSegmentRequestRules
   */
  rules: Array<PreviewSegmentRequestRulesRulesInner>;
}

/**
 * @export
 */
export const CreateSegmentRequestRulesLogicEnum = {
  And: 'and',
  Or: 'or',
} as const;
export type CreateSegmentRequestRulesLogicEnum =
  (typeof CreateSegmentRequestRulesLogicEnum)[keyof typeof CreateSegmentRequestRulesLogicEnum];

/**
 *
 * @export
 * @interface CreateSuppressionRequest
 */
export interface CreateSuppressionRequest {
  /**
   * Email address to suppress.
   * @type {string}
   * @memberof CreateSuppressionRequest
   */
  email: string;
  /**
   * Reason for suppression.
   * @type {SuppressionReason}
   * @memberof CreateSuppressionRequest
   */
  reason: SuppressionReason;
  /**
   * Optional operator notes.
   * @type {string}
   * @memberof CreateSuppressionRequest
   */
  notes?: string | null;
}

/**
 *
 * @export
 * @interface CreateTagRequest
 */
export interface CreateTagRequest {
  /**
   * Project-unique tag name. Tags do not support a `description` field.
   * @type {string}
   * @memberof CreateTagRequest
   */
  name: string;
  /**
   * Optional display color in hex notation.
   * @type {string}
   * @memberof CreateTagRequest
   */
  color?: string | null;
}
/**
 *
 * @export
 * @interface CreateTemplateRequest
 */
export interface CreateTemplateRequest {
  /**
   * Project-unique template name.
   * @type {string}
   * @memberof CreateTemplateRequest
   */
  name: string;
  /**
   * Optional internal description.
   * @type {string}
   * @memberof CreateTemplateRequest
   */
  description?: string | null;
  /**
   * Subject with optional `{{variable}}` placeholders.
   * @type {string}
   * @memberof CreateTemplateRequest
   */
  subject: string;
  /**
   * HTML body; required when no other body field is provided.
   * @type {string}
   * @memberof CreateTemplateRequest
   */
  html?: string | null;
  /**
   * Backward-compatible alias of html.
   * @type {string}
   * @memberof CreateTemplateRequest
   */
  htmlContent?: string | null;
  /**
   * Plain-text body.
   * @type {string}
   * @memberof CreateTemplateRequest
   */
  text?: string | null;
  /**
   * Backward-compatible alias of text.
   * @type {string}
   * @memberof CreateTemplateRequest
   */
  textContent?: string | null;
  /**
   * Initial publication status.
   * @type {TemplateStatus}
   * @memberof CreateTemplateRequest
   */
  status?: TemplateStatus | null;
  /**
   * Editor/layout identifier.
   * @type {string}
   * @memberof CreateTemplateRequest
   */
  editorType?: string | null;
  /**
   * Template category.
   * @type {string}
   * @memberof CreateTemplateRequest
   */
  category?: string | null;
  /**
   * Searchable labels.
   * @type {Array<string>}
   * @memberof CreateTemplateRequest
   */
  tags?: Array<string>;
  /**
   * Template variable definitions.
   * @type {Array<CreateTemplateRequestVariablesInner>}
   * @memberof CreateTemplateRequest
   */
  variables?: Array<CreateTemplateRequestVariablesInner>;
  /**
   *
   * @type {CreateTemplateRequestBranding}
   * @memberof CreateTemplateRequest
   */
  branding?: CreateTemplateRequestBranding;
}

/**
 * Branding, layout, colors, and footer settings.
 * @export
 * @interface CreateTemplateRequestBranding
 */
export interface CreateTemplateRequestBranding {
  /**
   *
   * @type {TemplateLayoutStyle}
   * @memberof CreateTemplateRequestBranding
   */
  layout?: TemplateLayoutStyle | null;
  /**
   *
   * @type {string}
   * @memberof CreateTemplateRequestBranding
   */
  logoUrl?: string | null;
  /**
   *
   * @type {string}
   * @memberof CreateTemplateRequestBranding
   */
  logoAlt?: string | null;
  /**
   *
   * @type {string}
   * @memberof CreateTemplateRequestBranding
   */
  companyName?: string | null;
  /**
   *
   * @type {string}
   * @memberof CreateTemplateRequestBranding
   */
  primaryColor?: string | null;
  /**
   *
   * @type {string}
   * @memberof CreateTemplateRequestBranding
   */
  backgroundColor?: string | null;
  /**
   *
   * @type {string}
   * @memberof CreateTemplateRequestBranding
   */
  contentBackgroundColor?: string | null;
  /**
   *
   * @type {string}
   * @memberof CreateTemplateRequestBranding
   */
  textColor?: string | null;
  /**
   *
   * @type {string}
   * @memberof CreateTemplateRequestBranding
   */
  mutedTextColor?: string | null;
  /**
   *
   * @type {string}
   * @memberof CreateTemplateRequestBranding
   */
  buttonTextColor?: string | null;
  /**
   *
   * @type {string}
   * @memberof CreateTemplateRequestBranding
   */
  fontFamily?: string | null;
  /**
   *
   * @type {string}
   * @memberof CreateTemplateRequestBranding
   */
  footerText?: string | null;
  /**
   *
   * @type {string}
   * @memberof CreateTemplateRequestBranding
   */
  supportEmail?: string | null;
  /**
   *
   * @type {string}
   * @memberof CreateTemplateRequestBranding
   */
  websiteUrl?: string | null;
  /**
   *
   * @type {string}
   * @memberof CreateTemplateRequestBranding
   */
  category?: string | null;
  /**
   *
   * @type {string}
   * @memberof CreateTemplateRequestBranding
   */
  templateType?: string | null;
  /**
   *
   * @type {string}
   * @memberof CreateTemplateRequestBranding
   */
  previewText?: string | null;
  /**
   *
   * @type {Array<string>}
   * @memberof CreateTemplateRequestBranding
   */
  tags?: Array<string> | null;
  /**
   *
   * @type {Array<string>}
   * @memberof CreateTemplateRequestBranding
   */
  variableMeta?: Array<string> | null;
}

/**
 *
 * @export
 * @interface CreateTemplateRequestVariablesInner
 */
export interface CreateTemplateRequestVariablesInner {
  /**
   *
   * @type {string}
   * @memberof CreateTemplateRequestVariablesInner
   */
  name: string;
  /**
   *
   * @type {TemplateVariableType}
   * @memberof CreateTemplateRequestVariablesInner
   */
  type: TemplateVariableType;
  /**
   *
   * @type {boolean}
   * @memberof CreateTemplateRequestVariablesInner
   */
  required?: boolean;
  /**
   *
   * @type {string}
   * @memberof CreateTemplateRequestVariablesInner
   */
  defaultValue?: string | null;
}

/**
 *
 * @export
 * @interface CreateWebhookRequest
 */
export interface CreateWebhookRequest {
  /**
   * Human-readable label for the endpoint.
   * @type {string}
   * @memberof CreateWebhookRequest
   */
  name: string;
  /**
   * HTTPS URL that will receive signed event deliveries.
   * @type {string}
   * @memberof CreateWebhookRequest
   */
  url: string;
  /**
   * Event types to subscribe to.
   * @type {Array<CreateWebhookRequestSubscribedEventsEnum>}
   * @memberof CreateWebhookRequest
   */
  subscribedEvents: Array<CreateWebhookRequestSubscribedEventsEnum>;
  /**
   * Whether the endpoint is active on creation. Defaults to true.
   * @type {boolean}
   * @memberof CreateWebhookRequest
   */
  isActive?: boolean;
}

/**
 * @export
 */
export const CreateWebhookRequestSubscribedEventsEnum = {
  EmailSent: 'email.sent',
  EmailDelivered: 'email.delivered',
  EmailFailed: 'email.failed',
  EmailBounced: 'email.bounced',
  EmailComplained: 'email.complained',
  EmailOpened: 'email.opened',
  EmailClicked: 'email.clicked',
  EmailQueued: 'email.queued',
  EmailDeliveryDelayed: 'email.delivery_delayed',
  EmailSuppressed: 'email.suppressed',
  EmailUnsubscribed: 'email.unsubscribed',
  CampaignCreated: 'campaign.created',
  CampaignScheduled: 'campaign.scheduled',
  CampaignStarted: 'campaign.started',
  CampaignCompleted: 'campaign.completed',
  ContactCreated: 'contact.created',
  ContactUpdated: 'contact.updated',
  ContactDeleted: 'contact.deleted',
  DomainVerified: 'domain.verified',
  ProjectCreated: 'project.created',
  ApiKeyCreated: 'api_key.created',
} as const;
export type CreateWebhookRequestSubscribedEventsEnum =
  (typeof CreateWebhookRequestSubscribedEventsEnum)[keyof typeof CreateWebhookRequestSubscribedEventsEnum];

/**
 *
 * @export
 * @interface CustomField
 */
export interface CustomField {
  /**
   * Public custom field UUID. @format uuid
   * @type {string}
   * @memberof CustomField
   */
  id: string;
  /**
   * Human-readable field name. @example Company
   * @type {string}
   * @memberof CustomField
   */
  name: string;
  /**
   * Stable value key used in contact payloads. @example company
   * @type {string}
   * @memberof CustomField
   */
  slug: string;
  /**
   * Field value type. @var 'text'|'textarea'|'number'|'boolean'|'date'|'datetime'|'select'|'multi_select'|'email'|'url'|'phone'|'json' @example text
   * @type {string}
   * @memberof CustomField
   */
  type: string;
  /**
   * Optional field description. @example Contact employer
   * @type {string}
   * @memberof CustomField
   */
  description: string | null;
  /**
   * Whether imports and writes require a value. @example false
   * @type {boolean}
   * @memberof CustomField
   */
  required: boolean;
  /**
   * Default value applied when appropriate.
   * @type {object}
   * @memberof CustomField
   */
  defaultValue: object | null;
  /**
   * Allowed choices for select fields. @var list<mixed>|null
   * @type {Array<any>}
   * @memberof CustomField
   */
  options: Array<any> | null;
  /**
   * Creation time. @format date-time
   * @type {string}
   * @memberof CustomField
   */
  createdAt: string | null;
  /**
   * Last update time. @format date-time
   * @type {string}
   * @memberof CustomField
   */
  updatedAt: string | null;
}
/**
 *
 * @export
 * @interface CustomFieldCollection
 */
export interface CustomFieldCollection {
  /**
   *
   * @type {boolean}
   * @memberof CustomFieldCollection
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof CustomFieldCollection
   */
  message: string;
  /**
   *
   * @type {Array<CustomField>}
   * @memberof CustomFieldCollection
   */
  data: Array<CustomField>;
  /**
   *
   * @type {PaginationMeta}
   * @memberof CustomFieldCollection
   */
  meta: PaginationMeta;
}
/**
 *
 * @export
 * @interface CustomFieldResponse
 */
export interface CustomFieldResponse {
  /**
   *
   * @type {boolean}
   * @memberof CustomFieldResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof CustomFieldResponse
   */
  message: string;
  /**
   *
   * @type {CustomField}
   * @memberof CustomFieldResponse
   */
  data: CustomField;
}

/**
 *
 * @export
 */
export const CustomFieldType = {
  Text: 'text',
  Textarea: 'textarea',
  Number: 'number',
  Boolean: 'boolean',
  Date: 'date',
  Datetime: 'datetime',
  Select: 'select',
  MultiSelect: 'multi_select',
  Email: 'email',
  Url: 'url',
  Phone: 'phone',
  Json: 'json',
} as const;
export type CustomFieldType = (typeof CustomFieldType)[keyof typeof CustomFieldType];

/**
 *
 * @export
 * @interface DNSRecord
 */
export interface DNSRecord {
  /**
   * DNS record type. @var 'TXT'|'CNAME'|'MX' @example CNAME
   * @type {string}
   * @memberof DNSRecord
   */
  recordType: string;
  /**
   * DNS host/name. @example selector1._domainkey.mail.example.com
   * @type {string}
   * @memberof DNSRecord
   */
  recordName: string;
  /**
   * DNS record value. @example selector1.dkim.provider.example
   * @type {string}
   * @memberof DNSRecord
   */
  recordValue: string;
  /**
   * Alias of record_name.
   * @type {string}
   * @memberof DNSRecord
   */
  name: string;
  /**
   * Alias of record_value.
   * @type {string}
   * @memberof DNSRecord
   */
  value: string;
  /**
   * Record purpose. @var 'verification'|'spf'|'dkim'|'mail_from'|'dmarc' @example dkim
   * @type {string}
   * @memberof DNSRecord
   */
  purpose: string;
  /**
   * Optional provider priority, primarily for MX records. @example 10
   * @type {number}
   * @memberof DNSRecord
   */
  priority: number | null;
  /**
   * DNS TTL in seconds. @example 300
   * @type {number}
   * @memberof DNSRecord
   */
  ttl: number | null;
  /**
   * Verification state. @var 'pending'|'verified'|'failed' @example pending
   * @type {string}
   * @memberof DNSRecord
   */
  status: string;
  /**
   * Human-readable purpose. @example DKIM
   * @type {string}
   * @memberof DNSRecord
   */
  purposeLabel: string;
}
/**
 *
 * @export
 * @interface DeleteResponse
 */
export interface DeleteResponse {
  /**
   *
   * @type {boolean}
   * @memberof DeleteResponse
   */
  success: boolean;
  /**
   * Human-readable deletion confirmation.
   * @type {string}
   * @memberof DeleteResponse
   */
  message: string;
  /**
   * Always null after successful deletion.
   * @type {object}
   * @memberof DeleteResponse
   */
  data: object | null;
}
/**
 *
 * @export
 * @interface DeliveryLog
 */
export interface DeliveryLog {
  /**
   * Public message UUID.
   * @type {string}
   * @memberof DeliveryLog
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof DeliveryLog
   */
  fromEmail: string;
  /**
   *
   * @type {string}
   * @memberof DeliveryLog
   */
  fromName: string | null;
  /**
   *
   * @type {string}
   * @memberof DeliveryLog
   */
  toEmail: string;
  /**
   *
   * @type {string}
   * @memberof DeliveryLog
   */
  subject: string;
  /**
   *
   * @type {MessageStatus}
   * @memberof DeliveryLog
   */
  status: MessageStatus;
  /**
   *
   * @type {string}
   * @memberof DeliveryLog
   */
  provider: string;
  /**
   *
   * @type {string}
   * @memberof DeliveryLog
   */
  providerMessageId: string | null;
  /**
   *
   * @type {string}
   * @memberof DeliveryLog
   */
  errorMessage: string | null;
  /**
   *
   * @type {Array<any>}
   * @memberof DeliveryLog
   */
  metadata: Array<any>;
  /**
   *
   * @type {Array<any>}
   * @memberof DeliveryLog
   */
  tags: Array<any>;
  /**
   *
   * @type {string}
   * @memberof DeliveryLog
   */
  sentAt: string | null;
  /**
   *
   * @type {string}
   * @memberof DeliveryLog
   */
  createdAt: string | null;
  /**
   *
   * @type {string}
   * @memberof DeliveryLog
   */
  updatedAt: string | null;
  /**
   * Present on detail responses only.
   * @type {Array<any>}
   * @memberof DeliveryLog
   */
  timeline: Array<any>;
  /**
   * Present when project relation is loaded.
   * @type {Array<any>}
   * @memberof DeliveryLog
   */
  project: Array<any> | null;
}

/**
 *
 * @export
 * @interface DomainListResponse
 */
export interface DomainListResponse {
  /**
   *
   * @type {boolean}
   * @memberof DomainListResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof DomainListResponse
   */
  message: string;
  /**
   *
   * @type {Array<DomainResource>}
   * @memberof DomainListResponse
   */
  data: Array<DomainResource>;
  /**
   *
   * @type {PaginationMeta}
   * @memberof DomainListResponse
   */
  meta: PaginationMeta;
}
/**
 *
 * @export
 * @interface DomainResource
 */
export interface DomainResource {
  /**
   * Public domain UUID. @format uuid
   * @type {string}
   * @memberof DomainResource
   */
  id: string;
  /**
   * Sending domain. @example mail.example.com
   * @type {string}
   * @memberof DomainResource
   */
  domain: string;
  /**
   * Provisioning status. @example pending
   * @type {string}
   * @memberof DomainResource
   */
  status: string;
  /**
   * Whether ownership is verified. @example false
   * @type {boolean}
   * @memberof DomainResource
   */
  verified: boolean;
  /**
   * Verification status. @var 'provisioning'|'pending'|'verified'|'failed'
   * @type {string}
   * @memberof DomainResource
   */
  verificationStatus: string;
  /**
   * Delivery provider label. @example Amazon SES
   * @type {string}
   * @memberof DomainResource
   */
  provider: string | null;
  /**
   * Creation time. @format date-time
   * @type {string}
   * @memberof DomainResource
   */
  createdAt: string | null;
  /**
   * Verification completion time. @format date-time
   * @type {string}
   * @memberof DomainResource
   */
  verifiedAt: string | null;
  /**
   * Last verification check. @format date-time
   * @type {string}
   * @memberof DomainResource
   */
  lastCheckedAt: string | null;
  /**
   * Aggregate DNS status.
   * @type {string}
   * @memberof DomainResource
   */
  dnsStatus: string;
  /**
   * DKIM verification status.
   * @type {string}
   * @memberof DomainResource
   */
  dkimStatus: string;
  /**
   * SPF verification status.
   * @type {string}
   * @memberof DomainResource
   */
  spfStatus: string;
  /**
   * Tracking-domain status. @example not_configured
   * @type {string}
   * @memberof DomainResource
   */
  trackingStatus: string;
  /**
   * MAIL FROM domain; present on detailed responses.
   * @type {string}
   * @memberof DomainResource
   */
  mailFrom: string | null;
  /**
   * Last provider verification error.
   * @type {string}
   * @memberof DomainResource
   */
  verificationError: string | null;
  /**
   * Provider verification token.
   * @type {string}
   * @memberof DomainResource
   */
  verificationToken: string | null;
  /**
   * Recommended DMARC record. @var array{type: string, name: string, value: string, note: string}|null
   * @type {Array<any>}
   * @memberof DomainResource
   */
  dmarcRecommendation: Array<any> | null;
  /**
   * DNS records required for verification.
   * @type {Array<DNSRecord>}
   * @memberof DomainResource
   */
  dnsRecords: Array<DNSRecord>;
  /**
   * Aggregate status by purpose. @var array{verification: string, spf: string, dkim: string}|null
   * @type {Array<any>}
   * @memberof DomainResource
   */
  dnsSummary: Array<any> | null;
  /**
   * Parent project summary. @var array{id: string, name: string}|null
   * @type {Array<any>}
   * @memberof DomainResource
   */
  project: Array<any> | null;
}
/**
 *
 * @export
 * @interface DomainResponse
 */
export interface DomainResponse {
  /**
   *
   * @type {boolean}
   * @memberof DomainResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof DomainResponse
   */
  message: string;
  /**
   *
   * @type {DomainResource}
   * @memberof DomainResponse
   */
  data: DomainResource;
}
/**
 *
 * @export
 * @interface DuplicateCampaignRequest
 */
export interface DuplicateCampaignRequest {
  /**
   * Copy delivery timing into the draft duplicate.
   * @type {boolean}
   * @memberof DuplicateCampaignRequest
   */
  includeSchedule?: boolean;
}
/**
 *
 * @export
 * @interface DuplicateTemplateRequest
 */
export interface DuplicateTemplateRequest {
  /**
   * Name for the copy; generated when omitted.
   * @type {string}
   * @memberof DuplicateTemplateRequest
   */
  name?: string | null;
}
/**
 *
 * @export
 * @interface EmailAttachment
 */
export interface EmailAttachment {
  /**
   * Safe filename (no path traversal).
   * @type {string}
   * @memberof EmailAttachment
   */
  filename: string;
  /**
   * MIME type, e.g. `application/pdf`.
   * @type {string}
   * @memberof EmailAttachment
   */
  contentType: string | null;
  /**
   * Decoded file size in bytes.
   * @type {number}
   * @memberof EmailAttachment
   */
  size: number | null;
}
/**
 *
 * @export
 * @interface EventListResponse
 */
export interface EventListResponse {
  /**
   *
   * @type {boolean}
   * @memberof EventListResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof EventListResponse
   */
  message: string;
  /**
   *
   * @type {Array<TimelineEvent>}
   * @memberof EventListResponse
   */
  data: Array<TimelineEvent>;
  /**
   *
   * @type {PaginationMeta}
   * @memberof EventListResponse
   */
  meta: PaginationMeta;
}
/**
 *
 * @export
 * @interface EventResponse
 */
export interface EventResponse {
  /**
   *
   * @type {boolean}
   * @memberof EventResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof EventResponse
   */
  message: string;
  /**
   *
   * @type {TimelineEvent}
   * @memberof EventResponse
   */
  data: TimelineEvent;
}
/**
 *
 * @export
 * @interface ExportContactsRequest
 */
export interface ExportContactsRequest {
  /**
   * Optional email or name filter.
   * @type {string}
   * @memberof ExportContactsRequest
   */
  search?: string | null;
  /**
   * Optional status filter.
   * @type {string}
   * @memberof ExportContactsRequest
   */
  status?: string | null;
  /**
   * Optional subscription filter.
   * @type {boolean}
   * @memberof ExportContactsRequest
   */
  subscribed?: boolean | null;
  /**
   * Optional list UUID filter.
   * @type {string}
   * @memberof ExportContactsRequest
   */
  list?: string | null;
  /**
   * Optional tag-name filter.
   * @type {string}
   * @memberof ExportContactsRequest
   */
  tagName?: string | null;
  /**
   * Optional contact UUID selection.
   * @type {Array<string>}
   * @memberof ExportContactsRequest
   */
  ids?: Array<string> | null;
}
/**
 *
 * @export
 * @interface ExportJob
 */
export interface ExportJob {
  /**
   * Public export UUID. @format uuid
   * @type {string}
   * @memberof ExportJob
   */
  id: string;
  /**
   * Export lifecycle status. @var 'pending'|'processing'|'completed'|'failed' @example pending
   * @type {string}
   * @memberof ExportJob
   */
  status: string;
  /**
   * Number of contacts written to the export. @example 1250
   * @type {number}
   * @memberof ExportJob
   */
  contactCount: number;
  /**
   * Filters captured when the export was queued. @var array<string, mixed>
   * @type {Array<any>}
   * @memberof ExportJob
   */
  filters: Array<any>;
  /**
   * Download URL, available only after completion. @format uri
   * @type {string}
   * @memberof ExportJob
   */
  downloadUrl: string | null;
  /**
   * Processing completion time. @format date-time
   * @type {string}
   * @memberof ExportJob
   */
  completedAt: string | null;
  /**
   * Job creation time. @format date-time
   * @type {string}
   * @memberof ExportJob
   */
  createdAt: string | null;
  /**
   * Last job update time. @format date-time
   * @type {string}
   * @memberof ExportJob
   */
  updatedAt: string | null;
}
/**
 *
 * @export
 * @interface ExportJobResponse
 */
export interface ExportJobResponse {
  /**
   *
   * @type {boolean}
   * @memberof ExportJobResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof ExportJobResponse
   */
  message: string;
  /**
   *
   * @type {ExportJob}
   * @memberof ExportJobResponse
   */
  data: ExportJob;
}
/**
 *
 * @export
 * @interface ImportContactsRequest
 */
export interface ImportContactsRequest {
  /**
   * CSV, TSV, XLSX, or XLS contact file (maximum 50 MiB).
   * @type {Blob}
   * @memberof ImportContactsRequest
   */
  file: Blob;
}
/**
 *
 * @export
 * @interface ImportJob
 */
export interface ImportJob {
  /**
   * Public import UUID. @format uuid
   * @type {string}
   * @memberof ImportJob
   */
  id: string;
  /**
   * Import lifecycle status. @var 'draft'|'pending'|'queued'|'processing'|'completed'|'failed' @example processing
   * @type {string}
   * @memberof ImportJob
   */
  status: string;
  /**
   * Completion percentage from 0 through 100. @example 65
   * @type {number}
   * @memberof ImportJob
   */
  progress: number;
  /**
   * Uploaded source filename. @example contacts.xlsx
   * @type {string}
   * @memberof ImportJob
   */
  originalFilename: string;
  /**
   * Human-readable completion or failure summary.
   * @type {string}
   * @memberof ImportJob
   */
  summary: string | null;
  /**
   * Parser suggestions, parse details, and saved configuration. @var array<string, mixed>
   * @type {Array<any>}
   * @memberof ImportJob
   */
  metadata: Array<any>;
  /**
   * Row and batch counters. @var array{rows_total: int, rows_imported: int, rows_updated: int, rows_failed: int, rows_skipped: int, current_batch: int, total_batches: int}
   * @type {Array<any>}
   * @memberof ImportJob
   */
  counters: Array<any>;
  /**
   * Whether a downloadable failure CSV exists. @example false
   * @type {boolean}
   * @memberof ImportJob
   */
  hasFailures: boolean;
  /**
   * Processing start time. @format date-time
   * @type {string}
   * @memberof ImportJob
   */
  startedAt: string | null;
  /**
   * Processing completion time. @format date-time
   * @type {string}
   * @memberof ImportJob
   */
  completedAt: string | null;
  /**
   * Job creation time. @format date-time
   * @type {string}
   * @memberof ImportJob
   */
  createdAt: string | null;
  /**
   * Last job update time. @format date-time
   * @type {string}
   * @memberof ImportJob
   */
  updatedAt: string | null;
}
/**
 *
 * @export
 * @interface ImportJobCollection
 */
export interface ImportJobCollection {
  /**
   *
   * @type {boolean}
   * @memberof ImportJobCollection
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof ImportJobCollection
   */
  message: string;
  /**
   *
   * @type {Array<ImportJob>}
   * @memberof ImportJobCollection
   */
  data: Array<ImportJob>;
}
/**
 *
 * @export
 * @interface ImportJobDetail
 */
export interface ImportJobDetail {
  /**
   * Public import UUID. @format uuid
   * @type {string}
   * @memberof ImportJobDetail
   */
  id: string;
  /**
   * Import lifecycle status. @var 'draft'|'pending'|'queued'|'processing'|'completed'|'failed' @example processing
   * @type {string}
   * @memberof ImportJobDetail
   */
  status: string;
  /**
   * Completion percentage from 0 through 100. @example 65
   * @type {number}
   * @memberof ImportJobDetail
   */
  progress: number;
  /**
   * Uploaded source filename. @example contacts.xlsx
   * @type {string}
   * @memberof ImportJobDetail
   */
  originalFilename: string;
  /**
   * Human-readable completion or failure summary.
   * @type {string}
   * @memberof ImportJobDetail
   */
  summary: string | null;
  /**
   * Parser suggestions, parse details, and saved configuration. @var array<string, mixed>
   * @type {Array<any>}
   * @memberof ImportJobDetail
   */
  metadata: Array<any>;
  /**
   * Row and batch counters. @var array{rows_total: int, rows_imported: int, rows_updated: int, rows_failed: int, rows_skipped: int, current_batch: int, total_batches: int}
   * @type {Array<any>}
   * @memberof ImportJobDetail
   */
  counters: Array<any>;
  /**
   * Whether a downloadable failure CSV exists. @example false
   * @type {boolean}
   * @memberof ImportJobDetail
   */
  hasFailures: boolean;
  /**
   * Processing start time. @format date-time
   * @type {string}
   * @memberof ImportJobDetail
   */
  startedAt: string | null;
  /**
   * Processing completion time. @format date-time
   * @type {string}
   * @memberof ImportJobDetail
   */
  completedAt: string | null;
  /**
   * Job creation time. @format date-time
   * @type {string}
   * @memberof ImportJobDetail
   */
  createdAt: string | null;
  /**
   * Last job update time. @format date-time
   * @type {string}
   * @memberof ImportJobDetail
   */
  updatedAt: string | null;
  /**
   * Live processing metrics for polling clients.
   * @type {ImportProgress}
   * @memberof ImportJobDetail
   */
  progressPayload: ImportProgress;
}
/**
 *
 * @export
 * @interface ImportJobDetailResponse
 */
export interface ImportJobDetailResponse {
  /**
   *
   * @type {boolean}
   * @memberof ImportJobDetailResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof ImportJobDetailResponse
   */
  message: string;
  /**
   *
   * @type {ImportJobDetail}
   * @memberof ImportJobDetailResponse
   */
  data: ImportJobDetail;
}
/**
 *
 * @export
 * @interface ImportJobResponse
 */
export interface ImportJobResponse {
  /**
   *
   * @type {boolean}
   * @memberof ImportJobResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof ImportJobResponse
   */
  message: string;
  /**
   *
   * @type {ImportJob}
   * @memberof ImportJobResponse
   */
  data: ImportJob;
}
/**
 *
 * @export
 * @interface ImportProgress
 */
export interface ImportProgress {
  /**
   * Import UUID. @format uuid
   * @type {string}
   * @memberof ImportProgress
   */
  uuid: string;
  /**
   * Current status. @var 'draft'|'pending'|'queued'|'processing'|'completed'|'failed'
   * @type {string}
   * @memberof ImportProgress
   */
  status: string;
  /**
   * Human-readable status label.
   * @type {string}
   * @memberof ImportProgress
   */
  statusLabel: string;
  /**
   * Completion percentage. @example 65
   * @type {number}
   * @memberof ImportProgress
   */
  progress: number;
  /**
   *
   * @type {number}
   * @memberof ImportProgress
   */
  rowsTotal: number;
  /**
   *
   * @type {number}
   * @memberof ImportProgress
   */
  rowsProcessed: number;
  /**
   *
   * @type {number}
   * @memberof ImportProgress
   */
  rowsRemaining: number;
  /**
   *
   * @type {number}
   * @memberof ImportProgress
   */
  rowsImported: number;
  /**
   *
   * @type {number}
   * @memberof ImportProgress
   */
  rowsUpdated: number;
  /**
   *
   * @type {number}
   * @memberof ImportProgress
   */
  rowsFailed: number;
  /**
   *
   * @type {number}
   * @memberof ImportProgress
   */
  rowsSkipped: number;
  /**
   *
   * @type {number}
   * @memberof ImportProgress
   */
  currentBatch: number;
  /**
   *
   * @type {number}
   * @memberof ImportProgress
   */
  totalBatches: number;
  /**
   * Estimated seconds remaining.
   * @type {number}
   * @memberof ImportProgress
   */
  etaSeconds: number | null;
  /**
   * Processing speed in rows per minute.
   * @type {number}
   * @memberof ImportProgress
   */
  speedPerMinute: number | null;
  /**
   *
   * @type {string}
   * @memberof ImportProgress
   */
  summary: string | null;
  /**
   *
   * @type {string}
   * @memberof ImportProgress
   */
  originalFilename: string;
  /**
   *
   * @type {string}
   * @memberof ImportProgress
   */
  startedAt: string | null;
  /**
   *
   * @type {string}
   * @memberof ImportProgress
   */
  completedAt: string | null;
  /**
   *
   * @type {boolean}
   * @memberof ImportProgress
   */
  hasFailures: boolean;
}
/**
 *
 * @export
 * @interface InlineObject
 */
export interface InlineObject {
  /**
   *
   * @type {boolean}
   * @memberof InlineObject
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof InlineObject
   */
  message: string;
  /**
   *
   * @type {string}
   * @memberof InlineObject
   */
  requestId?: string | null;
}
/**
 *
 * @export
 * @interface InlineObject1
 */
export interface InlineObject1 {
  /**
   *
   * @type {boolean}
   * @memberof InlineObject1
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof InlineObject1
   */
  message: string;
  /**
   *
   * @type {{ [key: string]: Array<string>; }}
   * @memberof InlineObject1
   */
  errors: { [key: string]: Array<string> };
}
/**
 *
 * @export
 * @interface ListCollection
 */
export interface ListCollection {
  /**
   *
   * @type {boolean}
   * @memberof ListCollection
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof ListCollection
   */
  message: string;
  /**
   *
   * @type {Array<ListResource>}
   * @memberof ListCollection
   */
  data: Array<ListResource>;
  /**
   *
   * @type {PaginationMeta}
   * @memberof ListCollection
   */
  meta: PaginationMeta;
}
/**
 *
 * @export
 * @interface ListContactsMembershipRequest
 */
export interface ListContactsMembershipRequest {
  /**
   * Contact UUIDs to add or remove.
   * @type {Array<string>}
   * @memberof ListContactsMembershipRequest
   */
  ids: Array<string>;
}
/**
 *
 * @export
 * @interface ListResource
 */
export interface ListResource {
  /**
   * Public list UUID. @format uuid
   * @type {string}
   * @memberof ListResource
   */
  id: string;
  /**
   * Project-unique list name. @example Product newsletter
   * @type {string}
   * @memberof ListResource
   */
  name: string;
  /**
   * Optional list description. @example Customers subscribed to product updates
   * @type {string}
   * @memberof ListResource
   */
  description: string | null;
  /**
   * Display color in hex notation. @example #22C55E
   * @type {string}
   * @memberof ListResource
   */
  color: string;
  /**
   * Current number of list members. @example 1250
   * @type {number}
   * @memberof ListResource
   */
  subscriberCount: number;
  /**
   * Creation time. @format date-time
   * @type {string}
   * @memberof ListResource
   */
  createdAt: string | null;
  /**
   * Last update time. @format date-time
   * @type {string}
   * @memberof ListResource
   */
  updatedAt: string | null;
}
/**
 *
 * @export
 * @interface ListResponse
 */
export interface ListResponse {
  /**
   *
   * @type {boolean}
   * @memberof ListResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof ListResponse
   */
  message: string;
  /**
   *
   * @type {ListResource}
   * @memberof ListResponse
   */
  data: ListResource;
}
/**
 *
 * @export
 * @interface Message
 */
export interface Message {
  /**
   * Public message UUID.
   * @type {string}
   * @memberof Message
   */
  uuid: string;
  /**
   *
   * @type {string}
   * @memberof Message
   */
  fromEmail: string;
  /**
   *
   * @type {string}
   * @memberof Message
   */
  fromName: string | null;
  /**
   * Primary recipient email.
   * @type {string}
   * @memberof Message
   */
  toEmail: string;
  /**
   * All `to` recipients.
   * @type {Array<any>}
   * @memberof Message
   */
  toEmails: Array<any>;
  /**
   * Carbon copy recipients.
   * @type {Array<any>}
   * @memberof Message
   */
  cc: Array<any>;
  /**
   * Blind carbon copy recipients.
   * @type {Array<any>}
   * @memberof Message
   */
  bcc: Array<any>;
  /**
   *
   * @type {string}
   * @memberof Message
   */
  replyTo: string | null;
  /**
   * Custom headers applied to the message.
   * @type {Array<any>}
   * @memberof Message
   */
  headers: Array<any>;
  /**
   *
   * @type {string}
   * @memberof Message
   */
  subject: string;
  /**
   * Delivery status.
   * @type {MessageStatus}
   * @memberof Message
   */
  status: MessageStatus;
  /**
   *
   * @type {string}
   * @memberof Message
   */
  statusLabel: string;
  /**
   *
   * @type {string}
   * @memberof Message
   */
  provider: string;
  /**
   *
   * @type {string}
   * @memberof Message
   */
  providerLabel: string;
  /**
   *
   * @type {string}
   * @memberof Message
   */
  providerMessageId: string | null;
  /**
   *
   * @type {string}
   * @memberof Message
   */
  errorMessage: string | null;
  /**
   * Arbitrary key-value metadata stored with the message.
   * @type {Array<any>}
   * @memberof Message
   */
  metadata: Array<any>;
  /**
   * Tags for filtering and analytics.
   * @type {Array<any>}
   * @memberof Message
   */
  tags: Array<any>;
  /**
   *
   * @type {Array<EmailAttachment>}
   * @memberof Message
   */
  attachments: Array<EmailAttachment>;
  /**
   *
   * @type {string}
   * @memberof Message
   */
  scheduledAt: string | null;
  /**
   *
   * @type {string}
   * @memberof Message
   */
  sentAt: string | null;
  /**
   *
   * @type {string}
   * @memberof Message
   */
  createdAt: string | null;
  /**
   *
   * @type {string}
   * @memberof Message
   */
  updatedAt: string | null;
}

/**
 *
 * @export
 * @interface MessageDetailResponse
 */
export interface MessageDetailResponse {
  /**
   *
   * @type {boolean}
   * @memberof MessageDetailResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof MessageDetailResponse
   */
  message: string;
  /**
   *
   * @type {DeliveryLog}
   * @memberof MessageDetailResponse
   */
  data: DeliveryLog;
}
/**
 *
 * @export
 * @interface MessageEventsResponse
 */
export interface MessageEventsResponse {
  /**
   *
   * @type {Array<TimelineEvent>}
   * @memberof MessageEventsResponse
   */
  data: Array<TimelineEvent>;
}
/**
 *
 * @export
 * @interface MessageListResponse
 */
export interface MessageListResponse {
  /**
   *
   * @type {boolean}
   * @memberof MessageListResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof MessageListResponse
   */
  message: string;
  /**
   *
   * @type {Array<DeliveryLog>}
   * @memberof MessageListResponse
   */
  data: Array<DeliveryLog>;
  /**
   *
   * @type {PaginationMeta}
   * @memberof MessageListResponse
   */
  meta: PaginationMeta;
}

/**
 *
 * @export
 */
export const MessageStatus = {
  Queued: 'queued',
  Sending: 'sending',
  Sent: 'sent',
  Delivered: 'delivered',
  Bounced: 'bounced',
  Complained: 'complained',
  Rejected: 'rejected',
  Failed: 'failed',
  Deferred: 'deferred',
  Held: 'held',
} as const;
export type MessageStatus = (typeof MessageStatus)[keyof typeof MessageStatus];

/**
 *
 * @export
 * @interface PaginationMeta
 */
export interface PaginationMeta {
  /**
   * Current page number (1-based).
   * @type {number}
   * @memberof PaginationMeta
   */
  currentPage: number;
  /**
   * Items per page.
   * @type {number}
   * @memberof PaginationMeta
   */
  perPage: number;
  /**
   * Total matching records.
   * @type {number}
   * @memberof PaginationMeta
   */
  total: number;
  /**
   * Last available page number.
   * @type {number}
   * @memberof PaginationMeta
   */
  lastPage: number;
}
/**
 *
 * @export
 * @interface PreviewSegmentRequest
 */
export interface PreviewSegmentRequest {
  /**
   *
   * @type {PreviewSegmentRequestRules}
   * @memberof PreviewSegmentRequest
   */
  rules: PreviewSegmentRequestRules;
}
/**
 * Unsaved dynamic membership rule tree.
 * @export
 * @interface PreviewSegmentRequestRules
 */
export interface PreviewSegmentRequestRules {
  /**
   *
   * @type {PreviewSegmentRequestRulesLogicEnum}
   * @memberof PreviewSegmentRequestRules
   */
  logic: PreviewSegmentRequestRulesLogicEnum;
  /**
   *
   * @type {Array<PreviewSegmentRequestRulesRulesInner>}
   * @memberof PreviewSegmentRequestRules
   */
  rules: Array<PreviewSegmentRequestRulesRulesInner>;
}

/**
 * @export
 */
export const PreviewSegmentRequestRulesLogicEnum = {
  And: 'and',
  Or: 'or',
} as const;
export type PreviewSegmentRequestRulesLogicEnum =
  (typeof PreviewSegmentRequestRulesLogicEnum)[keyof typeof PreviewSegmentRequestRulesLogicEnum];

/**
 * A single condition (`field`, `operator`, `value`) or a nested rule group.
 * @export
 * @interface PreviewSegmentRequestRulesRulesInner
 */
export interface PreviewSegmentRequestRulesRulesInner {
  [key: string]: any | any;
  /**
   * Contact attribute or custom field key.
   * @type {string}
   * @memberof PreviewSegmentRequestRulesRulesInner
   */
  field?: string;
  /**
   * Comparison operator, e.g. `equals`, `contains`, `greater_than`.
   * @type {string}
   * @memberof PreviewSegmentRequestRulesRulesInner
   */
  operator?: string;
  /**
   *
   * @type {any}
   * @memberof PreviewSegmentRequestRulesRulesInner
   */
  value?: any | null;
}
/**
 *
 * @export
 * @interface PreviewTemplateByIdRequest
 */
export interface PreviewTemplateByIdRequest {
  /**
   * Published template UUID.
   * @type {string}
   * @memberof PreviewTemplateByIdRequest
   */
  templateId: string;
  /**
   * Runtime values used to render placeholders.
   * @type {object}
   * @memberof PreviewTemplateByIdRequest
   */
  variables?: object;
}
/**
 *
 * @export
 * @interface PreviewTemplateRequest
 */
export interface PreviewTemplateRequest {
  /**
   * Runtime values used to render placeholders.
   * @type {object}
   * @memberof PreviewTemplateRequest
   */
  variables?: object;
}
/**
 *
 * @export
 * @interface ProjectListResponse
 */
export interface ProjectListResponse {
  /**
   *
   * @type {boolean}
   * @memberof ProjectListResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof ProjectListResponse
   */
  message: string;
  /**
   *
   * @type {Array<ProjectResource>}
   * @memberof ProjectListResponse
   */
  data: Array<ProjectResource>;
  /**
   *
   * @type {PaginationMeta}
   * @memberof ProjectListResponse
   */
  meta: PaginationMeta;
}
/**
 *
 * @export
 * @interface ProjectResource
 */
export interface ProjectResource {
  /**
   * Public project UUID. @example 550e8400-e29b-41d4-a716-446655440000
   * @type {string}
   * @memberof ProjectResource
   */
  id: string;
  /**
   * Display name. @example Production Mail
   * @type {string}
   * @memberof ProjectResource
   */
  name: string;
  /**
   * Workspace-unique slug. @example production-mail
   * @type {string}
   * @memberof ProjectResource
   */
  slug: string;
  /**
   * Optional project description. @example Customer-facing transactional email
   * @type {string}
   * @memberof ProjectResource
   */
  description: string | null;
  /**
   * Runtime environment. @var 'production'|'staging'|'development'|'test' @example production
   * @type {string}
   * @memberof ProjectResource
   */
  environment: string;
  /**
   * IANA timezone. @example UTC
   * @type {string}
   * @memberof ProjectResource
   */
  timezone: string;
  /**
   * Default sender address hint. @example hello@example.com
   * @type {string}
   * @memberof ProjectResource
   */
  defaultSender: string | null;
  /**
   * Project lifecycle status. @var 'active'|'archived'|'inactive' @example active
   * @type {string}
   * @memberof ProjectResource
   */
  status: string;
  /**
   * Extensible project settings. @var array<string, mixed>
   * @type {Array<any>}
   * @memberof ProjectResource
   */
  settings: Array<any>;
  /**
   * Number of messages in the project. @example 1240
   * @type {number}
   * @memberof ProjectResource
   */
  emailCount: number;
  /**
   * Number of sending domains. @example 2
   * @type {number}
   * @memberof ProjectResource
   */
  domainCount: number;
  /**
   * Number of API keys. @example 3
   * @type {number}
   * @memberof ProjectResource
   */
  apiKeyCount: number;
  /**
   * Creation time (ISO-8601). @format date-time @example 2026-07-16T10:00:00.000000Z
   * @type {string}
   * @memberof ProjectResource
   */
  createdAt: string | null;
  /**
   * Last update time (ISO-8601). @format date-time @example 2026-07-16T11:00:00.000000Z
   * @type {string}
   * @memberof ProjectResource
   */
  updatedAt: string | null;
}
/**
 *
 * @export
 * @interface ProjectResponse
 */
export interface ProjectResponse {
  /**
   *
   * @type {boolean}
   * @memberof ProjectResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof ProjectResponse
   */
  message: string;
  /**
   *
   * @type {ProjectResource}
   * @memberof ProjectResponse
   */
  data: ProjectResource;
}
/**
 *
 * @export
 * @interface RemoveAudienceMembers200Response
 */
export interface RemoveAudienceMembers200Response {
  /**
   *
   * @type {boolean}
   * @memberof RemoveAudienceMembers200Response
   */
  success: boolean;
  /**
   *
   * @type {RemoveAudienceMembers200ResponseMessageEnum}
   * @memberof RemoveAudienceMembers200Response
   */
  message: RemoveAudienceMembers200ResponseMessageEnum;
  /**
   *
   * @type {RemoveAudienceMembers200ResponseData}
   * @memberof RemoveAudienceMembers200Response
   */
  data: RemoveAudienceMembers200ResponseData;
}

/**
 * @export
 */
export const RemoveAudienceMembers200ResponseMessageEnum = {
  ContactsRemovedFromAudience: 'Contacts removed from audience.',
} as const;
export type RemoveAudienceMembers200ResponseMessageEnum =
  (typeof RemoveAudienceMembers200ResponseMessageEnum)[keyof typeof RemoveAudienceMembers200ResponseMessageEnum];

/**
 *
 * @export
 * @interface RemoveAudienceMembers200ResponseData
 */
export interface RemoveAudienceMembers200ResponseData {
  /**
   *
   * @type {number}
   * @memberof RemoveAudienceMembers200ResponseData
   */
  removed: number;
}
/**
 *
 * @export
 * @interface RemoveContactsFromList200Response
 */
export interface RemoveContactsFromList200Response {
  /**
   *
   * @type {boolean}
   * @memberof RemoveContactsFromList200Response
   */
  success: boolean;
  /**
   *
   * @type {RemoveContactsFromList200ResponseMessageEnum}
   * @memberof RemoveContactsFromList200Response
   */
  message: RemoveContactsFromList200ResponseMessageEnum;
  /**
   *
   * @type {RemoveAudienceMembers200ResponseData}
   * @memberof RemoveContactsFromList200Response
   */
  data: RemoveAudienceMembers200ResponseData;
}

/**
 * @export
 */
export const RemoveContactsFromList200ResponseMessageEnum = {
  ContactsRemovedFromList: 'Contacts removed from list.',
} as const;
export type RemoveContactsFromList200ResponseMessageEnum =
  (typeof RemoveContactsFromList200ResponseMessageEnum)[keyof typeof RemoveContactsFromList200ResponseMessageEnum];

/**
 *
 * @export
 * @interface ReplayWebhookRequest
 */
export interface ReplayWebhookRequest {
  /**
   * Replay only failed deliveries in the range.
   * @type {boolean}
   * @memberof ReplayWebhookRequest
   */
  failedOnly?: boolean;
  /**
   * Replay deliveries created on or after this ISO-8601 date.
   * @type {string}
   * @memberof ReplayWebhookRequest
   */
  from?: string | null;
  /**
   * Replay deliveries created on or before this ISO-8601 date.
   * @type {string}
   * @memberof ReplayWebhookRequest
   */
  to?: string | null;
  /**
   * Restrict replay to these event types.
   * @type {Array<ReplayWebhookRequestEventTypesEnum>}
   * @memberof ReplayWebhookRequest
   */
  eventTypes?: Array<ReplayWebhookRequestEventTypesEnum>;
  /**
   * Replay these specific delivery UUIDs. Overrides range filters.
   * @type {Array<string>}
   * @memberof ReplayWebhookRequest
   */
  deliveryIds?: Array<string>;
}

/**
 * @export
 */
export const ReplayWebhookRequestEventTypesEnum = {
  EmailSent: 'email.sent',
  EmailDelivered: 'email.delivered',
  EmailFailed: 'email.failed',
  EmailBounced: 'email.bounced',
  EmailComplained: 'email.complained',
  EmailOpened: 'email.opened',
  EmailClicked: 'email.clicked',
  EmailQueued: 'email.queued',
  EmailDeliveryDelayed: 'email.delivery_delayed',
  EmailSuppressed: 'email.suppressed',
  EmailUnsubscribed: 'email.unsubscribed',
  CampaignCreated: 'campaign.created',
  CampaignScheduled: 'campaign.scheduled',
  CampaignStarted: 'campaign.started',
  CampaignCompleted: 'campaign.completed',
  ContactCreated: 'contact.created',
  ContactUpdated: 'contact.updated',
  ContactDeleted: 'contact.deleted',
  DomainVerified: 'domain.verified',
  ProjectCreated: 'project.created',
  ApiKeyCreated: 'api_key.created',
  TestWebhook: 'test.webhook',
} as const;
export type ReplayWebhookRequestEventTypesEnum =
  (typeof ReplayWebhookRequestEventTypesEnum)[keyof typeof ReplayWebhookRequestEventTypesEnum];

/**
 *
 * @export
 * @interface ScheduleCampaignRequest
 */
export interface ScheduleCampaignRequest {
  /**
   * Mark ready for immediate sending instead of scheduling.
   * @type {boolean}
   * @memberof ScheduleCampaignRequest
   */
  sendImmediately: boolean;
  /**
   * Required when `send_immediately` is false. ISO-8601 date-time interpreted in `timezone`.
   * @type {string}
   * @memberof ScheduleCampaignRequest
   */
  scheduledAt?: string | null;
  /**
   * IANA timezone used to interpret `scheduled_at`.
   * @type {string}
   * @memberof ScheduleCampaignRequest
   */
  timezone: string;
}
/**
 *
 * @export
 * @interface SegmentCollection
 */
export interface SegmentCollection {
  /**
   *
   * @type {boolean}
   * @memberof SegmentCollection
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof SegmentCollection
   */
  message: string;
  /**
   *
   * @type {Array<SegmentResource>}
   * @memberof SegmentCollection
   */
  data: Array<SegmentResource>;
  /**
   *
   * @type {PaginationMeta}
   * @memberof SegmentCollection
   */
  meta: PaginationMeta;
}
/**
 *
 * @export
 * @interface SegmentCountResponse
 */
export interface SegmentCountResponse {
  /**
   *
   * @type {boolean}
   * @memberof SegmentCountResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof SegmentCountResponse
   */
  message: string;
  /**
   *
   * @type {SegmentCountResponseData}
   * @memberof SegmentCountResponse
   */
  data: SegmentCountResponseData;
}
/**
 *
 * @export
 * @interface SegmentCountResponseData
 */
export interface SegmentCountResponseData {
  /**
   *
   * @type {string}
   * @memberof SegmentCountResponseData
   */
  id: string;
  /**
   *
   * @type {number}
   * @memberof SegmentCountResponseData
   */
  contactCount: number;
}
/**
 *
 * @export
 * @interface SegmentPreviewResponse
 */
export interface SegmentPreviewResponse {
  /**
   *
   * @type {boolean}
   * @memberof SegmentPreviewResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof SegmentPreviewResponse
   */
  message: string;
  /**
   *
   * @type {SegmentPreviewResponseData}
   * @memberof SegmentPreviewResponse
   */
  data: SegmentPreviewResponseData;
}
/**
 *
 * @export
 * @interface SegmentPreviewResponseData
 */
export interface SegmentPreviewResponseData {
  /**
   *
   * @type {number}
   * @memberof SegmentPreviewResponseData
   */
  count: number;
  /**
   *
   * @type {Array<ContactResource>}
   * @memberof SegmentPreviewResponseData
   */
  contacts: Array<ContactResource>;
}
/**
 *
 * @export
 * @interface SegmentResource
 */
export interface SegmentResource {
  /**
   * Public segment UUID. @format uuid
   * @type {string}
   * @memberof SegmentResource
   */
  id: string;
  /**
   * Project-unique segment name. @example Active customers
   * @type {string}
   * @memberof SegmentResource
   */
  name: string;
  /**
   * Optional segment description.
   * @type {string}
   * @memberof SegmentResource
   */
  description: string | null;
  /**
   * Normalized dynamic membership rules. @var array<string, mixed>
   * @type {Array<any>}
   * @memberof SegmentResource
   */
  rules: Array<any>;
  /**
   * Last evaluated matching contact count. @example 342
   * @type {number}
   * @memberof SegmentResource
   */
  contactCount: number;
  /**
   * Creation time. @format date-time
   * @type {string}
   * @memberof SegmentResource
   */
  createdAt: string | null;
  /**
   * Last update time. @format date-time
   * @type {string}
   * @memberof SegmentResource
   */
  updatedAt: string | null;
}
/**
 *
 * @export
 * @interface SegmentResponse
 */
export interface SegmentResponse {
  /**
   *
   * @type {boolean}
   * @memberof SegmentResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof SegmentResponse
   */
  message: string;
  /**
   *
   * @type {SegmentResource}
   * @memberof SegmentResponse
   */
  data: SegmentResource;
}
/**
 *
 * @export
 * @interface SendEmailRequest
 */
export interface SendEmailRequest {
  /**
   * Sender address. Format: `Name <email@domain.com>` or `email@domain.com`.
   * @type {string}
   * @memberof SendEmailRequest
   */
  from: string;
  /**
   * Recipient email address(es). A single string is accepted for backward compatibility.
   * @type {Array<string>}
   * @memberof SendEmailRequest
   */
  to: Array<string>;
  /**
   * Carbon copy recipients.
   * @type {Array<string>}
   * @memberof SendEmailRequest
   */
  cc?: Array<string>;
  /**
   * Blind carbon copy recipients.
   * @type {Array<string>}
   * @memberof SendEmailRequest
   */
  bcc?: Array<string>;
  /**
   * Template UUID to render instead of inline content.
   * @type {string}
   * @memberof SendEmailRequest
   */
  templateId?: string;
  /**
   * Template variables (key-value object).
   * @type {object}
   * @memberof SendEmailRequest
   */
  variables?: object;
  /**
   * Email subject. Required when not using a template.
   * @type {string}
   * @memberof SendEmailRequest
   */
  subject?: string;
  /**
   * HTML body. Required with `text` when not using a template.
   * @type {string}
   * @memberof SendEmailRequest
   */
  html?: string;
  /**
   * Plain text body. Required with `html` when not using a template.
   * @type {string}
   * @memberof SendEmailRequest
   */
  text?: string;
  /**
   * Reply-to address.
   * @type {string}
   * @memberof SendEmailRequest
   */
  replyTo?: string;
  /**
   * Custom metadata stored with the message.
   * @type {object}
   * @memberof SendEmailRequest
   */
  metadata?: object;
  /**
   * Tags for filtering and analytics.
   * @type {Array<string>}
   * @memberof SendEmailRequest
   */
  tags?: Array<string>;
  /**
   * Custom email headers (requires `allow_custom_headers` plan capability).
   * @type {object}
   * @memberof SendEmailRequest
   */
  headers?: object;
  /**
   *
   * @type {SendEmailRequestTracking}
   * @memberof SendEmailRequest
   */
  tracking?: SendEmailRequestTracking;
  /**
   * Base64-encoded file attachments.
   * @type {Array<SendEmailRequestAttachmentsInner>}
   * @memberof SendEmailRequest
   */
  attachments?: Array<SendEmailRequestAttachmentsInner>;
}
/**
 *
 * @export
 * @interface SendEmailRequestAttachmentsInner
 */
export interface SendEmailRequestAttachmentsInner {
  /**
   *
   * @type {string}
   * @memberof SendEmailRequestAttachmentsInner
   */
  filename?: string;
  /**
   *
   * @type {string}
   * @memberof SendEmailRequestAttachmentsInner
   */
  content?: string;
  /**
   *
   * @type {string}
   * @memberof SendEmailRequestAttachmentsInner
   */
  contentType?: string | null;
}
/**
 * Turn open and click tracking on or off for this email, overriding the project default. Omitted or null keys use the project default. Plan limits and sender trust rules still apply, so tracking may stay off even when requested. Add `data-mm-notrack` to an `<a>` tag to exclude a single link.
 * @export
 * @interface SendEmailRequestTracking
 */
export interface SendEmailRequestTracking {
  /**
   *
   * @type {boolean}
   * @memberof SendEmailRequestTracking
   */
  opens?: boolean | null;
  /**
   *
   * @type {boolean}
   * @memberof SendEmailRequestTracking
   */
  clicks?: boolean | null;
}
/**
 *
 * @export
 * @interface SendEmailResponse
 */
export interface SendEmailResponse {
  /**
   *
   * @type {boolean}
   * @memberof SendEmailResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof SendEmailResponse
   */
  message: string;
  /**
   *
   * @type {Message}
   * @memberof SendEmailResponse
   */
  data: Message;
}
/**
 *
 * @export
 * @interface Suppression
 */
export interface Suppression {
  /**
   * Public suppression UUID.
   * @type {string}
   * @memberof Suppression
   */
  id: string;
  /**
   * Suppressed email address.
   * @type {string}
   * @memberof Suppression
   */
  email: string;
  /**
   * Reason the address was suppressed.
   * @type {SuppressionReason}
   * @memberof Suppression
   */
  reason: SuppressionReason;
  /**
   * Human-readable reason label.
   * @type {string}
   * @memberof Suppression
   */
  reasonLabel: string;
  /**
   * Origin of the suppression (for example `bounce`, `manual`, `api`).
   * @type {string}
   * @memberof Suppression
   */
  source: string | null;
  /**
   * Optional operator notes.
   * @type {string}
   * @memberof Suppression
   */
  notes: string | null;
  /**
   * Additional context captured with the suppression.
   * @type {{ [key: string]: any; }}
   * @memberof Suppression
   */
  metadata: { [key: string]: any };
  /**
   * Time the suppression was restored (ISO-8601), or `null` if active.
   * @type {string}
   * @memberof Suppression
   */
  restoredAt: string | null;
  /**
   * Creation timestamp (ISO-8601).
   * @type {string}
   * @memberof Suppression
   */
  createdAt: string | null;
  /**
   * Last update timestamp (ISO-8601).
   * @type {string}
   * @memberof Suppression
   */
  updatedAt: string | null;
}

/**
 *
 * @export
 * @interface SuppressionListResponse
 */
export interface SuppressionListResponse {
  /**
   *
   * @type {boolean}
   * @memberof SuppressionListResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof SuppressionListResponse
   */
  message: string;
  /**
   *
   * @type {Array<Suppression>}
   * @memberof SuppressionListResponse
   */
  data: Array<Suppression>;
  /**
   *
   * @type {PaginationMeta}
   * @memberof SuppressionListResponse
   */
  meta: PaginationMeta;
}

/**
 *
 * @export
 */
export const SuppressionReason = {
  Bounce: 'bounce',
  Complaint: 'complaint',
  Manual: 'manual',
  Unsubscribe: 'unsubscribe',
} as const;
export type SuppressionReason = (typeof SuppressionReason)[keyof typeof SuppressionReason];

/**
 *
 * @export
 * @interface SuppressionResponse
 */
export interface SuppressionResponse {
  /**
   *
   * @type {boolean}
   * @memberof SuppressionResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof SuppressionResponse
   */
  message: string;
  /**
   *
   * @type {Suppression}
   * @memberof SuppressionResponse
   */
  data: Suppression;
}
/**
 *
 * @export
 * @interface TagCollection
 */
export interface TagCollection {
  /**
   *
   * @type {boolean}
   * @memberof TagCollection
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof TagCollection
   */
  message: string;
  /**
   *
   * @type {Array<TagResource>}
   * @memberof TagCollection
   */
  data: Array<TagResource>;
  /**
   *
   * @type {PaginationMeta}
   * @memberof TagCollection
   */
  meta: PaginationMeta;
}
/**
 *
 * @export
 * @interface TagResource
 */
export interface TagResource {
  /**
   * Public tag UUID. @format uuid @example 8cb52aa6-b31c-4b87-8f63-11408ea21c72
   * @type {string}
   * @memberof TagResource
   */
  id: string;
  /**
   * Project-unique tag name. Tags do not include a description field. @example vip
   * @type {string}
   * @memberof TagResource
   */
  name: string;
  /**
   * Display color in hex notation. @example #7C3AED
   * @type {string}
   * @memberof TagResource
   */
  color: string;
  /**
   * Number of contacts using the tag. @example 42
   * @type {number}
   * @memberof TagResource
   */
  usageCount: number;
  /**
   * Creation time. @format date-time
   * @type {string}
   * @memberof TagResource
   */
  createdAt: string | null;
  /**
   * Last update time. @format date-time
   * @type {string}
   * @memberof TagResource
   */
  updatedAt: string | null;
}
/**
 *
 * @export
 * @interface TagResponse
 */
export interface TagResponse {
  /**
   *
   * @type {boolean}
   * @memberof TagResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof TagResponse
   */
  message: string;
  /**
   *
   * @type {TagResource}
   * @memberof TagResponse
   */
  data: TagResource;
}

/**
 * | |
 * |---|
 * | `classic` <br/>  |
 * | `modern` <br/>  |
 * | `minimal` <br/>  |
 * | `none` <br/> Email Studio / full custom HTML — no auto header/footer chrome. |
 * @export
 */
export const TemplateLayoutStyle = {
  Classic: 'classic',
  Modern: 'modern',
  Minimal: 'minimal',
  None: 'none',
} as const;
export type TemplateLayoutStyle = (typeof TemplateLayoutStyle)[keyof typeof TemplateLayoutStyle];

/**
 *
 * @export
 * @interface TemplateListResponse
 */
export interface TemplateListResponse {
  /**
   *
   * @type {boolean}
   * @memberof TemplateListResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof TemplateListResponse
   */
  message: string;
  /**
   *
   * @type {Array<TemplateResource>}
   * @memberof TemplateListResponse
   */
  data: Array<TemplateResource>;
  /**
   *
   * @type {PaginationMeta}
   * @memberof TemplateListResponse
   */
  meta: PaginationMeta;
}
/**
 *
 * @export
 * @interface TemplatePreview
 */
export interface TemplatePreview {
  /**
   * Rendered subject. @example Welcome Alex
   * @type {string}
   * @memberof TemplatePreview
   */
  subject: string;
  /**
   * Rendered HTML body. @example <p>Hello Alex</p>
   * @type {string}
   * @memberof TemplatePreview
   */
  html: string | null;
  /**
   * Rendered plain-text body. @example Hello Alex
   * @type {string}
   * @memberof TemplatePreview
   */
  text: string | null;
}
/**
 *
 * @export
 * @interface TemplatePreviewResponse
 */
export interface TemplatePreviewResponse {
  /**
   *
   * @type {boolean}
   * @memberof TemplatePreviewResponse
   */
  success: boolean;
  /**
   * Omitted by the legacy `/templates/preview` operation.
   * @type {string}
   * @memberof TemplatePreviewResponse
   */
  message: string | null;
  /**
   *
   * @type {TemplatePreview}
   * @memberof TemplatePreviewResponse
   */
  data: TemplatePreview;
}
/**
 *
 * @export
 * @interface TemplateResource
 */
export interface TemplateResource {
  /**
   * Public template UUID. @format uuid
   * @type {string}
   * @memberof TemplateResource
   */
  id: string;
  /**
   * Template name. @example Welcome Email
   * @type {string}
   * @memberof TemplateResource
   */
  name: string;
  /**
   * Project-unique slug. @example welcome-email
   * @type {string}
   * @memberof TemplateResource
   */
  slug: string;
  /**
   * Optional description.
   * @type {string}
   * @memberof TemplateResource
   */
  description: string | null;
  /**
   * Renderable subject. @example Welcome {{first_name}}
   * @type {string}
   * @memberof TemplateResource
   */
  subject: string;
  /**
   * Publication status. @var 'draft'|'published'|'archived' @example published
   * @type {string}
   * @memberof TemplateResource
   */
  status: string;
  /**
   * Editor/layout type. @example html
   * @type {string}
   * @memberof TemplateResource
   */
  editorType: string;
  /**
   * Optional template category. @example onboarding
   * @type {string}
   * @memberof TemplateResource
   */
  category: string | null;
  /**
   * Searchable labels. @var list<string>
   * @type {Array<any>}
   * @memberof TemplateResource
   */
  tags: Array<any>;
  /**
   * Creation time. @format date-time
   * @type {string}
   * @memberof TemplateResource
   */
  createdAt: string | null;
  /**
   * Last update time. @format date-time
   * @type {string}
   * @memberof TemplateResource
   */
  updatedAt: string | null;
  /**
   * HTML body; present on detailed responses.
   * @type {string}
   * @memberof TemplateResource
   */
  html: string | null;
  /**
   * Plain-text body; present on detailed responses.
   * @type {string}
   * @memberof TemplateResource
   */
  text: string | null;
  /**
   * Backward-compatible alias of html.
   * @type {string}
   * @memberof TemplateResource
   */
  htmlContent: string | null;
  /**
   * Backward-compatible alias of text.
   * @type {string}
   * @memberof TemplateResource
   */
  textContent: string | null;
  /**
   * Branding and layout configuration. @var array<string, mixed>|null
   * @type {Array<any>}
   * @memberof TemplateResource
   */
  branding: Array<any> | null;
  /**
   * Derived category, type, preview text, and tags. @var array<string, mixed>|null
   * @type {Array<any>}
   * @memberof TemplateResource
   */
  metadata: Array<any> | null;
  /**
   * Variable definitions.
   * @type {Array<TemplateVariable>}
   * @memberof TemplateResource
   */
  variables: Array<TemplateVariable>;
  /**
   * Parent project summary. @var array{id: string, name: string}|null
   * @type {Array<any>}
   * @memberof TemplateResource
   */
  project: Array<any> | null;
  /**
   * Campaign usage counters. @var array{campaigns: int, scheduled_campaigns: int}|null
   * @type {Array<any>}
   * @memberof TemplateResource
   */
  usage: Array<any> | null;
}
/**
 *
 * @export
 * @interface TemplateResponse
 */
export interface TemplateResponse {
  /**
   *
   * @type {boolean}
   * @memberof TemplateResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof TemplateResponse
   */
  message: string;
  /**
   *
   * @type {TemplateResource}
   * @memberof TemplateResponse
   */
  data: TemplateResource;
}

/**
 *
 * @export
 */
export const TemplateStatus = {
  Draft: 'draft',
  Published: 'published',
  Archived: 'archived',
} as const;
export type TemplateStatus = (typeof TemplateStatus)[keyof typeof TemplateStatus];

/**
 *
 * @export
 * @interface TemplateTestResponse
 */
export interface TemplateTestResponse {
  /**
   *
   * @type {boolean}
   * @memberof TemplateTestResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof TemplateTestResponse
   */
  message: string;
  /**
   *
   * @type {TemplateTestResponseData}
   * @memberof TemplateTestResponse
   */
  data: TemplateTestResponseData;
}
/**
 *
 * @export
 * @interface TemplateTestResponseData
 */
export interface TemplateTestResponseData {
  /**
   *
   * @type {string}
   * @memberof TemplateTestResponseData
   */
  to: string;
  /**
   *
   * @type {string}
   * @memberof TemplateTestResponseData
   */
  templateId: string;
}
/**
 *
 * @export
 * @interface TemplateVariable
 */
export interface TemplateVariable {
  /**
   * Variable identifier used in `{{name}}` placeholders. @example first_name
   * @type {string}
   * @memberof TemplateVariable
   */
  name: string;
  /**
   * Variable validation type. @var 'string'|'number'|'email'|'url' @example string
   * @type {string}
   * @memberof TemplateVariable
   */
  type: string;
  /**
   * Whether callers must provide a value. @example true
   * @type {boolean}
   * @memberof TemplateVariable
   */
  required: boolean;
  /**
   * Optional fallback value. @example Customer
   * @type {string}
   * @memberof TemplateVariable
   */
  defaultValue: string | null;
}

/**
 *
 * @export
 */
export const TemplateVariableType = {
  String: 'string',
  Number: 'number',
  Email: 'email',
  Url: 'url',
} as const;
export type TemplateVariableType = (typeof TemplateVariableType)[keyof typeof TemplateVariableType];

/**
 *
 * @export
 * @interface TestTemplateRequest
 */
export interface TestTemplateRequest {
  /**
   * Recipient email for the test send.
   * @type {string}
   * @memberof TestTemplateRequest
   */
  to: string;
  /**
   * Backward-compatible alias of to.
   * @type {string}
   * @memberof TestTemplateRequest
   */
  email?: string;
  /**
   * Runtime template variables.
   * @type {object}
   * @memberof TestTemplateRequest
   */
  variables?: object;
  /**
   * Optional subject override.
   * @type {string}
   * @memberof TestTemplateRequest
   */
  subject?: string | null;
}
/**
 *
 * @export
 * @interface TestWebhookRequest
 */
export interface TestWebhookRequest {
  /**
   * Event type to simulate. Defaults to a generic test event when omitted.
   * @type {TestWebhookRequestEventTypeEnum}
   * @memberof TestWebhookRequest
   */
  eventType?: TestWebhookRequestEventTypeEnum | null;
}

/**
 * @export
 */
export const TestWebhookRequestEventTypeEnum = {
  EmailSent: 'email.sent',
  EmailDelivered: 'email.delivered',
  EmailFailed: 'email.failed',
  EmailBounced: 'email.bounced',
  EmailComplained: 'email.complained',
  EmailOpened: 'email.opened',
  EmailClicked: 'email.clicked',
  EmailQueued: 'email.queued',
  EmailDeliveryDelayed: 'email.delivery_delayed',
  EmailSuppressed: 'email.suppressed',
  EmailUnsubscribed: 'email.unsubscribed',
  CampaignCreated: 'campaign.created',
  CampaignScheduled: 'campaign.scheduled',
  CampaignStarted: 'campaign.started',
  CampaignCompleted: 'campaign.completed',
  ContactCreated: 'contact.created',
  ContactUpdated: 'contact.updated',
  ContactDeleted: 'contact.deleted',
  DomainVerified: 'domain.verified',
  ProjectCreated: 'project.created',
  ApiKeyCreated: 'api_key.created',
  TestWebhook: 'test.webhook',
} as const;
export type TestWebhookRequestEventTypeEnum =
  (typeof TestWebhookRequestEventTypeEnum)[keyof typeof TestWebhookRequestEventTypeEnum];

/**
 *
 * @export
 * @interface TimelineEvent
 */
export interface TimelineEvent {
  /**
   * Event UUID.
   * @type {string}
   * @memberof TimelineEvent
   */
  id: string;
  /**
   * Machine-readable event type, e.g. `sent`, `delivered`, `bounced`.
   * @type {string}
   * @memberof TimelineEvent
   */
  eventType: string;
  /**
   *
   * @type {string}
   * @memberof TimelineEvent
   */
  eventLabel: string;
  /**
   *
   * @type {string}
   * @memberof TimelineEvent
   */
  source: string;
  /**
   * Customer-safe event details. Never includes raw provider infrastructure metadata.
   * @type {Array<any>}
   * @memberof TimelineEvent
   */
  payload: Array<any>;
  /**
   * When the event occurred (ISO-8601).
   * @type {string}
   * @memberof TimelineEvent
   */
  occurredAt: string | null;
  /**
   *
   * @type {string}
   * @memberof TimelineEvent
   */
  messageId: string | null;
  /**
   *
   * @type {string}
   * @memberof TimelineEvent
   */
  recipient: string | null;
  /**
   *
   * @type {Array<any>}
   * @memberof TimelineEvent
   */
  metadata: Array<any>;
  /**
   *
   * @type {Array<any>}
   * @memberof TimelineEvent
   */
  tags: Array<any>;
}
/**
 *
 * @export
 * @interface UpdateApiKeyRequest
 */
export interface UpdateApiKeyRequest {
  /**
   * Updated key name.
   * @type {string}
   * @memberof UpdateApiKeyRequest
   */
  name?: string;
  /**
   * Future expiration time; null clears expiry.
   * @type {string}
   * @memberof UpdateApiKeyRequest
   */
  expiresAt?: string | null;
  /**
   * Key lifecycle status.
   * @type {UpdateApiKeyRequestStatusEnum}
   * @memberof UpdateApiKeyRequest
   */
  status?: UpdateApiKeyRequestStatusEnum;
  /**
   * Replacement scope list; null restores full legacy access.
   * @type {Array<UpdateApiKeyRequestScopesEnum>}
   * @memberof UpdateApiKeyRequest
   */
  scopes?: Array<UpdateApiKeyRequestScopesEnum>;
  /**
   * Backward-compatible alias of scopes.
   * @type {Array<UpdateApiKeyRequestPermissionsEnum>}
   * @memberof UpdateApiKeyRequest
   */
  permissions?: Array<UpdateApiKeyRequestPermissionsEnum>;
}

/**
 * @export
 */
export const UpdateApiKeyRequestStatusEnum = {
  Active: 'active',
  Disabled: 'disabled',
  Revoked: 'revoked',
} as const;
export type UpdateApiKeyRequestStatusEnum =
  (typeof UpdateApiKeyRequestStatusEnum)[keyof typeof UpdateApiKeyRequestStatusEnum];

/**
 * @export
 */
export const UpdateApiKeyRequestScopesEnum = {
  EmailsSend: 'emails.send',
  EmailsRead: 'emails.read',
  TemplatesRead: 'templates.read',
  TemplatesWrite: 'templates.write',
  DomainsRead: 'domains.read',
  DomainsWrite: 'domains.write',
  ContactsRead: 'contacts.read',
  ContactsWrite: 'contacts.write',
  CampaignsRead: 'campaigns.read',
  CampaignsWrite: 'campaigns.write',
  AnalyticsRead: 'analytics.read',
  BillingRead: 'billing.read',
  ProjectsRead: 'projects.read',
  ProjectsWrite: 'projects.write',
  ApiKeysRead: 'api_keys.read',
  ApiKeysWrite: 'api_keys.write',
  WebhooksRead: 'webhooks.read',
  WebhooksWrite: 'webhooks.write',
  SuppressionsRead: 'suppressions.read',
  SuppressionsWrite: 'suppressions.write',
  EventsRead: 'events.read',
  Admin: 'admin',
} as const;
export type UpdateApiKeyRequestScopesEnum =
  (typeof UpdateApiKeyRequestScopesEnum)[keyof typeof UpdateApiKeyRequestScopesEnum];

/**
 * @export
 */
export const UpdateApiKeyRequestPermissionsEnum = {
  EmailsSend: 'emails.send',
  EmailsRead: 'emails.read',
  TemplatesRead: 'templates.read',
  TemplatesWrite: 'templates.write',
  DomainsRead: 'domains.read',
  DomainsWrite: 'domains.write',
  ContactsRead: 'contacts.read',
  ContactsWrite: 'contacts.write',
  CampaignsRead: 'campaigns.read',
  CampaignsWrite: 'campaigns.write',
  AnalyticsRead: 'analytics.read',
  BillingRead: 'billing.read',
  ProjectsRead: 'projects.read',
  ProjectsWrite: 'projects.write',
  ApiKeysRead: 'api_keys.read',
  ApiKeysWrite: 'api_keys.write',
  WebhooksRead: 'webhooks.read',
  WebhooksWrite: 'webhooks.write',
  SuppressionsRead: 'suppressions.read',
  SuppressionsWrite: 'suppressions.write',
  EventsRead: 'events.read',
  Admin: 'admin',
} as const;
export type UpdateApiKeyRequestPermissionsEnum =
  (typeof UpdateApiKeyRequestPermissionsEnum)[keyof typeof UpdateApiKeyRequestPermissionsEnum];

/**
 *
 * @export
 * @interface UpdateCampaignRequest
 */
export interface UpdateCampaignRequest {
  /**
   * Campaign name.
   * @type {string}
   * @memberof UpdateCampaignRequest
   */
  name?: string;
  /**
   * Rendered email subject.
   * @type {string}
   * @memberof UpdateCampaignRequest
   */
  subject?: string | null;
  /**
   * Inbox preview text.
   * @type {string}
   * @memberof UpdateCampaignRequest
   */
  previewText?: string | null;
  /**
   * Sender display name.
   * @type {string}
   * @memberof UpdateCampaignRequest
   */
  fromName?: string | null;
  /**
   * Verified sender address.
   * @type {string}
   * @memberof UpdateCampaignRequest
   */
  fromEmail?: string | null;
  /**
   * Optional reply address.
   * @type {string}
   * @memberof UpdateCampaignRequest
   */
  replyTo?: string | null;
  /**
   * Published template UUID; empty string clears it.
   * @type {string}
   * @memberof UpdateCampaignRequest
   */
  templateUuid?: string | null;
  /**
   * Audience segment UUID; empty string clears it.
   * @type {string}
   * @memberof UpdateCampaignRequest
   */
  segmentUuid?: string | null;
  /**
   * Whether delivery should be immediate.
   * @type {boolean}
   * @memberof UpdateCampaignRequest
   */
  sendImmediately?: boolean;
  /**
   * Scheduled date/time interpreted in `timezone`. ISO-8601 with offset.
   * @type {string}
   * @memberof UpdateCampaignRequest
   */
  scheduledAt?: string | null;
  /**
   * IANA delivery timezone.
   * @type {string}
   * @memberof UpdateCampaignRequest
   */
  timezone?: string | null;
  /**
   * Last completed builder step (1-6).
   * @type {number}
   * @memberof UpdateCampaignRequest
   */
  builderStep?: number;
}
/**
 *
 * @export
 * @interface UpdateContactRequest
 */
export interface UpdateContactRequest {
  /**
   * Replacement email address.
   * @type {string}
   * @memberof UpdateContactRequest
   */
  email?: string;
  /**
   * Replacement given name.
   * @type {string}
   * @memberof UpdateContactRequest
   */
  firstName?: string | null;
  /**
   *
   * @type {string}
   * @memberof UpdateContactRequest
   */
  lastName?: string | null;
  /**
   * Replacement lifecycle status.
   * @type {UpdateContactRequestStatusEnum}
   * @memberof UpdateContactRequest
   */
  status?: UpdateContactRequestStatusEnum;
  /**
   * Replacement subscription state.
   * @type {boolean}
   * @memberof UpdateContactRequest
   */
  subscribed?: boolean;
  /**
   * Replacement metadata object when present.
   * @type {object}
   * @memberof UpdateContactRequest
   */
  metadata?: object;
  /**
   *
   * @type {Array<string>}
   * @memberof UpdateContactRequest
   */
  listIds?: Array<string> | null;
  /**
   *
   * @type {Array<string>}
   * @memberof UpdateContactRequest
   */
  tagIds?: Array<string> | null;
  /**
   *
   * @type {Array<string>}
   * @memberof UpdateContactRequest
   */
  tagNames?: Array<string> | null;
  /**
   * Replacement custom-field map when present.
   * @type {object}
   * @memberof UpdateContactRequest
   */
  customFields?: object;
}

/**
 * @export
 */
export const UpdateContactRequestStatusEnum = {
  Active: 'active',
  Unsubscribed: 'unsubscribed',
  Suppressed: 'suppressed',
  Bounced: 'bounced',
  Complained: 'complained',
  Archived: 'archived',
} as const;
export type UpdateContactRequestStatusEnum =
  (typeof UpdateContactRequestStatusEnum)[keyof typeof UpdateContactRequestStatusEnum];

/**
 *
 * @export
 * @interface UpdateCustomFieldRequest
 */
export interface UpdateCustomFieldRequest {
  /**
   *
   * @type {string}
   * @memberof UpdateCustomFieldRequest
   */
  name?: string;
  /**
   *
   * @type {CustomFieldType}
   * @memberof UpdateCustomFieldRequest
   */
  type?: CustomFieldType;
  /**
   *
   * @type {CustomFieldType}
   * @memberof UpdateCustomFieldRequest
   */
  fieldType?: CustomFieldType;
  /**
   *
   * @type {string}
   * @memberof UpdateCustomFieldRequest
   */
  description?: string | null;
  /**
   *
   * @type {boolean}
   * @memberof UpdateCustomFieldRequest
   */
  required?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof UpdateCustomFieldRequest
   */
  isRequired?: boolean;
  /**
   *
   * @type {string}
   * @memberof UpdateCustomFieldRequest
   */
  defaultValue?: string | null;
  /**
   *
   * @type {Array<string>}
   * @memberof UpdateCustomFieldRequest
   */
  options?: Array<string> | null;
}

/**
 *
 * @export
 * @interface UpdateListRequest
 */
export interface UpdateListRequest {
  /**
   *
   * @type {string}
   * @memberof UpdateListRequest
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof UpdateListRequest
   */
  description?: string | null;
  /**
   *
   * @type {string}
   * @memberof UpdateListRequest
   */
  color?: string | null;
}
/**
 *
 * @export
 * @interface UpdateProjectRequest
 */
export interface UpdateProjectRequest {
  /**
   * Updated project name.
   * @type {string}
   * @memberof UpdateProjectRequest
   */
  name?: string;
  /**
   * Updated lowercase kebab-case slug.
   * @type {string}
   * @memberof UpdateProjectRequest
   */
  slug?: string | null;
  /**
   * Updated description; null clears it.
   * @type {string}
   * @memberof UpdateProjectRequest
   */
  description?: string | null;
  /**
   * Runtime environment.
   * @type {UpdateProjectRequestEnvironmentEnum}
   * @memberof UpdateProjectRequest
   */
  environment?: UpdateProjectRequestEnvironmentEnum | null;
  /**
   * IANA timezone.
   * @type {string}
   * @memberof UpdateProjectRequest
   */
  timezone?: string | null;
  /**
   * Default sender; null clears it.
   * @type {string}
   * @memberof UpdateProjectRequest
   */
  defaultSender?: string | null;
  /**
   *
   * @type {CreateProjectRequestSettings}
   * @memberof UpdateProjectRequest
   */
  settings?: CreateProjectRequestSettings;
  /**
   * Archive or restore the project.
   * @type {UpdateProjectRequestStatusEnum}
   * @memberof UpdateProjectRequest
   */
  status?: UpdateProjectRequestStatusEnum;
}

/**
 * @export
 */
export const UpdateProjectRequestEnvironmentEnum = {
  Production: 'production',
  Staging: 'staging',
  Development: 'development',
  Test: 'test',
} as const;
export type UpdateProjectRequestEnvironmentEnum =
  (typeof UpdateProjectRequestEnvironmentEnum)[keyof typeof UpdateProjectRequestEnvironmentEnum];

/**
 * @export
 */
export const UpdateProjectRequestStatusEnum = {
  Active: 'active',
  Archived: 'archived',
} as const;
export type UpdateProjectRequestStatusEnum =
  (typeof UpdateProjectRequestStatusEnum)[keyof typeof UpdateProjectRequestStatusEnum];

/**
 *
 * @export
 * @interface UpdateSegmentRequest
 */
export interface UpdateSegmentRequest {
  /**
   *
   * @type {string}
   * @memberof UpdateSegmentRequest
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof UpdateSegmentRequest
   */
  description?: string | null;
  /**
   *
   * @type {UpdateSegmentRequestRules}
   * @memberof UpdateSegmentRequest
   */
  rules?: UpdateSegmentRequestRules;
}
/**
 *
 * @export
 * @interface UpdateSegmentRequestRules
 */
export interface UpdateSegmentRequestRules {
  /**
   *
   * @type {UpdateSegmentRequestRulesLogicEnum}
   * @memberof UpdateSegmentRequestRules
   */
  logic: UpdateSegmentRequestRulesLogicEnum;
  /**
   * `present` allows an empty rule tree (e.g. All Contacts); `required` would reject [].
   * @type {Array<PreviewSegmentRequestRulesRulesInner>}
   * @memberof UpdateSegmentRequestRules
   */
  rules: Array<PreviewSegmentRequestRulesRulesInner>;
}

/**
 * @export
 */
export const UpdateSegmentRequestRulesLogicEnum = {
  And: 'and',
  Or: 'or',
} as const;
export type UpdateSegmentRequestRulesLogicEnum =
  (typeof UpdateSegmentRequestRulesLogicEnum)[keyof typeof UpdateSegmentRequestRulesLogicEnum];

/**
 *
 * @export
 * @interface UpdateTagRequest
 */
export interface UpdateTagRequest {
  /**
   * Updated project-unique tag name. Tags do not support a `description` field.
   * @type {string}
   * @memberof UpdateTagRequest
   */
  name?: string;
  /**
   * Updated display color in hex notation; null clears it.
   * @type {string}
   * @memberof UpdateTagRequest
   */
  color?: string | null;
}
/**
 *
 * @export
 * @interface UpdateTemplateRequest
 */
export interface UpdateTemplateRequest {
  /**
   * Updated project-unique name.
   * @type {string}
   * @memberof UpdateTemplateRequest
   */
  name?: string;
  /**
   * Updated description; null clears it.
   * @type {string}
   * @memberof UpdateTemplateRequest
   */
  description?: string | null;
  /**
   * Updated subject.
   * @type {string}
   * @memberof UpdateTemplateRequest
   */
  subject?: string;
  /**
   * Updated HTML body.
   * @type {string}
   * @memberof UpdateTemplateRequest
   */
  html?: string | null;
  /**
   * Backward-compatible alias of html.
   * @type {string}
   * @memberof UpdateTemplateRequest
   */
  htmlContent?: string | null;
  /**
   * Updated plain-text body.
   * @type {string}
   * @memberof UpdateTemplateRequest
   */
  text?: string | null;
  /**
   * Backward-compatible alias of text.
   * @type {string}
   * @memberof UpdateTemplateRequest
   */
  textContent?: string | null;
  /**
   * Publication status.
   * @type {TemplateStatus}
   * @memberof UpdateTemplateRequest
   */
  status?: TemplateStatus;
  /**
   * Editor/layout identifier.
   * @type {string}
   * @memberof UpdateTemplateRequest
   */
  editorType?: string | null;
  /**
   * Template category.
   * @type {string}
   * @memberof UpdateTemplateRequest
   */
  category?: string | null;
  /**
   * Replacement labels.
   * @type {Array<string>}
   * @memberof UpdateTemplateRequest
   */
  tags?: Array<string>;
  /**
   * Replacement variable definitions.
   * @type {Array<CreateTemplateRequestVariablesInner>}
   * @memberof UpdateTemplateRequest
   */
  variables?: Array<CreateTemplateRequestVariablesInner>;
  /**
   *
   * @type {CreateTemplateRequestBranding}
   * @memberof UpdateTemplateRequest
   */
  branding?: CreateTemplateRequestBranding;
}

/**
 *
 * @export
 * @interface UpdateWebhookRequest
 */
export interface UpdateWebhookRequest {
  /**
   * Updated label for the endpoint.
   * @type {string}
   * @memberof UpdateWebhookRequest
   */
  name?: string;
  /**
   * Updated HTTPS delivery URL.
   * @type {string}
   * @memberof UpdateWebhookRequest
   */
  url?: string;
  /**
   * Replacement set of subscribed event types.
   * @type {Array<UpdateWebhookRequestSubscribedEventsEnum>}
   * @memberof UpdateWebhookRequest
   */
  subscribedEvents?: Array<UpdateWebhookRequestSubscribedEventsEnum>;
  /**
   * Enable or disable the endpoint.
   * @type {boolean}
   * @memberof UpdateWebhookRequest
   */
  isActive?: boolean;
}

/**
 * @export
 */
export const UpdateWebhookRequestSubscribedEventsEnum = {
  EmailSent: 'email.sent',
  EmailDelivered: 'email.delivered',
  EmailFailed: 'email.failed',
  EmailBounced: 'email.bounced',
  EmailComplained: 'email.complained',
  EmailOpened: 'email.opened',
  EmailClicked: 'email.clicked',
  EmailQueued: 'email.queued',
  EmailDeliveryDelayed: 'email.delivery_delayed',
  EmailSuppressed: 'email.suppressed',
  EmailUnsubscribed: 'email.unsubscribed',
  CampaignCreated: 'campaign.created',
  CampaignScheduled: 'campaign.scheduled',
  CampaignStarted: 'campaign.started',
  CampaignCompleted: 'campaign.completed',
  ContactCreated: 'contact.created',
  ContactUpdated: 'contact.updated',
  ContactDeleted: 'contact.deleted',
  DomainVerified: 'domain.verified',
  ProjectCreated: 'project.created',
  ApiKeyCreated: 'api_key.created',
} as const;
export type UpdateWebhookRequestSubscribedEventsEnum =
  (typeof UpdateWebhookRequestSubscribedEventsEnum)[keyof typeof UpdateWebhookRequestSubscribedEventsEnum];

/**
 *
 * @export
 * @interface Webhook
 */
export interface Webhook {
  /**
   * Public webhook UUID.
   * @type {string}
   * @memberof Webhook
   */
  id: string;
  /**
   * Human-readable label for the endpoint.
   * @type {string}
   * @memberof Webhook
   */
  name: string;
  /**
   * HTTPS URL that receives signed event deliveries.
   * @type {string}
   * @memberof Webhook
   */
  url: string;
  /**
   * Whether the endpoint is currently active.
   * @type {boolean}
   * @memberof Webhook
   */
  isActive: boolean;
  /**
   * Alias of `is_active` retained for backward compatibility.
   * @type {boolean}
   * @memberof Webhook
   */
  enabled: boolean;
  /**
   * Subscribed event types. Values match the webhook event catalog
   * (for example `email.delivered`, `email.bounced`, `campaign.completed`).
   * @type {Array<string>}
   * @memberof Webhook
   */
  subscribedEvents: Array<string>;
  /**
   *
   * @type {WebhookRetryPolicy}
   * @memberof Webhook
   */
  retryPolicy: WebhookRetryPolicy;
  /**
   *
   * @type {WebhookLastDelivery}
   * @memberof Webhook
   */
  lastDelivery: WebhookLastDelivery;
  /**
   * Creation timestamp (ISO-8601).
   * @type {string}
   * @memberof Webhook
   */
  createdAt: string | null;
  /**
   * Last update timestamp (ISO-8601).
   * @type {string}
   * @memberof Webhook
   */
  updatedAt: string | null;
  /**
   *
   * @type {WebhookProject}
   * @memberof Webhook
   */
  project: WebhookProject;
}
/**
 *
 * @export
 * @interface WebhookDelivery
 */
export interface WebhookDelivery {
  /**
   * Public delivery UUID.
   * @type {string}
   * @memberof WebhookDelivery
   */
  id: string;
  /**
   * Event type that triggered the delivery (for example `email.delivered`).
   * @type {string}
   * @memberof WebhookDelivery
   */
  eventType: string;
  /**
   * Delivery status.
   * @type {WebhookDeliveryStatus}
   * @memberof WebhookDelivery
   */
  status: WebhookDeliveryStatus;
  /**
   * Human-readable status label.
   * @type {string}
   * @memberof WebhookDelivery
   */
  statusLabel: string;
  /**
   * Attempt number (1-based).
   * @type {number}
   * @memberof WebhookDelivery
   */
  attempt: number;
  /**
   * HTTP status code returned by the endpoint, or `null` if not yet attempted.
   * @type {number}
   * @memberof WebhookDelivery
   */
  httpStatus: number | null;
  /**
   * Response headers returned by the endpoint.
   * @type {{ [key: string]: any; }}
   * @memberof WebhookDelivery
   */
  responseHeaders: { [key: string]: any };
  /**
   * Truncated response body returned by the endpoint.
   * @type {string}
   * @memberof WebhookDelivery
   */
  responseBody: string | null;
  /**
   * Signed JSON payload that was sent to the endpoint.
   * @type {string}
   * @memberof WebhookDelivery
   */
  requestBody: string | null;
  /**
   * Request duration in milliseconds.
   * @type {number}
   * @memberof WebhookDelivery
   */
  durationMs: number | null;
  /**
   * Scheduled time of the next retry (ISO-8601), or `null`.
   * @type {string}
   * @memberof WebhookDelivery
   */
  nextRetryAt: string | null;
  /**
   * Time the delivery succeeded (ISO-8601), or `null`.
   * @type {string}
   * @memberof WebhookDelivery
   */
  deliveredAt: string | null;
  /**
   * Creation timestamp (ISO-8601).
   * @type {string}
   * @memberof WebhookDelivery
   */
  createdAt: string | null;
  /**
   *
   * @type {WebhookDeliveryWebhook}
   * @memberof WebhookDelivery
   */
  webhook: WebhookDeliveryWebhook;
  /**
   *
   * @type {WebhookDeliveryMessage}
   * @memberof WebhookDelivery
   */
  message: WebhookDeliveryMessage;
}

/**
 *
 * @export
 * @interface WebhookDeliveryListResponse
 */
export interface WebhookDeliveryListResponse {
  /**
   *
   * @type {boolean}
   * @memberof WebhookDeliveryListResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof WebhookDeliveryListResponse
   */
  message: string;
  /**
   *
   * @type {Array<WebhookDelivery>}
   * @memberof WebhookDeliveryListResponse
   */
  data: Array<WebhookDelivery>;
  /**
   *
   * @type {PaginationMeta}
   * @memberof WebhookDeliveryListResponse
   */
  meta: PaginationMeta;
}
/**
 * Related message summary, when the delivery is tied to a message.
 * @export
 * @interface WebhookDeliveryMessage
 */
export interface WebhookDeliveryMessage {
  /**
   *
   * @type {string}
   * @memberof WebhookDeliveryMessage
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof WebhookDeliveryMessage
   */
  subject: string;
  /**
   *
   * @type {string}
   * @memberof WebhookDeliveryMessage
   */
  toEmail: string;
}
/**
 *
 * @export
 * @interface WebhookDeliveryResponse
 */
export interface WebhookDeliveryResponse {
  /**
   *
   * @type {boolean}
   * @memberof WebhookDeliveryResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof WebhookDeliveryResponse
   */
  message: string;
  /**
   *
   * @type {WebhookDelivery}
   * @memberof WebhookDeliveryResponse
   */
  data: WebhookDelivery;
}

/**
 *
 * @export
 */
export const WebhookDeliveryStatus = {
  Pending: 'pending',
  Delivered: 'delivered',
  Failed: 'failed',
} as const;
export type WebhookDeliveryStatus =
  (typeof WebhookDeliveryStatus)[keyof typeof WebhookDeliveryStatus];

/**
 * Owning webhook summary. Present when the webhook relation is loaded.
 * @export
 * @interface WebhookDeliveryWebhook
 */
export interface WebhookDeliveryWebhook {
  /**
   *
   * @type {string}
   * @memberof WebhookDeliveryWebhook
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof WebhookDeliveryWebhook
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof WebhookDeliveryWebhook
   */
  url: string;
}
/**
 * Most recent delivery summary, or `null` when no deliveries exist yet.
 * @export
 * @interface WebhookLastDelivery
 */
export interface WebhookLastDelivery {
  /**
   *
   * @type {string}
   * @memberof WebhookLastDelivery
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof WebhookLastDelivery
   */
  eventType: string;
  /**
   *
   * @type {string}
   * @memberof WebhookLastDelivery
   */
  status: string;
  /**
   *
   * @type {string}
   * @memberof WebhookLastDelivery
   */
  createdAt: string | null;
}
/**
 *
 * @export
 * @interface WebhookListResponse
 */
export interface WebhookListResponse {
  /**
   *
   * @type {boolean}
   * @memberof WebhookListResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof WebhookListResponse
   */
  message: string;
  /**
   *
   * @type {Array<Webhook>}
   * @memberof WebhookListResponse
   */
  data: Array<Webhook>;
  /**
   *
   * @type {PaginationMeta}
   * @memberof WebhookListResponse
   */
  meta: PaginationMeta;
}
/**
 * Owning project summary. Present when the project relation is loaded.
 * @export
 * @interface WebhookProject
 */
export interface WebhookProject {
  /**
   *
   * @type {string}
   * @memberof WebhookProject
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof WebhookProject
   */
  name: string;
}
/**
 *
 * @export
 * @interface WebhookReplayResponse
 */
export interface WebhookReplayResponse {
  /**
   *
   * @type {boolean}
   * @memberof WebhookReplayResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof WebhookReplayResponse
   */
  message: string;
  /**
   *
   * @type {WebhookReplayResponseData}
   * @memberof WebhookReplayResponse
   */
  data: WebhookReplayResponseData;
}
/**
 * Replay outcome.
 * @export
 * @interface WebhookReplayResponseData
 */
export interface WebhookReplayResponseData {
  /**
   *
   * @type {number}
   * @memberof WebhookReplayResponseData
   */
  replayed: number;
}
/**
 *
 * @export
 * @interface WebhookResponse
 */
export interface WebhookResponse {
  /**
   *
   * @type {boolean}
   * @memberof WebhookResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof WebhookResponse
   */
  message: string;
  /**
   *
   * @type {Webhook}
   * @memberof WebhookResponse
   */
  data: Webhook;
}
/**
 * Automatic retry policy applied to failed deliveries.
 * @export
 * @interface WebhookRetryPolicy
 */
export interface WebhookRetryPolicy {
  /**
   *
   * @type {Array<number>}
   * @memberof WebhookRetryPolicy
   */
  delaysSeconds: Array<number>;
  /**
   *
   * @type {number}
   * @memberof WebhookRetryPolicy
   */
  maxAttempts: number;
}
/**
 *
 * @export
 * @interface WebhookSecretResponse
 */
export interface WebhookSecretResponse {
  /**
   *
   * @type {boolean}
   * @memberof WebhookSecretResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof WebhookSecretResponse
   */
  message: string;
  /**
   *
   * @type {WebhookWithSecret}
   * @memberof WebhookSecretResponse
   */
  data: WebhookWithSecret;
}
/**
 *
 * @export
 * @interface WebhookWithSecret
 */
export interface WebhookWithSecret {
  /**
   * Public webhook UUID.
   * @type {string}
   * @memberof WebhookWithSecret
   */
  id: string;
  /**
   * Human-readable label for the endpoint.
   * @type {string}
   * @memberof WebhookWithSecret
   */
  name: string;
  /**
   * HTTPS URL that receives signed event deliveries.
   * @type {string}
   * @memberof WebhookWithSecret
   */
  url: string;
  /**
   * Whether the endpoint is currently active.
   * @type {boolean}
   * @memberof WebhookWithSecret
   */
  isActive: boolean;
  /**
   * Alias of `is_active` retained for backward compatibility.
   * @type {boolean}
   * @memberof WebhookWithSecret
   */
  enabled: boolean;
  /**
   * Subscribed event types. Values match the webhook event catalog
   * (for example `email.delivered`, `email.bounced`, `campaign.completed`).
   * @type {Array<string>}
   * @memberof WebhookWithSecret
   */
  subscribedEvents: Array<string>;
  /**
   *
   * @type {WebhookRetryPolicy}
   * @memberof WebhookWithSecret
   */
  retryPolicy: WebhookRetryPolicy;
  /**
   *
   * @type {WebhookLastDelivery}
   * @memberof WebhookWithSecret
   */
  lastDelivery: WebhookLastDelivery;
  /**
   * Creation timestamp (ISO-8601).
   * @type {string}
   * @memberof WebhookWithSecret
   */
  createdAt: string | null;
  /**
   * Last update timestamp (ISO-8601).
   * @type {string}
   * @memberof WebhookWithSecret
   */
  updatedAt: string | null;
  /**
   *
   * @type {WebhookProject}
   * @memberof WebhookWithSecret
   */
  project: WebhookProject;
  /**
   * HMAC signing secret. Returned only when creating a webhook or rotating
   * its secret — store it securely, it is never shown again.
   * @type {string}
   * @memberof WebhookWithSecret
   */
  signingSecret: string;
}
