# APIKeysApi

All URIs are relative to *http://127.0.0.1:8000/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createApiKey**](APIKeysApi.md#createapikeyoperation) | **POST** /projects/{project}/api-keys | Create API key |
| [**deleteApiKey**](APIKeysApi.md#deleteapikey) | **DELETE** /projects/{project}/api-keys/{apiKey} | Delete API key |
| [**getApiKey**](APIKeysApi.md#getapikey) | **GET** /projects/{project}/api-keys/{apiKey} | Get API key |
| [**listApiKeys**](APIKeysApi.md#listapikeys) | **GET** /projects/{project}/api-keys | List API keys |
| [**revealApiKey**](APIKeysApi.md#revealapikey) | **POST** /projects/{project}/api-keys/{apiKey}/reveal | Reveal API key |
| [**rotateApiKey**](APIKeysApi.md#rotateapikey) | **POST** /projects/{project}/api-keys/{apiKey}/rotate | Rotate API key |
| [**updateApiKey**](APIKeysApi.md#updateapikeyoperation) | **PATCH** /projects/{project}/api-keys/{apiKey} | Update API key |



## createApiKey

> ApiKeyResponse createApiKey(project, createApiKeyRequest)

Create API key

Create an API key. The plaintext secret is returned once and cannot be recovered. Required scope: &#x60;api_keys.write&#x60;.

### Example

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

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **project** | `string` | Parent project UUID. | [Defaults to `undefined`] |
| **createApiKeyRequest** | [CreateApiKeyRequest](CreateApiKeyRequest.md) |  | |

### Return type

[**ApiKeyResponse**](ApiKeyResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | API key created; store the one-time secret now. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteApiKey

> DeleteResponse deleteApiKey(project, apiKey)

Delete API key

Soft-delete and revoke an API key. Required scope: &#x60;api_keys.write&#x60;.

### Example

```ts
import {
  Configuration,
  APIKeysApi,
} from '@mailermine/generated';
import type { DeleteApiKeyRequest } from '@mailermine/generated';

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
    // string | API key UUID.
    apiKey: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteApiKeyRequest;

  try {
    const data = await api.deleteApiKey(body);
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
| **project** | `string` | Parent project UUID. | [Defaults to `undefined`] |
| **apiKey** | `string` | API key UUID. | [Defaults to `undefined`] |

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
| **200** | API key deleted successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getApiKey

> ApiKeyResponse getApiKey(project, apiKey)

Get API key

Retrieve API key metadata without the secret. Required scope: &#x60;api_keys.read&#x60;.

### Example

```ts
import {
  Configuration,
  APIKeysApi,
} from '@mailermine/generated';
import type { GetApiKeyRequest } from '@mailermine/generated';

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
    // string | API key UUID.
    apiKey: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetApiKeyRequest;

  try {
    const data = await api.getApiKey(body);
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
| **project** | `string` | Parent project UUID. | [Defaults to `undefined`] |
| **apiKey** | `string` | API key UUID. | [Defaults to `undefined`] |

### Return type

[**ApiKeyResponse**](ApiKeyResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | API key retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listApiKeys

> ApiKeyListResponse listApiKeys(project, search, status, sort, direction, page, perPage)

List API keys

List masked API keys for a project. Secrets are never returned. Required scope: &#x60;api_keys.read&#x60;.

### Example

```ts
import {
  Configuration,
  APIKeysApi,
} from '@mailermine/generated';
import type { ListApiKeysRequest } from '@mailermine/generated';

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
    // string | Filter by key name or prefix. (optional)
    search: search_example,
    // string | Filter by status. (optional)
    status: active,
    // string | Sort field. (optional)
    sort: sort_example,
    // string | Sort direction. (optional)
    direction: direction_example,
    // number | Page number (1-based). (optional)
    page: 56,
    // number | Items per page. (optional)
    perPage: 56,
  } satisfies ListApiKeysRequest;

  try {
    const data = await api.listApiKeys(body);
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
| **project** | `string` | Parent project UUID. | [Defaults to `undefined`] |
| **search** | `string` | Filter by key name or prefix. | [Optional] [Defaults to `undefined`] |
| **status** | `string` | Filter by status. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | Sort field. | [Optional] [Defaults to `&#39;created_at&#39;`] |
| **direction** | `string` | Sort direction. | [Optional] [Defaults to `&#39;desc&#39;`] |
| **page** | `number` | Page number (1-based). | [Optional] [Defaults to `1`] |
| **perPage** | `number` | Items per page. | [Optional] [Defaults to `25`] |

### Return type

[**ApiKeyListResponse**](ApiKeyListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | API keys retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## revealApiKey

> object revealApiKey(project, apiKey)

Reveal API key

Always fails because API key secrets are irreversibly hashed. Rotate the key instead. Required scope: &#x60;api_keys.write&#x60;.

### Example

```ts
import {
  Configuration,
  APIKeysApi,
} from '@mailermine/generated';
import type { RevealApiKeyRequest } from '@mailermine/generated';

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
    // string | API key UUID.
    apiKey: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies RevealApiKeyRequest;

  try {
    const data = await api.revealApiKey(body);
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
| **project** | `string` | Parent project UUID. | [Defaults to `undefined`] |
| **apiKey** | `string` | API key UUID. | [Defaults to `undefined`] |

### Return type

**object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## rotateApiKey

> ApiKeyResponse rotateApiKey(project, apiKey)

Rotate API key

Revoke the old key and issue a replacement with the same name and scopes. The new secret is returned once. Required scope: &#x60;api_keys.write&#x60;.

### Example

```ts
import {
  Configuration,
  APIKeysApi,
} from '@mailermine/generated';
import type { RotateApiKeyRequest } from '@mailermine/generated';

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
    // string | API key UUID.
    apiKey: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies RotateApiKeyRequest;

  try {
    const data = await api.rotateApiKey(body);
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
| **project** | `string` | Parent project UUID. | [Defaults to `undefined`] |
| **apiKey** | `string` | API key UUID. | [Defaults to `undefined`] |

### Return type

[**ApiKeyResponse**](ApiKeyResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | API key rotated; store the one-time secret now. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateApiKey

> ApiKeyResponse updateApiKey(project, apiKey, updateApiKeyRequest)

Update API key

Update name, expiry, status, or scopes. Required scope: &#x60;api_keys.write&#x60;.

### Example

```ts
import {
  Configuration,
  APIKeysApi,
} from '@mailermine/generated';
import type { UpdateApiKeyOperationRequest } from '@mailermine/generated';

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
    // string | API key UUID.
    apiKey: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateApiKeyRequest (optional)
    updateApiKeyRequest: ...,
  } satisfies UpdateApiKeyOperationRequest;

  try {
    const data = await api.updateApiKey(body);
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
| **project** | `string` | Parent project UUID. | [Defaults to `undefined`] |
| **apiKey** | `string` | API key UUID. | [Defaults to `undefined`] |
| **updateApiKeyRequest** | [UpdateApiKeyRequest](UpdateApiKeyRequest.md) |  | [Optional] |

### Return type

[**ApiKeyResponse**](ApiKeyResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | API key updated successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

