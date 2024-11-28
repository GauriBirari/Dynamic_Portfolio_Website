const express = require("express");
const About = require("../models/aboutModel");

const router = express.Router();

router.post("/addabout", async (req, res) => {
  try {
    const about = await About.create(req.body);
    res.json({ about });
  } catch (error) {
    console.error(error);
  }
});

router.get("/getallabout", async (req, res) => {
  try {
    const about = await About.find();
    res.status(200).json(about);
  } catch (error) {
    console.error(error);
  }
});

router.put("/updateabout/:id", async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;

  try {
    const aboutToUpdate = await About.findByIdAndUpdate(id, req.body);
    if (!aboutToUpdate) {
      return res.status(404).json({ message: "data not found" });
    }

    aboutToUpdate.description = description;

    const updatedAbout = await aboutToUpdate.save();
    res.status(200).json(updatedAbout);
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.delete("/deleteabout/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteabout = await About.findByIdAndDelete(id);
    res.status(200).json(deleteabout);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
