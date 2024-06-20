import React from "react";
import me from "../../assets/gau (3).jpg";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <img src={me} width={400} className="img-fluid " alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
