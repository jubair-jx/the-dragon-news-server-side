const express = require("express");
const app = express();

const port = process.env.PORT || 5000;
const category = require("./data/categories.json");
const cors = require("cors");

app.use(cors());

app.get("/categories", (req, res) => {
  res.send(category);
});

app.get("/", (req, res) => {
  res.send("The Dragon Project is Running");
});

app.listen(port, () => {
  console.log(`This is Dragon Project is Running Here${port}`);
});
