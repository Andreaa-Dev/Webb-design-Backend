import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user";
import { registerValidation } from "./validation";
import user from "../models/user";

const router = express.Router();
router.post("/", async (req, res) => {
  console.log(req.body, "req");
  // Validate before get user
  const result = registerValidation(req.body);
  console.log(result.error?.message, "err");
  if (result.error) return res.status(400).json(result.error?.message);

  // check if user in database
  const emailExist = await User.findOne({
    email: req.body.email,
  });
  if (emailExist) return res.status(400).send("Email already exist");

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // create new user
  const user = new User({
    name: req.body.name,
    DOB: req.body.DOB,
    email: req.body.email,
    password: hashedPassword,
  });

  // create and assign a token
  // as string - tyscript
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET as string);

  try {
    const savedUser = await user.save();
    res.header("auth-token", token).json(savedUser);
  } catch (err) {
    res.status(400).json(err);
  }
});

export default router;
