"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var order_1 = __importDefault(require("../models/order"));
// create data
router.post("/", function (req, res) {
    var order = new order_1.default({
        userID: req.body.userID,
        productID: req.body.productID,
        date: req.body.date,
        nameProduct: req.body.nameProduct,
        quantity: req.body.number,
        price: req.body.price,
    });
});
exports.default = router;
