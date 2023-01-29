const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5500;
const cors = require("cors");
const connectMongo = require("./connect");
const itemsRoute = require("./routes/itemsRoute");

connectMongo();

app.use(cors());
app.use(express.json());

app.use("/api/v1/items", itemsRoute);

app.listen(port, () => console.log(`Backend running on port ${port}`));
