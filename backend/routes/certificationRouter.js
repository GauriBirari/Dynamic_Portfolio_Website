const express = require("express");
const Certification = require("../models/projectModel");
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

module.exports = router;
