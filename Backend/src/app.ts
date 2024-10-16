import express from "express"
import { Request,Response } from "express";
import cookieParser from "cookie-parser";

import { productRouter } from "./routes/productRoutes";
import { userRouter } from "./routes/userRoutes";
export const app= express();
app.use(express.json())
app.use(cookieParser())
app.use("/api/v1" , productRouter)
app.use("/api/v1/user" , userRouter)


   