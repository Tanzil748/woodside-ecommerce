const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5500;

app.use(express.json());

app.listen(port, () => console.log(`Backend running on port ${port}`));
