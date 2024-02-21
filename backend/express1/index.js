const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("HOME PAGE!");
});

app.get("/about", (req, res) => {
  return res.send("Hey " + req.query.name + " age : " + req.query.age);
});

app.listen(8000, () => console.log("express server started"));

// const myServer = http.createServer(app);
// myServer.listen(8000, () => console.log("server started!!"));
