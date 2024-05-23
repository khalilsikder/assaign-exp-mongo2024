import { ProductModel } from "../product.model";
import { Product } from "../products/product.interface";

const createNewOrder = async (product: Product) => {
    const result = await ProductModel.create(product);
    return result;
  };

  const getAllOrders = async()=>{
    const result = await ProductModel.find()
    return result;
  }

  export const OrderService = {
    createNewOrder,getAllOrders,
  }