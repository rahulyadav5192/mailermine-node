# MarketingApi

All URIs are relative to *http://127.0.0.1:8000/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createCustomField**](MarketingApi.md#createcustomfieldoperation) | **POST** /custom-fields | Create custom field |
| [**deleteCustomField**](MarketingApi.md#deletecustomfield) | **DELETE** /custom-fields/{customField} | Delete custom field |
| [**getCustomField**](MarketingApi.md#getcustomfield) | **GET** /custom-fields/{customField} | Get custom field |
| [**listCustomFields**](MarketingApi.md#listcustomfields) | **GET** /custom-fields | List custom fields |
| [**updateCustomField**](MarketingApi.md#updatecustomfieldoperation) | **PATCH** /custom-fields/{customField} | Update custom field |



## createCustomField

> CustomFieldResponse createCustomField(createCustomFieldRequest)

Create custom field

Create a typed custom field definition. Required scope: &#x60;contacts.write&#x60;.

### Example

```ts
import {
  Configuration,
  MarketingApi,
} from '@mailermine/generated';
import type { CreateCustomFieldOperationRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MarketingApi(config);

  const body = {
    // CreateCustomFieldRequest
    createCustomFieldRequest: ...,
  } satisfies CreateCustomFieldOperationRequest;

  try {
    const data = await api.createCustomField(body);
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
| **createCustomFieldRequest** | [CreateCustomFieldRequest](CreateCustomFieldRequest.md) |  | |

### Return type

[**CustomFieldResponse**](CustomFieldResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Custom field created successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteCustomField

> DeleteResponse deleteCustomField(customField)

Delete custom field

Delete a custom field definition. Required scope: &#x60;contacts.write&#x60;.

### Example

```ts
import {
  Configuration,
  MarketingApi,
} from '@mailermine/generated';
import type { DeleteCustomFieldRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MarketingApi(config);

  const body = {
    // string | Custom field UUID.
    customField: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteCustomFieldRequest;

  try {
    const data = await api.deleteCustomField(body);
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
| **customField** | `string` | Custom field UUID. | [Defaults to `undefined`] |

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
| **200** | Custom field deleted successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomField

> CustomFieldResponse getCustomField(customField)

Get custom field

Retrieve a custom field definition. Required scope: &#x60;contacts.read&#x60;.

### Example

```ts
import {
  Configuration,
  MarketingApi,
} from '@mailermine/generated';
import type { GetCustomFieldRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MarketingApi(config);

  const body = {
    // string | Custom field UUID.
    customField: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetCustomFieldRequest;

  try {
    const data = await api.getCustomField(body);
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
| **customField** | `string` | Custom field UUID. | [Defaults to `undefined`] |

### Return type

[**CustomFieldResponse**](CustomFieldResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Custom field retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listCustomFields

> CustomFieldCollection listCustomFields(search, sort, direction, page, perPage)

List custom fields

List custom field definitions. Required scope: &#x60;contacts.read&#x60;.

### Example

```ts
import {
  Configuration,
  MarketingApi,
} from '@mailermine/generated';
import type { ListCustomFieldsRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MarketingApi(config);

  const body = {
    // string | Search names and slugs. (optional)
    search: company,
    // string | Sort field. (optional)
    sort: name,
    // string | Sort direction. (optional)
    direction: asc,
    // number | Page number. (optional)
    page: 1,
    // number | Items per page. (optional)
    perPage: 25,
  } satisfies ListCustomFieldsRequest;

  try {
    const data = await api.listCustomFields(body);
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
| **search** | `string` | Search names and slugs. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | Sort field. | [Optional] [Defaults to `&#39;name&#39;`] |
| **direction** | `string` | Sort direction. | [Optional] [Defaults to `&#39;asc&#39;`] |
| **page** | `number` | Page number. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | Items per page. | [Optional] [Defaults to `25`] |

### Return type

[**CustomFieldCollection**](CustomFieldCollection.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Custom fields retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCustomField

> CustomFieldResponse updateCustomField(customField, updateCustomFieldRequest)

Update custom field

Update a custom field definition. Required scope: &#x60;contacts.write&#x60;.

### Example

```ts
import {
  Configuration,
  MarketingApi,
} from '@mailermine/generated';
import type { UpdateCustomFieldOperationRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MarketingApi(config);

  const body = {
    // string | Custom field UUID.
    customField: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateCustomFieldRequest (optional)
    updateCustomFieldRequest: ...,
  } satisfies UpdateCustomFieldOperationRequest;

  try {
    const data = await api.updateCustomField(body);
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
| **customField** | `string` | Custom field UUID. | [Defaults to `undefined`] |
| **updateCustomFieldRequest** | [UpdateCustomFieldRequest](UpdateCustomFieldRequest.md) |  | [Optional] |

### Return type

[**CustomFieldResponse**](CustomFieldResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Custom field updated successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

