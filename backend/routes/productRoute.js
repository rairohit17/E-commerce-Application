import express,{Router} from "express";
import { createProduct, deleteProduct, getAllProduct, getProduct, updateProduct } from "../controllers/productController.js";
 export const router= Router();

 router.get("/products", getAllProduct)

 router.post("/product/create", createProduct)

 router.put("/product/:id",updateProduct)

 router.delete("/product/:id",deleteProduct)

 router.get("/product/:id", getProduct )