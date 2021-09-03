import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  nameProduct: String,
  price: Number,
});

export default mongoose.model("Order", OrderSchema);
