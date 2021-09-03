import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: String,
  img: String,
  description: String,
  price: Number,
  id: Number,
});

export default mongoose.model("Product", ProductSchema);
