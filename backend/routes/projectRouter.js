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
  const { id } = req.params;
  const { filename } = req.file || {}; // Optional chaining for file upload
  const { title, languages, link } = req.body;

  try {
    const projectToUpdate = await Project.findById(id);
    if (!projectToUpdate) {
      return res.status(404).json({ message: "Project not found" });
    }

    projectToUpdate.title = title;
    projectToUpdate.languages = languages;
    projectToUpdate.link = link;

    // Only update the image if a new file is provided
    if (filename) {
      const url = req.protocol + "://" + req.get("host");
      projectToUpdate.image = url + "/public/uploads/" + filename;
    }

    const updatedProject = await projectToUpdate.save();
    res.status(200).json(updatedProject);
  } catch (error) {
    console.error("Error updating Project:", error);
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
