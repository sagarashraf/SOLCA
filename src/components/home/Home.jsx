import React from "react";
import AboutCard from "../about/AboutCard";
import Hblog from "./Hblog";
import HAbout from "./HAbout";
import Hero from "./hero/Hero";
import Hprice from "./Hprice";
import Testimonal from "./testimonal/Testimonal";
import Classes from "../classes/Classes";
import ClassesCard from "../classes/ClassesCard";
import Features from "./Features";

const Home = () => {
  return (
    <>
      <Hero />
      <ClassesCard />
      <AboutCard />
      <HAbout />
      <Testimonal />
      <Features />
      {/* <Hblog /> */}
      {/* <Hprice /> */}
    </>
  );
};

export default Home;
