"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const product_1 = require("./product");
class LevelClient {
    constructor(config) {
        this.initialize = ({ url, headers }) => {
            return axios_1.default.create({
                baseURL: url,
                headers: Object.assign({ Accept: 'application/json', 'Content-Type': 'application/json' }, headers),
                method: 'POST',
            });
        };
        if (!config) {
            throw new Error('Config is missing');
        }
        this.config = config;
        const instance = this.initialize(config);
        this.instance = instance;
        this.product = new product_1.default(instance);
    }
}
exports.default = LevelClient;
