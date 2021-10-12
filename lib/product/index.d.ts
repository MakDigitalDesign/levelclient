import { AxiosInstance } from 'axios';
import { getProductByIdOperation, getProductsOperation } from './handlers';
declare class Product {
    getProducts: typeof getProductsOperation;
    getProductById: typeof getProductByIdOperation;
    protected instance: AxiosInstance;
    constructor(instance: AxiosInstance);
}
export default Product;
