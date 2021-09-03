"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var OrderSchema = new mongoose_1.default.Schema({
    userID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
    },
    productID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Product",
    },
    date: Date,
    nameProduct: String,
    quantity: Number,
    price: Number,
});
exports.default = mongoose_1.default.model("Order", OrderSchema);
