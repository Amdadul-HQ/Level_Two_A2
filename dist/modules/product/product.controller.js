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
exports.ProductController = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = require("./product.validation");
// Create a Product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        const zodValidateData = product_validation_1.productZodSchema.parse(product);
        const result = yield product_service_1.ProductServices.productCreateIntoDB(zodValidateData);
        res.status(201).json({
            message: 'Bicycle created successfully',
            success: true,
            data: result
        });
    }
    catch (error) {
        res.send({
            message: 'Something went wrong',
            success: false,
            error,
        });
    }
});
// Get All Product
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        const result = yield product_service_1.ProductServices.getAllProductFromDB(searchTerm);
        res.status(200).json({
            message: 'Bicycles retrieved successfully',
            status: true,
            data: result
        });
    }
    catch (error) {
        res.send({
            message: 'Something went wrong',
            success: false,
            error,
        });
    }
});
// Get A Specific Product
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.getSingleProductFromDB(productId);
        if (!result) {
            res.send({
                message: "Bicycle Not Founded",
                status: false,
            });
        }
        res.status(200).json({
            message: 'Bicycles retrieved successfully',
            status: true,
            data: result,
        });
    }
    catch (error) {
        res.send({
            message: 'Something went wrong',
            success: false,
            error,
        });
    }
});
// Update A Specific Product
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updateData = req.body;
        const result = yield product_service_1.ProductServices.updateProductIntoDB(productId, updateData);
        if (!result) {
            res.status(404).send({
                message: 'Bicycle not founded',
                status: false,
            });
        }
        else {
            res.status(200).json({
                message: 'Bicycle updated successfully',
                status: true,
                data: result,
            });
        }
    }
    catch (error) {
        res.status(404).send({
            message: 'Something went wrong',
            sussess: false,
            error
        });
    }
});
// Delete A Specific Product
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.deleteProductFromDB(productId);
        if (!result) {
            res.status(404).send({
                message: 'Bicycle not founded',
                status: false,
            });
        }
        res.status(200).json({
            message: 'Bicycle deleted successfully',
            status: true,
            data: {}
        });
    }
    catch (error) {
        res.send({
            message: 'Something went wrong',
            success: false,
            error,
        });
    }
});
exports.ProductController = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
};
