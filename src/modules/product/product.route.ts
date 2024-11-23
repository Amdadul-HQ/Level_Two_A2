import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

// create a product
router.post('/',ProductController.createProduct);

// Get All Bicycles
router.get('/',ProductController.getAllProduct);

// Get A Specific Bicycle
router.get('/:productId',ProductController.getSingleProduct)

// Update A Specific Bicycle
router.put('/:productId',ProductController.updateProduct)

// Delete A Bicycle
router.delete('/:productId',ProductController.deleteProduct)


export const ProductRoutes = router;