const express = require("express");
const app = express();

const VERSION = "1.0.0";

app.get("/", (_, res) => {
  res.send(`Hello ${process.env.HOSTNAME || "World"}!`);
});

app.get("/version", (_, res) => {
  res.send(VERSION);
});

app.get("/health", (_, res) => {
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Node App is listening on port 3000!");
});
