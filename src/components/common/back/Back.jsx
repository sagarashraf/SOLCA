import React from "react";
import { useLocation } from "react-router-dom";
import backImage from "../../../img/aboutUs.jpg";

const Back = ({ title, image }) => {
  const location = useLocation();

  return (
    <>
      <section
        className="back"
        style={{ backgroundImage: `url(${backImage})` }}
      >
        <h2>Home / {location.pathname.split("/")[1]}</h2>
        <h1>{title}</h1>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Back;
