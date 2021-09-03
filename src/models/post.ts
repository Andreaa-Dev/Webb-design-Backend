import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  name: String,
  address: String,
  date: Date,
  description: String,
});

export default mongoose.model("Post", PostSchema);
