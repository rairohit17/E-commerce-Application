import {Router} from "express"
import { addProduct, deleteProduct, getProduct, showAllProducts, updateProduct } from "../controllers/poductController";
import { isAuthenticated, isAuthorized } from "../middlewares/auth";


 export const productRouter =  Router();

productRouter.get("/products",isAuthenticated,isAuthorized('admin'), showAllProducts)

productRouter.post("/product/add",addProduct)

productRouter.delete("/product/:id", deleteProduct)

productRouter.put("/product/:id",updateProduct)

productRouter.get("/product/:id",getProduct)