const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5500;
const connectMongo = require("./connect");

connectMongo();

app.use(express.json());
app.use("/", (req, res) => {
  res.send("Testing if works");
});

app.listen(port, () => console.log(`Backend running on port ${port}`));
