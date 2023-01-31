const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Provide a username"],
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Provide an email"],
    },
    password: {
      type: String,
      required: [true, "Provide a password"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("Users", userSchema);
module.exports = User;
