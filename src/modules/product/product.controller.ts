import { NextFunction, Request, Response } from 'express';
import { ProductServices } from './product.service';
import { productZodSchema } from './product.validation';

// Create a Product
const createProduct = async (req:Request,res:Response,next:NextFunction) =>{
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
    catch(error :unknown){
        next(error)
    }
}

// Get All Product
const getAllProduct = async (req:Request,res:Response,next:NextFunction) => {
    try{
      const {searchTerm} = req.query;
      const result = await ProductServices.getAllProductFromDB(searchTerm as string);
      res.status(200).json({
        message: 'Bicycles retrieved successfully',
        status: true,
        data: result
      });
    }
    catch(error){
      next(error)
    }
} 

// Get A Specific Product
const getSingleProduct = async(req:Request,res:Response,next:NextFunction) => {
  try{
    const {productId} = req.params;
    const result = await ProductServices.getSingleProductFromDB(productId);
     res.status(200).json({
       message: 'Bicycles retrieved successfully',
       status: true,
       data: result,
     });

  }catch(error){
    next(error)
  }
}

// Update A Specific Product
const updateProduct = async (req:Request,res:Response,next:NextFunction) =>{
  try{
    const {productId} = req.params;
    const updateData = req.body;
    const result = await ProductServices.updateProductIntoDB(productId,updateData);
    res.status(200).json({
      message: 'Bicycle updated successfully',
      status:true,
      data: result
    });
  }
  catch(error){
    next(error)
  }
}

// Delete A Specific Product
const deleteProduct = async (req:Request,res:Response,next:NextFunction) =>{
  try{
    const {productId} = req.params;
    await ProductServices.deleteProductFromDB(productId);
    res.status(200).json({
      message: 'Bicycle deleted successfully',
      status:true,
      data: {}
    });
  }
  catch(error){
    next(error)
  }
}

export const ProductController = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
}