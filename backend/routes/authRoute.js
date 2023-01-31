const express = require("express");
const router = express.Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

router.post("/register", async (req, res) => {
  const registeredUser = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.Password_Secret
    ).toString(), //this will encrypt password in db
  });

  try {
    //   save user to mongo and show in json
    const savedUser = await registeredUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(400).json("Incorrect email"); // error check
    const decryptedPass = CryptoJS.AES.decrypt(
      user.password,
      process.env.Password_Secret
    );
    const initialPassword = decryptedPass.toString(CryptoJS.enc.Utf8);
    initialPassword !== req.body.password &&
      res.status(400).json("Incorrect password"); //error check

    //   this destructures password out of mongo
    const { password, ...others } = user._doc; // _doc is where the user input is placed in mongo file

    // if both error checks pass, the user json will show
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
