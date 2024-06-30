import React from "react";
import OnlineCourses from "../allcourses/OnlineCourses";
import Heading from "../common/heading/Heading";
import "../allcourses/courses.css";
import { coursesCard } from "../../dummydata";
import { Card, Col } from "react-bootstrap";
import aim from "../../img/icons8-mission.gif";
import mission from "../../img/mission.png";
import vision from "../../img/icons8-vision.gif";

const HAbout = () => {
  const detail = [
    {
      image: aim,
      title: "Our Aim",
      subtitle:
        "SOL Christian Academy has the following goals, which underpin all that we do",
      des: "To produce a secure and stable atmosphere where students can excel in full education. To promote attitudes of self-discipline, honesty, integrity, perseverance, appreciation, consistency, responsibility, thoroughness, and the exercise of initiative and self-motivation through daily tasks. To respect each person as God’s unique creation. To train and equip character and gifting in students, develop their responsibility, and encourage them towards their calling in life. To view work as God-given and good. We work to please God and our employers. To encourage students to think Biblically and responsibly about world issues. To teach students that life is about knowing God and walking in His ways. To impart the skills of independent study and logo logical thought.  To encourage a desire to contribute to others within society, an awareness of the needs of those around and sensitivity to the call of God to find a place of service",
    },
    {
      image: mission,
      title: "Our Mission",
      subtitle:
        "SOL Christian Academy has the following values, which underpin all that we do",
      des: "Commitment to excellence in all aspects of school life. We aim to do the best we can, and we encourage children to give of their best in everything they do. The importance of each child developing spiritually, physically, intellectually, creatively, socially, behaviorally and emotionally. We aim to be interested in everything about the children in our care, as God is interested. Clear and consistent discipline. We work to maintain fair discipline throughout the Academy with a clear code of conduct that all staff and parents uphold. Clear and consistent discipline. Respect for authority and honor for all. We teach the pupils to respect authority as given by God to parents, teachers and others in the Academy and Church communities. A Biblical world view in all areas of school life. We aim to develop a Biblical approach in all aspects of the curriculum, administration and pastoral care.",
    },
    {
      image: vision,
      title: "Our Vision",
      subtitle:
        "Our mission is to prepare students academically and spiritually to serve Jesus Christ and impact the world through their character and leadership.",
      des: "Rooted in Christ: We believe that it is our mission to develop students both academically and spiritually so that when they depart from Sol Christian Academy, they are firmly rooted in Christ. We, therefore, provide every student with an education that overflows with Biblical truth in every subject; surrounding them with examples of servant-leaders, and encouraging them to utilize their minds and actions to develop a worldview that is founded in faith. Ready for Tomorrow: We believe that it is our goal to instill in each student the passion to serve the Lord Jesus Christ through their character and leadership. Sol Christian Academy endeavors to prepare students to become Christ-like leaders in their schools, churches, communities, families, and vocations.",
    },
  ];
  return (
    <>
      <section className="homeAbout fluid">
        <div className="container">
          <Heading
            subtitle="our courses"
            title="explore our popular online courses"
          />

          <div className="coursesCard container fluid">
            {/* copy code form  coursesCard */}
            <div className="row ">
              {detail.slice(0, 3).map((val) => (
                <Col lg={4} md={12}>
                  <Card style={{ backgroundColor: "azure" }} className="items ">
                    <Card.Body>
                      <img
                        src={val.image}
                        alt="Mission GIF"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <h1 style={{ color: "green" }}>{val.title}</h1>
                      <h4 style={{ color: "gold" }}>{val.subtitle}</h4>
                      <div
                        className="text-muted"
                        style={{ textAlign: "justify" }}
                      >
                        {val.des}
                      </div>
                    </Card.Body>

                    <button className="outline-btn">Learn More</button>
                  </Card>
                </Col>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HAbout;
