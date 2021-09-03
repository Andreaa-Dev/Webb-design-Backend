import express from "express";
const router = express.Router();
import PostSchema from "./models/post";

router.get("/", (req, res) => {
  res.send("post here");
});

export default router;
