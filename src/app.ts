import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import { ProductRoutes } from './app/modules/products/product.route'
const app:Application = express()

app.use(express.json())
app.use(cors())


app.use('/api/products',ProductRoutes)

const getAController = (req:Request,res:Response) =>{
const a = 5;
res.send(a);
}

app.get('/',getAController)

export default app;
