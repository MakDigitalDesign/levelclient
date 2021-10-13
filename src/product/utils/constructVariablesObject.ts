import { ProductOptions } from '../types';

const constructVariablesObject = (options: ProductOptions) => {
  const { skip, take, fields, productIds } = options;

  const showAllFields = !fields;

  return {
    skip,
    take,
    productIds,
    name: (fields && fields.includes('name')) ?? showAllFields,
    path: (fields && fields.includes('path')) ?? showAllFields,
    price: (fields && fields.includes('price')) ?? showAllFields,
    thumbnail: (fields && fields.includes('thumbnail')) ?? showAllFields,
    description: (fields && fields.includes('description')) ?? showAllFields,
    sku: (fields && fields.includes('sku')) ?? showAllFields,
  };
};

export default constructVariablesObject;
