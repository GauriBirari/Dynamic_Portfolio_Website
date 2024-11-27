const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    type: {
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

const Skills = mongoose.model("skill", skillSchema);
module.exports = Skills;
