import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
import ME from "../../assets/gau (3).jpg";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container fw-blod">
        <h5>Hello I'm</h5>
        <h1>Gauri Birari</h1>
        <h5 className="text-white">Software Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
