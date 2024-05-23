import { Schema, model } from "mongoose";
import { Product } from "./products/product.interface";

const productSchema = new Schema<Product>({
  name: { type: String, required: true },
  email:{ type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: String, required: true },
  variant: {type:Object,required:true},
  inventory: {type:Object,required:true}
});

export const ProductModel= model<Product>('Product', productSchema);
