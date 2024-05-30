import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import { ProductRoutes } from './app/modules/products/product.route'
import { orderRoutes } from './app/modules/order/order.route'
const app:Application = express()

app.use(express.json())
app.use(cors())


app.use('/api/products',ProductRoutes)
app.use('/api/orders',orderRoutes)

const getAController = (req:Request,res:Response) =>{
res.status(200).json({
    message:"hello world"
})
}

app.get('/',getAController)

export default app;
