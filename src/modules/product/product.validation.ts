import { z } from 'zod';

// Zod Schema for Product
export const productZodSchema = z.object({
  name: z.string(),
  brand: z.string(),
  price: z.number().min(0, 'Price must be a positive number'),
  type: z.enum(['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric']),
  description: z.string(),
  quantity: z.number().min(0),
  inStock: z.boolean(),
});
