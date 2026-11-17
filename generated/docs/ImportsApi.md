# ImportsApi

All URIs are relative to *https://mailermine.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**configureContactImport**](ImportsApi.md#configurecontactimportoperation) | **POST** /contacts/imports/{contactImport}/config | Configure contact import |
| [**downloadContactImportFailures**](ImportsApi.md#downloadcontactimportfailures) | **GET** /contacts/imports/{contactImport}/failures | Download import failures |
| [**getContactImport**](ImportsApi.md#getcontactimport) | **GET** /contacts/imports/{contactImport} | Get contact import |
| [**importContacts**](ImportsApi.md#importcontactsoperation) | **POST** /contacts/import | Upload contact import |
| [**listContactImports**](ImportsApi.md#listcontactimports) | **GET** /contacts/imports | List contact imports |
| [**startContactImport**](ImportsApi.md#startcontactimport) | **POST** /contacts/imports/{contactImport}/start | Start contact import |



## configureContactImport

> ImportJobResponse configureContactImport(contactImport, configureContactImportRequest)

Configure contact import

Save column mappings and duplicate-handling behavior before starting an import. Required scope: &#x60;contacts.write&#x60;.

### Example

```ts
import {
  Configuration,
  ImportsApi,
} from '@mailermine/generated';
import type { ConfigureContactImportOperationRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ImportsApi(config);

  const body = {
    // string | Contact import UUID.
    contactImport: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // ConfigureContactImportRequest
    configureContactImportRequest: ...,
  } satisfies ConfigureContactImportOperationRequest;

  try {
    const data = await api.configureContactImport(body);
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
| **contactImport** | `string` | Contact import UUID. | [Defaults to `undefined`] |
| **configureContactImportRequest** | [ConfigureContactImportRequest](ConfigureContactImportRequest.md) |  | |

### Return type

[**ImportJobResponse**](ImportJobResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Import configuration saved. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## downloadContactImportFailures

> string downloadContactImportFailures(contactImport)

Download import failures

Download the CSV failure report generated for an import. Required scope: &#x60;contacts.read&#x60;.

### Example

```ts
import {
  Configuration,
  ImportsApi,
} from '@mailermine/generated';
import type { DownloadContactImportFailuresRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ImportsApi(config);

  const body = {
    // string | Contact import UUID.
    contactImport: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DownloadContactImportFailuresRequest;

  try {
    const data = await api.downloadContactImportFailures(body);
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
| **contactImport** | `string` | Contact import UUID. | [Defaults to `undefined`] |

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **404** | Resource not found. |  -  |
| **200** | CSV failure report. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getContactImport

> ImportJobDetailResponse getContactImport(contactImport)

Get contact import

Retrieve import status, counters, metadata, and live progress. Required scope: &#x60;contacts.read&#x60;.

### Example

```ts
import {
  Configuration,
  ImportsApi,
} from '@mailermine/generated';
import type { GetContactImportRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ImportsApi(config);

  const body = {
    // string | Contact import UUID.
    contactImport: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetContactImportRequest;

  try {
    const data = await api.getContactImport(body);
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
| **contactImport** | `string` | Contact import UUID. | [Defaults to `undefined`] |

### Return type

[**ImportJobDetailResponse**](ImportJobDetailResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Import retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## importContacts

> ImportJobResponse importContacts(importContactsRequest)

Upload contact import

Upload a contact import file (maximum 50 MiB) for parsing and configuration. Required scope: &#x60;contacts.write&#x60;.

### Example

```ts
import {
  Configuration,
  ImportsApi,
} from '@mailermine/generated';
import type { ImportContactsOperationRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ImportsApi(config);

  const body = {
    // ImportContactsRequest
    importContactsRequest: ...,
  } satisfies ImportContactsOperationRequest;

  try {
    const data = await api.importContacts(body);
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
| **importContactsRequest** | [ImportContactsRequest](ImportContactsRequest.md) |  | |

### Return type

[**ImportJobResponse**](ImportJobResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Import uploaded successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **401** | Missing or invalid API key. |  -  |
| **400** | Malformed JSON or invalid request. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listContactImports

> ImportJobCollection listContactImports()

List contact imports

Return the 50 most recent contact import jobs. Required scope: &#x60;contacts.read&#x60;.

### Example

```ts
import {
  Configuration,
  ImportsApi,
} from '@mailermine/generated';
import type { ListContactImportsRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ImportsApi(config);

  try {
    const data = await api.listContactImports();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ImportJobCollection**](ImportJobCollection.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contact imports retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## startContactImport

> ImportJobResponse startContactImport(contactImport)

Start contact import

Queue a configured contact import for processing. Required scope: &#x60;contacts.write&#x60;.

### Example

```ts
import {
  Configuration,
  ImportsApi,
} from '@mailermine/generated';
import type { StartContactImportRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ImportsApi(config);

  const body = {
    // string | Contact import UUID.
    contactImport: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies StartContactImportRequest;

  try {
    const data = await api.startContactImport(body);
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
| **contactImport** | `string` | Contact import UUID. | [Defaults to `undefined`] |

### Return type

[**ImportJobResponse**](ImportJobResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Import started. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

