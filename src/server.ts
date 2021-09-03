import express from "express";
import mongoose from "mongoose";
import router from "./routes/post";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use("/posts", router);

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
