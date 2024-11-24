"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productZodSchema = void 0;
const zod_1 = require("zod");
// Zod Schema for Product
exports.productZodSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Name is required'),
    brand: zod_1.z.string().min(1, 'Brand is required'),
    price: zod_1.z.number().positive('Price must be positive'),
    type: zod_1.z.enum(['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric']),
    description: zod_1.z.string().min(1, 'Description is required'),
    quantity: zod_1.z.number().int().min(0, 'Quantity must be a non-negative integer'),
    inStock: zod_1.z.boolean(),
});
