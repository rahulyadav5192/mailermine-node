# CampaignLifecycleApi

All URIs are relative to *http://127.0.0.1:8000/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**archiveCampaign**](CampaignLifecycleApi.md#archivecampaign) | **POST** /campaigns/{campaign}/archive | Archive campaign |
| [**cancelCampaign**](CampaignLifecycleApi.md#cancelcampaign) | **POST** /campaigns/{campaign}/cancel | Cancel campaign |
| [**duplicateCampaign**](CampaignLifecycleApi.md#duplicatecampaignoperation) | **POST** /campaigns/{campaign}/duplicate | Duplicate campaign |
| [**getCampaignProgress**](CampaignLifecycleApi.md#getcampaignprogress) | **GET** /campaigns/{campaign}/progress | Get campaign progress |
| [**pauseCampaign**](CampaignLifecycleApi.md#pausecampaign) | **POST** /campaigns/{campaign}/pause | Pause campaign |
| [**readyCampaign**](CampaignLifecycleApi.md#readycampaign) | **POST** /campaigns/{campaign}/mark-ready | Mark campaign ready |
| [**restoreCampaign**](CampaignLifecycleApi.md#restorecampaign) | **POST** /campaigns/{campaignUuid}/restore | Restore campaign |
| [**resumeCampaign**](CampaignLifecycleApi.md#resumecampaign) | **POST** /campaigns/{campaign}/resume | Resume campaign |
| [**scheduleCampaign**](CampaignLifecycleApi.md#schedulecampaignoperation) | **POST** /campaigns/{campaign}/schedule | Schedule campaign |
| [**sendCampaign**](CampaignLifecycleApi.md#sendcampaign) | **POST** /campaigns/{campaign}/send | Send campaign |



## archiveCampaign

> CampaignResponse archiveCampaign(campaign)

Archive campaign

Move a campaign to the archived state. Required scope: &#x60;campaigns.write&#x60;.

### Example

```ts
import {
  Configuration,
  CampaignLifecycleApi,
} from '@mailermine/generated';
import type { ArchiveCampaignRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignLifecycleApi(config);

  const body = {
    // string | Campaign UUID.
    campaign: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ArchiveCampaignRequest;

  try {
    const data = await api.archiveCampaign(body);
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

[**CampaignResponse**](CampaignResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Campaign archived successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## cancelCampaign

> CampaignResponse cancelCampaign(campaign)

Cancel campaign

Cancel a draft, scheduled, ready, paused, or sending campaign. Required scope: &#x60;campaigns.write&#x60;.

### Example

```ts
import {
  Configuration,
  CampaignLifecycleApi,
} from '@mailermine/generated';
import type { CancelCampaignRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignLifecycleApi(config);

  const body = {
    // string | Campaign UUID.
    campaign: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CancelCampaignRequest;

  try {
    const data = await api.cancelCampaign(body);
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

[**CampaignResponse**](CampaignResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Campaign cancelled successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## duplicateCampaign

> CampaignResponse duplicateCampaign(campaign, duplicateCampaignRequest)

Duplicate campaign

Create an editable draft copy. Required scope: &#x60;campaigns.write&#x60;.

### Example

```ts
import {
  Configuration,
  CampaignLifecycleApi,
} from '@mailermine/generated';
import type { DuplicateCampaignOperationRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignLifecycleApi(config);

  const body = {
    // string | Campaign UUID.
    campaign: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // DuplicateCampaignRequest (optional)
    duplicateCampaignRequest: ...,
  } satisfies DuplicateCampaignOperationRequest;

  try {
    const data = await api.duplicateCampaign(body);
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
| **duplicateCampaignRequest** | [DuplicateCampaignRequest](DuplicateCampaignRequest.md) |  | [Optional] |

### Return type

[**CampaignResponse**](CampaignResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Campaign duplicated successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCampaignProgress

> CampaignStatisticsResponse getCampaignProgress(campaign)

Get campaign progress

Poll asynchronous recipient processing counters. Required scope: &#x60;campaigns.read&#x60;.

### Example

```ts
import {
  Configuration,
  CampaignLifecycleApi,
} from '@mailermine/generated';
import type { GetCampaignProgressRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignLifecycleApi(config);

  const body = {
    // string | Campaign UUID.
    campaign: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetCampaignProgressRequest;

  try {
    const data = await api.getCampaignProgress(body);
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

[**CampaignStatisticsResponse**](CampaignStatisticsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Campaign progress retrieved. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## pauseCampaign

> CampaignResponse pauseCampaign(campaign)

Pause campaign

Pause a scheduled, ready, or sending campaign. Required scope: &#x60;campaigns.write&#x60;.

### Example

```ts
import {
  Configuration,
  CampaignLifecycleApi,
} from '@mailermine/generated';
import type { PauseCampaignRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignLifecycleApi(config);

  const body = {
    // string | Campaign UUID.
    campaign: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies PauseCampaignRequest;

  try {
    const data = await api.pauseCampaign(body);
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

[**CampaignResponse**](CampaignResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Campaign paused successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## readyCampaign

> CampaignResponse readyCampaign(campaign)

Mark campaign ready

Validate a configured campaign and mark it ready to send. Required scope: &#x60;campaigns.write&#x60;.

### Example

```ts
import {
  Configuration,
  CampaignLifecycleApi,
} from '@mailermine/generated';
import type { ReadyCampaignRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignLifecycleApi(config);

  const body = {
    // string | Campaign UUID.
    campaign: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ReadyCampaignRequest;

  try {
    const data = await api.readyCampaign(body);
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

[**CampaignResponse**](CampaignResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Campaign marked ready. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## restoreCampaign

> CampaignResponse restoreCampaign(campaignUuid)

Restore campaign

Restore one soft-deleted campaign. Required scope: &#x60;campaigns.write&#x60;.

### Example

```ts
import {
  Configuration,
  CampaignLifecycleApi,
} from '@mailermine/generated';
import type { RestoreCampaignRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignLifecycleApi(config);

  const body = {
    // string | Deleted campaign UUID.
    campaignUuid: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies RestoreCampaignRequest;

  try {
    const data = await api.restoreCampaign(body);
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
| **campaignUuid** | `string` | Deleted campaign UUID. | [Defaults to `undefined`] |

### Return type

[**CampaignResponse**](CampaignResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Campaign restored successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## resumeCampaign

> CampaignResponse resumeCampaign(campaign)

Resume campaign

Resume a paused campaign, including queued delivery when already started. Required scope: &#x60;campaigns.write&#x60;.

### Example

```ts
import {
  Configuration,
  CampaignLifecycleApi,
} from '@mailermine/generated';
import type { ResumeCampaignRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignLifecycleApi(config);

  const body = {
    // string | Campaign UUID.
    campaign: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ResumeCampaignRequest;

  try {
    const data = await api.resumeCampaign(body);
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

[**CampaignResponse**](CampaignResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Campaign resumed successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## scheduleCampaign

> CampaignResponse scheduleCampaign(campaign, scheduleCampaignRequest)

Schedule campaign

Schedule future delivery or mark the campaign ready for immediate delivery. Required scope: &#x60;campaigns.write&#x60;.

### Example

```ts
import {
  Configuration,
  CampaignLifecycleApi,
} from '@mailermine/generated';
import type { ScheduleCampaignOperationRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignLifecycleApi(config);

  const body = {
    // string | Campaign UUID.
    campaign: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // ScheduleCampaignRequest
    scheduleCampaignRequest: ...,
  } satisfies ScheduleCampaignOperationRequest;

  try {
    const data = await api.scheduleCampaign(body);
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
| **scheduleCampaignRequest** | [ScheduleCampaignRequest](ScheduleCampaignRequest.md) |  | |

### Return type

[**CampaignResponse**](CampaignResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Campaign scheduled successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## sendCampaign

> CampaignResponse sendCampaign(campaign)

Send campaign

Snapshot recipients and queue campaign delivery. Required scope: &#x60;campaigns.write&#x60;.

### Example

```ts
import {
  Configuration,
  CampaignLifecycleApi,
} from '@mailermine/generated';
import type { SendCampaignRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignLifecycleApi(config);

  const body = {
    // string | Campaign UUID.
    campaign: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies SendCampaignRequest;

  try {
    const data = await api.sendCampaign(body);
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

[**CampaignResponse**](CampaignResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Campaign delivery queued. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

