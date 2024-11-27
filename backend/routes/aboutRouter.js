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


router.delete("/deleteabout/:id", async (req, res) => {
  const { id } = req.params
  try {
    const deleteabout = await About.findByIdAndDelete(id)
    res.status(200).json(deleteabout)
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;
