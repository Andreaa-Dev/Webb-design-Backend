import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  name: String,
  address: String,
  date: Date.now,
  description: {
    type: String,
  },
});

export default mongoose.model("Post", PostSchema);
