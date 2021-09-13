import express from "express";
import User from "../models/user";
import { registerValidation } from "./validation/registerValidation";

const router = express.Router();
router.post("/register", async (req, res) => {
  // Validate before get user
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // check if user in database
  const emailExist = await User.findOne({
    email: req.body.email,
  });
  if (emailExist) return res.status(400).send("Email already exist");

  // create new user
  const user = new User({
    name: req.body.name,
    DOB: req.body.DOB,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

export default router;
