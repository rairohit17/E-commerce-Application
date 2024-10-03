"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectingdb = connectingdb;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function connectingdb() {
    const connectionUrl = process.env.DB_URL;
    if (!connectionUrl) {
        console.log("Connection String Undefined");
        return;
    }
    mongoose_1.default.connect(connectionUrl).then((data) => console.log("connected to mongo db server")).catch((err) => { console.log("error occured while connecting to mongo db server , ERROR :" + err.message); });
}
// connectingdb()
