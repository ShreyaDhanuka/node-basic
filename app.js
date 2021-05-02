// const { sum } = require("./helpers");
// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("hello from node js 2may");
// });

// server.listen(3000);

// const total = sum(10, 210);
// console.log("TOTAL:", total);

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello express");
// });

// app.listen(3000);

const fs = require("fs");
const fileName = "target.txt";

const errHandler = (err) => console.log(err);
const dataHandler = (data) => console.log(data.toString());

fs.readFile(fileName, (err, data) => {
  if (err) errHandler(err);
  dataHandler(data);
});
console.log("node js async programming");
