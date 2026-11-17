# EmailsApi

All URIs are relative to *https://mailermine.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**sendEmail**](EmailsApi.md#sendemailoperation) | **POST** /emails | Send email |



## sendEmail

> SendEmailResponse sendEmail(sendEmailRequest, idempotencyKey)

Send email

Queue a transactional email for delivery. Supports attachments, CC/BCC, reply-to, headers, tags, and metadata.

### Example

```ts
import {
  Configuration,
  EmailsApi,
} from '@mailermine/generated';
import type { SendEmailOperationRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmailsApi(config);

  const body = {
    // SendEmailRequest
    sendEmailRequest: ...,
    // string | Optional unique key (max 255 chars). Retrying with the same key and body returns the original response instead of sending again; the same key with a different body returns 422. Keys are kept for 24 hours. (optional)
    idempotencyKey: order-1042-receipt,
  } satisfies SendEmailOperationRequest;

  try {
    const data = await api.sendEmail(body);
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
| **sendEmailRequest** | [SendEmailRequest](SendEmailRequest.md) |  | |
| **idempotencyKey** | `string` | Optional unique key (max 255 chars). Retrying with the same key and body returns the original response instead of sending again; the same key with a different body returns 422. Keys are kept for 24 hours. | [Optional] [Defaults to `undefined`] |

### Return type

[**SendEmailResponse**](SendEmailResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Message accepted and queued. |  * Idempotent-Replayed - Present and &#x60;true&#x60; when the response was replayed for a repeated Idempotency-Key. <br>  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |
| **404** | Resource not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

