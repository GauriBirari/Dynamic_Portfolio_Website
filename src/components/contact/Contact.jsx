import React, { useState } from "react";
import "./contact.css";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine, RiWhatsappLine } from "react-icons/ri";
import axios from "axios";
import { server } from "../../common";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AxiosError } from "axios";

const initialValues = {
  name: "",
  email: "",
  message: "",
  mobile: "",
};

const Contact = () => {
  const { values, handleBlur, handleSubmit, handleChange, resetForm, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: Yup.object({
        name: Yup.string()
          .min(2, "Enter Your Name")
          .required("Name Is Required"),
        mobile: Yup.string()
          .min(2, "Enter Your Mobile Number")
          .required("Mobile Number Is Required"),
        email: Yup.string()
          .email("Enter Valid Email Address")
          .required("Email Is Required"),
        message: Yup.string()
          .min(2, "Enter Message")
          .required("Message Is Required"),
      }),
      onSubmit: (values, action) => {
        console.log(values);
        server
          .post("/contact/addcontact", values, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then(function (response) {
            console.log("api response", response.data);
            if (response.status === 200 || response.status === 201) {
              if (response.data) {
                toast.success("Message Sent successfully");
                resetForm();
              }
            }
          })
          .catch(function (error) {
            toast.error(error.response.data.message);
          });
      },
    });
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option ">
            <FaLinkedinIn className="contact__option-icon" />
            <h6 className="fw-bold">gauribirari</h6>
            <a
              href="https://www.linkedin.com/in/gauri-birari-179a79235"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h6>gauribirari2708@gmail.com</h6>
            <a
              href="mailto: gauribirari2708@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon" />
            <h6>+919156327082</h6>
            <a href="https://api.whatsapp.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Your Full Name"
            required
          />
          <input
            type="number"
            name="mobile"
            value={values.mobile}
            onChange={handleChange}
            placeholder="Your Contact Number"
            required
          />
          <input
            type="email"
            value={values.email}
            onChange={handleChange}
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary btn-lg">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
