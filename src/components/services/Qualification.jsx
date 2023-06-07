import React from "react";
import "./qualification.css";
import { BiBuildings } from "react-icons/bi";
import {GoLocation} from "react-icons/go"
import {TbBuildingBank} from "react-icons/tb"
import {AiTwotoneCalendar} from "react-icons/ai"
import {BsCheck} from "react-icons/bs"

const Qualification = () => {
  return (
    <section id="services">
      <h5>Where I have completed</h5>
      <h2>Qualification</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>SSC</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiBuildings className="service__list-icon" />
              <p>Vasant Dada Patil Highschool</p>
            </li>
            <li>
              <GoLocation className="service__list-icon" />
              <p>Madsangvi, Aurangabad Road, Nashik 422003</p>
            </li>
            <li>
              <TbBuildingBank className="service__list-icon" />
              <p>Maharashtra State Board Of Secondary and Higher Secondary Education, Nashik</p>
            </li>
            <li>
              <AiTwotoneCalendar className="service__list-icon" />
              <p>March 2018</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Completed With 85.20%</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>HSC</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiBuildings className="service__list-icon" />
              <p>K.R.T. Art's, B.H. Commerce and A.M. Science (KTHM) College</p>
            </li>
            <li>
              <GoLocation className="service__list-icon" />
              <p>Gangapur Road, Nashik - 422002</p>
            </li>
            <li>
              <TbBuildingBank className="service__list-icon" />
              <p>Higher Secondary School Certificate</p>
            </li>
            <li>
              <AiTwotoneCalendar className="service__list-icon" />
              <p>August 2021</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Completed With 72%</p>
            </li>
          
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Bachelor Of Commerce</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiBuildings className="service__list-icon" />
              <p>K.R.T. Art's, B.H. Commerce and A.M. Science (KTHM) College</p>
            </li>
            <li>
              <GoLocation className="service__list-icon" />
              <p>Gangapur Road, Nashik - 422002</p>
            </li>
            <li>
              <TbBuildingBank className="service__list-icon" />
              <p>University of Pune</p>
            </li>
            <li>
              <AiTwotoneCalendar className="service__list-icon" />
              <p>September 2024</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Current CGPA 8.41</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Qualification;
