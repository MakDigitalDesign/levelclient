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
const axios_1 = require("axios");
const product_1 = require("../fragments/product");
class LevelClient {
    constructor(config) {
        this.initialize = ({ url, headers }) => {
            return axios_1.default.create({
                baseURL: url,
                headers: Object.assign({ "Accept": "application/json", 'Content-Type': 'application/json' }, headers),
                method: 'POST'
            });
        };
        if (!config) {
            throw new Error("Config is missing");
        }
        this.config = config;
        this.instance = this.initialize(config);
    }
    constructVariablesObject(options) {
        var _a, _b, _c, _d, _e, _f;
        const { skip, take, fields } = options;
        const showAllFields = !fields;
        return {
            skip,
            take,
            name: (_a = (fields && fields.includes("name"))) !== null && _a !== void 0 ? _a : showAllFields,
            path: (_b = (fields && fields.includes("path"))) !== null && _b !== void 0 ? _b : showAllFields,
            price: (_c = (fields && fields.includes("price"))) !== null && _c !== void 0 ? _c : showAllFields,
            thumbnail: (_d = (fields && fields.includes("thumbnail"))) !== null && _d !== void 0 ? _d : showAllFields,
            description: (_e = (fields && fields.includes("description"))) !== null && _e !== void 0 ? _e : showAllFields,
            sku: (_f = (fields && fields.includes("sku"))) !== null && _f !== void 0 ? _f : showAllFields
        };
    }
    getProducts(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const instance = this.instance;
            const variables = this.constructVariablesObject(options);
            const { data } = yield instance.post("", {
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

              ${product_1.productInfoFragment}
              `,
                variables
            });
            return data.data;
        });
    }
    getProductById(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const instance = this.instance;
            const variables = this.constructVariablesObject(options);
            const { data } = yield instance.post("", {
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

              ${product_1.productInfoFragment}
              `,
                variables: Object.assign(Object.assign({}, variables), { Id: options.id })
            });
            return data.data.productById.node;
        });
    }
}
exports.default = LevelClient;
