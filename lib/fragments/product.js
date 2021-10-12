"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productInfoFragment = void 0;
exports.productInfoFragment = `
    fragment Product on Product{
        name @include(if: $name)
        path @include(if: $path)
        price @include(if: $price)
        thumbnail @include(if: $thumbnail)
        description @include(if: $description)
        sku @include(if: $sku)
        id
    }
`;
