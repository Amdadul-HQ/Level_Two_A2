import { NextFunction, Request, Response } from 'express';
import { ProductServices } from './product.service';
import { productZodSchema } from './product.validation';


const createProduct = async (req:Request,res:Response) =>{
    try{
      const product = req.body;
      const zodValidateData = productZodSchema.parse(product);
      
      const result = await ProductServices.productCreateIntoDB(zodValidateData);
      res.status(201).json({
          message: 'Bicycle created successfully',
          success: true,
          data:result
      });
    }
    catch(error :any){
        res.status(500).json({
          success: false,
          message: 'Something want worng',
          data: error,
        });
    }
}

const getAllProduct = async (req:Request,res:Response,next:NextFunction) => {
    try{
      const {searchTerm} = req.query;
      const result = await ProductServices.getAllProductFromDB(searchTerm as string);
      res.status(200).json({
        message: 'Bicycles retrieved successfully',
        status: true,
      });

    }
    catch(error){
      next(error)
    }
} 

export const ProductController = {
    createProduct
}