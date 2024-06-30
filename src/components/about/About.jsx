import React from "react";
import "./about.css";
import Back from "../common/back/Back";
import AboutCard from "./AboutCard";
import HeadTeacherMessage from "./HeadTeacherMessage";

const About = () => {
  return (
    <>
      <Back title="About Us" />
      <HeadTeacherMessage />
      <AboutCard />
    </>
  );
};

export default About;
