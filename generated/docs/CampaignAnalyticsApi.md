# CampaignAnalyticsApi

All URIs are relative to *https://mailermine.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**campaignAnalytics**](CampaignAnalyticsApi.md#campaignanalytics) | **GET** /campaigns/{campaign}/analytics | Get campaign analytics |
| [**campaignLinks**](CampaignAnalyticsApi.md#campaignlinks) | **GET** /campaigns/{campaign}/links | Get campaign links |



## campaignAnalytics

> CampaignAnalyticsResponse campaignAnalytics(campaign)

Get campaign analytics

Return delivery, engagement, failure, unsubscribe, and top-link statistics. Required scope: &#x60;analytics.read&#x60;.

### Example

```ts
import {
  Configuration,
  CampaignAnalyticsApi,
} from '@mailermine/generated';
import type { CampaignAnalyticsRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignAnalyticsApi(config);

  const body = {
    // string | Campaign UUID.
    campaign: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CampaignAnalyticsRequest;

  try {
    const data = await api.campaignAnalytics(body);
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

[**CampaignAnalyticsResponse**](CampaignAnalyticsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Campaign analytics retrieved. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## campaignLinks

> CampaignLinksResponse campaignLinks(campaign)

Get campaign links

Return tracked-link click and CTR statistics. Required scope: &#x60;analytics.read&#x60;.

### Example

```ts
import {
  Configuration,
  CampaignAnalyticsApi,
} from '@mailermine/generated';
import type { CampaignLinksRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignAnalyticsApi(config);

  const body = {
    // string | Campaign UUID.
    campaign: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CampaignLinksRequest;

  try {
    const data = await api.campaignLinks(body);
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

[**CampaignLinksResponse**](CampaignLinksResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Campaign link statistics retrieved. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

