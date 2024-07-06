import * as API from "./endpoint";
import { Endpoint } from "./endpoint";
import { buildRequestError, RequestTimeoutError } from "./error";
import { pick } from "./util";

export interface ClientOptions {
  auth?: string;
  timeoutMs?: number;
  baseUrl: string;
  defaultHeaders?: Record<string, string>;
}

type QueryParams = Record<string, any> | URLSearchParams;

export interface RequestParameters {
  path: string;
  method: string;
  query?: QueryParams;
  body?: Record<string, unknown>;
  headers?: Record<string, string>;
}

abstract class EndpointClient {
  private auth?: string;
  private readonly baseUrl: string;
  private readonly timeoutMs: number;
  private readonly defaultHeaders: Record<string, string>;

  public constructor(options: ClientOptions) {
    this.auth = options?.auth;
    this.baseUrl = options?.baseUrl;
    this.timeoutMs = options?.timeoutMs ?? 60_000;
    this.defaultHeaders = options?.defaultHeaders || {};
  }

  protected endpointBuilder<
    Parameter extends Record<string, any>,
    Response extends Record<string, any>
  >(endpoint: Endpoint<Parameter, Response>) {
    return (args: Parameter): Promise<Response> => {
      const path =
        typeof endpoint.path === "string"
          ? endpoint.path
          : endpoint.path(args);

      return this.request<Response>({
        path,
        method: endpoint.method,
        query: pick(args, endpoint.queryParams || ([] as any)),
        body: pick(args, endpoint.bodyParams || ([] as any)),
        headers: endpoint.headers,
      });
    };
  }

  private authAsHeaders(): Record<string, string> {
    const headers: Record<string, string> = {};
    const authHeaderValue = this.auth;
    if (authHeaderValue !== undefined) {
      headers["Authorization"] = `Bearer ${authHeaderValue}`;
    }
    return headers;
  }

  private async request<ResponseBody>({
                                        path,
                                        method,
                                        query,
                                        body,
                                        headers = {},
                                      }: RequestParameters): Promise<ResponseBody> {
    const url = `${this.baseUrl}${path}`;
    const _headers: Record<string, string> = {
      ...this.authAsHeaders(),
      ...this.defaultHeaders,
      ...headers,
    };
    try {
      if (method == 'POST') {
        const response = await RequestTimeoutError.rejectAfterTimeout(
          fetch(url, {
            method: method.toUpperCase(),
            headers: _headers,
            body: JSON.stringify(body),
          }),
          this.timeoutMs
        );
        return response.json();
      } else {
        const response = await RequestTimeoutError.rejectAfterTimeout(
          fetch(url, {
            headers: _headers,
          }),
          this.timeoutMs
        );
        return response.json();
      }
    } catch (error: any) {
      if (error?.response) {
        throw buildRequestError(error.response);
      }
      throw error;
    }
  }
}

/**
 * - 미리 정의된 API 정보, Request || Response 타입
 */
export class ApiClient extends EndpointClient {

  readonly login = {
    postKakao: this.endpointBuilder(API.Auth.PostAuthKakao),
  }

  readonly home = {
      getRecommendations: this.endpointBuilder(API.Home.GetRecommendations),
  }

  readonly user = {
    get: this.endpointBuilder(API.User.GetUser)
  }
}