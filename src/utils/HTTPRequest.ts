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
  method: Method,
  data?: Record<string, any>,
  headers?: Record<string, string>,
}

type ExcludeKey<T extends Record<string, unknown>, P extends keyof T> = {[K in keyof T as K extends P ? never : K] : T[P]};

type DataHeadersOnly = ExcludeKey<Options, 'method'>;

export default class HTTPRequest {
  constructor(
    private base: string
  ) {}

   get(path = '/', data?: Record<string, unknown>): Promise<XMLHttpRequest> {
    return this.request(`${this.base}${path}`, {
      method: Method.Put,
      data,
    });
  }

   post(path: string, data?: Record<string, unknown>): Promise<XMLHttpRequest> {
    return this.request(`${this.base}${path}`, {
      method: Method.Post,
      data,
    });
  }

   put(path: string, data: Record<string, unknown>): Promise<XMLHttpRequest> {
    return this.request(`${this.base}${path}`, {
      method: Method.Put,
      data,
    });
  }

   patch(path: string, data: Record<string, unknown>): Promise<XMLHttpRequest> {
    return this.request(`${this.base}${path}`, {
      method: Method.Patch,
      data,
    });
  }

   delete(path: string, data: DataHeadersOnly = {}): Promise<XMLHttpRequest> {
    return this.request(`${this.base}${path}`, {
      method: Method.Delete,
      data,
    });
  }

  private queryToString(data: Record<string, unknown>): string {
    return Object.entries(data).map(([key, value]) => `${key}=${value ?? ''}`).join('&');
  }

  private request(url: string, options: Options = {method: Method.Get}): Promise<XMLHttpRequest> {
    const { method, headers, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      if (method === Method.Get && data) url = `${url}${this.queryToString(data)}`;

      if (headers) {
        Object.entries(headers).forEach(([key, value]) => xhr.setRequestHeader(key, value));
      }

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

      xhr.withCredentials = true;

      xhr.onabort = () => reject({reason: Reason.Abort});
      xhr.onerror = () => reject({reason: Reason.Error});
      xhr.ontimeout = () => reject({reason: Reason.Timeout});


      xhr.responseType = 'json';

      if (method === Method.Get || !data) {
        xhr.send();
      } else {
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.send(JSON.stringify(data));
      }
    });
  }
}
