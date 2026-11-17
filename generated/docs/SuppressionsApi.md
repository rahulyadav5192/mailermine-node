# SuppressionsApi

All URIs are relative to *https://mailermine.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createSuppression**](SuppressionsApi.md#createsuppressionoperation) | **POST** /suppressions | Create suppression |
| [**deleteSuppression**](SuppressionsApi.md#deletesuppression) | **DELETE** /suppressions/{suppression} | Delete suppression |
| [**getSuppression**](SuppressionsApi.md#getsuppression) | **GET** /suppressions/{suppression} | Get suppression |
| [**listSuppressions**](SuppressionsApi.md#listsuppressions) | **GET** /suppressions | List suppressions |
| [**restoreSuppression**](SuppressionsApi.md#restoresuppression) | **POST** /suppressions/{suppression}/restore | Restore suppression |



## createSuppression

> SuppressionResponse createSuppression(createSuppressionRequest)

Create suppression

Add a recipient address to the project suppression list. Required scope: &#x60;suppressions.write&#x60;.

### Example

```ts
import {
  Configuration,
  SuppressionsApi,
} from '@mailermine/generated';
import type { CreateSuppressionOperationRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SuppressionsApi(config);

  const body = {
    // CreateSuppressionRequest
    createSuppressionRequest: ...,
  } satisfies CreateSuppressionOperationRequest;

  try {
    const data = await api.createSuppression(body);
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
| **createSuppressionRequest** | [CreateSuppressionRequest](CreateSuppressionRequest.md) |  | |

### Return type

[**SuppressionResponse**](SuppressionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Suppression created successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteSuppression

> DeleteResponse deleteSuppression(suppression)

Delete suppression

Permanently remove a suppression, allowing the address to receive mail again. Required scope: &#x60;suppressions.write&#x60;.

### Example

```ts
import {
  Configuration,
  SuppressionsApi,
} from '@mailermine/generated';
import type { DeleteSuppressionRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SuppressionsApi(config);

  const body = {
    // string | Suppression UUID.
    suppression: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteSuppressionRequest;

  try {
    const data = await api.deleteSuppression(body);
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
| **suppression** | `string` | Suppression UUID. | [Defaults to `undefined`] |

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
| **200** | Suppression removed successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **404** | Resource not found. |  -  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSuppression

> SuppressionResponse getSuppression(suppression)

Get suppression

Retrieve a suppressed address by UUID. Required scope: &#x60;suppressions.read&#x60;.

### Example

```ts
import {
  Configuration,
  SuppressionsApi,
} from '@mailermine/generated';
import type { GetSuppressionRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SuppressionsApi(config);

  const body = {
    // string | Suppression UUID (returned as `id` from create/list).
    suppression: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetSuppressionRequest;

  try {
    const data = await api.getSuppression(body);
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
| **suppression** | `string` | Suppression UUID (returned as &#x60;id&#x60; from create/list). | [Defaults to `undefined`] |

### Return type

[**SuppressionResponse**](SuppressionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Suppression retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **404** | Resource not found. |  -  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listSuppressions

> SuppressionListResponse listSuppressions(search, reason, perPage)

List suppressions

List suppressed recipient addresses with optional search and reason filter. Required scope: &#x60;suppressions.read&#x60;.

### Example

```ts
import {
  Configuration,
  SuppressionsApi,
} from '@mailermine/generated';
import type { ListSuppressionsRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SuppressionsApi(config);

  const body = {
    // string | Free-text search across email addresses. (optional)
    search: example.com,
    // string | Filter by suppression reason (`bounce`, `complaint`, `manual`, `unsubscribe`). (optional)
    reason: bounce,
    // number | Items per page (default 25). (optional)
    perPage: 25,
  } satisfies ListSuppressionsRequest;

  try {
    const data = await api.listSuppressions(body);
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
| **search** | `string` | Free-text search across email addresses. | [Optional] [Defaults to `undefined`] |
| **reason** | `string` | Filter by suppression reason (&#x60;bounce&#x60;, &#x60;complaint&#x60;, &#x60;manual&#x60;, &#x60;unsubscribe&#x60;). | [Optional] [Defaults to `undefined`] |
| **perPage** | `number` | Items per page (default 25). | [Optional] [Defaults to `undefined`] |

### Return type

[**SuppressionListResponse**](SuppressionListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Suppressions retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## restoreSuppression

> SuppressionResponse restoreSuppression(suppression)

Restore suppression

Restore a soft-deleted suppression by UUID. Required scope: &#x60;suppressions.write&#x60;.

### Example

```ts
import {
  Configuration,
  SuppressionsApi,
} from '@mailermine/generated';
import type { RestoreSuppressionRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SuppressionsApi(config);

  const body = {
    // string | Suppression UUID.
    suppression: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies RestoreSuppressionRequest;

  try {
    const data = await api.restoreSuppression(body);
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
| **suppression** | `string` | Suppression UUID. | [Defaults to `undefined`] |

### Return type

[**SuppressionResponse**](SuppressionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Suppression restored successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **404** | Resource not found. |  -  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

