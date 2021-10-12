import { AxiosInstance, AxiosRequestHeaders } from 'axios';
import Product from './product';
interface Config {
    url: string;
    headers?: AxiosRequestHeaders;
}
declare class LevelClient {
    private config;
    protected instance: AxiosInstance;
    product: Product;
    constructor(config: Config);
    private initialize;
}
export default LevelClient;
