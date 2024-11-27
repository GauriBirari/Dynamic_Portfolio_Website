const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");
const emailValidator = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
const Contact = require("../models/contactModel");
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

module.exports = router;
