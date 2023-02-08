export const enum IMETHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export interface IRequestOptions {
  method?: IMETHODS.GET | IMETHODS.POST | IMETHODS.DELETE | IMETHODS.PUT;
  headers?: Record<string, string>;
  timeout?: number;
  data?: any;
}
