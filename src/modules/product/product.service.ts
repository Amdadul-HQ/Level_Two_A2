import { IProduct } from "./product.interface";
import { Product } from "./product.model";

const productCreateIntoDB = async (product: IProduct)=>{
    const result = await Product.create(product);
    return result;
}

// Get All Product 
const getAllProductFromDB = async (searchTerm : string) => {

    const query = searchTerm ? {
          $or: [
            { name: searchTerm },
            { brand: searchTerm },
            { type: searchTerm },
          ],
        }
      : {};
    const result = await Product.find(query);
    return result;
};

// Get Single Product
const getSingleProductFromDB = async(id:string) =>{
    const result = await Product.findById(id);
    return result;
}

// Update Single Product
const updateProductIntoDB = async(id:string,data:IProduct)=>{

  const isProductExist = await Product.findById(id);
  if (!isProductExist) {
    return false;
  }

  const result = await Product.findByIdAndUpdate(id, data, { new: true });
  return result;
}

// Delete Singel Product
const deleteProductFromDB = async(id:string) =>{
    const result = await Product.findByIdAndDelete(id);
    return result;
}

export const ProductServices = {
    productCreateIntoDB,
    getAllProductFromDB,
    getSingleProductFromDB,
    updateProductIntoDB,
    deleteProductFromDB
}