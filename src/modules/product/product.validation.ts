import { z } from 'zod';

// Zod Schema for Product
export const productZodSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  brand: z.string().min(1, 'Brand is required'),
  price: z.number().positive('Price must be positive'),
  type: z.enum(['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric']),
  description: z.string().min(1, 'Description is required'),
  quantity: z.number().int().min(0, 'Quantity must be a non-negative integer'),
  inStock: z.boolean(),
});
