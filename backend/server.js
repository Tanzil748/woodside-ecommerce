const express = require("express");
const app = express();
const port = process.env.PORT || 5500;

// dependencies
require("dotenv").config();
const cors = require("cors");
const connectMongo = require("./connect");

// connect routes to server
const itemsRoute = require("./routes/itemsRoute");
const authRoute = require("./routes/authRoute");

// connect DB
connectMongo();

// middleware
app.use(cors());
app.use(express.json());

// my api routes
app.use("/api/v1/items", itemsRoute);
app.use("/api/v1/auth", authRoute);

app.listen(port, () => console.log(`Backend running on port ${port}`));
