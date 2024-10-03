import {Router} from "express"
import { addProduct, deleteProduct, showAllProducts } from "../controllers/poductController";


 export const router =  Router();

router.get("/products", showAllProducts)

router.post("/product/add",addProduct)

router.delete("/product/:id", deleteProduct)