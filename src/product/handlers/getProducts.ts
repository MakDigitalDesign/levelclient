import constructVariablesObject from '../utils/constructVariablesObject';
import { GetProductsResponse, ProductOptions } from '../types';
import { productInfoFragment } from '../fragments';
import Product from '..';

async function getProducts(this: Product, options?: ProductOptions) {
  const variables = options ? constructVariablesObject(options) : null;

  const { data }: GetProductsResponse = await this.instance.post('', {
    query: `
            query Query(
                $skip: Int = 0, 
                $take: Int = 10, 
                $name: Boolean = true,
                $path: Boolean = true,
                $price: Boolean = true,
                $thumbnail: Boolean = true,
                $description: Boolean = true,
                $sku: Boolean = true

            ) {
                allProducts(skip: $skip, take: $take) {
                  edges {
                    node {
                        ...Product
                    }
                  }
                }
              }

              ${productInfoFragment}
              `,
    variables,
  });

  return data.data;
}

export default getProducts;
