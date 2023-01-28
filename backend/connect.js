const mongoose = require("mongoose");
require("dotenv").config();

const connectMongo = async () => {
  try {
    await mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo connected");
  } catch (error) {
    console.log("Mongo fail");
  }
};

module.exports = connectMongo;
