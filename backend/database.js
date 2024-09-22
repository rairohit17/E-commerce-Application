import mongoose from "mongoose";

 export function connectingDb(){
    mongoose.connect(process.env.DB_URL
    ).then((res)=> console.log("connected to mongo db server"))
    // console.log("connectee to mongo db server")
}