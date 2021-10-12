import Product from '..';
import { ProductByIdOptions } from '../types';
declare function getProductById(this: Product, options: ProductByIdOptions): Promise<Required<import("../types").ProductFields>>;
export default getProductById;
