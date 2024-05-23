import express from 'express'
import { ProductControllers } from './product.controller'

const router = express.Router()

router.post('/create-product',
ProductControllers.createProduct);

router.get('/',
ProductControllers.getAllProducts);

router.get('/:productId',
ProductControllers.getSingleProduct)

router.put('/:updateId',
ProductControllers.updateSingleProduct)

router.delete('/:deleteId',
ProductControllers.deleteSingleProduct)


export const ProductRoutes = router;

