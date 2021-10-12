"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handlers_1 = require("./handlers");
class Product {
    constructor(instance) {
        this.getProducts = handlers_1.getProductsOperation;
        this.getProductById = handlers_1.getProductByIdOperation;
        this.instance = instance;
    }
}
exports.default = Product;
