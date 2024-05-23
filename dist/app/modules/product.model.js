"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: String, required: true },
    variant: { type: Object, required: true },
    inventory: { type: Object, required: true }
});
exports.ProductModel = (0, mongoose_1.model)('Product', productSchema);
