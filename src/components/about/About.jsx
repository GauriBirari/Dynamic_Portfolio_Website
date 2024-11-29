import React, { useEffect, useState } from "react";
import "./about.css";
import ME from "../../assets/gau (2).jpg";
import { FaTags, FaUsers, FaFolderOpen, FaAndroid } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { server } from "../../common";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

const About = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  // Get
  const getData = () => {
    setLoading(true);

    server
      .get("/about/getallabout", {
        headers: {
          "Content-Type": "application/json",
          // "auth-token": user.authToken,
        },
      })
      .then(function (response) {
        console.log("api response", response.data);
        if (response.status === 200 || response.status === 201) {
          setData(response.data);
        }
        setLoading(false);
      })
      .catch(function (error) {
        if (error instanceof AxiosError && error.response?.data?.message)
          toast.error(error.response.data.message);
        else if (error.response?.data?.error) {
          toast.error(error.response.data.error);
        } else console.log("Failed to connect to server");
      });
  };

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" className="img-fluid" />
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
              <FaAndroid className="about__icon" />
              <h5>Application Developer</h5>
              <small>React Native</small>
            </article>
            <article className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>

          <p>
            {data.map((item) => {
              return (
                <>
                  <ol>
                    <li>{item.description}</li>
                  </ol>
                </>
              );
            })}
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
