import React, { useEffect, useState } from "react";
import "./experience.css";
import { BsCodeSquare, BsPatchCheckFill } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import { AiFillCalendar } from "react-icons/ai";
import { server } from "../../common";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

const Experience = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  // Get
  const getData = () => {
    setLoading(true);

    server
      .get("/skill/getallskill", {
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
    <>
      <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Skills</h2>
        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            {data.map((item, index) => {
              return (
                item.type === "frontend" && (
                  <div className="experience__content" key={index}>
                    <article className="experience__details">
                      <BsPatchCheckFill className="experience__details-icon" />
                      <div>
                        <h5>{item.title}</h5>
                        <small className="text-light">{item.level}</small>
                      </div>
                    </article>
                  </div>
                )
              );
            })}
          </div>
          <div className="experience__backend">
            <h3>Backend Development</h3>
            {data.map((item, index) => {
              return (
                item.type === "backend" && (
                  <div className="experience__content" key={index}>
                    <article className="experience__details">
                      <BsPatchCheckFill className="experience__details-icon" />
                      <div>
                        <h5>{item.title}</h5>
                        <small className="text-light">{item.level}</small>
                      </div>
                    </article>
                  </div>
                )
              );
            })}
          </div>

          <div className="experience__backend">
            <h3>Extra Things</h3>
            {data.map((item, index) => {
              return (
                item.type === "other" && (
                  <div className="experience__content" key={index}>
                    <article className="experience__details">
                      <BsPatchCheckFill className="experience__details-icon" />
                      <div>
                        <h5>{item.title}</h5>
                        <small className="text-light">{item.level}</small>
                      </div>
                    </article>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience">
        <h5>where I have made a contribution</h5>
        <h2>My Experience</h2>
        <div className="container experience__container1">
          <div className="experience__frontend1">
            <h4>React Js Developer</h4>
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
