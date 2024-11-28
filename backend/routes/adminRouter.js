const express = require("express");
const router = express.Router();
const Admin = require("../models/AdminModel");
const { body, validationResult } = require("express-validator");
const randomstring = require("randomstring");
const { generateRefreshToken } = require("../config/refreshToken");
const generateToken = require("../config/jwtToken");

const emailValidator = (email) => {
  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

router.post("/register", async (req, res) => {
  const { fullname, mobile, email, password } = req.body;

  if (!fullname || !mobile || !email || !password) {
    return res.status(400).send("Please fill out all the required fields.");
  }

  if (!emailValidator(email)) {
    return res.status(400).send("Please provide a valid email address.");
  }

  try {
    if (await Admin.findOne({ mobile })) {
      return res.status(400).send(`mobile ${mobile} already exists.`);
    } else if (await Admin.findOne({ email })) {
      return res.status(400).send(`Email ${email} is already in use.`);
    }

    const NewAdmin = new Admin({
      fullname,
      mobile,
      email,
      password,
    });

    const finalAdmin = await NewAdmin.save();
    res.status(201).send({ msg: "Admin registered", finalAdmin });

    console.log(`Admin has registered. Email: ${email}`);
    console.log(`Admin password - ${password}`);
  } catch (error) {
    throw new Error(error);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const newAdmin = await Admin.findOne({ email });
  if (newAdmin && (await newAdmin.isPasswordMatched(password))) {
    const refreshToken = await generateRefreshToken(newAdmin?.id);
    const updateadmin = await Admin.findByIdAndUpdate(
      newAdmin.id,
      {
        refreshToken: refreshToken,
      },
      { new: true }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.json({
      _id: newAdmin?._id,
      email: newAdmin?.email,
      password: newAdmin?.password,
      token: generateToken(newAdmin?._id),
    });
  } else {
    throw new Error("Invalid Credentials");
  }
});

router.get("/getalladmins", async (req, res) => {
  try {
    const getAllAdmin = await Admin.find();
    if (getAllAdmin.length === 0) {
      throw new Error("Admins Not Found");
    }
    res.status(201).send(getAllAdmin);
  } catch (error) {
    throw new Error(error);
  }
});

router.get("/getprofile", async (req, res) => {
  try {
    const AdminId = req.Admin.id;
    const Admin = await Admin.findById(AdminId).select("-password");

    if (!Admin) {
      return res.status(404).send("Admin not found");
    }

    res.send(Admin);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
