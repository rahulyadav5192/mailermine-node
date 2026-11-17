# ExportsApi

All URIs are relative to *https://mailermine.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**downloadContactExport**](ExportsApi.md#downloadcontactexport) | **GET** /contacts/exports/{contactExport}/download | Download contact export |
| [**exportContacts**](ExportsApi.md#exportcontactsoperation) | **POST** /contacts/export | Export contacts |
| [**getContactExport**](ExportsApi.md#getcontactexport) | **GET** /contacts/exports/{contactExport} | Get contact export |



## downloadContactExport

> string downloadContactExport(contactExport)

Download contact export

Download a completed CSV contact export. Required scope: &#x60;contacts.read&#x60;.

### Example

```ts
import {
  Configuration,
  ExportsApi,
} from '@mailermine/generated';
import type { DownloadContactExportRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ExportsApi(config);

  const body = {
    // string | Contact export UUID.
    contactExport: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DownloadContactExportRequest;

  try {
    const data = await api.downloadContactExport(body);
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
| **contactExport** | `string` | Contact export UUID. | [Defaults to `undefined`] |

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
| **422** | Validation failed or plan limit exceeded. |  -  |
| **200** | CSV contact export. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportContacts

> ExportJobResponse exportContacts(exportContactsRequest)

Export contacts

Queue an asynchronous CSV contact export using optional filters or contact UUIDs. Required scope: &#x60;contacts.read&#x60;.

### Example

```ts
import {
  Configuration,
  ExportsApi,
} from '@mailermine/generated';
import type { ExportContactsOperationRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ExportsApi(config);

  const body = {
    // ExportContactsRequest (optional)
    exportContactsRequest: ...,
  } satisfies ExportContactsOperationRequest;

  try {
    const data = await api.exportContacts(body);
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
| **exportContactsRequest** | [ExportContactsRequest](ExportContactsRequest.md) |  | [Optional] |

### Return type

[**ExportJobResponse**](ExportJobResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Contact export queued. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **401** | Missing or invalid API key. |  -  |
| **400** | Malformed JSON or invalid request. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getContactExport

> ExportJobResponse getContactExport(contactExport)

Get contact export

Retrieve export status and download availability. Required scope: &#x60;contacts.read&#x60;.

### Example

```ts
import {
  Configuration,
  ExportsApi,
} from '@mailermine/generated';
import type { GetContactExportRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ExportsApi(config);

  const body = {
    // string | Contact export UUID.
    contactExport: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetContactExportRequest;

  try {
    const data = await api.getContactExport(body);
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
| **contactExport** | `string` | Contact export UUID. | [Defaults to `undefined`] |

### Return type

[**ExportJobResponse**](ExportJobResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Export retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

