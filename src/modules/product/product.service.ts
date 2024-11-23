import { IProduct } from "./product.interface";
import { Product } from "./product.model";

const productCreateIntoDB = async (product: IProduct)=>{
    const result = await Product.create(product);
    return result;
}

const getAllProductFromDB = async (searchTerm : string) => {

    const query = searchTerm
      ? {
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


export const ProductServices = {
    productCreateIntoDB,
    getAllProductFromDB
}