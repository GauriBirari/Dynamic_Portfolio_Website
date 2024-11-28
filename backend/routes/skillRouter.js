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

router.put("/updateskill/:id", async (req, res) => {
  const { id } = req.params;
  const { title, level, type } = req.body;

  try {
    const skillToUpdate = await Skills.findByIdAndUpdate(id, req.body);
    if (!skillToUpdate) {
      return res.status(404).json({ message: "data not found" });
    }

    skillToUpdate.title = title;
    skillToUpdate.level = level;
    skillToUpdate.type = type;

    const updatedskill = await skillToUpdate.save();
    res.status(200).json(updatedskill);
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.delete("/deleteskill/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteskill = await Skills.findByIdAndDelete(id);
    res.status(200).json(deleteskill);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
