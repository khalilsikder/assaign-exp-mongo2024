import { Request, Response } from "express";
import { OrderService } from "./order.service";

const createOrder = async(req:Request,res:Response)=>{
try{
    const {order:orderData}= req.body
const result = OrderService.createNewOrder(orderData)
res.status(200).json({
    success: true,
    message: "product is create successfull",
    data: result,
  });
}catch(error){
console.log(error);
}
}

const getallProductOrder = async (req:Request,res:Response) =>{
try{
const result = OrderService.getAllOrders()
res.status(200).json({
  success: true,
  message: "product is order successfull",
  data: result,
});
}catch(error){
console.log(error);
}
}

export const orderController = {
createOrder,getallProductOrder
}