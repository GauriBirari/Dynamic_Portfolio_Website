const express = require("express");
const Skills = require("../models/skillModel");

const router = express.Router();

router.post("/addskill", async (req, res) => {
  try {
    const skill = await Skills.create(req.body);
    res.json({ skill });
  } catch (error) {
    console.error(error);
  }
});

router.get("/getallskill", async (req, res) => {
  try {
    const getskills = await Skills.find();
    res.status(200).json(getskills);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
