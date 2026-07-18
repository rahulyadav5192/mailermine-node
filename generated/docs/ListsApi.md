# ListsApi

All URIs are relative to *http://127.0.0.1:8000/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addContactsToList**](ListsApi.md#addcontactstolist) | **POST** /lists/{list}/contacts | Add contacts to list |
| [**bulkAddContactsToList**](ListsApi.md#bulkaddcontactstolist) | **POST** /lists/{list}/contacts/bulk-add | Add contacts to list |
| [**bulkRemoveContactsFromList**](ListsApi.md#bulkremovecontactsfromlist) | **POST** /lists/{list}/contacts/bulk-remove | Remove contacts from list |
| [**createList**](ListsApi.md#createlistoperation) | **POST** /lists | Create contact list |
| [**deleteList**](ListsApi.md#deletelist) | **DELETE** /lists/{list} | Delete contact list |
| [**getList**](ListsApi.md#getlist) | **GET** /lists/{list} | Get contact list |
| [**listLists**](ListsApi.md#listlists) | **GET** /lists | List contact lists |
| [**removeContactsFromList**](ListsApi.md#removecontactsfromlist) | **DELETE** /lists/{list}/contacts | Remove contacts from list |
| [**removeContactsFromListLegacy**](ListsApi.md#removecontactsfromlistlegacy) | **POST** /lists/{list}/contacts/remove | Remove contacts from list |
| [**updateList**](ListsApi.md#updatelistoperation) | **PUT** /lists/{list} | Update contact list |



## addContactsToList

> AddContactsToList200Response addContactsToList(list, listContactsMembershipRequest)

Add contacts to list

Add contacts to a static list. Compatibility bulk routes expose the same behavior with route-specific operation IDs. Required scope: &#x60;contacts.write&#x60;.

### Example

```ts
import {
  Configuration,
  ListsApi,
} from '@mailermine/generated';
import type { AddContactsToListRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ListsApi(config);

  const body = {
    // string | List UUID.
    list: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // ListContactsMembershipRequest
    listContactsMembershipRequest: ...,
  } satisfies AddContactsToListRequest;

  try {
    const data = await api.addContactsToList(body);
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
| **list** | `string` | List UUID. | [Defaults to `undefined`] |
| **listContactsMembershipRequest** | [ListContactsMembershipRequest](ListContactsMembershipRequest.md) |  | |

### Return type

[**AddContactsToList200Response**](AddContactsToList200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contacts added to list. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## bulkAddContactsToList

> AddContactsToList200Response bulkAddContactsToList(list, listContactsMembershipRequest)

Add contacts to list

Add contacts to a static list. Compatibility bulk routes expose the same behavior with route-specific operation IDs. Required scope: &#x60;contacts.write&#x60;.

### Example

```ts
import {
  Configuration,
  ListsApi,
} from '@mailermine/generated';
import type { BulkAddContactsToListRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ListsApi(config);

  const body = {
    // string | List UUID.
    list: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // ListContactsMembershipRequest
    listContactsMembershipRequest: ...,
  } satisfies BulkAddContactsToListRequest;

  try {
    const data = await api.bulkAddContactsToList(body);
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
| **list** | `string` | List UUID. | [Defaults to `undefined`] |
| **listContactsMembershipRequest** | [ListContactsMembershipRequest](ListContactsMembershipRequest.md) |  | |

### Return type

[**AddContactsToList200Response**](AddContactsToList200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contacts added to list. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## bulkRemoveContactsFromList

> RemoveContactsFromList200Response bulkRemoveContactsFromList(list, listContactsMembershipRequest)

Remove contacts from list

Remove contacts from a static list. Compatibility POST routes expose the same behavior with route-specific operation IDs. Required scope: &#x60;contacts.write&#x60;.

### Example

```ts
import {
  Configuration,
  ListsApi,
} from '@mailermine/generated';
import type { BulkRemoveContactsFromListRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ListsApi(config);

  const body = {
    // string | List UUID.
    list: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // ListContactsMembershipRequest
    listContactsMembershipRequest: ...,
  } satisfies BulkRemoveContactsFromListRequest;

  try {
    const data = await api.bulkRemoveContactsFromList(body);
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
| **list** | `string` | List UUID. | [Defaults to `undefined`] |
| **listContactsMembershipRequest** | [ListContactsMembershipRequest](ListContactsMembershipRequest.md) |  | |

### Return type

[**RemoveContactsFromList200Response**](RemoveContactsFromList200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contacts removed from list. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createList

> ListResponse createList(createListRequest)

Create contact list

Create a static contact list. Required scope: &#x60;contacts.write&#x60;.

### Example

```ts
import {
  Configuration,
  ListsApi,
} from '@mailermine/generated';
import type { CreateListOperationRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ListsApi(config);

  const body = {
    // CreateListRequest
    createListRequest: ...,
  } satisfies CreateListOperationRequest;

  try {
    const data = await api.createList(body);
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
| **createListRequest** | [CreateListRequest](CreateListRequest.md) |  | |

### Return type

[**ListResponse**](ListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | List created successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteList

> DeleteResponse deleteList(list)

Delete contact list

Delete a static contact list. Required scope: &#x60;contacts.write&#x60;.

### Example

```ts
import {
  Configuration,
  ListsApi,
} from '@mailermine/generated';
import type { DeleteListRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ListsApi(config);

  const body = {
    // string | List UUID.
    list: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteListRequest;

  try {
    const data = await api.deleteList(body);
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
| **list** | `string` | List UUID. | [Defaults to `undefined`] |

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
| **200** | List deleted successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getList

> ListResponse getList(list)

Get contact list

Retrieve a contact list and its subscriber count. Required scope: &#x60;contacts.read&#x60;.

### Example

```ts
import {
  Configuration,
  ListsApi,
} from '@mailermine/generated';
import type { GetListRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ListsApi(config);

  const body = {
    // string | List UUID.
    list: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetListRequest;

  try {
    const data = await api.getList(body);
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
| **list** | `string` | List UUID. | [Defaults to `undefined`] |

### Return type

[**ListResponse**](ListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listLists

> ListCollection listLists(search, sort, direction, page, perPage)

List contact lists

List static contact lists with subscriber counts. Required scope: &#x60;contacts.read&#x60;.

### Example

```ts
import {
  Configuration,
  ListsApi,
} from '@mailermine/generated';
import type { ListListsRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ListsApi(config);

  const body = {
    // string | Search list names. (optional)
    search: Newsletter,
    // string | Sort field. (optional)
    sort: created_at,
    // string | Sort direction. (optional)
    direction: desc,
    // number | Page number. (optional)
    page: 1,
    // number | Items per page. (optional)
    perPage: 25,
  } satisfies ListListsRequest;

  try {
    const data = await api.listLists(body);
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
| **search** | `string` | Search list names. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | Sort field. | [Optional] [Defaults to `&#39;created_at&#39;`] |
| **direction** | `string` | Sort direction. | [Optional] [Defaults to `&#39;desc&#39;`] |
| **page** | `number` | Page number. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | Items per page. | [Optional] [Defaults to `25`] |

### Return type

[**ListCollection**](ListCollection.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Lists retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeContactsFromList

> RemoveContactsFromList200Response removeContactsFromList(list, ids)

Remove contacts from list

Remove contacts from a static list. Compatibility POST routes expose the same behavior with route-specific operation IDs. Required scope: &#x60;contacts.write&#x60;.

### Example

```ts
import {
  Configuration,
  ListsApi,
} from '@mailermine/generated';
import type { RemoveContactsFromListRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ListsApi(config);

  const body = {
    // string | List UUID.
    list: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Array<string> (optional)
    ids: ...,
  } satisfies RemoveContactsFromListRequest;

  try {
    const data = await api.removeContactsFromList(body);
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
| **list** | `string` | List UUID. | [Defaults to `undefined`] |
| **ids** | `Array<string>` |  | [Optional] |

### Return type

[**RemoveContactsFromList200Response**](RemoveContactsFromList200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contacts removed from list. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeContactsFromListLegacy

> RemoveContactsFromList200Response removeContactsFromListLegacy(list, listContactsMembershipRequest)

Remove contacts from list

Remove contacts from a static list. Compatibility POST routes expose the same behavior with route-specific operation IDs. Required scope: &#x60;contacts.write&#x60;.

### Example

```ts
import {
  Configuration,
  ListsApi,
} from '@mailermine/generated';
import type { RemoveContactsFromListLegacyRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ListsApi(config);

  const body = {
    // string | List UUID.
    list: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // ListContactsMembershipRequest
    listContactsMembershipRequest: ...,
  } satisfies RemoveContactsFromListLegacyRequest;

  try {
    const data = await api.removeContactsFromListLegacy(body);
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
| **list** | `string` | List UUID. | [Defaults to `undefined`] |
| **listContactsMembershipRequest** | [ListContactsMembershipRequest](ListContactsMembershipRequest.md) |  | |

### Return type

[**RemoveContactsFromList200Response**](RemoveContactsFromList200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contacts removed from list. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateList

> ListResponse updateList(list, updateListRequest)

Update contact list

Update a static contact list. Required scope: &#x60;contacts.write&#x60;.

### Example

```ts
import {
  Configuration,
  ListsApi,
} from '@mailermine/generated';
import type { UpdateListOperationRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ListsApi(config);

  const body = {
    // string | List UUID.
    list: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateListRequest (optional)
    updateListRequest: ...,
  } satisfies UpdateListOperationRequest;

  try {
    const data = await api.updateList(body);
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
| **list** | `string` | List UUID. | [Defaults to `undefined`] |
| **updateListRequest** | [UpdateListRequest](UpdateListRequest.md) |  | [Optional] |

### Return type

[**ListResponse**](ListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List updated successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

