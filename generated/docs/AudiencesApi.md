# AudiencesApi

All URIs are relative to *http://127.0.0.1:8000/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addAudienceMembers**](AudiencesApi.md#addaudiencemembers) | **POST** /audiences/{source}/{audience}/contacts | Add audience members |
| [**getAudience**](AudiencesApi.md#getaudience) | **GET** /audiences/{source}/{audience} | Get audience |
| [**listAudiences**](AudiencesApi.md#listaudiences) | **GET** /audiences | List audiences |
| [**removeAudienceMembers**](AudiencesApi.md#removeaudiencemembers) | **DELETE** /audiences/{source}/{audience}/contacts | Remove audience members |



## addAudienceMembers

> AddAudienceMembers200Response addAudienceMembers(source, audience, listContactsMembershipRequest)

Add audience members

Add contacts to a list-backed audience. Segment membership is dynamic and cannot be changed directly. Required scope: &#x60;contacts.write&#x60;.

### Example

```ts
import {
  Configuration,
  AudiencesApi,
} from '@mailermine/generated';
import type { AddAudienceMembersRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AudiencesApi(config);

  const body = {
    // string | Audience source; must be `list` for membership changes.
    source: list,
    // string | Audience UUID.
    audience: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // ListContactsMembershipRequest
    listContactsMembershipRequest: ...,
  } satisfies AddAudienceMembersRequest;

  try {
    const data = await api.addAudienceMembers(body);
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
| **source** | `string` | Audience source; must be &#x60;list&#x60; for membership changes. | [Defaults to `undefined`] |
| **audience** | `string` | Audience UUID. | [Defaults to `undefined`] |
| **listContactsMembershipRequest** | [ListContactsMembershipRequest](ListContactsMembershipRequest.md) |  | |

### Return type

[**AddAudienceMembers200Response**](AddAudienceMembers200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contacts added to audience. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAudience

> AudienceResponse getAudience(source, audience)

Get audience

Retrieve a list-backed or segment-backed audience. Required scope: &#x60;contacts.read&#x60;.

### Example

```ts
import {
  Configuration,
  AudiencesApi,
} from '@mailermine/generated';
import type { GetAudienceRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AudiencesApi(config);

  const body = {
    // string | Audience source type.
    source: list,
    // string | List or segment UUID.
    audience: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetAudienceRequest;

  try {
    const data = await api.getAudience(body);
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
| **source** | `string` | Audience source type. | [Defaults to `undefined`] |
| **audience** | `string` | List or segment UUID. | [Defaults to `undefined`] |

### Return type

[**AudienceResponse**](AudienceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Audience retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listAudiences

> AudienceCollection listAudiences(page, perPage)

List audiences

List static lists and dynamic segments through one paginated catalog. Required scope: &#x60;contacts.read&#x60;.

### Example

```ts
import {
  Configuration,
  AudiencesApi,
} from '@mailermine/generated';
import type { ListAudiencesRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AudiencesApi(config);

  const body = {
    // number | Page number. (optional)
    page: 1,
    // number | Items per page (maximum 100). (optional)
    perPage: 25,
  } satisfies ListAudiencesRequest;

  try {
    const data = await api.listAudiences(body);
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
| **page** | `number` | Page number. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | Items per page (maximum 100). | [Optional] [Defaults to `25`] |

### Return type

[**AudienceCollection**](AudienceCollection.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Audiences retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeAudienceMembers

> RemoveAudienceMembers200Response removeAudienceMembers(source, audience, ids)

Remove audience members

Remove contacts from a list-backed audience. Segment membership is dynamic and cannot be changed directly. Required scope: &#x60;contacts.write&#x60;.

### Example

```ts
import {
  Configuration,
  AudiencesApi,
} from '@mailermine/generated';
import type { RemoveAudienceMembersRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AudiencesApi(config);

  const body = {
    // string | Audience source; must be `list` for membership changes.
    source: list,
    // string | Audience UUID.
    audience: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Array<string> (optional)
    ids: ...,
  } satisfies RemoveAudienceMembersRequest;

  try {
    const data = await api.removeAudienceMembers(body);
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
| **source** | `string` | Audience source; must be &#x60;list&#x60; for membership changes. | [Defaults to `undefined`] |
| **audience** | `string` | Audience UUID. | [Defaults to `undefined`] |
| **ids** | `Array<string>` |  | [Optional] |

### Return type

[**RemoveAudienceMembers200Response**](RemoveAudienceMembers200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contacts removed from audience. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

