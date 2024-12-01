import React, { useEffect } from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
import ME from "../../assets/gau (3).jpg";
import { useState } from "react";
import { server } from "../../common";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

const Header = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  // Get
  const getData = () => {
    setLoading(true);

    server
      .get("/profilephoto/getprofilephoto", {
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
    <header id="home">
      <div className="container header__container fw-blod">
        <h5>Hello I'm</h5>
        <h1>Gauri Birari</h1>
        <h5 className="text-white">Software Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          {data.length > 0 && (
            <img src={data[data.length - 1].image} alt="Recently Added" />
          )}
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
