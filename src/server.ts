import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
import cors from "cors";

import postRouter from "./routes/post";
import orderRouter from "./routes/order";
import productRouter from "./routes/product";
import userRouter from "./routes/user";
import authRouter from "./auth/auth";

const app = express();
dotenv.config();

// middleware:
app.use(express.json());
app.use(cors());
app.use("/posts", postRouter);
app.use("/order", orderRouter);
app.use("/product", productRouter);
app.use("/user", userRouter);
app.use("/register", authRouter);

app.get("/", (req, res) => {
  res.send("hi");
});

app.get("/", (req, res) => {
  res.send("hello");
});

// connect to DB
mongoose
  .connect(process.env.DB_CONNECTION as string)
  .then(() => {
    console.log("connected");
    app.listen(5000);
  })
  .catch((err) => console.log("error in connection", err));
// listen to the server
