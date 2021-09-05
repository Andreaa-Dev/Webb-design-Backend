import express from "express";
const router = express.Router();
import OrderModel from "../models/order";

// create data
router.post("/", async (req, res) => {
  const order = new OrderModel({
    userID: req.body.userID,
    productID: req.body.productID,
    date: req.body.date,
    nameProduct: req.body.nameProduct,
    quantity: req.body.number,
    price: req.body.price,
  });
  const savedOrder = await order.save();
  res.json(savedOrder);
});

export default router;
