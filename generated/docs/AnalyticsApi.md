# AnalyticsApi

All URIs are relative to *https://mailermine.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**analyticsCampaigns**](AnalyticsApi.md#analyticscampaigns) | **GET** /analytics/campaigns | Campaign analytics breakdown |
| [**analyticsDomains**](AnalyticsApi.md#analyticsdomains) | **GET** /analytics/domains | Domain analytics |
| [**analyticsEngagement**](AnalyticsApi.md#analyticsengagement) | **GET** /analytics/engagement | Engagement analytics |
| [**analyticsMessages**](AnalyticsApi.md#analyticsmessages) | **GET** /analytics/messages | Message analytics |
| [**analyticsOverview**](AnalyticsApi.md#analyticsoverview) | **GET** /analytics/overview | Analytics overview |
| [**analyticsProjects**](AnalyticsApi.md#analyticsprojects) | **GET** /analytics/projects | Project analytics |
| [**analyticsProviders**](AnalyticsApi.md#analyticsproviders) | **GET** /analytics/providers | Provider analytics |



## analyticsCampaigns

> AnalyticsCampaignsResponse analyticsCampaigns(from, to)

Campaign analytics breakdown

Return the top campaigns by volume with open and click rates. Required scope: &#x60;analytics.read&#x60;.

### Example

```ts
import {
  Configuration,
  AnalyticsApi,
} from '@mailermine/generated';
import type { AnalyticsCampaignsRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AnalyticsApi(config);

  const body = {
    // string | Range start (ISO-8601). Defaults to 30 days ago. (optional)
    from: 2013-10-20T19:20:30+01:00,
    // string | Range end (ISO-8601). Defaults to now. (optional)
    to: 2013-10-20T19:20:30+01:00,
  } satisfies AnalyticsCampaignsRequest;

  try {
    const data = await api.analyticsCampaigns(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **from** | `string` | Range start (ISO-8601). Defaults to 30 days ago. | [Optional] [Defaults to `undefined`] |
| **to** | `string` | Range end (ISO-8601). Defaults to now. | [Optional] [Defaults to `undefined`] |

### Return type

[**AnalyticsCampaignsResponse**](AnalyticsCampaignsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Campaigns analytics retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## analyticsDomains

> AnalyticsDomainsResponse analyticsDomains(from, to)

Domain analytics

Return message volume grouped by sending domain (top 50). Required scope: &#x60;analytics.read&#x60;.

### Example

```ts
import {
  Configuration,
  AnalyticsApi,
} from '@mailermine/generated';
import type { AnalyticsDomainsRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AnalyticsApi(config);

  const body = {
    // string | Range start (ISO-8601). Defaults to 30 days ago. (optional)
    from: 2013-10-20T19:20:30+01:00,
    // string | Range end (ISO-8601). Defaults to now. (optional)
    to: 2013-10-20T19:20:30+01:00,
  } satisfies AnalyticsDomainsRequest;

  try {
    const data = await api.analyticsDomains(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **from** | `string` | Range start (ISO-8601). Defaults to 30 days ago. | [Optional] [Defaults to `undefined`] |
| **to** | `string` | Range end (ISO-8601). Defaults to now. | [Optional] [Defaults to `undefined`] |

### Return type

[**AnalyticsDomainsResponse**](AnalyticsDomainsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Domains analytics retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## analyticsEngagement

> AnalyticsEngagementResponse analyticsEngagement(from, to)

Engagement analytics

Return open, click, CTR, and CTOR engagement rates. Required scope: &#x60;analytics.read&#x60;.

### Example

```ts
import {
  Configuration,
  AnalyticsApi,
} from '@mailermine/generated';
import type { AnalyticsEngagementRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AnalyticsApi(config);

  const body = {
    // string | Range start (ISO-8601). Defaults to 30 days ago. (optional)
    from: 2013-10-20T19:20:30+01:00,
    // string | Range end (ISO-8601). Defaults to now. (optional)
    to: 2013-10-20T19:20:30+01:00,
  } satisfies AnalyticsEngagementRequest;

  try {
    const data = await api.analyticsEngagement(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **from** | `string` | Range start (ISO-8601). Defaults to 30 days ago. | [Optional] [Defaults to `undefined`] |
| **to** | `string` | Range end (ISO-8601). Defaults to now. | [Optional] [Defaults to `undefined`] |

### Return type

[**AnalyticsEngagementResponse**](AnalyticsEngagementResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Engagement analytics retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## analyticsMessages

> AnalyticsMessagesResponse analyticsMessages(from, to)

Message analytics

Return message totals, status breakdown, and daily metrics. Required scope: &#x60;analytics.read&#x60;.

### Example

```ts
import {
  Configuration,
  AnalyticsApi,
} from '@mailermine/generated';
import type { AnalyticsMessagesRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AnalyticsApi(config);

  const body = {
    // string | Range start (ISO-8601). Defaults to 30 days ago. (optional)
    from: 2013-10-20T19:20:30+01:00,
    // string | Range end (ISO-8601). Defaults to now. (optional)
    to: 2013-10-20T19:20:30+01:00,
  } satisfies AnalyticsMessagesRequest;

  try {
    const data = await api.analyticsMessages(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **from** | `string` | Range start (ISO-8601). Defaults to 30 days ago. | [Optional] [Defaults to `undefined`] |
| **to** | `string` | Range end (ISO-8601). Defaults to now. | [Optional] [Defaults to `undefined`] |

### Return type

[**AnalyticsMessagesResponse**](AnalyticsMessagesResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Messages analytics retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## analyticsOverview

> AnalyticsOverviewResponse analyticsOverview(from, to)

Analytics overview

Return aggregate performance metrics, daily series, top campaigns, and recent activity. Required scope: &#x60;analytics.read&#x60;.

### Example

```ts
import {
  Configuration,
  AnalyticsApi,
} from '@mailermine/generated';
import type { AnalyticsOverviewRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AnalyticsApi(config);

  const body = {
    // string | Range start (ISO-8601). Defaults to 30 days ago. (optional)
    from: 2013-10-20T19:20:30+01:00,
    // string | Range end (ISO-8601). Defaults to now. (optional)
    to: 2013-10-20T19:20:30+01:00,
  } satisfies AnalyticsOverviewRequest;

  try {
    const data = await api.analyticsOverview(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **from** | `string` | Range start (ISO-8601). Defaults to 30 days ago. | [Optional] [Defaults to `undefined`] |
| **to** | `string` | Range end (ISO-8601). Defaults to now. | [Optional] [Defaults to `undefined`] |

### Return type

[**AnalyticsOverviewResponse**](AnalyticsOverviewResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Analytics overview retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## analyticsProjects

> AnalyticsProjectsResponse analyticsProjects(from, to)

Project analytics

Return performance metrics for the authenticated project. Required scope: &#x60;analytics.read&#x60;.

### Example

```ts
import {
  Configuration,
  AnalyticsApi,
} from '@mailermine/generated';
import type { AnalyticsProjectsRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AnalyticsApi(config);

  const body = {
    // string | Range start (ISO-8601). Defaults to 30 days ago. (optional)
    from: 2013-10-20T19:20:30+01:00,
    // string | Range end (ISO-8601). Defaults to now. (optional)
    to: 2013-10-20T19:20:30+01:00,
  } satisfies AnalyticsProjectsRequest;

  try {
    const data = await api.analyticsProjects(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **from** | `string` | Range start (ISO-8601). Defaults to 30 days ago. | [Optional] [Defaults to `undefined`] |
| **to** | `string` | Range end (ISO-8601). Defaults to now. | [Optional] [Defaults to `undefined`] |

### Return type

[**AnalyticsProjectsResponse**](AnalyticsProjectsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Projects analytics retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## analyticsProviders

> AnalyticsProvidersResponse analyticsProviders(from, to)

Provider analytics

Return message volume grouped by delivery provider. Required scope: &#x60;analytics.read&#x60;.

### Example

```ts
import {
  Configuration,
  AnalyticsApi,
} from '@mailermine/generated';
import type { AnalyticsProvidersRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AnalyticsApi(config);

  const body = {
    // string | Range start (ISO-8601). Defaults to 30 days ago. (optional)
    from: 2013-10-20T19:20:30+01:00,
    // string | Range end (ISO-8601). Defaults to now. (optional)
    to: 2013-10-20T19:20:30+01:00,
  } satisfies AnalyticsProvidersRequest;

  try {
    const data = await api.analyticsProviders(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **from** | `string` | Range start (ISO-8601). Defaults to 30 days ago. | [Optional] [Defaults to `undefined`] |
| **to** | `string` | Range end (ISO-8601). Defaults to now. | [Optional] [Defaults to `undefined`] |

### Return type

[**AnalyticsProvidersResponse**](AnalyticsProvidersResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Providers analytics retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

