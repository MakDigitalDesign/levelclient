import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios';
import Product from './product';

interface Config {
  url: string;
  headers?: AxiosRequestHeaders;
}

class LevelClient {
  private config: Config;
  protected instance: AxiosInstance;
  public product: Product;

  constructor(config: Config) {
    if (!config) {
      throw new Error('Config is missing');
    }

    this.config = config;
    const instance = this.initialize(config);
    this.instance = instance;
    this.product = new Product(instance);
  }

  private initialize = ({ url, headers }: Config) => {
    return axios.create({
      baseURL: url,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers,
      },
      method: 'POST',
    });
  };
}

export default LevelClient;
