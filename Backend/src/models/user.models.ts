import mongoose  from "mongoose";
import validator from "validator";

export const userSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:[4 , "name must contain at least 4 characters"],
        maxLength:[30,"name must contain at most 30 characters"]

    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate: [validator.isEmail, "please enter a valid e-mail"]

    },
    password:{
        type:String,
        required:true,
        minLength:[7,"password must be contain at least 7 characters"],
        select:false

    },
    avatar:{
        public_id:{
            type:String,
            
        },
        url:{
            type:String,
            
        }

    },
    role:{
        type:String,
        default:"user"
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date

})

export const User= mongoose.model("User",userSchema)