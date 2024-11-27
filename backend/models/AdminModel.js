const mongoose = require("mongoose");
const { objectId } = mongoose.Schema;
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const adminSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    refreshToken: {
      type: String,
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },

  { timestamps: true }
);

adminSchema.pre("save", async function (next) {
  if (!this.isModified("password") && !this.isModified("cpassword")) {
    next();
  }

  const salt = await bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

//login
adminSchema.methods.isPasswordMatched = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

adminSchema.methods.createPasswordResetToken = async function () {
  const resettoken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resettoken)
    .digest("hex");
  this.passwordResetExpires = Date.now() + 30 * 60 * 1000; // 10 minutes
  return resettoken;
};

const Admin = mongoose.model("admin", adminSchema);
try {
  Admin.createIndexes();
} catch (e) {}
module.exports = Admin;
