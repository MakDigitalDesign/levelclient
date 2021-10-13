"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constructVariablesObject = (options) => {
    var _a, _b, _c, _d, _e, _f;
    const { skip, take, fields, productIds } = options;
    const showAllFields = !fields;
    return {
        skip,
        take,
        productIds,
        name: (_a = (fields && fields.includes('name'))) !== null && _a !== void 0 ? _a : showAllFields,
        path: (_b = (fields && fields.includes('path'))) !== null && _b !== void 0 ? _b : showAllFields,
        price: (_c = (fields && fields.includes('price'))) !== null && _c !== void 0 ? _c : showAllFields,
        thumbnail: (_d = (fields && fields.includes('thumbnail'))) !== null && _d !== void 0 ? _d : showAllFields,
        description: (_e = (fields && fields.includes('description'))) !== null && _e !== void 0 ? _e : showAllFields,
        sku: (_f = (fields && fields.includes('sku'))) !== null && _f !== void 0 ? _f : showAllFields,
    };
};
exports.default = constructVariablesObject;
