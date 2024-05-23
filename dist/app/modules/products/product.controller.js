"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductControllers = void 0;
const product_service_1 = require("./product.service");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { product: productData } = req.body;
        const result = yield product_service_1.ProductServices.createProductBD(productData);
        res.status(200).json({
            success: true,
            message: "product is create successfull",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductServices.getAllProductBD();
        res.status(200).json({
            success: true,
            message: "all product  are retrieve successfull",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.getSingleProductBD(productId);
        res.status(200).json({
            success: true,
            message: "single product  is retrieve successfull",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const updateSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { updateId } = req.params;
        const result = yield product_service_1.ProductServices.updateSingleProductBD(updateId);
        res.status(200).json({
            success: true,
            message: "single product  is update successfull",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const deleteSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { deleteId } = req.params;
        const result = yield product_service_1.ProductServices.deleteSingleProductBD(deleteId);
        res.status(200).json({
            success: true,
            message: "single product  is delete successfull",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.ProductControllers = {
    createProduct, getAllProducts, getSingleProduct, updateSingleProduct, deleteSingleProduct
};
