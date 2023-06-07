import React from "react";
import CV from "../../assets/Gauri_Birari_Resume.pdf";
import { AiOutlineDownload, AiOutlineRight } from "react-icons/ai";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn btn-primary">
        Download CV <AiOutlineDownload className="fs-4"/>
      </a>
      <a href="#contact" className="btn">
        Let's Talk <AiOutlineRight/>
      </a>
    </div>
  );
};

export default CTA;
