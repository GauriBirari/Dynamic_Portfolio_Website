const express = require("express");
const Certification = require("../models/certificationModel");
const { saveCertificateImage } = require("../middleware/fetchFiles");
const router = express.Router();

router.post("/addcertificate", saveCertificateImage, async (req, res) => {
  try {
    const { title } = req.body;
    const url = req.protocol + "://" + req.get("host");
    const certificate = new Certification({
      title,

      image: url + "/public/uploads/" + req.file.filename,
    });
    const addCertificate = await certificate.save();
    res.status(200).json(addCertificate);
  } catch (error) {
    console.error("Error adding certificate:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/getcertificates", async (req, res) => {
  try {
    const getcertificates = await Certification.find();
    res.status(200).json(getcertificates);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.put(
  "/updatecertification/:id",
  saveCertificateImage,
  async (req, res) => {
    const { id } = req.params;
    const { filename } = req.file || {};
    const { title } = req.body;

    try {
      const certificateToUpdate = await Certification.findById(
        id);
      if (!certificateToUpdate) {
        return res.status(404).json({ message: "Certification not found" });
      }

      certificateToUpdate.title = title;

      // Only update the image if a new file is provided
      if (filename) {
        const url = req.protocol + "://" + req.get("host");
        certificateToUpdate.image = url + "/public/uploads/" + filename;
      }

      const updatedCertificate = await certificateToUpdate.save();
      res.status(200).json(updatedCertificate);
    } catch (error) {
      console.error("Error updating project:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

router.delete("/deletecertificates/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletecertificates = await Certification.findByIdAndDelete(id);
    res.status(200).json(deletecertificates);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
