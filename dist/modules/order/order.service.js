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
exports.OrderServices = void 0;
const order_model_1 = require("./order.model");
const orderCreateIntoDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.create(product);
    return result;
});
// get revenue
const getRevenueFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const result = yield order_model_1.Order.aggregate([
        {
            $group: {
                _id: null, // Group all documents
                totalRevenue: { $sum: '$totalPrice' }, // Sum all `totalPrice`
            },
        },
    ]);
    const totalRevenue = ((_a = result[0]) === null || _a === void 0 ? void 0 : _a.totalRevenue) || 0;
    return totalRevenue;
});
exports.OrderServices = {
    orderCreateIntoDB,
    getRevenueFromDB
};
