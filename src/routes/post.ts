import express from "express";
const router = express.Router();
import PostModel from "../models/post";

// client make request - sent data
router.get("/", (req, res) => {
  res.send("post here");
});

// create data
router.post("/", (req, res) => {
  const post = new PostModel({
    name: req.body.name,
    address: req.body.address,
    date: req.body.date,
    description: req.body.description,
  });
});

export default router;
