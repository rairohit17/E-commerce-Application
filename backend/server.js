import { app } from "./app.js";
import dotenv from "dotenv";
dotenv.config()
import { connectingDb } from "./database.js";



//  handeling uncaught exception
process.on("uncaughtException",(err)=>{
        console.log("Error : "+err.message)
        console.log("shutting down server due to uncaught exception")
        process.exit(1)
} )


connectingDb()
// console.log(yourname)

 const server = app.listen(process.env.PORT,()=>{
    console.log("server is listening to port "+ process.env.PORT)
})

// Unhandeled promise rejection
process.on("unhandledRejection",(err)=>{
    console.log("Error Occured : "+ err.message)
    console.log("Shutting down server due to Unhandeled Promise Rejection");
    server.close(()=>{     // server.close() prevents from accepting new connections and waits for ongoing request to complete once completed process.exit() exits from current node process
        process.exit(1)    // process.exit(1)  is used to it from current node js process when there is an error (0) is passedd when every thing    goes fine
    })
    // process.exit(1)
})
