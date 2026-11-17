# TemplatesApi

All URIs are relative to *https://mailermine.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createTemplate**](TemplatesApi.md#createtemplateoperation) | **POST** /templates | Create template |
| [**deleteTemplate**](TemplatesApi.md#deletetemplate) | **DELETE** /templates/{template} | Delete template |
| [**duplicateTemplate**](TemplatesApi.md#duplicatetemplateoperation) | **POST** /templates/{template}/duplicate | Duplicate template |
| [**getTemplate**](TemplatesApi.md#gettemplate) | **GET** /templates/{template} | Get template |
| [**listTemplates**](TemplatesApi.md#listtemplates) | **GET** /templates | List templates |
| [**previewPublishedTemplate**](TemplatesApi.md#previewpublishedtemplate) | **POST** /templates/preview | Preview published template |
| [**previewTemplate**](TemplatesApi.md#previewtemplateoperation) | **POST** /templates/{template}/preview | Preview template |
| [**testTemplate**](TemplatesApi.md#testtemplateoperation) | **POST** /templates/{template}/test | Test template |
| [**updateTemplate**](TemplatesApi.md#updatetemplateoperation) | **PATCH** /templates/{template} | Update template |



## createTemplate

> TemplateResponse createTemplate(createTemplateRequest)

Create template

Create a reusable template with content, variables, and branding. Required scope: &#x60;templates.write&#x60;.

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '@mailermine/generated';
import type { CreateTemplateOperationRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplatesApi(config);

  const body = {
    // CreateTemplateRequest
    createTemplateRequest: ...,
  } satisfies CreateTemplateOperationRequest;

  try {
    const data = await api.createTemplate(body);
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
| **createTemplateRequest** | [CreateTemplateRequest](CreateTemplateRequest.md) |  | |

### Return type

[**TemplateResponse**](TemplateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Template created successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteTemplate

> DeleteResponse deleteTemplate(template)

Delete template

Soft-delete a template. Blocked while scheduled or active campaigns reference it. Required scope: &#x60;templates.write&#x60;.

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '@mailermine/generated';
import type { DeleteTemplateRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplatesApi(config);

  const body = {
    // string | Template UUID.
    template: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteTemplateRequest;

  try {
    const data = await api.deleteTemplate(body);
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
| **template** | `string` | Template UUID. | [Defaults to `undefined`] |

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
| **200** | Template deleted successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## duplicateTemplate

> TemplateResponse duplicateTemplate(template, duplicateTemplateRequest)

Duplicate template

Copy content, variables, metadata, and branding into a new draft. Required scope: &#x60;templates.write&#x60;.

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '@mailermine/generated';
import type { DuplicateTemplateOperationRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplatesApi(config);

  const body = {
    // string | Source template UUID.
    template: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // DuplicateTemplateRequest (optional)
    duplicateTemplateRequest: ...,
  } satisfies DuplicateTemplateOperationRequest;

  try {
    const data = await api.duplicateTemplate(body);
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
| **template** | `string` | Source template UUID. | [Defaults to `undefined`] |
| **duplicateTemplateRequest** | [DuplicateTemplateRequest](DuplicateTemplateRequest.md) |  | [Optional] |

### Return type

[**TemplateResponse**](TemplateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Template duplicated successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTemplate

> TemplateResponse getTemplate(template)

Get template

Retrieve full template content, variables, branding, project, and usage. Required scope: &#x60;templates.read&#x60;.

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '@mailermine/generated';
import type { GetTemplateRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplatesApi(config);

  const body = {
    // string | Template UUID.
    template: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetTemplateRequest;

  try {
    const data = await api.getTemplate(body);
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
| **template** | `string` | Template UUID. | [Defaults to `undefined`] |

### Return type

[**TemplateResponse**](TemplateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Template retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listTemplates

> TemplateListResponse listTemplates(search, status, editorType, sort, direction, page, perPage)

List templates

List templates for the authenticated project. Full HTML is omitted from list items. Required scope: &#x60;templates.read&#x60;.

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '@mailermine/generated';
import type { ListTemplatesRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplatesApi(config);

  const body = {
    // string | Filter by name, slug, or subject. (optional)
    search: search_example,
    // string | Filter by publication status. (optional)
    status: published,
    // string | Filter by editor/layout type. (optional)
    editorType: html,
    // string | Sort field. (optional)
    sort: sort_example,
    // string | Sort direction. (optional)
    direction: direction_example,
    // number | Page number (1-based). (optional)
    page: 56,
    // number | Items per page. (optional)
    perPage: 56,
  } satisfies ListTemplatesRequest;

  try {
    const data = await api.listTemplates(body);
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
| **search** | `string` | Filter by name, slug, or subject. | [Optional] [Defaults to `undefined`] |
| **status** | `string` | Filter by publication status. | [Optional] [Defaults to `undefined`] |
| **editorType** | `string` | Filter by editor/layout type. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | Sort field. | [Optional] [Defaults to `&#39;created_at&#39;`] |
| **direction** | `string` | Sort direction. | [Optional] [Defaults to `&#39;desc&#39;`] |
| **page** | `number` | Page number (1-based). | [Optional] [Defaults to `1`] |
| **perPage** | `number` | Items per page. | [Optional] [Defaults to `25`] |

### Return type

[**TemplateListResponse**](TemplateListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Templates retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## previewPublishedTemplate

> TemplatePreviewResponse previewPublishedTemplate(previewTemplateByIdRequest)

Preview published template

Legacy preview operation that selects a published template by &#x60;template_id&#x60;. Required scope: &#x60;templates.read&#x60;.

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '@mailermine/generated';
import type { PreviewPublishedTemplateRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplatesApi(config);

  const body = {
    // PreviewTemplateByIdRequest
    previewTemplateByIdRequest: ...,
  } satisfies PreviewPublishedTemplateRequest;

  try {
    const data = await api.previewPublishedTemplate(body);
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
| **previewTemplateByIdRequest** | [PreviewTemplateByIdRequest](PreviewTemplateByIdRequest.md) |  | |

### Return type

[**TemplatePreviewResponse**](TemplatePreviewResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Published template rendered successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## previewTemplate

> TemplatePreviewResponse previewTemplate(template, previewTemplateRequest)

Preview template

Render a template with runtime variables without saving or sending. Required scope: &#x60;templates.read&#x60;.

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '@mailermine/generated';
import type { PreviewTemplateOperationRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplatesApi(config);

  const body = {
    // string | Template UUID.
    template: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // PreviewTemplateRequest (optional)
    previewTemplateRequest: ...,
  } satisfies PreviewTemplateOperationRequest;

  try {
    const data = await api.previewTemplate(body);
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
| **template** | `string` | Template UUID. | [Defaults to `undefined`] |
| **previewTemplateRequest** | [PreviewTemplateRequest](PreviewTemplateRequest.md) |  | [Optional] |

### Return type

[**TemplatePreviewResponse**](TemplatePreviewResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Template preview rendered successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## testTemplate

> TemplateTestResponse testTemplate(template, testTemplateRequest)

Test template

Queue a test email from the template. Required scopes: &#x60;templates.write&#x60; and &#x60;emails.send&#x60;.

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '@mailermine/generated';
import type { TestTemplateOperationRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplatesApi(config);

  const body = {
    // string | Template UUID.
    template: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // TestTemplateRequest
    testTemplateRequest: ...,
  } satisfies TestTemplateOperationRequest;

  try {
    const data = await api.testTemplate(body);
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
| **template** | `string` | Template UUID. | [Defaults to `undefined`] |
| **testTemplateRequest** | [TestTemplateRequest](TestTemplateRequest.md) |  | |

### Return type

[**TemplateTestResponse**](TemplateTestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Test email queued successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateTemplate

> TemplateResponse updateTemplate(template, updateTemplateRequest)

Update template

Partially update template content, variables, status, or branding. Required scope: &#x60;templates.write&#x60;.

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '@mailermine/generated';
import type { UpdateTemplateOperationRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplatesApi(config);

  const body = {
    // string | Template UUID.
    template: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateTemplateRequest (optional)
    updateTemplateRequest: ...,
  } satisfies UpdateTemplateOperationRequest;

  try {
    const data = await api.updateTemplate(body);
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
| **template** | `string` | Template UUID. | [Defaults to `undefined`] |
| **updateTemplateRequest** | [UpdateTemplateRequest](UpdateTemplateRequest.md) |  | [Optional] |

### Return type

[**TemplateResponse**](TemplateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Template updated successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

