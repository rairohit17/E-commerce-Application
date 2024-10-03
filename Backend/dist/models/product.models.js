"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const productsSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "please enter product name"]
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        maxLength: [8, "the product value can not exceed 8 digits"]
    },
    rating: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true,
            }
        }
    ],
    category: {
        type: String,
        required: [true, "please enter product category"]
    },
    stock: {
        type: Number,
        required: true,
        maxLength: [4, "stocks cannot exceed 4 characters"],
        default: 1
    },
    noOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [{
            name: {
                type: String,
                required: true,
            },
            rating: {
                type: String,
                required: true
            },
            comment: {
                type: String,
                required: true,
            }
        }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});
exports.Product = mongoose_1.default.model("Product", productsSchema);
