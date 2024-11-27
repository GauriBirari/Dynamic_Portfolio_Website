const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");
const Contact = require("../models/contactModels");

const emailValidator = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

router.post("/addcontact", async (req, res) => {
  const { name, email, mobile, message } = req.body;
  if (!emailValidator(email)) {
    return res.status(400).send("Please provide a valid email address.");
  }
  try {
    const AddContact = new Contact({
      name,
      email,
      mobile,
      message,
    });

    // Send email
    const emailSubject = "Enquiry Recieved - Gauri Birari Portfolio";
    const emailText = `Hello ${name},\n\n Your Enquiry has been submitted successfully. i will contact you soon\n\nFrom\nGauri Birari\n `;
    sendEmail(email, emailSubject, emailText);
    const finalContact = await AddContact.save();
    res.status(201).send({
      message: "Contact added successfully",
      ContactDetails: finalContact,
    });
  } catch (error) {
    console.error(error);
  }
});

// send email
function sendEmail(to, subject, text) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "birarigauri@gmail.com",
      pass: "xganpeecopmbyova",
    },
  });

  let mailOptions = {
    from: "birarigauri@gmail.com",
    to: to,
    subject: subject,
    text: text,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}

router.get("/getallcontacts", async (req, res) => {
  try {
    const getcontact = await Contact.find();
    res.status(200).json(getcontact);
  } catch (error) {
    console.error("Error getting project:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.delete("/deletecontact/:id", async (req, res) => {
  const { id } = req.params
  try {
    const deletecontact = await Contact.findByIdAndDelete(id)
    res.status(200).json(deletecontact)
  } catch (error) {
    console.log(error);
  }

})
module.exports = router;
