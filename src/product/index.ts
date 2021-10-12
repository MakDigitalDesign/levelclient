import { AxiosInstance } from 'axios';
import { getProductByIdOperation, getProductsOperation } from './handlers';

class Product {
  public getProducts = getProductsOperation;
  public getProductById = getProductByIdOperation;
  protected instance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }
}

export default Product;
