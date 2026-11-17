# WebhooksApi

All URIs are relative to *https://mailermine.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createWebhook**](WebhooksApi.md#createwebhookoperation) | **POST** /webhooks | Create webhook |
| [**deleteWebhook**](WebhooksApi.md#deletewebhook) | **DELETE** /webhooks/{webhook} | Delete webhook |
| [**disableWebhook**](WebhooksApi.md#disablewebhook) | **POST** /webhooks/{webhook}/disable | Disable webhook |
| [**enableWebhook**](WebhooksApi.md#enablewebhook) | **POST** /webhooks/{webhook}/enable | Enable webhook |
| [**getWebhook**](WebhooksApi.md#getwebhook) | **GET** /webhooks/{webhook} | Get webhook |
| [**getWebhookDelivery**](WebhooksApi.md#getwebhookdelivery) | **GET** /webhook-deliveries/{webhookDelivery} | Get webhook delivery |
| [**listWebhookDeliveries**](WebhooksApi.md#listwebhookdeliveries) | **GET** /webhooks/{webhook}/deliveries | List webhook deliveries |
| [**listWebhooks**](WebhooksApi.md#listwebhooks) | **GET** /webhooks | List webhooks |
| [**replayWebhookDeliveries**](WebhooksApi.md#replaywebhookdeliveries) | **POST** /webhooks/{webhook}/replay | Replay webhook deliveries |
| [**replayWebhookDelivery**](WebhooksApi.md#replaywebhookdelivery) | **POST** /webhook-deliveries/{webhookDelivery}/replay | Replay webhook delivery |
| [**rotateWebhookSecret**](WebhooksApi.md#rotatewebhooksecret) | **POST** /webhooks/{webhook}/rotate-secret | Rotate webhook secret |
| [**testWebhook**](WebhooksApi.md#testwebhookoperation) | **POST** /webhooks/{webhook}/test | Test webhook |
| [**updateWebhook**](WebhooksApi.md#updatewebhookoperation) | **PATCH** /webhooks/{webhook} | Update webhook |



## createWebhook

> WebhookSecretResponse createWebhook(createWebhookRequest)

Create webhook

Register a new webhook endpoint. The signing secret is returned only on creation. Required scope: &#x60;webhooks.write&#x60;.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@mailermine/generated';
import type { CreateWebhookOperationRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // CreateWebhookRequest
    createWebhookRequest: ...,
  } satisfies CreateWebhookOperationRequest;

  try {
    const data = await api.createWebhook(body);
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
| **createWebhookRequest** | [CreateWebhookRequest](CreateWebhookRequest.md) |  | |

### Return type

[**WebhookSecretResponse**](WebhookSecretResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Webhook created successfully. Includes the one-time signing secret. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteWebhook

> DeleteResponse deleteWebhook(webhook)

Delete webhook

Permanently delete a webhook endpoint. Required scope: &#x60;webhooks.write&#x60;.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@mailermine/generated';
import type { DeleteWebhookRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook UUID.
    webhook: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteWebhookRequest;

  try {
    const data = await api.deleteWebhook(body);
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
| **webhook** | `string` | Webhook UUID. | [Defaults to `undefined`] |

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
| **200** | Webhook deleted successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## disableWebhook

> WebhookResponse disableWebhook(webhook)

Disable webhook

Deactivate a webhook endpoint without deleting it. Required scope: &#x60;webhooks.write&#x60;.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@mailermine/generated';
import type { DisableWebhookRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook UUID.
    webhook: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DisableWebhookRequest;

  try {
    const data = await api.disableWebhook(body);
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
| **webhook** | `string` | Webhook UUID. | [Defaults to `undefined`] |

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Webhook disabled. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## enableWebhook

> WebhookResponse enableWebhook(webhook)

Enable webhook

Activate a disabled webhook endpoint. Required scope: &#x60;webhooks.write&#x60;.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@mailermine/generated';
import type { EnableWebhookRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook UUID.
    webhook: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies EnableWebhookRequest;

  try {
    const data = await api.enableWebhook(body);
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
| **webhook** | `string` | Webhook UUID. | [Defaults to `undefined`] |

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Webhook enabled. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWebhook

> WebhookResponse getWebhook(webhook)

Get webhook

Retrieve a webhook endpoint by UUID. Required scope: &#x60;webhooks.read&#x60;.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@mailermine/generated';
import type { GetWebhookRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook UUID.
    webhook: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetWebhookRequest;

  try {
    const data = await api.getWebhook(body);
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
| **webhook** | `string` | Webhook UUID. | [Defaults to `undefined`] |

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Webhook retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWebhookDelivery

> WebhookDeliveryResponse getWebhookDelivery(webhookDelivery)

Get webhook delivery

Retrieve a webhook delivery attempt by UUID, including request and response detail. Required scope: &#x60;webhooks.read&#x60;.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@mailermine/generated';
import type { GetWebhookDeliveryRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook delivery UUID.
    webhookDelivery: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetWebhookDeliveryRequest;

  try {
    const data = await api.getWebhookDelivery(body);
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
| **webhookDelivery** | `string` | Webhook delivery UUID. | [Defaults to `undefined`] |

### Return type

[**WebhookDeliveryResponse**](WebhookDeliveryResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Webhook delivery retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listWebhookDeliveries

> WebhookDeliveryListResponse listWebhookDeliveries(webhook, status, eventType, search, httpStatus, from, to, perPage)

List webhook deliveries

List delivery attempts for a webhook with status, event, and date filters. Required scope: &#x60;webhooks.read&#x60;.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@mailermine/generated';
import type { ListWebhookDeliveriesRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook UUID.
    webhook: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Filter by delivery status (`pending`, `delivered`, `failed`). (optional)
    status: failed,
    // string | Filter by event type. (optional)
    eventType: email.delivered,
    // string | Free-text search. (optional)
    search: search_example,
    // number | Filter by returned HTTP status code. (optional)
    httpStatus: 500,
    // string | Filter deliveries on or after this ISO-8601 date. (optional)
    from: 2013-10-20T19:20:30+01:00,
    // string | Filter deliveries on or before this ISO-8601 date. (optional)
    to: 2013-10-20T19:20:30+01:00,
    // number | Items per page (default 25). (optional)
    perPage: 25,
  } satisfies ListWebhookDeliveriesRequest;

  try {
    const data = await api.listWebhookDeliveries(body);
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
| **webhook** | `string` | Webhook UUID. | [Defaults to `undefined`] |
| **status** | `string` | Filter by delivery status (&#x60;pending&#x60;, &#x60;delivered&#x60;, &#x60;failed&#x60;). | [Optional] [Defaults to `undefined`] |
| **eventType** | `string` | Filter by event type. | [Optional] [Defaults to `undefined`] |
| **search** | `string` | Free-text search. | [Optional] [Defaults to `undefined`] |
| **httpStatus** | `number` | Filter by returned HTTP status code. | [Optional] [Defaults to `undefined`] |
| **from** | `string` | Filter deliveries on or after this ISO-8601 date. | [Optional] [Defaults to `undefined`] |
| **to** | `string` | Filter deliveries on or before this ISO-8601 date. | [Optional] [Defaults to `undefined`] |
| **perPage** | `number` | Items per page (default 25). | [Optional] [Defaults to `undefined`] |

### Return type

[**WebhookDeliveryListResponse**](WebhookDeliveryListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Webhook deliveries retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listWebhooks

> WebhookListResponse listWebhooks(search, status, sort, direction, page, perPage)

List webhooks

List registered webhook endpoints with optional search, status filter, and pagination. Required scope: &#x60;webhooks.read&#x60;.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@mailermine/generated';
import type { ListWebhooksRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Free-text search across name and URL. (optional)
    search: production,
    // string | Filter by status (`active` or `inactive`). (optional)
    status: active,
    // string | Sort field. (optional)
    sort: created_at,
    // string | Sort direction. (optional)
    direction: desc,
    // number | Page number (1-based). (optional)
    page: 1,
    // number | Items per page (default 25). (optional)
    perPage: 25,
  } satisfies ListWebhooksRequest;

  try {
    const data = await api.listWebhooks(body);
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
| **search** | `string` | Free-text search across name and URL. | [Optional] [Defaults to `undefined`] |
| **status** | `string` | Filter by status (&#x60;active&#x60; or &#x60;inactive&#x60;). | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | Sort field. | [Optional] [Defaults to `undefined`] |
| **direction** | `string` | Sort direction. | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Page number (1-based). | [Optional] [Defaults to `undefined`] |
| **perPage** | `number` | Items per page (default 25). | [Optional] [Defaults to `undefined`] |

### Return type

[**WebhookListResponse**](WebhookListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Webhooks retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## replayWebhookDeliveries

> WebhookReplayResponse replayWebhookDeliveries(webhook, replayWebhookRequest)

Replay webhook deliveries

Re-queue failed deliveries by date range and event type, or replay specific delivery UUIDs. Required scope: &#x60;webhooks.write&#x60;.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@mailermine/generated';
import type { ReplayWebhookDeliveriesRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook UUID.
    webhook: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // ReplayWebhookRequest (optional)
    replayWebhookRequest: ...,
  } satisfies ReplayWebhookDeliveriesRequest;

  try {
    const data = await api.replayWebhookDeliveries(body);
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
| **webhook** | `string` | Webhook UUID. | [Defaults to `undefined`] |
| **replayWebhookRequest** | [ReplayWebhookRequest](ReplayWebhookRequest.md) |  | [Optional] |

### Return type

[**WebhookReplayResponse**](WebhookReplayResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deliveries queued for replay. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## replayWebhookDelivery

> WebhookDeliveryResponse replayWebhookDelivery(webhookDelivery)

Replay webhook delivery

Re-queue a single webhook delivery attempt. Required scope: &#x60;webhooks.write&#x60;.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@mailermine/generated';
import type { ReplayWebhookDeliveryRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook delivery UUID.
    webhookDelivery: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ReplayWebhookDeliveryRequest;

  try {
    const data = await api.replayWebhookDelivery(body);
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
| **webhookDelivery** | `string` | Webhook delivery UUID. | [Defaults to `undefined`] |

### Return type

[**WebhookDeliveryResponse**](WebhookDeliveryResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Webhook replay queued. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## rotateWebhookSecret

> WebhookSecretResponse rotateWebhookSecret(webhook)

Rotate webhook secret

Generate a new HMAC signing secret. The new secret is returned only once. Required scope: &#x60;webhooks.write&#x60;.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@mailermine/generated';
import type { RotateWebhookSecretRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook UUID.
    webhook: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies RotateWebhookSecretRequest;

  try {
    const data = await api.rotateWebhookSecret(body);
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
| **webhook** | `string` | Webhook UUID. | [Defaults to `undefined`] |

### Return type

[**WebhookSecretResponse**](WebhookSecretResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Signing secret rotated. Includes the one-time signing secret. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## testWebhook

> WebhookDeliveryResponse testWebhook(webhook, testWebhookRequest)

Test webhook

Queue a test event delivery to verify endpoint connectivity and signature handling. Required scope: &#x60;webhooks.write&#x60;.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@mailermine/generated';
import type { TestWebhookOperationRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook UUID.
    webhook: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // TestWebhookRequest (optional)
    testWebhookRequest: ...,
  } satisfies TestWebhookOperationRequest;

  try {
    const data = await api.testWebhook(body);
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
| **webhook** | `string` | Webhook UUID. | [Defaults to `undefined`] |
| **testWebhookRequest** | [TestWebhookRequest](TestWebhookRequest.md) |  | [Optional] |

### Return type

[**WebhookDeliveryResponse**](WebhookDeliveryResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Test webhook queued for delivery. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateWebhook

> WebhookResponse updateWebhook(webhook, updateWebhookRequest)

Update webhook

Update a webhook endpoint. Required scope: &#x60;webhooks.write&#x60;.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@mailermine/generated';
import type { UpdateWebhookOperationRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook UUID.
    webhook: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateWebhookRequest (optional)
    updateWebhookRequest: ...,
  } satisfies UpdateWebhookOperationRequest;

  try {
    const data = await api.updateWebhook(body);
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
| **webhook** | `string` | Webhook UUID. | [Defaults to `undefined`] |
| **updateWebhookRequest** | [UpdateWebhookRequest](UpdateWebhookRequest.md) |  | [Optional] |

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Webhook updated successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

