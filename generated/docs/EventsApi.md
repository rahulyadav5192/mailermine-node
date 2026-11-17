# EventsApi

All URIs are relative to *https://mailermine.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getEvent**](EventsApi.md#getevent) | **GET** /events/{emailEvent} | Get event |
| [**listEvents**](EventsApi.md#listevents) | **GET** /events | List events |



## getEvent

> EventResponse getEvent(emailEvent)

Get event

Retrieve a single email event by UUID. Required scope: &#x60;events.read&#x60;.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '@mailermine/generated';
import type { GetEventRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EventsApi(config);

  const body = {
    // string | Event UUID.
    emailEvent: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetEventRequest;

  try {
    const data = await api.getEvent(body);
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
| **emailEvent** | `string` | Event UUID. | [Defaults to `undefined`] |

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Event retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **404** | Resource not found. |  -  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listEvents

> EventListResponse listEvents(eventType, source, campaign, message, search, from, to, perPage)

List events

List recipient delivery and engagement events with filters for type, source, campaign, message, and date range. Required scope: &#x60;events.read&#x60;.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '@mailermine/generated';
import type { ListEventsRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EventsApi(config);

  const body = {
    // string | Filter by event type (for example `delivered`, `opened`, `clicked`). (optional)
    eventType: delivered,
    // string | Filter by event source. (optional)
    source: transactional,
    // string | Filter by campaign UUID. (optional)
    campaign: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Filter by message UUID. (optional)
    message: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Free-text search across recipient. (optional)
    search: search_example,
    // string | Filter events on or after this ISO-8601 date. (optional)
    from: 2013-10-20T19:20:30+01:00,
    // string | Filter events on or before this ISO-8601 date. (optional)
    to: 2013-10-20T19:20:30+01:00,
    // number | Items per page (default 25). (optional)
    perPage: 25,
  } satisfies ListEventsRequest;

  try {
    const data = await api.listEvents(body);
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
| **eventType** | `string` | Filter by event type (for example &#x60;delivered&#x60;, &#x60;opened&#x60;, &#x60;clicked&#x60;). | [Optional] [Defaults to `undefined`] |
| **source** | `string` | Filter by event source. | [Optional] [Defaults to `undefined`] |
| **campaign** | `string` | Filter by campaign UUID. | [Optional] [Defaults to `undefined`] |
| **message** | `string` | Filter by message UUID. | [Optional] [Defaults to `undefined`] |
| **search** | `string` | Free-text search across recipient. | [Optional] [Defaults to `undefined`] |
| **from** | `string` | Filter events on or after this ISO-8601 date. | [Optional] [Defaults to `undefined`] |
| **to** | `string` | Filter events on or before this ISO-8601 date. | [Optional] [Defaults to `undefined`] |
| **perPage** | `number` | Items per page (default 25). | [Optional] [Defaults to `undefined`] |

### Return type

[**EventListResponse**](EventListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Events retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

