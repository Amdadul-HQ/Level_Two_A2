"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
// create a product
router.post('/', product_controller_1.ProductController.createProduct);
// Get All Bicycles
router.get('/', product_controller_1.ProductController.getAllProduct);
// Get A Specific Bicycle
router.get('/:productId', product_controller_1.ProductController.getSingleProduct);
// Update A Specific Bicycle
router.put('/:productId', product_controller_1.ProductController.updateProduct);
// Delete A Bicycle
router.delete('/:productId', product_controller_1.ProductController.deleteProduct);
exports.ProductRoutes = router;
