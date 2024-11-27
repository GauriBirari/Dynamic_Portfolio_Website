const mongoose = require("mongoose");

const AboutSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const About = mongoose.model("about", AboutSchema);
module.exports = About;
