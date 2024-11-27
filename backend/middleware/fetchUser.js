const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "Mytokenisvaalid$dgdg";
const User = require("../models/user/userModel");

const fetchuser = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Authentication token is missing." });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log("Decoded Token:", decoded); // Log to confirm the token payload

    req.user = await User.findById(decoded.id); // Use decoded.id instead of decoded.userId

    if (!req.user) {
      return res.status(404).json({ error: "User not found." });
    }

    req.userId = req.user._id; // Set userId for use in other routes
    next();
  } catch (error) {
    console.log("Error in fetchuser middleware:", error);
    return res.status(401).json({ error: "Invalid authentication token." });
  }
};

module.exports = fetchuser;
