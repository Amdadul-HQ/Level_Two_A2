import { NextFunction, Request, Response } from 'express';
import { orderSchema } from './order.validation';
import { OrderServices } from './order.service';
import { Product } from '../product/product.model';
import { IProduct } from '../product/product.interface';

const createOrder = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const order = req.body;
    
    const {quantity,product} = order
    
    const productData : IProduct | null = await Product.findById(product);
    
    if(!productData){
        throw new Error("Product Not Found")
    }
    
    if(productData.quantity < quantity){
        throw new Error("Insufficient Stock")
    }

    productData.quantity -= quantity;
    
    if(productData.quantity === 0){
        productData.inStock = false
    }
    
    const totalPrice = productData.price * quantity;
    
    const zodValidateData = orderSchema.parse({...order,totalPrice});

    const result = await OrderServices.orderCreateIntoDB(zodValidateData);
    await Product.findByIdAndUpdate(product,{...productData})

    res.status(201).json({
      message: "Order created successfully",
      status: true,
      data: result,
    });
  } catch (error: unknown) {
   next(error)
  }
};

// Get Total Revenue;

const getRevenue = async(req:Request,res:Response,next:NextFunction) =>{
    try{
        const totalRevenue = await OrderServices.getRevenueFromDB()
        res.status(200).json({
          message: 'Revenue calculated successfully',
          success: true,
          data: {
            totalRevenue,
          },
        });
    }
    catch(error:unknown){
        next(error)
    }
}



export const OrderController = {
    createOrder,
    getRevenue
}