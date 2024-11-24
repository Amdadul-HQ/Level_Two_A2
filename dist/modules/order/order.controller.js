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
exports.OrderController = void 0;
const order_validation_1 = require("./order.validation");
const order_service_1 = require("./order.service");
const product_service_1 = require("../product/product.service");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = req.body;
        const { quantity, product } = order;
        const productData = yield product_service_1.ProductServices.getSingleProductFromDB(product);
        if (!productData) {
            res.send({
                message: 'Product Not Founded',
                status: false,
            });
        }
        else {
            if (productData.quantity < quantity) {
                res.send({
                    message: 'Insufficient Stock',
                    status: false,
                });
            }
            productData.quantity -= quantity;
            if (productData.quantity === 0) {
                productData.inStock = false;
            }
            const totalPrice = productData.price * quantity;
            const zodValidateData = order_validation_1.orderSchema.parse(Object.assign(Object.assign({}, order), { totalPrice }));
            const result = yield order_service_1.OrderServices.orderCreateIntoDB(zodValidateData);
            yield product_service_1.ProductServices.updateProductIntoDB(product, Object.assign({}, productData));
            res.status(201).json({
                message: 'Order created successfully',
                status: true,
                data: result,
            });
        }
    }
    catch (error) {
        res.status(401).send({
            message: 'something went worng',
            success: false,
            data: error,
        });
    }
});
// Get Total Revenue;
const getRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const totalRevenue = yield order_service_1.OrderServices.getRevenueFromDB();
        res.status(200).json({
            message: 'Revenue calculated successfully',
            success: true,
            data: {
                totalRevenue,
            },
        });
    }
    catch (error) {
        res.status(401).send({
            message: 'something went worng',
            success: false,
            data: error
        });
    }
});
exports.OrderController = {
    createOrder,
    getRevenue
};
