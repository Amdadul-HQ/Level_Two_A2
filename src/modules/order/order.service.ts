import { IOrder } from "./order.interface";
import { Order } from "./order.model";

const orderCreateIntoDB = async (product: IOrder) => {
  const result = await Order.create(product);
  return result;
};


export const OrderServices = {
    orderCreateIntoDB
}
