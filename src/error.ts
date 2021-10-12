import { AxiosResponse } from 'axios';

interface ClientErrorInput {
  msg: string;
  data?: any;
  res: AxiosResponse;
}

export class ClientError extends Error {
  data: any;
  res: AxiosResponse;
  constructor({ msg, data, res }: ClientErrorInput) {
    super(msg);

    this.name = 'ClientApiError';
    this.res = res;
    this.data = data;
  }
}
