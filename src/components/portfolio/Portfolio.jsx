import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/p7.png";
import IMG2 from "../../assets/p1.png";
import IMG3 from "../../assets/p2.png";
import IMG4 from "../../assets/p3.png";
import IMG5 from "../../assets/p4.png";
import IMG6 from "../../assets/p5.png";
import IMG7 from "../../assets/p6.png";
import IMG8 from "../../assets/p.png";
import { BiCodeAlt } from "react-icons/bi";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Venkateshwara Co-operative Power & Agro Processing Ltd.",
    description: "",
    github: "https://github.com",
    demo: "http://nmmm.in/",
    languages: "React Js, Bootstrap"
  },
  {
    id: 2,
    image: IMG2,
    title: "The Innovative Solutions",
    description: "",
    github: "https://github.com",
    demo: "https://theinnovativesolutions.in/",
    languages: "React Js, Bootstrap"

  },
  {
    id: 3,
    image: IMG3,
    title: "Green County India",
    description: "This is Ecommerce Website Including some Products.",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
    languages: "React Js, Bootstrap"

  },
  {
    id: 4,
    image: IMG4,
    title: "TextUtils",
    description: "TextUtils is a word counter and a character counting utility which can be used to manipulate your text in the way you want.",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/1695582-Maintaining-tasks-and-tracking-progress",
    languages: "React Js, Bootstrap"

  },
  {
    id: 5,
    image: IMG5,
    title: "Sahajyoga Website",
    description: "",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma",
    languages: "React Js, Bootstrap"

  },
  {
    id: 6,
    image: IMG6,
    title: "NULM",
    description: "",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma",
    languages: "React Js, Bootstrap"

  },
  {
    id: 6,
    image: IMG7,
    title: "TinDog",
    description: "",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma",
    languages: "HTML, CSS, Bootstrap"

  },
  {
    id: 7,
    image: IMG8,
    title: "News App",
    description: "NewMonkey is a news app which can be used to grab quick daily news bites.",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma",
    languages: "React Js, Bootstrap, Node Js, Mongodb"

  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div
        className="container 
      portfolio__container"
      >
        {data.map(({ id, image, title, github, demo, languages , description}) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <p><BiCodeAlt className="mt-1"/> {languages}</p>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
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
