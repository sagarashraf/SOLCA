import React from "react";
import "./Head.css";

const Head = () => {
  return (
    <>
      <section className="head head-background">
        <div className="container flexSB">
          <div className="logo head-class">
            <h1>SOL Christian Academy</h1>
            <span>EDUCATION & LEARNING WITH FAITH</span>
          </div>

          <div className="social">
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
