# DomainsApi

All URIs are relative to *http://127.0.0.1:8000/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createDomain**](DomainsApi.md#createdomainoperation) | **POST** /domains | Create domain |
| [**deleteDomain**](DomainsApi.md#deletedomain) | **DELETE** /domains/{domain} | Delete domain |
| [**getDomain**](DomainsApi.md#getdomain) | **GET** /domains/{domain} | Get domain |
| [**listDomains**](DomainsApi.md#listdomains) | **GET** /domains | List domains |
| [**verifyDomain**](DomainsApi.md#verifydomain) | **POST** /domains/{domain}/verify | Verify domain |



## createDomain

> DomainResponse createDomain(createDomainRequest)

Create domain

Create a sending domain and return required DNS records. Required scope: &#x60;domains.write&#x60;.

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from '@mailermine/generated';
import type { CreateDomainOperationRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainsApi(config);

  const body = {
    // CreateDomainRequest
    createDomainRequest: ...,
  } satisfies CreateDomainOperationRequest;

  try {
    const data = await api.createDomain(body);
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
| **createDomainRequest** | [CreateDomainRequest](CreateDomainRequest.md) |  | |

### Return type

[**DomainResponse**](DomainResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Domain created with DNS records. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteDomain

> DeleteResponse deleteDomain(domain)

Delete domain

Delete the provider identity and soft-delete the domain. Blocked while messages are queued or sending. Required scope: &#x60;domains.write&#x60;.

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from '@mailermine/generated';
import type { DeleteDomainRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainsApi(config);

  const body = {
    // string | Domain UUID.
    domain: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteDomainRequest;

  try {
    const data = await api.deleteDomain(body);
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
| **domain** | `string` | Domain UUID. | [Defaults to `undefined`] |

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
| **200** | Domain deleted successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDomain

> DomainResponse getDomain(domain)

Get domain

Retrieve domain details, DNS records, statuses, and DMARC recommendation. Required scope: &#x60;domains.read&#x60;.

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from '@mailermine/generated';
import type { GetDomainRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainsApi(config);

  const body = {
    // string | Domain UUID.
    domain: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetDomainRequest;

  try {
    const data = await api.getDomain(body);
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
| **domain** | `string` | Domain UUID. | [Defaults to `undefined`] |

### Return type

[**DomainResponse**](DomainResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Domain retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listDomains

> DomainListResponse listDomains(search, status, sort, direction, page, perPage)

List domains

List sending domains for the authenticated project. Required scope: &#x60;domains.read&#x60;.

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from '@mailermine/generated';
import type { ListDomainsRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainsApi(config);

  const body = {
    // string | Filter by domain name. (optional)
    search: example.com,
    // string | Filter by verification status. (optional)
    status: verified,
    // string | Sort field. (optional)
    sort: sort_example,
    // string | Sort direction. (optional)
    direction: direction_example,
    // number | Page number (1-based). (optional)
    page: 56,
    // number | Items per page. (optional)
    perPage: 56,
  } satisfies ListDomainsRequest;

  try {
    const data = await api.listDomains(body);
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
| **search** | `string` | Filter by domain name. | [Optional] [Defaults to `undefined`] |
| **status** | `string` | Filter by verification status. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | Sort field. | [Optional] [Defaults to `&#39;created_at&#39;`] |
| **direction** | `string` | Sort direction. | [Optional] [Defaults to `&#39;desc&#39;`] |
| **page** | `number` | Page number (1-based). | [Optional] [Defaults to `1`] |
| **perPage** | `number` | Items per page. | [Optional] [Defaults to `25`] |

### Return type

[**DomainListResponse**](DomainListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Domains retrieved successfully. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## verifyDomain

> DomainResponse verifyDomain(domain)

Verify domain

Check DNS and provider verification state. DNS propagation may remain pending. Required scope: &#x60;domains.write&#x60;.

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from '@mailermine/generated';
import type { VerifyDomainRequest } from '@mailermine/generated';

async function example() {
  console.log("🚀 Testing @mailermine/generated SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainsApi(config);

  const body = {
    // string | Domain UUID.
    domain: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies VerifyDomainRequest;

  try {
    const data = await api.verifyDomain(body);
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
| **domain** | `string` | Domain UUID. | [Defaults to `undefined`] |

### Return type

[**DomainResponse**](DomainResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Verification completed or remains pending. |  * X-RateLimit-Limit - Maximum requests per window. <br>  * X-RateLimit-Remaining - Requests remaining in the current window. <br>  * X-RateLimit-Reset - Unix timestamp when the current window resets. <br>  |
| **422** | Validation failed or plan limit exceeded. |  -  |
| **503** | Transient provider verification failure. |  -  |
| **400** | Malformed JSON or invalid request. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Account suspended, feature denied, or cross-project access blocked. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Request conflicts with current state. |  -  |
| **429** | Rate limit exceeded. Retry after the &#x60;Retry-After&#x60; header value. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

