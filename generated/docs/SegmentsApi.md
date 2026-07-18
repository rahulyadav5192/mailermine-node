# SegmentsApi

All URIs are relative to *http://127.0.0.1:8000/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**countSegment**](SegmentsApi.md#countsegment) | **GET** /segments/{segment}/count | Refresh segment count |
| [**createSegment**](SegmentsApi.md#createsegmentoperation) | **POST** /segments | Create segment |
| [**deleteSegment**](SegmentsApi.md#deletesegment) | **DELETE** /segments/{segment} | Delete segment |
| [**getSegment**](SegmentsApi.md#getsegment) | **GET** /segments/{segment} | Get segment |
| [**listSegments**](SegmentsApi.md#listsegments) | **GET** /segments | List segments |
| [**previewSegment**](SegmentsApi.md#previewsegment) | **POST** /segments/{segment}/preview | Preview segment |
| [**previewSegmentRules**](SegmentsApi.md#previewsegmentrules) | **POST** /segments/preview | Preview segment rules |
| [**updateSegment**](SegmentsApi.md#updatesegmentoperation) | **PUT** /segments/{segment} | Update segment |



## countSegment

> SegmentCountResponse countSegment(segment)

Refresh segment count

Recalculate and persist the saved segment contact count. Required scope: &#x60;contacts.read&#x60;.

### Example

```ts
import {
  Configuration,
  SegmentsApi,
} from '@mailermine/generated';
import type { CountSegmentRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SegmentsApi(config);

  const body = {
    // string | Segment UUID.
    segment: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CountSegmentRequest;

  try {
    const data = await api.countSegment(body);
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
| **segment** | `string` | Segment UUID. | [Defaults to `undefined`] |

### Return type

[**SegmentCountResponse**](SegmentCountResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Segment contact count refreshed. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createSegment

> SegmentResponse createSegment(createSegmentRequest)

Create segment

Create a dynamic contact segment from validated rules. Required scope: &#x60;contacts.write&#x60;.

### Example

```ts
import {
  Configuration,
  SegmentsApi,
} from '@mailermine/generated';
import type { CreateSegmentOperationRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SegmentsApi(config);

  const body = {
    // CreateSegmentRequest
    createSegmentRequest: ...,
  } satisfies CreateSegmentOperationRequest;

  try {
    const data = await api.createSegment(body);
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
| **createSegmentRequest** | [CreateSegmentRequest](CreateSegmentRequest.md) |  | |

### Return type

[**SegmentResponse**](SegmentResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Segment created successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteSegment

> DeleteResponse deleteSegment(segment)

Delete segment

Delete a dynamic segment. Required scope: &#x60;contacts.write&#x60;.

### Example

```ts
import {
  Configuration,
  SegmentsApi,
} from '@mailermine/generated';
import type { DeleteSegmentRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SegmentsApi(config);

  const body = {
    // string | Segment UUID.
    segment: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteSegmentRequest;

  try {
    const data = await api.deleteSegment(body);
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
| **segment** | `string` | Segment UUID. | [Defaults to `undefined`] |

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Segment deleted successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSegment

> SegmentResponse getSegment(segment)

Get segment

Retrieve a dynamic segment. Required scope: &#x60;contacts.read&#x60;.

### Example

```ts
import {
  Configuration,
  SegmentsApi,
} from '@mailermine/generated';
import type { GetSegmentRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SegmentsApi(config);

  const body = {
    // string | Segment UUID.
    segment: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetSegmentRequest;

  try {
    const data = await api.getSegment(body);
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
| **segment** | `string` | Segment UUID. | [Defaults to `undefined`] |

### Return type

[**SegmentResponse**](SegmentResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Segment retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listSegments

> SegmentCollection listSegments(search, sort, direction, page, perPage)

List segments

List dynamic contact segments. Required scope: &#x60;contacts.read&#x60;.

### Example

```ts
import {
  Configuration,
  SegmentsApi,
} from '@mailermine/generated';
import type { ListSegmentsRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SegmentsApi(config);

  const body = {
    // string | Search segment names. (optional)
    search: Engaged,
    // string | Sort field. (optional)
    sort: created_at,
    // string | Sort direction. (optional)
    direction: desc,
    // number | Page number. (optional)
    page: 1,
    // number | Items per page. (optional)
    perPage: 25,
  } satisfies ListSegmentsRequest;

  try {
    const data = await api.listSegments(body);
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
| **search** | `string` | Search segment names. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | Sort field. | [Optional] [Defaults to `&#39;created_at&#39;`] |
| **direction** | `string` | Sort direction. | [Optional] [Defaults to `&#39;desc&#39;`] |
| **page** | `number` | Page number. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | Items per page. | [Optional] [Defaults to `25`] |

### Return type

[**SegmentCollection**](SegmentCollection.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Segments retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## previewSegment

> SegmentPreviewResponse previewSegment(segment)

Preview segment

Return a count and up to ten contacts matching a saved segment. Required scope: &#x60;contacts.read&#x60;.

### Example

```ts
import {
  Configuration,
  SegmentsApi,
} from '@mailermine/generated';
import type { PreviewSegmentRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SegmentsApi(config);

  const body = {
    // string | Segment UUID.
    segment: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies PreviewSegmentRequest;

  try {
    const data = await api.previewSegment(body);
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
| **segment** | `string` | Segment UUID. | [Defaults to `undefined`] |

### Return type

[**SegmentPreviewResponse**](SegmentPreviewResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Segment preview generated successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## previewSegmentRules

> SegmentPreviewResponse previewSegmentRules(previewSegmentRequest)

Preview segment rules

Validate unsaved rules and return a count plus up to ten matching contacts. Required scope: &#x60;contacts.read&#x60;.

### Example

```ts
import {
  Configuration,
  SegmentsApi,
} from '@mailermine/generated';
import type { PreviewSegmentRulesRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SegmentsApi(config);

  const body = {
    // PreviewSegmentRequest
    previewSegmentRequest: ...,
  } satisfies PreviewSegmentRulesRequest;

  try {
    const data = await api.previewSegmentRules(body);
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
| **previewSegmentRequest** | [PreviewSegmentRequest](PreviewSegmentRequest.md) |  | |

### Return type

[**SegmentPreviewResponse**](SegmentPreviewResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Segment preview generated successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateSegment

> SegmentResponse updateSegment(segment, updateSegmentRequest)

Update segment

Update segment metadata or rules. Required scope: &#x60;contacts.write&#x60;.

### Example

```ts
import {
  Configuration,
  SegmentsApi,
} from '@mailermine/generated';
import type { UpdateSegmentOperationRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SegmentsApi(config);

  const body = {
    // string | Segment UUID.
    segment: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateSegmentRequest
    updateSegmentRequest: ...,
  } satisfies UpdateSegmentOperationRequest;

  try {
    const data = await api.updateSegment(body);
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
| **segment** | `string` | Segment UUID. | [Defaults to `undefined`] |
| **updateSegmentRequest** | [UpdateSegmentRequest](UpdateSegmentRequest.md) |  | |

### Return type

[**SegmentResponse**](SegmentResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Segment updated successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

