
import jwt from "jsonwebtoken"
import { Response } from "express"

import cookieParser from "cookie-parser"

 export const sendCookie= async (user:any,statusCode:number,res:Response)=>{
    const secretKey = process.env.JWT_SECRET
    if (!secretKey){
        return res.status(500).json({
            success:false,
            msg:"secret key is undefined"
        })
        
    }
    const token =  jwt.sign({name:
        user.name,email:user.email
    },secretKey,{expiresIn:process.env.JWT_EXPIRES})
    return res.status(statusCode).cookie("token",token ,{expires: new Date(Date.now()+ (parseInt(process.env.TOKEN_EXPIRE as string)*24*60*60*1000)),httpOnly:true}).json({success:true,user:user})
 }