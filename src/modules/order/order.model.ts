import { model, Schema } from "mongoose";
import { IOrder } from "./order.interface";

const orderSchema = new Schema<IOrder>(
  {
    email: { type: String, required: true },
    product: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true })


export const Order = model<IOrder>('Order',orderSchema)