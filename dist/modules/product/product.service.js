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
exports.ProductServices = void 0;
const product_model_1 = require("./product.model");
const productCreateIntoDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = (yield product_model_1.Product.create(product)).toObject();
    return result;
});
// Get All Product 
const getAllProductFromDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const query = searchTerm ? {
        $or: [
            { name: searchTerm },
            { brand: searchTerm },
            { type: searchTerm },
        ],
    }
        : {};
    const result = yield product_model_1.Product.find(query);
    return result;
});
// Get Single Product
const getSingleProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findById(id);
    if (result) {
        return result;
    }
    return false;
});
// Update Single Product
const updateProductIntoDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const isProductExist = yield product_model_1.Product.findById(id);
    if (!isProductExist) {
        return false;
    }
    const result = yield product_model_1.Product.findByIdAndUpdate(id, data, { new: true });
    return result;
});
// Delete Singel Product
const deleteProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isProductExist = yield product_model_1.Product.findById(id);
    if (!isProductExist) {
        return false;
    }
    const result = yield product_model_1.Product.findByIdAndDelete(id);
    return result;
});
exports.ProductServices = {
    productCreateIntoDB,
    getAllProductFromDB,
    getSingleProductFromDB,
    updateProductIntoDB,
    deleteProductFromDB
};
