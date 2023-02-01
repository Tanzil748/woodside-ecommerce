const express = require("express");
const router = express.Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// when user registers account, their data is saved to db & password is encrypted
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

// when user log in, db searches for email. if approved, password is decrypted and then user is given access token
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

    // jwt user access token
    const accessToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_Secret,
      { expiresIn: "1d" }
    );

    //   this destructures password out of mongo
    const { password, ...others } = user._doc; // _doc is where the user input is placed in mongo file

    // if both error checks pass, the user json will show
    res.status(200).json({ ...others, accessToken }); //merge others with accessToken under same object
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
