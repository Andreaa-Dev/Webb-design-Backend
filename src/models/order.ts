import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },

  date: Date,
  nameProduct: String,
  quantity: Number,
  price: Number,
});

export default mongoose.model("Order", OrderSchema);
