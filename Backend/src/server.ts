import {app }from "./app";
 import dotenv from "dotenv"
 dotenv.config();

 import { connectingdb } from "./database";



 //handeling uncaught exception
 process.on("uncaughtException",(err)=>{
    if ( err instanceof Error){
        console.log("Error Occured : "+ err.message)

     }
     else{ console.log ("Error occured : "+err)}
         console.log("shutting down server due to uncaught exception")
         process.exit(1)
 } )
 
 
 connectingdb()
 // console.log(yourname)
 
  const server = app.listen(process.env.PORT,()=>{
     console.log("server is listening to port "+ process.env.PORT)
 })
 
 // Unhandeled promise rejection
 process.on("unhandledRejection",(err)=>{
     if ( err instanceof Error){
        console.log("Error Occured : "+ err.message)

     }
     else{ console.log ("Error occured : "+err)}
     console.log("Shutting down server due to Unhandeled Promise Rejection");
     server.close(()=>{     // server.close() prevents from accepting new connections and waits for ongoing request to complete once completed process.exit() exits from current node process
         process.exit(1)    // process.exit(1)  is used to it from current node js process when there is an error (0) is passedd when every thing    goes fine
     })
     // process.exit(1)
 })
 