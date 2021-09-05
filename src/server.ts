import express from "express";
import mongoose from "mongoose";
import postRouter from "./routes/post";
import orderRouter from "./routes/order";
import productRouter from "./routes/product";
import userRouter from "./routes/user";
import cors from "cors";

import dotenv from "dotenv";

const app = express();
dotenv.config();

// middleware:
app.use(express.json());
app.use(cors());
app.use("/posts", postRouter);
app.use("/order", orderRouter);
app.use("/product", productRouter);
app.use("/user", userRouter);

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
