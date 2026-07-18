# ContactsApi

All URIs are relative to *http://127.0.0.1:8000/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**bulkDeleteContacts**](ContactsApi.md#bulkdeletecontacts) | **POST** /contacts/bulk-delete | Bulk delete contacts |
| [**bulkRestoreContacts**](ContactsApi.md#bulkrestorecontacts) | **POST** /contacts/restore | Bulk restore contacts |
| [**bulkUpdateContacts**](ContactsApi.md#bulkupdatecontactsoperation) | **POST** /contacts/bulk-update | Bulk update contacts |
| [**createContact**](ContactsApi.md#createcontactoperation) | **POST** /contacts | Create contact |
| [**deleteContact**](ContactsApi.md#deletecontact) | **DELETE** /contacts/{contact} | Delete contact |
| [**getContact**](ContactsApi.md#getcontact) | **GET** /contacts/{contact} | Get contact |
| [**listContacts**](ContactsApi.md#listcontacts) | **GET** /contacts | List contacts |
| [**restoreContact**](ContactsApi.md#restorecontact) | **POST** /contacts/{contact}/restore | Restore contact |
| [**updateContact**](ContactsApi.md#updatecontactoperation) | **PATCH** /contacts/{contact} | Update contact |



## bulkDeleteContacts

> BulkDeleteContacts200Response bulkDeleteContacts(bulkContactIdsRequest)

Bulk delete contacts

Soft-delete contacts by UUID. Required scope: &#x60;contacts.write&#x60;.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@mailermine/generated';
import type { BulkDeleteContactsRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactsApi(config);

  const body = {
    // BulkContactIdsRequest
    bulkContactIdsRequest: ...,
  } satisfies BulkDeleteContactsRequest;

  try {
    const data = await api.bulkDeleteContacts(body);
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
| **bulkContactIdsRequest** | [BulkContactIdsRequest](BulkContactIdsRequest.md) |  | |

### Return type

[**BulkDeleteContacts200Response**](BulkDeleteContacts200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contacts deleted successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## bulkRestoreContacts

> BulkRestoreContacts200Response bulkRestoreContacts(bulkContactIdsRequest)

Bulk restore contacts

Restore soft-deleted contacts by UUID. Required scope: &#x60;contacts.write&#x60;.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@mailermine/generated';
import type { BulkRestoreContactsRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactsApi(config);

  const body = {
    // BulkContactIdsRequest
    bulkContactIdsRequest: ...,
  } satisfies BulkRestoreContactsRequest;

  try {
    const data = await api.bulkRestoreContacts(body);
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
| **bulkContactIdsRequest** | [BulkContactIdsRequest](BulkContactIdsRequest.md) |  | |

### Return type

[**BulkRestoreContacts200Response**](BulkRestoreContacts200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contacts restored successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## bulkUpdateContacts

> BulkUpdateContacts200Response bulkUpdateContacts(bulkUpdateContactsRequest)

Bulk update contacts

Update the status of multiple contacts. Required scope: &#x60;contacts.write&#x60;.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@mailermine/generated';
import type { BulkUpdateContactsOperationRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactsApi(config);

  const body = {
    // BulkUpdateContactsRequest
    bulkUpdateContactsRequest: ...,
  } satisfies BulkUpdateContactsOperationRequest;

  try {
    const data = await api.bulkUpdateContacts(body);
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
| **bulkUpdateContactsRequest** | [BulkUpdateContactsRequest](BulkUpdateContactsRequest.md) |  | |

### Return type

[**BulkUpdateContacts200Response**](BulkUpdateContacts200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contacts updated successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createContact

> ContactResponse createContact(createContactRequest)

Create contact

Create a contact with optional lists, tags, metadata, and custom fields. Required scope: &#x60;contacts.write&#x60;.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@mailermine/generated';
import type { CreateContactOperationRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactsApi(config);

  const body = {
    // CreateContactRequest
    createContactRequest: ...,
  } satisfies CreateContactOperationRequest;

  try {
    const data = await api.createContact(body);
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
| **createContactRequest** | [CreateContactRequest](CreateContactRequest.md) |  | |

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Contact created successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteContact

> DeleteResponse deleteContact(contact)

Delete contact

Soft-delete a contact. Required scope: &#x60;contacts.write&#x60;.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@mailermine/generated';
import type { DeleteContactRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactsApi(config);

  const body = {
    // string | Contact UUID.
    contact: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteContactRequest;

  try {
    const data = await api.deleteContact(body);
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
| **contact** | `string` | Contact UUID. | [Defaults to `undefined`] |

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
| **200** | Contact deleted successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getContact

> ContactResponse getContact(contact)

Get contact

Retrieve a contact and its loaded relationships. Required scope: &#x60;contacts.read&#x60;.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@mailermine/generated';
import type { GetContactRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactsApi(config);

  const body = {
    // string | Contact UUID.
    contact: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetContactRequest;

  try {
    const data = await api.getContact(body);
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
| **contact** | `string` | Contact UUID. | [Defaults to `undefined`] |

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contact retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listContacts

> ContactCollection listContacts(search, q, status, subscribed, list, tag, tagName, source, createdFrom, createdTo, updatedFrom, updatedTo, segment, sort, direction, page, perPage)

List contacts

Return a paginated, filterable contact collection. Required scope: &#x60;contacts.read&#x60;.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@mailermine/generated';
import type { ListContactsRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactsApi(config);

  const body = {
    // string | Search contact email or name. (optional)
    search: ada@example.com,
    // string | Alias for `search`. (optional)
    q: Ada,
    // string | Filter by contact status. (optional)
    status: active,
    // boolean | Filter by subscription state. (optional)
    subscribed: true,
    // string | Filter by list UUID. (optional)
    list: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Filter by numeric tag ID or tag name. (optional)
    tag: customer,
    // string | Filter by exact tag name. (optional)
    tagName: customer,
    // string | Filter by acquisition source. (optional)
    source: api,
    // string | Created-at lower bound. (optional)
    createdFrom: 2013-10-20T19:20:30+01:00,
    // string | Created-at upper bound. (optional)
    createdTo: 2013-10-20T19:20:30+01:00,
    // string | Updated-at lower bound. (optional)
    updatedFrom: 2013-10-20T19:20:30+01:00,
    // string | Updated-at upper bound. (optional)
    updatedTo: 2013-10-20T19:20:30+01:00,
    // string | Filter by segment UUID. (optional)
    segment: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Sort field. (optional)
    sort: created_at,
    // string | Sort direction. (optional)
    direction: desc,
    // number | Page number. (optional)
    page: 1,
    // number | Items per page. (optional)
    perPage: 25,
  } satisfies ListContactsRequest;

  try {
    const data = await api.listContacts(body);
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
| **search** | `string` | Search contact email or name. | [Optional] [Defaults to `undefined`] |
| **q** | `string` | Alias for &#x60;search&#x60;. | [Optional] [Defaults to `undefined`] |
| **status** | `string` | Filter by contact status. | [Optional] [Defaults to `undefined`] |
| **subscribed** | `boolean` | Filter by subscription state. | [Optional] [Defaults to `undefined`] |
| **list** | `string` | Filter by list UUID. | [Optional] [Defaults to `undefined`] |
| **tag** | `string` | Filter by numeric tag ID or tag name. | [Optional] [Defaults to `undefined`] |
| **tagName** | `string` | Filter by exact tag name. | [Optional] [Defaults to `undefined`] |
| **source** | `string` | Filter by acquisition source. | [Optional] [Defaults to `undefined`] |
| **createdFrom** | `string` | Created-at lower bound. | [Optional] [Defaults to `undefined`] |
| **createdTo** | `string` | Created-at upper bound. | [Optional] [Defaults to `undefined`] |
| **updatedFrom** | `string` | Updated-at lower bound. | [Optional] [Defaults to `undefined`] |
| **updatedTo** | `string` | Updated-at upper bound. | [Optional] [Defaults to `undefined`] |
| **segment** | `string` | Filter by segment UUID. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | Sort field. | [Optional] [Defaults to `&#39;created_at&#39;`] |
| **direction** | `string` | Sort direction. | [Optional] [Defaults to `&#39;desc&#39;`] |
| **page** | `number` | Page number. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | Items per page. | [Optional] [Defaults to `25`] |

### Return type

[**ContactCollection**](ContactCollection.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contacts retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## restoreContact

> ContactResponse restoreContact(contact)

Restore contact

Restore one soft-deleted contact. Required scope: &#x60;contacts.write&#x60;.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@mailermine/generated';
import type { RestoreContactRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactsApi(config);

  const body = {
    // string | Contact UUID.
    contact: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies RestoreContactRequest;

  try {
    const data = await api.restoreContact(body);
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
| **contact** | `string` | Contact UUID. | [Defaults to `undefined`] |

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contact restored successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateContact

> ContactResponse updateContact(contact, updateContactRequest)

Update contact

Update contact fields and optional relationships. Required scope: &#x60;contacts.write&#x60;.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@mailermine/generated';
import type { UpdateContactOperationRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactsApi(config);

  const body = {
    // string | Contact UUID.
    contact: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateContactRequest (optional)
    updateContactRequest: ...,
  } satisfies UpdateContactOperationRequest;

  try {
    const data = await api.updateContact(body);
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
| **contact** | `string` | Contact UUID. | [Defaults to `undefined`] |
| **updateContactRequest** | [UpdateContactRequest](UpdateContactRequest.md) |  | [Optional] |

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contact updated successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

