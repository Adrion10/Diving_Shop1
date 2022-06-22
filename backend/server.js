const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("API is Running");
});

app.listen(4000, console.log("Server running on port 4000 "));
