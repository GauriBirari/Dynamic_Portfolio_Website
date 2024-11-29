import React, { useEffect, useState } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/p7.png";
import IMG2 from "../../assets/p1.png";
import IMG3 from "../../assets/p2.png";
import IMG4 from "../../assets/p3.png";
import IMG5 from "../../assets/p4.png";
import IMG6 from "../../assets/p5.png";
import IMG7 from "../../assets/va.png";
import IMG8 from "../../assets/p.png";
import IMG9 from "../../assets/goda.png";
import IMG10 from "../../assets/yuva.png";
import IMG11 from "../../assets/garden.png";
import IMG12 from "../../assets/amc.png";
import IMG13 from "../../assets/competition.png";
import IMG14 from "../../assets/digimart.png";
import IMG15 from "../../assets/venkatapp.png";

import { BiCodeAlt } from "react-icons/bi";
import { AxiosError } from "axios";
import { server } from "../../common";
import { toast } from "react-toastify";

const data = [
  {
    id: 15,
    image: IMG15,
    title: "Venkateshwara Krishak App (With Admin Panel)",
    description: "",
    github: "https://github.com",
    demo: "",
    languages: "React Native, Node Js, Mysql",
  },
  {
    id: 14,
    image: IMG14,
    title: "Digimart Ecommerce Website (With Admin Panel)",
    description: "",
    github: "https://github.com",
    demo: "http://competition.godavari.nmc.gov.in/",
    languages: "HTML, CSS, Bootstrap, React Js, Material UI, Node Js, MongoDB",
  },
  {
    id: 13,
    image: IMG13,
    title:
      "Nashik Municiple Corporation Godavari Sanvardhan River Front Development Competition Website (With Admin Panel)",
    description: "",
    github: "https://github.com",
    demo: "http://competition.godavari.nmc.gov.in/",
    languages: "HTML, CSS, Bootstrap, React Js, Material UI, Node Js, MySql",
  },
  {
    id: 12,
    image: IMG12,
    title:
      "Ahamadnagar Municipal Corporation's Festival Permission Management Portal (With Admin Panel)",
    description: "",
    github: "https://github.com",
    demo: "https://amcfest.in/",
    languages: "HTML, CSS, Bootstrap, React Js, Material UI, Node Js, MySql",
  },
  {
    id: 10,
    image: IMG7,
    title:
      "Venkateshwara Co-operative Power & Agro Processing Ltd. Admin Panel.",
    description: "",
    github: "https://github.com",
    demo: "https://www.venkateshwarapoweragro.com/#/super-admin",
    languages: "HTML, CSS, Bootstrap, React Js, Material UI, Node Js, MySql",
  },
  {
    id: 1,
    image: IMG1,
    title: "Venkateshwara Co-operative Power & Agro Processing Ltd.",
    description:
      "Venkateshwara Co-operative Power & Agro Processing Ltd. is informative website build using React Js.",
    github: "https://github.com",
    demo: "https://www.venkateshwarapoweragro.com/",
    languages: "React Js,Material UI, Bootstrap, Node Js, Mysql",
  },
  {
    id: 2,
    image: IMG10,
    title: "Yuvasarathi Website (With Admin Panel)",
    description:
      "This is student and industry engagement platform where students can apply for jobs, internships etc. build using React js, Node js and Mysql",
    github: "https://github.com",
    demo: "https://yuvasarathi.com/",
    languages: "React Js, Bootstrap, Node Js, Mysql",
  },
  {
    id: 3,
    image: IMG9,
    title:
      "Nashik Municiple Corporation Godavari Sanvardhan Website (With Admin Panel)",
    description:
      "This is Nashik Municiple Corporation Godavari Sanvardhan Website build using mern stack.",
    github: "https://github.com",
    demo: "https://godavari.nmc.gov.in/#/",
    languages: "React Js, Bootstrap, Node Js, MongoDb",
  },
  {
    id: 4,
    image: IMG11,
    title: "Nashik Municiple Corporation Garden Website (With Admin Panel)",
    description:
      "This is Nashik Municiple Corporation Garden Website build using React Js, Springboot, Postgress Sql. I was working for user interface design and integrating the Api's for this website",
    github: "https://github.com",
    demo: "https://garden.nmc.gov.in/#/",
    languages: "React Js, Bootstrap, Node Js, MySql",
  },

  {
    id: 5,
    image: IMG2,
    title: "The Innovative Solutions",
    description:
      "This is company informative website to display companies services and other information.",
    github: "https://github.com",
    demo: "https://theinnovativesolutions.in/",
    languages: "React Js, Bootstrap",
  },
  {
    id: 6,
    image: IMG3,
    title: "Green County India",
    description: "This is Ecommerce Website Including some Products.",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
    languages: "React Js, Bootstrap",
  },

  {
    id: 8,
    image: IMG5,
    title: "Sahajyoga Website",
    description: "",
    github: "https://github.com",
    demo: "https://vishwanirmalabalshakti.org/",
    languages: "React Js, Bootstrap",
  },
  {
    id: 9,
    image: IMG4,
    title: "TextUtils",
    description:
      "TextUtils is a word counter and a character counting utility which can be used to manipulate your text in the way you want.",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/1695582-Maintaining-tasks-and-tracking-progress",
    languages: "React Js, Bootstrap",
  },

  {
    id: 11,
    image: IMG8,
    title: "News App",
    description:
      "NewMonkey is a news app which can be used to grab quick daily news bites.",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma",
    languages: "React Js, Bootstrap, Node Js, Mongodb",
  },
];

const Portfolio = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  // Get
  const getData = () => {
    setLoading(true);

    server
      .get("/project/getallprojects", {
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
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div
        className="container 
      portfolio__container"
      >
        {data.map(({ id, image, title, github, demo, languages, link }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h4>{title}</h4>
              <p>
                <BiCodeAlt className="mt-1" /> {languages}
              </p>

              <div className="portfolio__item-cta">
                {/* <a href={github} className="btn">
                    Github
                  </a> */}
                <a
                  href={link}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
