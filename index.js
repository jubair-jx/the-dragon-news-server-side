const express = require("express");
const app = express();

const port = process.env.PORT || 5000;
const category = require("./data/categories.json");
const cors = require("cors");
const news = require("./data/news.json");
app.use(cors());

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/categories", (req, res) => {
  res.send(category);
});

app.get("/", (req, res) => {
  res.send("The Dragon Project is Running");
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedId = news.find((news) => news._id === id);
  res.send(selectedId);
});

app.get("/categories/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id === 0) {
    res.send(news);
  } else {
    const categoryNews = news.filter(
      (news) => parseInt(news.category_id) === id
    );
    res.send(categoryNews);
  }
});

app.listen(port, () => {
  console.log(`This is Dragon Project is Running Here${port}`);
});
