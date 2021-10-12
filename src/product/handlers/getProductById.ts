import Product from '..';
import { productInfoFragment } from '../fragments';
import { GetProductByIdResponse, ProductByIdOptions } from '../types';
import constructVariablesObject from '../utils/constructVariablesObject';

async function getProductById(this: Product, options: ProductByIdOptions) {
  const variables = constructVariablesObject(options);

  const { data }: GetProductByIdResponse = await this.instance.post('', {
    query: `
            query Query(
                $Id: Int!,
                $name: Boolean = true,
                $path: Boolean = true,
                $price: Boolean = true,
                $thumbnail: Boolean = true,
                $description: Boolean = true,
                $sku: Boolean = true

            ) {
                productById(id: $Id) {
                    node {
                        ...Product
                    }
                }
              }

              ${productInfoFragment}
              `,
    variables: {
      ...variables,
      Id: options.id,
    },
  });

  return data.data.productById.node;
}

export default getProductById;
