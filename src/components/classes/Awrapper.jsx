import React from "react";
import { awrapper } from "../../dummydata";
import "./classes.css";

const Awrapper = () => {
  return (
    <>
      <section className="awrapper-classes mb-4">
        <div className="container grid">
          {awrapper.map((val) => {
            return (
              <div className="box flex">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <h1>{val.data}</h1>
                  <h3>{val.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Awrapper;
