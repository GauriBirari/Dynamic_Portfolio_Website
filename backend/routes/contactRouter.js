const express = require("express")
const Contact = require("../models/contactModels")

const router = express.Router()

router.post("/contact", async (req, res) => {
    try {
        const contact = await Contact.create(req.body)
        res.json({ contact })
    } catch (error) {
        console.error(error);
    }
})


module.exports = router