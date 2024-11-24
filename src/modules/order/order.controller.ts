import { Request, Response } from 'express';
import { orderSchema } from './order.validation';
import { OrderServices } from './order.service';
import { Product } from '../product/product.model';
import { IProduct } from '../product/product.interface';
import { ProductServices } from '../product/product.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    
    const {quantity,product} = order
    
    const productData : IProduct | null = await Product.findById(product);
    
    if(!productData){
      return res.send({
        message: 'Product Not Founded',
        status: false,
      });
    }
    
    if(productData.quantity < quantity){
      return res.send({
        message: 'Insufficient Stock',
        status: false,
      });
    }

    productData.quantity -= quantity;
    
    if(productData.quantity === 0){
        productData.inStock = false
    }
    
    const totalPrice = productData.price * quantity;
    
    const zodValidateData = orderSchema.parse({...order,totalPrice});

    const result = await OrderServices.orderCreateIntoDB(zodValidateData);

    await ProductServices.updateProductIntoDB(product,{...productData})
    // await Product.findByIdAndUpdate(product,{...productData})

    res.status(201).json({
      message: "Order created successfully",
      status: true,
      data: result,
    });
  } catch (error: unknown) {
   res.status(401).send({
     message: 'something went worng',
     success: false,
     data: error,
   });
  }
};

// Get Total Revenue;

const getRevenue = async(req:Request,res:Response) =>{
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
        res.status(401).send({
          message:'something went worng',
          success :false,
          data:error
        })
    }
}



export const OrderController = {
    createOrder,
    getRevenue
}