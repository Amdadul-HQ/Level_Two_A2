import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

// Order plcement 
router.post('/',OrderController.createOrder);

// Order Revenue
router.get('/revenue',OrderController.getRevenue)



export const OrderRouter = router