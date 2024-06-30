import React from "react";
import Heading from "../common/heading/Heading";
import "./about.css";
import Awrapper from "./Awrapper";
import { Card } from "react-bootstrap";

const homeAbout = [
  {
    id: 1,
    cover: "https://img.icons8.com/dotty/80/000000/storytelling.png",
    title: "Integrity & Empathy",
    desc: "Building integrity and empathy, we shape strong moral foundations for lifelong success.",
  },
  {
    id: 1,
    cover: "https://img.icons8.com/ios/80/000000/diploma.png",
    title: "Empowering Leaders",
    desc: "Empowering future leaders with confidence, innovation, and a passion for change.",
  },
  {
    id: 1,
    cover: "https://img.icons8.com/ios/80/000000/athlete.png",
    title: "Academic Excellence",
    desc: "Offering rigorous, diverse programs that inspire critical thinking and intellectual growth.",
  },
];

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB fluid">
          <div className="left row">
            <img src="./images/aboutUsImage.jpg" alt="" />
          </div>
          <div className="right row">
            <Heading
              subtitle="Building Foundations for Success"
              title="Core Values and Focus Areas"
            />
            <div className="items">
              {homeAbout.map((val) => {
                return (
                  <div className="item flexSB">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Card className="text-center px-5 py-5 mt-2 ">
          <Card.Body>
            <h3 className="text-muted">
              Growing in Knowledge. Following in Faith.
            </h3>
            <p style={{ color: "green" }} className=" px-5">
              <hr />
              At SOL Academy, we are committed to excellence in all aspects of
              school life. We encourage children to give their best in
              everything they do, fostering a culture of continuous improvement
              and achievement.
            </p>
            <hr />
          </Card.Body>
        </Card>
      </section>
      {/* <Awrapper /> */}
    </>
  );
};

export default AboutCard;
