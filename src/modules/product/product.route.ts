import express, { NextFunction, Request, Response } from "express";
import { ProductController } from "./product.controller";
import { Product } from "./product.model";

const router = express.Router();

router.post('/',ProductController.createProduct);

// Get All Bicycles
router.get("/", );


export const ProductRoutes = router;