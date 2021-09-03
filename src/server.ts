import express from "express";
import mongoose from "mongoose";
import postRouter from "./routes/post";
import orderRouter from "./routes/order";

import dotenv from "dotenv";

const app = express();
dotenv.config();

// middleware:
app.use(express.json());
app.use("/posts", postRouter);
app.use("/order", orderRouter);

app.get("/", (req, res) => {
  res.send("hi");
});

app.get("/", (req, res) => {
  res.send("hello");
});

// connect to DB
mongoose.connect(process.env.DB_CONNECTION as string, () => {
  console.log("welcome");
});
// listen to the server
app.listen(5000);
