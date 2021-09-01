import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use("/posts", () => {
  console.log("middleware here");
});

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
