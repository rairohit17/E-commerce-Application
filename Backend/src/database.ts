import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()



export function connectingdb(){
    const connectionUrl = process.env.DB_URL
   if ( ! connectionUrl){
    console.log("Connection String Undefined")
    return }
   mongoose.connect(connectionUrl).then((data)=>console.log("connected to mongo db server")).catch((err)=>{console.log("error occured while connecting to mongo db server , ERROR :" + err.message)})
}
// connectingdb()