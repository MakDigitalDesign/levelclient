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
const fragments_1 = require("../fragments");
const constructVariablesObject_1 = require("../utils/constructVariablesObject");
function getProductById(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const variables = (0, constructVariablesObject_1.default)(options);
        const { data } = yield this.instance.post('', {
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

              ${fragments_1.productInfoFragment}
              `,
            variables: Object.assign(Object.assign({}, variables), { Id: options.id }),
        });
        return data.data.productById.node;
    });
}
exports.default = getProductById;
