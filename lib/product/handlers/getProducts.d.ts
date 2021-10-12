import { ProductOptions } from '../types';
import Product from '..';
declare function getProducts(this: Product, options?: ProductOptions): Promise<{
    allProducts: {
        edges: import("../types").Node[];
    };
}>;
export default getProducts;
