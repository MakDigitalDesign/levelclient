import { ProductOptions } from '../types';
declare const constructVariablesObject: (options: ProductOptions) => {
    skip: string | number | undefined;
    take: string | number | undefined;
    productIds: number[] | undefined;
    name: boolean;
    path: boolean;
    price: boolean;
    thumbnail: boolean;
    description: boolean;
    sku: boolean;
};
export default constructVariablesObject;
