const express = require("express");
const router = express.Router();
const Project = require("../models/projectModel");
const { saveProjectImage } = require("../middleware/fetchFiles");

router.post("/addproject", saveProjectImage, async (req, res) => {
  try {
    const { title, languages, link } = req.body;
    const url = req.protocol + "://" + req.get("host");
    const project = new Project({
      title,
      languages,
      link,
      image: url + "/public/uploads/" + req.file.filename,
    });
    const addproject = await project.save();
    res.status(200).json(addproject);
  } catch (error) {
    console.error("Error adding project:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/getallprojects", saveProjectImage, async (req, res) => {
  try {
    const getprojects = await Project.find();
    res.status(200).json(getprojects);
  } catch (error) {
    console.error("Error getting project:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
