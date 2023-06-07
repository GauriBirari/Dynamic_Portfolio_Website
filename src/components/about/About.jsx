import React from "react";
import "./about.css";
import ME from "../../assets/g.png";
import { FaTags, FaUsers, FaFolderOpen } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiCodeAlt className="about__icon" />
              <h5>Web Developer</h5>
              <small>Front-end</small>
            </article>
          
            <article className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>8+ Completed</small>
            </article>
          </div>
          <p>
            💬 I enjoy learning and navigating new ideas and themes to help improve my skills. I like meeting and communicating with new peoples. I always try to come up with creative solutions to problem.<br />
            🔭 I’m currently working on NMC Garden Website<br />

            🌱 I’m currently learning Advance React Js<br />

            💬 Ask me about Front-end Web Development and Website Design Part<br />

            📫 How to reach me gauribirari2708@gmail.com <br />

            📄 Know about my experiences <a href=" https://drive.google.com/file/d/1YKWslzuWYvWnmRDAdlZGcdOkLj3E8vYV/view?usp=share_link](https://drive.google.com/file/d/1YKWslzuWYvWnmRDAdlZGcdOkLj3E8vYV/view?usp=share_link">Resume</a>
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
