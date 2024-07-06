import { AxiosResponse, AxiosResponseHeaders } from "axios";

/**
 * API Error Code Type
 */
export enum APIErrorCode {
  Unauthorized = "unauthorized",
  ServiceUnavailable = "service_unavailable",
  InternalServerError = "internal_server_error",
  RateLimited = "rate_limited",
  InvalidRequestURL = "invalid_request_url",
  InvalidRequest = "invalid_request",
  ValidationError = "validation_error",
}

export enum ClientErrorCode {
  RequestTimeout = "client_request_timeout",
  ResponseError = "client_response_error",
}

export type ClientLibErrorCode = APIErrorCode | ClientErrorCode;

abstract class ClientLibErrorBase<
  Code extends ClientLibErrorCode
> extends Error {
  abstract code: Code;
}

export class RequestTimeoutError extends ClientLibErrorBase<ClientErrorCode.RequestTimeout> {
  readonly code = ClientErrorCode.RequestTimeout;
  readonly name = "RequestTimeoutError";

  constructor(message = "Request to API Server has time out") {
    super(message);
  }

  static rejectAfterTimeout<T>(
    promise: Promise<T>,
    timeoutMS: number
  ): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject(new RequestTimeoutError());
      }, timeoutMS);

      promise
        .then(resolve)
        .catch(reject)
        .then(() => clearTimeout(timeoutId));
    });
  }
}

type HTTPResponseErrorCode = ClientErrorCode.ResponseError | APIErrorCode;

class HTTPResponseError<
  Code extends HTTPResponseErrorCode
> extends ClientLibErrorBase<Code> {
  readonly name: string = "HTTPResponseError";
  readonly code: Code;
  readonly status: number;
  readonly headers: AxiosResponseHeaders;
  readonly body: Record<string, any>;

  constructor(args: {
    code: Code;
    status: number;
    message: string;
    headers: AxiosResponseHeaders;
    body: Record<string, any>;
  }) {
    super(args.message);
    const {code, status, headers, body} = args;
    this.code = code;
    this.status = status;
    this.headers = headers;
    this.body = body;
  }
}

export class UnknownHTTPResponseError extends HTTPResponseError<ClientErrorCode.ResponseError> {
  readonly name = "UnknownHTTPResponseError";

  constructor(args: {
    status: number;
    message: string | undefined;
    headers: AxiosResponseHeaders;
    body: Record<string, any>;
  }) {
    super({
      body: args.body,
      headers: args.headers,
      status: args.status,
      code: ClientErrorCode.ResponseError,
      message:
        args.message ??
        `Request to API failed with status: ${args.status}`,
    });
  }
}


export class APIResponseError extends HTTPResponseError<APIErrorCode> {
  readonly name = "APIResponseError";
}

export function buildRequestError(
  response: AxiosResponse
): APIResponseError | UnknownHTTPResponseError {
  const apiErrorResponseBody = response.data;
  if (apiErrorResponseBody !== undefined) {
    return new APIResponseError({
      code: apiErrorResponseBody.code,
      message: apiErrorResponseBody.message,
      headers: response.headers as AxiosResponseHeaders,
      status: response.status,
      body: apiErrorResponseBody,
    });
  }
  return new UnknownHTTPResponseError({
    message: undefined,
    headers: response.headers as AxiosResponseHeaders,
    status: response.status,
    body: response.data,
  });
}

export function isObject(o: unknown): o is Record<PropertyKey, unknown> {
  return typeof o === "object" && o !== null;
}


