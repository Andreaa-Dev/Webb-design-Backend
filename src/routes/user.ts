import express from "express";
const router = express.Router();
import UserModel from "../models/user";
import moment from "moment";

// client make request - sent data
router.get("/", (req, res) => {
  res.send("user here");
});

// create data
router.post("/", async (req, res) => {
  console.log("req", req.body);
  //   const formatDate = moment(req.body.date).format("dd/mm/yyyy");
  //   console.log("format", formatDate);
  const user = new UserModel({
    name: req.body.name,
    DOB: req.body.date,
    email: req.body.email,
    password: req.body.password,
  });
  const savedUser = await user.save();
  res.json(savedUser);
});

export default router;
