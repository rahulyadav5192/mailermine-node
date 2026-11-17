import { MailerMine } from '../../src/index.js';

export interface RecordedRequest {
  method: string;
  url: string;
  path: string;
  headers: Headers;
  body: unknown;
}

export function createMockClient(
  responses: Array<globalThis.Response | Error>,
  options: { maxRetries?: number; maxRetryDelay?: number } = {},
): {
  client: MailerMine;
  history: RecordedRequest[];
} {
  const history: RecordedRequest[] = [];
  const queue = [...responses];

  const fetchApi: typeof fetch = async (input, init) => {
    const request = new Request(input, init);
    const rawBody = init?.body;
    history.push({
      method: request.method,
      url: request.url,
      path: new URL(request.url).pathname,
      headers: request.headers,
      body: parseBody(rawBody),
    });

    const next = queue.shift();
    if (next === undefined) {
      throw new Error('No mocked response remaining for MailerMine request.');
    }
    if (next instanceof Error) {
      throw next;
    }

    return next;
  };

  return {
    client: new MailerMine({
      apiKey: 'test-api-key',
      baseUrl: 'https://api.example.test/api/v1',
      fetchApi,
      // Existing tests assert single-request behaviour; retry tests opt in.
      maxRetries: options.maxRetries ?? 0,
      maxRetryDelay: options.maxRetryDelay ?? 0,
    }),
    history,
  };
}

function parseBody(rawBody: BodyInit | null | undefined): unknown {
  if (rawBody === undefined || rawBody === null || rawBody === '') {
    return null;
  }

  if (typeof FormData !== 'undefined' && rawBody instanceof FormData) {
    return rawBody;
  }

  if (typeof Blob !== 'undefined' && rawBody instanceof Blob) {
    return rawBody;
  }

  const text = String(rawBody);
  if (text === '') {
    return null;
  }

  return JSON.parse(text);
}

export function jsonResponse(
  status: number,
  body: unknown,
  headers: Record<string, string> = {},
): globalThis.Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });
}

export function textResponse(
  status: number,
  body: string,
  headers: Record<string, string> = {},
): globalThis.Response {
  return new Response(body, {
    status,
    headers: {
      'Content-Type': 'text/csv',
      ...headers,
    },
  });
}

export function resourceResponse(data: unknown, message = 'OK') {
  return {
    success: true,
    message,
    data,
  };
}

export function listResponse(data: unknown[], total = data.length) {
  return {
    success: true,
    message: 'OK',
    data,
    meta: {
      current_page: 1,
      per_page: 25,
      total,
      last_page: 1,
    },
  };
}

export function deleteResponse(message = 'Deleted.') {
  return {
    success: true,
    message,
    data: null,
  };
}
