export interface ProductOptions {
  skip?: string | number;
  take?: number | string;
  fields?: [keyof ProductFields];
}

export interface ProductByIdOptions {
  id: number;
  fields?: [keyof ProductFields];
}

export type ProductFields = {
  name?: string;
  path?: string;
  price?: number;
  thumbnail?: string;
  description?: string;
  sku?: string;
};

export type Product = Required<ProductFields>;

export type Node = {
  node: Product;
};

export interface GetProductsResponse {
  data: {
    data: {
      allProducts: {
        edges: Node[];
      };
    };
  };
}

export interface GetProductByIdResponse {
  data: {
    data: {
      productById: Node;
    };
  };
}
