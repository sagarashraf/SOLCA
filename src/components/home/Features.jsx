import React from "react";
import "../blog/blog.css";
import fee from "../../img/fee.jpg";
import pro from "../../img/prospectus.png";
import pace from "../../img/pace.png";

import Heading from "../common/heading/Heading";

const blog = [
  {
    id: 1,
    title: "Fee Information",
    desc: "School fees are reviewed annually during the Spring Term and may increase from one year to the next.  Everyone knows that what we really value is what we invest in. We believe that our children are worth investing in.",
    cover: fee,
  },
  {
    id: 2,
    title: "Prospectus",
    desc: "The Academy is run on the principle of cooperation, which depends on trust and commitment, where parents and teachers help and support one another; pooling resources of time, gifts and finances to provide excellent individualised Christian education to children.",
    cover: pro,
  },
  {
    id: 3,

    title: "Packet of Accelerated Christian Education (PACE®)",
    desc: "Accelerated Christian Education® has taken the conventional style textbook and divided it into bite-sized, achievable worktexts called PACEs. Each PACE is similar to a unit in a textbook. Each level consists of 12 PACEs in each subject. PACEs integrate Godly character-building lessons into the academic content, and self-instructional activities are carefully designed to develop thinking skills and create mastery learning.",
    cover: pace,
  },
];

const Features = () => {
  return (
    <>
      <section className="blog">
        <div className="container">
          <Heading subtitle="SOLCA" title="Our Features" />
          <div className="grid2">
            {blog.slice(0, 3).map((val) => (
              <div className="items shadow">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <div className="admin flexSB"></div>
                  <h1>{val.title}</h1>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
