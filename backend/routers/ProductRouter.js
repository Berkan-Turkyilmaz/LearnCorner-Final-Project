import express from 'express';
import { createProduct, getProducts, getProductsByCategory } from '../controllers/ProductController.js';


const productRouter = express.Router();


productRouter.get("/:category", getProductsByCategory);

productRouter.get("/", getProducts)
productRouter.post("/", createProduct);



export default productRouter;
