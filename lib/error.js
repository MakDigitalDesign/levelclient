"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientError = void 0;
class ClientError extends Error {
    constructor({ msg, data, res }) {
        super(msg);
        this.name = 'ClientApiError';
        this.res = res;
        this.data = data;
    }
}
exports.ClientError = ClientError;
