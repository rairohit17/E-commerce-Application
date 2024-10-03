import express from "express"
import { Request,Response } from "express";

import { router } from "./routes/productRoutes";
export const app= express();
app.use(express.json())
app.use("/api/v1" , router)

