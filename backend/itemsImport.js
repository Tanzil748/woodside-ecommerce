require("dotenv").config();
const seederData = require("./seeder/seeder");
const connectMongo = require("./connect");
const Items = require("./models/items");

connectMongo();

const transferSeedData = async () => {
  try {
    await Items.deleteMany({});
    await Items.insertMany(seederData);
    console.log("Seed data transferred");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

transferSeedData();
