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

router.put("/updateproject/:id", saveProjectImage, async (req, res) => {
  console.log("Request File:", req.file); // Logs file info
  console.log("Request Body:", req.body); // Logs body data

  const { id } = req.params;
  const { filename } = req.file || {};
  const { title, languages, link } = req.body;

  // if (!title || !filename || !languages || !link) {
  //   return res.status(401).json({ status: 401, message: "Fill out all data" });
  // }

  try {
    const projectData = await Project.findById(id);
    if (!projectData) {
      return res
        .status(404)
        .json({ status: 404, message: "Project not found" });
    }

    projectData.title = title;
    projectData.languages = languages;
    projectData.link = link;
    projectData.image = filename;

    const updatedprojectData = await projectData.save();
    res.status(200).json(updatedprojectData);
  } catch (error) {
    console.error("Error in Project:", error);
    res.status(500).json({ status: 500, message: "Internal Server Error" });
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

router.delete("/deleteproject/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteproject = await Project.findByIdAndDelete(id);
    res.status(200).json(deleteproject);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
