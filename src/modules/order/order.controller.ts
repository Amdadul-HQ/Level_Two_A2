import { NextFunction, Request, Response } from 'express';
import { orderSchema } from './order.validation';
import { OrderServices } from './order.service';

const createOrder = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const order = req.body;
    const zodValidateData = orderSchema.parse(order);

    const result = await OrderServices.orderCreateIntoDB(zodValidateData);
    res.status(201).json({
      message: "Order created successfully",
      status: true,
      data: result,
    });
  } catch (error: unknown) {
   next(error)
  }
};

export const OrderController = {
    createOrder
}