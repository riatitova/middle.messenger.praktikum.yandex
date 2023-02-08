import { IMETHODS, IRequestOptions } from '../models/model';

function queryStringify(data: any) {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }

  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => {
    return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
  }, '?');
}

export class HTTPTransport {
  get = (url: string, options: IRequestOptions = {}) => {
    if (options?.data) {
      url = url + queryStringify(options.data);
    }
    return this.request(url, { ...options, method: IMETHODS.GET });
  };
  post = (url: string, options = {}) => {
    return this.request(url, { ...options, method: IMETHODS.POST });
  };
  put = (url: string, options = {}) => {
    return this.request(url, { ...options, method: IMETHODS.PUT });
  };
  delete = (url: string, options = {}) => {
    return this.request(url, { ...options, method: IMETHODS.DELETE });
  };
  request = (url: string, options: IRequestOptions) => {
    const { method = IMETHODS.GET, data, headers = {}, timeout = 5000 } = options;
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      if (headers) {
        Object.keys(headers).forEach(key => {
          xhr.setRequestHeader(key, headers[key]);
        });
      }
      xhr.onload = function () {
        resolve(xhr);
      };
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (method === IMETHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
