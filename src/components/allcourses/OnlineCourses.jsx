import React from "react";
import "./courses.css";
import Heading from "../common/heading/Heading";

const OnlineCourses = () => {
  const online = [
    {
      cover: "./images/courses/online/o1.png",
      hoverCover: "./images/courses/online/o1.1.png",
      courseName: "UI/UX Design Courses",
    },
    {
      cover: "./images/courses/online/o2.png",
      hoverCover: "./images/courses/online/o2.1.png",
      courseName: "Art & Design",
    },
    {
      cover: "./images/courses/online/o3.png",
      hoverCover: "./images/courses/online/o3.1.png",
      courseName: "Science",
    },
    {
      cover: "./images/courses/online/o4.png",
      hoverCover: "./images/courses/online/o4.1.png",
      courseName: "History & Archeologic",
    },
    {
      cover: "./images/courses/online/o5.png",
      hoverCover: "./images/courses/online/o5.1.png",
      courseName: "Information and communication technology (ICT)",
    },
    {
      cover: "./images/courses/online/o6.png",
      hoverCover: "./images/courses/online/o6.1.png",
      courseName: "Pyhon Programming Language Certificate",
    },
    {
      cover: "./images/courses/online/o7.png",
      hoverCover: "./images/courses/online/o7.1.png",
      courseName: "Health & Fitness",
    },
    {
      cover: "./images/courses/online/o8.png",
      hoverCover: "./images/courses/online/o8.1.png",
      courseName: "Marketing and SEO",
    },
    {
      cover: "./images/courses/online/o9.png",
      hoverCover: "./images/courses/online/o9.1.png",
      courseName: "Dive Deep into the World of Mathematics",
    },
    {
      cover: "./images/courses/online/o10.png",
      hoverCover: "./images/courses/online/o10.1.png",
      courseName: "Music",
      course: "120 Courses",
    },
    {
      cover: "./images/courses/online/o11.png",
      hoverCover: "./images/courses/online/o11.1.png",
      courseName: "Business Administration",
    },
    {
      cover: "./images/courses/online/o12.png",
      hoverCover: "./images/courses/online/o12.1.png",
      courseName: "Web Management",
    },
  ];
  return (
    <>
      <section className="online mb-2">
        <div className="container">
          <Heading
            subtitle="Subjects and Courses Offered"
            title="Subjects Available for Study and Specialization"
          />
          <div className="content grid3">
            {online.map((val) => (
              <div className="box">
                <div className="img">
                  <img alt="ccc" src={val.cover} />
                  <img src={val.hoverCover} alt="" className="show" />
                </div>
                <h1>{val.courseName}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
