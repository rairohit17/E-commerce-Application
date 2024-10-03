"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showAllProducts = showAllProducts;
exports.addProduct = addProduct;
exports.deleteProduct = deleteProduct;
const product_models_1 = require("../models/product.models");
const filterProducts_1 = require("../utils/filterProducts");
const handleErr_1 = require("../utils/handleErr");
// SHOW ALL PRODUCTS 
function showAllProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const category = req.query.category ? req.query.category : null;
            const price = req.query.price ? parseInt(req.query.price) : null;
            const products = yield product_models_1.Product.find();
            const filteredProducts = (0, filterProducts_1.filterProducts)(products, category, price);
            res.status(200).json({
                success: true,
                products: filteredProducts
            });
        }
        catch (err) {
            (0, handleErr_1.catchBlock)(res, err);
        }
    });
}
// add a product ---> admin 
function addProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newProduct = new product_models_1.Product(req.body);
            const savedProduct = yield newProduct.save();
            res.status(200).json({
                success: true,
                msg: "product created successfully",
                newProduct
            });
        }
        catch (err) {
            (0, handleErr_1.catchBlock)(res, err);
        }
    });
}
// DELETE A PRODUCT 
function deleteProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const deletedProduct = yield product_models_1.Product.findByIdAndDelete(id);
            console.log("hello");
            if (deletedProduct) {
                res.status(204).end();
            }
            else {
                res.status(404).json({
                    success: false,
                    msg: ` product with id ${id} could not be found`
                });
            }
        }
        catch (err) {
            (0, handleErr_1.catchBlock)(res, err);
        }
    });
}
