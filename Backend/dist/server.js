"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const database_1 = require("./database");
//handeling uncaught exception
process.on("uncaughtException", (err) => {
    if (err instanceof Error) {
        console.log("Error Occured : " + err.message);
    }
    else {
        console.log("Error occured : " + err);
    }
    console.log("shutting down server due to uncaught exception");
    process.exit(1);
});
(0, database_1.connectingdb)();
// console.log(yourname)
const server = app_1.app.listen(process.env.PORT, () => {
    console.log("server is listening to port " + process.env.PORT);
});
// Unhandeled promise rejection
process.on("unhandledRejection", (err) => {
    if (err instanceof Error) {
        console.log("Error Occured : " + err.message);
    }
    else {
        console.log("Error occured : " + err);
    }
    console.log("Shutting down server due to Unhandeled Promise Rejection");
    server.close(() => {
        process.exit(1); // process.exit(1)  is used to it from current node js process when there is an error (0) is passedd when every thing    goes fine
    });
    // process.exit(1)
});
