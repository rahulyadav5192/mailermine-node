# CampaignEventsApi

All URIs are relative to *https://mailermine.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**campaignActivities**](CampaignEventsApi.md#campaignactivities) | **GET** /campaigns/{campaign}/activities | List campaign activities |
| [**campaignEvents**](CampaignEventsApi.md#campaignevents) | **GET** /campaigns/{campaign}/events | List campaign events |
| [**campaignRecipients**](CampaignEventsApi.md#campaignrecipients) | **GET** /campaigns/{campaign}/recipients | List campaign recipients |
| [**campaignTimeline**](CampaignEventsApi.md#campaigntimeline) | **GET** /campaigns/{campaign}/timeline | Get campaign timeline |



## campaignActivities

> CampaignActivityCollection campaignActivities(campaign)

List campaign activities

List campaign-level lifecycle activities. Required scope: &#x60;campaigns.read&#x60;.

### Example

```ts
import {
  Configuration,
  CampaignEventsApi,
} from '@mailermine/generated';
import type { CampaignActivitiesRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignEventsApi(config);

  const body = {
    // string | Campaign UUID.
    campaign: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CampaignActivitiesRequest;

  try {
    const data = await api.campaignActivities(body);
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
| **campaign** | `string` | Campaign UUID. | [Defaults to `undefined`] |

### Return type

[**CampaignActivityCollection**](CampaignActivityCollection.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Campaign activities retrieved. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## campaignEvents

> CampaignEventsResponse campaignEvents(campaign)

List campaign events

Return paginated recipient delivery and engagement events. Required scope: &#x60;analytics.read&#x60;.

### Example

```ts
import {
  Configuration,
  CampaignEventsApi,
} from '@mailermine/generated';
import type { CampaignEventsRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignEventsApi(config);

  const body = {
    // string | Campaign UUID.
    campaign: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CampaignEventsRequest;

  try {
    const data = await api.campaignEvents(body);
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
| **campaign** | `string` | Campaign UUID. | [Defaults to `undefined`] |

### Return type

[**CampaignEventsResponse**](CampaignEventsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Campaign events retrieved. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## campaignRecipients

> CampaignRecipientCollection campaignRecipients(campaign, search, status, page)

List campaign recipients

List recipient snapshots with delivery and message status. Required scope: &#x60;campaigns.read&#x60;.

### Example

```ts
import {
  Configuration,
  CampaignEventsApi,
} from '@mailermine/generated';
import type { CampaignRecipientsRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignEventsApi(config);

  const body = {
    // string | Campaign UUID.
    campaign: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Search recipient email or name. (optional)
    search: ada@example.com,
    // string | Filter by recipient status. (optional)
    status: delivered,
    // number | Page number. (optional)
    page: 1,
  } satisfies CampaignRecipientsRequest;

  try {
    const data = await api.campaignRecipients(body);
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
| **campaign** | `string` | Campaign UUID. | [Defaults to `undefined`] |
| **search** | `string` | Search recipient email or name. | [Optional] [Defaults to `undefined`] |
| **status** | `string` | Filter by recipient status. | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Page number. | [Optional] [Defaults to `1`] |

### Return type

[**CampaignRecipientCollection**](CampaignRecipientCollection.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Campaign recipients retrieved. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## campaignTimeline

> CampaignTimelineResponse campaignTimeline(campaign)

Get campaign timeline

Return recent delivery and recipient-failure events. Required scope: &#x60;campaigns.read&#x60;.

### Example

```ts
import {
  Configuration,
  CampaignEventsApi,
} from '@mailermine/generated';
import type { CampaignTimelineRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignEventsApi(config);

  const body = {
    // string | Campaign UUID.
    campaign: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CampaignTimelineRequest;

  try {
    const data = await api.campaignTimeline(body);
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
| **campaign** | `string` | Campaign UUID. | [Defaults to `undefined`] |

### Return type

[**CampaignTimelineResponse**](CampaignTimelineResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Campaign timeline retrieved. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

