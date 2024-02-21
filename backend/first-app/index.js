require("dotenv").config();
import express from "express";
const app = express();
// const port = 3100;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("aech.com");
});

app.get("/login", (req, res) => {
  res.send("<h1> Please login </h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
