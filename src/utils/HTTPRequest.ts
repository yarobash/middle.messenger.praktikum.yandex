enum Method {
  Get = 'Get',
  Post = 'Post',
  Put = 'Put',
  Patch = 'Patch',
  Delete = 'Delete'
}

enum Reason {
  Abort = 'Abort',
  Error = 'Network error',
  Timeout = 'Timeout',
}

type Options = {
  method: Method;
  data?: any;
}

export class HTTPRequest {
  protected endpoint: string;

  constructor(apiUrl: string, endpoint: string) {
    this.endpoint = `${apiUrl}${endpoint}`;

  }

  public get<Response>(path = '/', data: unknown): Promise<Response> {
    return this.request<Response>(`${this.endpoint}${path}`, {
      method: Method.Put,
      data,
    });
  }

  public post<Response = void>(path: string, data?: unknown): Promise<Response> {
    return this.request<Response>(`${this.endpoint}${path}`, {
      method: Method.Post,
      data,
    });
  }

  public put<Response = void>(path: string, data: unknown): Promise<Response> {
    return this.request<Response>(`${this.endpoint}${path}`, {
      method: Method.Put,
      data,
    });
  }

  public patch<Response = void>(path: string, data: unknown): Promise<Response> {
    return this.request<Response>(`${this.endpoint}${path}`, {
      method: Method.Patch,
      data,
    });
  }

  public delete<Response>(path: string, data?: unknown): Promise<Response> {
    return this.request<Response>(`${this.endpoint}${path}`, {
      method: Method.Delete,
      data
    });
  }

  private stringifyQuery(data: any) {
    const keys = Object.keys(data);
    return keys.reduce((result, key, index) => {
      return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
    }, '?');
  }

  private request<Response>(url: string, options: Options = {method: Method.Get}): Promise<Response> {
    const { method, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const isGet = method === Method.Get;
      url = isGet && !!data ? `${url}${this.stringifyQuery(data)}` : data; 
      xhr.open(method, url);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status < 400) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.onabort = () => reject({reason: Reason.Abort});
      xhr.onerror = () => reject({reason: Reason.Error});
      xhr.ontimeout = () => reject({reason: Reason.Timeout});

      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.withCredentials = true;
      xhr.responseType = 'json';

      if (method === Method.Get || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  }
}
