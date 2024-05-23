import { ProductModel } from "../product.model";
import { Product } from "./product.interface";

const createProductBD = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductBD = async () =>{
  const result = await ProductModel.find();
  return result;
}
const getSingleProductBD = async (id:string) =>{
  const result = await ProductModel.findOne({ id });
  return result;
}
const updateSingleProductBD = async (id:string) =>{
  const result = await ProductModel.updateOne({ id });
  return result;
}
const deleteSingleProductBD = async (id:string) =>{
  const result = await ProductModel.deleteOne({ id });
  return result;
}

export const ProductServices = {
  createProductBD,getAllProductBD,getSingleProductBD,updateSingleProductBD,deleteSingleProductBD
};
