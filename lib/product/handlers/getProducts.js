"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const constructVariablesObject_1 = require("../utils/constructVariablesObject");
const fragments_1 = require("../fragments");
function getProducts(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const variables = options ? (0, constructVariablesObject_1.default)(options) : null;
        const { data } = yield this.instance.post('', {
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

              ${fragments_1.productInfoFragment}
              `,
            variables,
        });
        return data.data;
    });
}
exports.default = getProducts;
