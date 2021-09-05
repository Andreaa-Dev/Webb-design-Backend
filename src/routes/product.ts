import express from "express";
const router = express.Router();
import ProductModel from "../models/product";

// client make request - sent data
router.get("/", (req, res) => {
  res.send("products here");
});

// create data
router.post("/", async (req, res) => {
  const product = new ProductModel({
    name: req.body.name,
    img: req.body.img,
    description: req.body.description,
    price: req.body.price,
    id: req.body.id,
  });
  const savedProduct = await product.save();
  res.json(savedProduct);
});

export default router;
