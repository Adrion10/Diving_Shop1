const express = require("express");

const dotenv = require("dotenv");
const colors = require("colors");
const products = require("./data/products");
const connectDB = require("./config/db");
const { productRoutes } = require("./router/productRouter");

dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("API is Running");
});
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 4000;

app.listen(
  PORT,
  console.log(
    `Server running  in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);
