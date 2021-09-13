import express from "express";
const router = express.Router();
import UserModel from "../models/user";

// client make request - sent data
router.get("/", (req, res) => {
  res.send("user here");
});

export default router;
