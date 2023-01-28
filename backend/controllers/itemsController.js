// connect the model to the controller
const Items = require("../models/Items");

const getAllItems = async (req, res) => {
  try {
    const items = await Items.find({});
    res.json(items);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};
const getSingleItem = async (req, res) => {
  try {
    const item = await Items.findById(req.params.id);
    res.json(item);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};

module.exports = { getAllItems, getSingleItem };

// now we import this logic to the router file
