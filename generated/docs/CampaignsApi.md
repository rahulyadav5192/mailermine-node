# CampaignsApi

All URIs are relative to *https://mailermine.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createCampaign**](CampaignsApi.md#createcampaignoperation) | **POST** /campaigns | Create campaign |
| [**deleteCampaign**](CampaignsApi.md#deletecampaign) | **DELETE** /campaigns/{campaign} | Delete campaign |
| [**getCampaign**](CampaignsApi.md#getcampaign) | **GET** /campaigns/{campaign} | Get campaign |
| [**listCampaigns**](CampaignsApi.md#listcampaigns) | **GET** /campaigns | List campaigns |
| [**previewCampaign**](CampaignsApi.md#previewcampaign) | **GET** /campaigns/{campaign}/preview | Preview campaign |
| [**previewCampaignRecipients**](CampaignsApi.md#previewcampaignrecipients) | **GET** /campaigns/{campaign}/recipient-preview | Preview campaign recipients |
| [**updateCampaign**](CampaignsApi.md#updatecampaignoperation) | **PATCH** /campaigns/{campaign} | Update campaign |
| [**validateCampaign**](CampaignsApi.md#validatecampaign) | **GET** /campaigns/{campaign}/validate | Validate campaign |



## createCampaign

> CampaignResponse createCampaign(createCampaignRequest)

Create campaign

Create a draft campaign in the API key project. Required scope: &#x60;campaigns.write&#x60;.

### Example

```ts
import {
  Configuration,
  CampaignsApi,
} from '@mailermine/generated';
import type { CreateCampaignOperationRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignsApi(config);

  const body = {
    // CreateCampaignRequest
    createCampaignRequest: ...,
  } satisfies CreateCampaignOperationRequest;

  try {
    const data = await api.createCampaign(body);
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
| **createCampaignRequest** | [CreateCampaignRequest](CreateCampaignRequest.md) |  | |

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
| **201** | Campaign created successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteCampaign

> DeleteResponse deleteCampaign(campaign)

Delete campaign

Soft-delete a campaign. Required scope: &#x60;campaigns.write&#x60;.

### Example

```ts
import {
  Configuration,
  CampaignsApi,
} from '@mailermine/generated';
import type { DeleteCampaignRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignsApi(config);

  const body = {
    // string | Campaign UUID.
    campaign: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteCampaignRequest;

  try {
    const data = await api.deleteCampaign(body);
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

[**DeleteResponse**](DeleteResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Campaign deleted successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCampaign

> CampaignResponse getCampaign(campaign)

Get campaign

Retrieve campaign configuration, relationships, and send counters. Required scope: &#x60;campaigns.read&#x60;.

### Example

```ts
import {
  Configuration,
  CampaignsApi,
} from '@mailermine/generated';
import type { GetCampaignRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignsApi(config);

  const body = {
    // string | Campaign UUID.
    campaign: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetCampaignRequest;

  try {
    const data = await api.getCampaign(body);
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
| **200** | Campaign retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listCampaigns

> CampaignCollection listCampaigns(search, status, page, perPage)

List campaigns

List campaigns for the API key project. Required scope: &#x60;campaigns.read&#x60;.

### Example

```ts
import {
  Configuration,
  CampaignsApi,
} from '@mailermine/generated';
import type { ListCampaignsRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignsApi(config);

  const body = {
    // string | Search campaign name or subject. (optional)
    search: August,
    // string | Filter by lifecycle status. (optional)
    status: scheduled,
    // number | Page number. (optional)
    page: 1,
    // number | Items per page (maximum 100). (optional)
    perPage: 15,
  } satisfies ListCampaignsRequest;

  try {
    const data = await api.listCampaigns(body);
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
| **search** | `string` | Search campaign name or subject. | [Optional] [Defaults to `undefined`] |
| **status** | `string` | Filter by lifecycle status. | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Page number. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | Items per page (maximum 100). | [Optional] [Defaults to `15`] |

### Return type

[**CampaignCollection**](CampaignCollection.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Campaigns retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## previewCampaign

> CampaignPreviewResponse previewCampaign(campaign)

Preview campaign

Render the current campaign subject and bodies without sending. Requires an assigned template (&#x60;template_uuid&#x60; on create/update or via set-template). Returns HTTP 422 with &#x60;template&#x60; when no template is assigned. Required scope: &#x60;campaigns.read&#x60;.

### Example

```ts
import {
  Configuration,
  CampaignsApi,
} from '@mailermine/generated';
import type { PreviewCampaignRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignsApi(config);

  const body = {
    // string | Campaign UUID.
    campaign: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies PreviewCampaignRequest;

  try {
    const data = await api.previewCampaign(body);
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

[**CampaignPreviewResponse**](CampaignPreviewResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Campaign preview rendered. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## previewCampaignRecipients

> CampaignRecipientPreviewResponse previewCampaignRecipients(campaign)

Preview campaign recipients

Estimate the selected audience and return representative contacts. Required scope: &#x60;campaigns.read&#x60;.

### Example

```ts
import {
  Configuration,
  CampaignsApi,
} from '@mailermine/generated';
import type { PreviewCampaignRecipientsRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignsApi(config);

  const body = {
    // string | Campaign UUID.
    campaign: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies PreviewCampaignRecipientsRequest;

  try {
    const data = await api.previewCampaignRecipients(body);
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

[**CampaignRecipientPreviewResponse**](CampaignRecipientPreviewResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Recipient preview generated. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCampaign

> CampaignResponse updateCampaign(campaign, updateCampaignRequest)

Update campaign

Update an editable campaign and its template, audience, sender, or delivery settings. Required scope: &#x60;campaigns.write&#x60;.

### Example

```ts
import {
  Configuration,
  CampaignsApi,
} from '@mailermine/generated';
import type { UpdateCampaignOperationRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignsApi(config);

  const body = {
    // string | Campaign UUID.
    campaign: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateCampaignRequest (optional)
    updateCampaignRequest: ...,
  } satisfies UpdateCampaignOperationRequest;

  try {
    const data = await api.updateCampaign(body);
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
| **updateCampaignRequest** | [UpdateCampaignRequest](UpdateCampaignRequest.md) |  | [Optional] |

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
| **200** | Campaign updated successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## validateCampaign

> CampaignValidationResponse validateCampaign(campaign)

Validate campaign

Check sender, template, audience, and delivery readiness. Required scope: &#x60;campaigns.read&#x60;.

### Example

```ts
import {
  Configuration,
  CampaignsApi,
} from '@mailermine/generated';
import type { ValidateCampaignRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignsApi(config);

  const body = {
    // string | Campaign UUID.
    campaign: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ValidateCampaignRequest;

  try {
    const data = await api.validateCampaign(body);
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

[**CampaignValidationResponse**](CampaignValidationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Campaign validation completed. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

