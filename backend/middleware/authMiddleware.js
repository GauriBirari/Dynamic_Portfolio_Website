const User = require("../models/user/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authMiddleware = async (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.header("authorization");

  if (!token) {
    return res
      .status(401)
      .json({ success: false, msg: "A token is required for authorization" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded?.id);
    if (!user) {
      return res.status(401).json({
        success: false,
        msg: "Invalid user associated with the token",
      });
    }

    req.user = user;
    console.log(decoded);
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ success: false, msg: "Invalid Token" });
  }

  // const jwttoken = token

  // try {
  //     const isverified = jwt.verify(jwttoken, process.env.JWT_SECRET)
  //     console.log(isverified);

  //     const userData = await User.findOne({ email: isverified.email }).select()
  //     console.log(userData);
  //     next()

  // } catch (error) {
  //     console.log(error);
  //     res.status(401).json({ msg: "Unauthorized. Invalid Token" })
  // }
};

const isAdmin = asyncHandler(async (req, res, next) => {
  const email = req.user;
  const adminUser = await User.findOne({ email });
  if (adminUser.role == "admin") {
    throw new Error("you are not admin");
  } else {
    next();
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    const database = client.db("yourDatabaseName");
    const adminCollection = database.collection("admin");

    const admin = await adminCollection.findOne({
      _id: new ObjectId(data.adminId),
    });

    if (!admin) {
      res.clearCookie("Authorization");
      return res.status(404).json({ error: "Admin Not Found" });
    }

    req.admin = admin;
    req.adminId = data.adminId;
    console.log("Admin details:", req.admin);
    console.log("Admin ID:", req.adminId);

    if (!req.adminId) {
      return res.status(403).json({
        status: "fail",
        message: "Access denied, user is not authenticated",
      });
    }

    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      res.clearCookie("Authorization");
      return res
        .status(419)
        .json({ error: "Session has expired, please login again" });
    }

    console.log("Error with token:", error.message);
    res.clearCookie("Authorization");
    return res.status(419).json({ error: error.message });
  }
});

module.exports = authMiddleware;
