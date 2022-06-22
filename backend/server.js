const express = require("express");
const app = express();
const products = require("./data/products");

app.get("/", (req, res) => {
  res.send("API is Running");
});
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params._id);
  res.json(product);
});

app.listen(4000, console.log("Server running on port 4000 "));