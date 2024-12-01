const express = require("express");
const { saveprofilephotomage } = require("../middleware/fetchFiles");
const ProfilePhoto = require("../models/profilePhotoModel");
const router = express.Router();

router.post("/addprofilephoto", saveprofilephotomage, async (req, res) => {
  try {
    const { title } = req.body;
    const url = req.protocol + "://" + req.get("host");
    const profilephoto = new ProfilePhoto({
      title,

      image: url + "/public/uploads/" + req.file.filename,
    });
    const addprofilephoto = await profilephoto.save();
    res.status(200).json(addprofilephoto);
  } catch (error) {
    console.error("Error adding profilephoto:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/getprofilephoto", async (req, res) => {
  try {
    const getprofilephoto = await ProfilePhoto.find();
    res.status(200).json(getprofilephoto);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.put(
  "/updateprofilephoto/:id",
  saveprofilephotomage,
  async (req, res) => {
    const { id } = req.params;
    const { filename } = req.file || {};
    const { title } = req.body;

    try {
      const profilephotoToUpdate = await ProfilePhoto.findById(
        id);
      if (!profilephotoToUpdate) {
        return res.status(404).json({ message: "profilephoto not found" });
      }

      profilephotoToUpdate.title = title;

      // Only update the image if a new file is provided
      if (filename) {
        const url = req.protocol + "://" + req.get("host");
        profilephotoToUpdate.image = url + "/public/uploads/" + filename;
      }

      const updateprofilephoto = await profilephotoToUpdate.save();
      res.status(200).json(updateprofilephoto);
    } catch (error) {
      console.error("Error updating project:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

router.delete("/deleteprofilephoto/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleteprofilephoto = await ProfilePhoto.findByIdAndDelete(id);
    res.status(200).json(deleteprofilephoto);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
