import { IOrder } from "./order.interface";
import { Order } from "./order.model";

const orderCreateIntoDB = async (product: IOrder) => {
  const result = await Order.create(product);
  return result;
};

// get revenue

const getRevenueFromDB = async () =>{
    const result = await Order.aggregate([
      {
        $group: {
          _id: null, // Group all documents
          totalRevenue: { $sum: '$totalPrice' }, // Sum all `totalPrice`
        },
      },
    ]);
    const totalRevenue = result[0]?.totalRevenue || 0 ;
    return totalRevenue
    
}


export const OrderServices = {
    orderCreateIntoDB,
    getRevenueFromDB
}
