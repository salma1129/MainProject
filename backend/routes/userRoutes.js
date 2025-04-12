const express = require("express");
const User = require("../models/User");
const router = express.Router();
const UserVerification = require("../models/UserVerification");
//email handler
const nodemailer = require("nodemailer");

//unique string
const {v4: uuidv4} = require("uuid");

//env variables
require("dotenv").config();

// nodemailer stuff
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
}); 
//Password handler
const bcrypt =require("bcryptjs");

//testing success
transporter.verify((error,success) => {
  if (error) {
    console.log(error);
  }else{
    console.log("Ready for message");
    console.log(success);
  }
})
//  Get All Users (READ)
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// send verfication email
const sendVerificationEmail =({_id,email},res)=>{
  //url to be used in the email
  const currentUrl ="http://localhost:5000/";

  const uniqueString = uuidv4() + _id;

  const mailOptions = {
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: "Verify Your Email",
    html: '<p>Verify your email address to complete the signup and login into your account.</p><p>This link <b>expires in 6 hours</b>.</p><p>Press <a href=${currentUrl + "user/verify/" + _id + "/" + uniqueString}>here</a> to proceed.</p>',
  }
}
//  Create New User (CREATE)
router.post("/create", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate name (only alphabetic characters)
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
      return res.status(400).json({ message: "Name must contain only alphabetic characters" });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    user = new User({ name, email, password: hashedPassword ,verified:false});
    await user.save();

    /*res.status(201).json({ message: "User created successfully", user });*/
    //handle account verification
    sendVerificationEmail(result,res);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//  Update User (UPDATE)
router.put("/:id", async (req, res) => {
  try {
    const { name, email } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, email },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//  Delete User (DELETE)
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
