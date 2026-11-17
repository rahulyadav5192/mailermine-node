# MessagesApi

All URIs are relative to *https://mailermine.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getMessage**](MessagesApi.md#getmessage) | **GET** /delivery-logs/{message} | Get message |
| [**listMessages**](MessagesApi.md#listmessages) | **GET** /delivery-logs | List messages |
| [**messageEvents**](MessagesApi.md#messageevents) | **GET** /messages/{message}/events | Message events |



## getMessage

> MessageDetailResponse getMessage(message)

Get message

Retrieve a single message by UUID with delivery timeline events.

### Example

```ts
import {
  Configuration,
  MessagesApi,
} from '@mailermine/generated';
import type { GetMessageRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MessagesApi(config);

  const body = {
    // string | The message UUID
    message: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetMessageRequest;

  try {
    const data = await api.getMessage(body);
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
| **message** | `string` | The message UUID | [Defaults to `undefined`] |

### Return type

[**MessageDetailResponse**](MessageDetailResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **404** | Resource not found. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **400** | Malformed JSON or invalid request. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listMessages

> MessageListResponse listMessages(search, status, provider, from, to, page, perPage)

List messages

List sent and queued messages for your project with optional filters and pagination.

### Example

```ts
import {
  Configuration,
  MessagesApi,
} from '@mailermine/generated';
import type { ListMessagesRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MessagesApi(config);

  const body = {
    // string | Free-text search across subject and recipient. (optional)
    search: invoice,
    // string | Filter by message status. (optional)
    status: sent,
    // string | Filter by delivery provider. (optional)
    provider: aws,
    // string | Filter messages sent on or after this ISO-8601 date. (optional)
    from: 2013-10-20T19:20:30+01:00,
    // string | Filter messages sent on or before this ISO-8601 date. (optional)
    to: 2013-10-20T19:20:30+01:00,
    // number | Page number (1-based). (optional)
    page: 1,
    // number | Items per page (default 25). (optional)
    perPage: 25,
  } satisfies ListMessagesRequest;

  try {
    const data = await api.listMessages(body);
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
| **search** | `string` | Free-text search across subject and recipient. | [Optional] [Defaults to `undefined`] |
| **status** | `string` | Filter by message status. | [Optional] [Defaults to `undefined`] |
| **provider** | `string` | Filter by delivery provider. | [Optional] [Defaults to `undefined`] |
| **from** | `string` | Filter messages sent on or after this ISO-8601 date. | [Optional] [Defaults to `undefined`] |
| **to** | `string` | Filter messages sent on or before this ISO-8601 date. | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Page number (1-based). | [Optional] [Defaults to `undefined`] |
| **perPage** | `number` | Items per page (default 25). | [Optional] [Defaults to `undefined`] |

### Return type

[**MessageListResponse**](MessageListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Messages retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **400** | Malformed JSON or invalid request. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## messageEvents

> MessageEventsResponse messageEvents(message)

Message events

Retrieve lifecycle events for a single message.

### Example

```ts
import {
  Configuration,
  MessagesApi,
} from '@mailermine/generated';
import type { MessageEventsRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MessagesApi(config);

  const body = {
    // string | The message UUID
    message: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies MessageEventsRequest;

  try {
    const data = await api.messageEvents(body);
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
| **message** | `string` | The message UUID | [Defaults to `undefined`] |

### Return type

[**MessageEventsResponse**](MessageEventsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message events retrieved. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **400** | Malformed JSON or invalid request. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

