import { NextFunction,Request,Response } from "express"
import jwt, { JwtPayload } from "jsonwebtoken"
import { catchBlock } from "../utils/handleErr"
import { User } from "../models/user.models"

 
 
 
 
 
 
 export const isAuthenticated=async (req:Request,res:Response,next:NextFunction)=>{
    const {token}= req.cookies
    if (!token){
        res.status(401).json({success:false,msg:"sign up to access this feature"})

    }
    const secretKey= process.env.JWT_SECRET
    if (!secretKey){
        res.status(500).json({success:false,msg:"secret key undefined "})
    }
    try{
        const decoded= jwt.verify(token,secretKey as string,)
        console.log(decoded)
        const userEmail = (decoded as JwtPayload).email
        
        const user= await User.findOne({email: userEmail})
        req.user= user

        next();
    }
    catch(err){
        catchBlock(res,err,401)
    }


 }

 // function for checking is authorised as user or admin 

 export  function isAuthorized(roles:string){
    return (req:Request,res:Response,next:NextFunction)=>{
        const user = req.user;
        if (!roles.includes(user.role)){
            res.status(403).json({success:false, msg:`Role ${req.user.role} does not have access to this role `})
            return ;
        }
        next()


    }

 }