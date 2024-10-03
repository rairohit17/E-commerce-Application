"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const poductController_1 = require("../controllers/poductController");
exports.router = (0, express_1.Router)();
exports.router.get("/products", poductController_1.showAllProducts);
exports.router.post("/product/add", poductController_1.addProduct);
exports.router.delete("/product/:id", poductController_1.deleteProduct);
