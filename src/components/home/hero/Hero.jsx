import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading subtitle="WELCOME TO " title="SOL CHRISTIAN ACADEMY" />
            <p>
              An independent, fee paying, faith school based in Greater
              Manchester.
            </p>
            <div className="button">
              <button className="primary-btn">
                LEARN MORE <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                APPLY NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
