

import { createUser, loginUser, logoutUser } from "../controllers/userController";

import { Router } from "express";

import cookieParser from "cookie-parser";

 export const userRouter= Router()

userRouter.post("/signup",createUser)

userRouter.post("/login", loginUser)

userRouter.post("/logout",logoutUser)
