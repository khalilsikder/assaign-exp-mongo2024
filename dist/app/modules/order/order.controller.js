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
exports.orderController = void 0;
const order_service_1 = require("./order.service");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { order: orderData } = req.body;
        const result = order_service_1.OrderService.createNewOrder(orderData);
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
const getallProductOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = order_service_1.OrderService.getAllOrders();
        res.status(200).json({
            success: true,
            message: "product is order successfull",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.orderController = {
    createOrder, getallProductOrder
};
