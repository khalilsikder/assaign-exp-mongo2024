import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import ProductValidationSchema from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;
    const zodparseData = ProductValidationSchema.parse(productData)
    const result = await ProductServices.createProductBD(zodparseData);
    res.status(200).json({
      success: true,
      message: "product is create successfull",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductBD();
    res.status(200).json({
      success: true,
      message: "all product  are retrieve successfull",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const {productId} = req.params
    const result = await ProductServices.getSingleProductBD(productId);
    res.status(200).json({
      success: true,
      message: "single product  is retrieve successfull",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const {updateId} = req.params
    const result = await ProductServices.updateSingleProductBD(updateId);
    res.status(200).json({
      success: true,
      message: "single product  is update successfull",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const {deleteId} = req.params
    const result = await ProductServices.deleteSingleProductBD(deleteId);
    res.status(200).json({
      success: true,
      message: "single product  is delete successfull",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const ProductControllers = {
  createProduct,getAllProducts,getSingleProduct,updateSingleProduct,deleteSingleProduct
};
