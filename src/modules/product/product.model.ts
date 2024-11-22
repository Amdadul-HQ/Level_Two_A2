import { Schema } from 'mongoose';
import { IProduct } from './product.interface';

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    type: {
      type: String,
      required: true,
      enum: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0 },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true },
);