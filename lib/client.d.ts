import { AxiosRequestHeaders } from 'axios';
interface Config {
    url: string;
    headers?: AxiosRequestHeaders;
}
interface ProductOptions {
    skip?: string | number;
    take?: number | string;
    fields?: [keyof ProductFields];
}
interface ProductByIdOperation {
    id: number;
    fields?: [keyof ProductFields];
}
declare type ProductFields = {
    name?: string;
    path?: string;
    price?: number;
    thumbnail?: string;
    description?: string;
    sku?: string;
};
declare type Product = Required<ProductFields>;
declare type Node = {
    node: Product;
};
declare class LevelClient {
    private config;
    private instance;
    constructor(config: Config);
    private initialize;
    private constructVariablesObject;
    getProducts(options: ProductOptions): Promise<{
        allProducts: {
            edges: Node[];
        };
    }>;
    getProductById(options: ProductByIdOperation): Promise<Required<ProductFields>>;
}
export default LevelClient;
