import { NextFunction, Request,Response } from "express";
import { User } from "../models/user.models";

import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import { catchBlock } from "../utils/handleErr";
import { sendCookie } from "../utils/sendToken";




// CREATE USER 

export async function createUser(req:Request,res:Response){
    const userDetails=req.body;
    const secretKey  = process.env.JWT_SECRET
    
    try{
        
        const userHashedPass= await bcrypt.hash(userDetails.password,10)
        userDetails.password= userHashedPass;
        
        const newUSer= new User(userDetails);
        const savedUser= await newUSer.save();
         
       await  sendCookie(savedUser,201,res)
        return ;
    }catch(err){
        catchBlock(res,err,500)

    }

}

//login user 
export async function loginUser(req:Request, res:Response){
    const {email,password}= req.body;
    if (!email || !password){
        res.status(400).send("please enter e-mail & password")
        return 
    }
    const user= await User.findOne({email:email}).select("+password")
   
    try{
         if (!user){
            res.status(404).json({
                success:false,
                msg:"user cannot be found"
            })
            return ;
         }
         if(!user.password){
            console.log(user)
            res.status(500).json({success:false,msg:"internal server error , user password cannot be found"})
            return ;
         }
         
         const comparison=  await bcrypt.compare(password,user.password );
         if (!comparison){
            res.status(401).json({
                success:false,
                msg:"invalid credentials"
            })
         }
         else{
            
             await sendCookie(user,200,res)
           return;
         }
    }
    catch(err){
        catchBlock(res,err,500)
    }
}


// logout user 

 export async function logoutUser(req:Request,res:Response,next:NextFunction){
    
   try{
    res.cookie("token",null,{httpOnly:true,expires:new Date(Date.now())})

    res.status(200).json({success:true,msg:"logged out successfully"})
   }
   catch(err){
    catchBlock(res,err,500)
   }
 }
