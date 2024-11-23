import express, { Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./modules/product/product.route";
import { OrderRouter } from "./modules/order/order.route";

const app = express();

// parser
app.use(express.json());
app.use(cors())

// Product Api
app.use('/api/products', ProductRoutes);

// Order Api
app.use('/api/orders',OrderRouter);

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!');
});


export default app;