import React from "react";
import "./footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
  FaGit,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Gauri Birari
      </a>

      <div className="footer__socials">
        <a
          href="https://www.facebook.com/profile.php?id=100084946817428&mibextid=ZbWKwL"
          target="blank"
        >
          <FaFacebook />
        </a>
        <a
          href="https://instagram.com/gauri_birari_27?igshid=ZDdkNTZiNTM="
          target="blank"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/BirariGauri?t=4o2LM9bI4qo4aZFuChLSfg&s=08"
          target="blank"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/gauri-birari-179a79235"
          target="blank"
        >
          <FaLinkedinIn />
        </a>
        <a href="https://www.youtube.com/@learnwithgauri6392" target="blank">
          <FaYoutube />
        </a>
        <a href="https://github.com/GauriBirari/" target="blank">
          <FaGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>Created With Love</small>
      </div>
    </footer>
  );
};

export default Footer;
