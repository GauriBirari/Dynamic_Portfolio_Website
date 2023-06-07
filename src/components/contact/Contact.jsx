import React from "react";
import "./contact.css";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi"
import { RiMessengerLine, RiWhatsappLine } from "react-icons/ri";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option ">
            <FaLinkedinIn className="contact__option-icon" />
            <h4 className="fw-bold">gauribirari</h4>
            <a href="https://www.linkedin.com/in/gauri-birari-179a79235" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h5>gauribirari2708@gmail.com</h5>
            <a href="mailto: gauribirari2708@gmail.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon" />
            <h5>+919156327082</h5>
            <a href="https://api.whatsapp.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
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
