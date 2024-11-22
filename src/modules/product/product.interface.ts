import { Schema, model, connect } from 'mongoose';

export interface IProduct {
    name:string,
    brand:string,
    price:number,
    type:"Mountain" | "Road" | "Hybrid" | "BMX" | "Electric",
    description:string,
    quantity:number,
    inStock:true
}