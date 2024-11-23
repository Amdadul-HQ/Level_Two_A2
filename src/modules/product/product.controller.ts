import { Request, Response } from 'express';
import { ProductServices } from './product.service';
import { productZodSchema } from './product.validation';

// Create a Product
const createProduct = async (req:Request,res:Response,) =>{
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
      res.send({
        message: 'Something went wrong',
        success: false,
        error,
      });
    }
}

// Get All Product
const getAllProduct = async (req:Request,res:Response) => {
    try{
      const {searchTerm} = req.query;
      const result = await ProductServices.getAllProductFromDB(searchTerm as string);
      res.status(200).json({
        message: 'Bicycles retrieved successfully',
        status: true,
        data: result
      });
    }
    catch(error:unknown){
      res.send({
        message: 'Something went wrong',
        success: false,
        error,
      });
    }
} 

// Get A Specific Product
const getSingleProduct = async(req:Request,res:Response) => {
  try{
    const {productId} = req.params;
    const result = await ProductServices.getSingleProductFromDB(productId);
     res.status(200).json({
       message: 'Bicycles retrieved successfully',
       status: true,
       data: result,
     });

  }catch(error){
    res.send({
      message: 'Something went wrong',
      success: false,
      error,
    });
  }
}

// Update A Specific Product
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;

    const result = await ProductServices.updateProductIntoDB(
      productId,
      updateData,);

    if (!result) {
        res.status(404).send({
        message: 'Bicycle not founded',
        status: false,
      });
    }
    else{
      res.status(200).json({
        message: 'Bicycle updated successfully',
        status: true,
        data: result,
      });
    }
  } catch (error) {
    res.status(404).send({
      message:'Something went wrong',
      sussess:false,
      error
    })
  }
};

// Delete A Specific Product
const deleteProduct = async (req:Request,res:Response) =>{
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
    res.send({
      message: 'Something went wrong',
      success: false,
      error,
    });
  }
}

export const ProductController = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
}