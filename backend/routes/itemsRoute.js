const express = require("express");
const router = express.Router();

const {
  getAllItems,
  getSingleItem,
} = require("../controllers/itemsController");

//all items
router.get("/", getAllItems);

//single item
router.get("/:id", getSingleItem);

module.exports = router;
