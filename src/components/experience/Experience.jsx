import React from "react";
import "./experience.css";
import { BsCodeSquare, BsPatchCheckFill } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import { AiFillCalendar } from "react-icons/ai";

const Experience = () => {
  return (
    <>
      <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Skills</h2>
        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h5>HTML5</h5>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h5>CSS3</h5>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h5>JavaScript</h5>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h5>Bootstrap5</h5>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h5>React Js</h5>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h5>React Native</h5>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
          </div>
          <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h5>Node JS</h5>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h5>MongoDB</h5>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h5>Express Js</h5>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h5>Thunder Client</h5>
                  <small className="text-light">Basic</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h5>Postman</h5>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h5>MySql</h5>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
          </div>

          <div className="experience__backend">
            <h3>Extra Things</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h5>Balsamique</h5>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h5>Canva</h5>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h5>Wireframe</h5>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h5>Figma</h5>
                  <small className="text-light">Basic</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h5>Git & Github</h5>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <h5>where I have made a contribution</h5>
        <h2>My Experience</h2>
        <div className="container experience__container1">
          <div className="experience__frontend1">
            <h2>React Js Developer</h2>
            <h3>The Innovative Solutions</h3>
            <article
              className="experience__details"
              style={{ marginTop: "-20px" }}
            >
              <BiCodeAlt className="experience__details-icon" />
              <div>
                <p className="text-light">
                  As a React.js developer at Innovative Solutions, I've been
                  working for one year. During this time, I've gained experience
                  in creating React components, managing state, handling events,
                  and building interactive user interfaces. I've collaborated
                  with other developers and worked with UI/UX designers to
                  deliver effective and user-friendly applications. Looking
                  forward to continuing my growth and staying updated with the
                  latest developments in React.js and web development.
                </p>{" "}
              </div>
            </article>

            <article
              className="experience__details text-light"
              style={{ fontWeight: "normal!important" }}
            >
              <BiCodeAlt className="experience__details-icon" />
              <div>
                <h5>React Js, React bootstrap, Github</h5>
              </div>
            </article>
            <article className="experience__details  text-light">
              <AiFillCalendar className="experience__details-icon" />
              <div>
                <h5>Mar 2022 - Present</h5>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
