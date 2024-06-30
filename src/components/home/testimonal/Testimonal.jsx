import React from "react";
import Heading from "../../common/heading/Heading";
import "./style.css";
import { Button, Card } from "react-bootstrap";
import readmaster from "../../../img/readmaster.webp";
const testimonal = [
  {
    id: 1,
    name: "Multimedia (Readmaster Plus)",
    desc: "Readmaster Plus is an educational software suite that enhances students’ educational experiences while challenging their learning. Readmaster Plus offers four distinct computer software programs:",
  },
  {
    id: 2,
    name: "Electives and Additional Instruction Programs",
    desc: "To enhance the core curriculum, A.C.E. offers several other programs and courses beneficial to academic growth and development. Each of these courses adds interest and enhancement to the core curriculum and other learning activities.",
  },
  {
    id: 3,
    name: "Learning Centres",

    desc: " Students begin each day in their own 'office' in the Learning Centre, working independently on reading, writing, and math using PACEs. Staff provide personalized support, and practical lessons promote teamwork. Parents learn about our approach through a two-evening 'Parent’s Orientation Course' on the A.C.E. program and student-paced learning.",
  },
];

const Testimonal = () => {
  return (
    <>
      <section className="testimonal padding">
        <div className="container">
          <Heading
            subtitle="Curriculum"
            title="Accelerated Christian Education is a Bible-based, Christian K–12 curriculum."
          />
          <Card className="border-bottom-0 rounded-0">
            <Card.Body style={{ textAlign: "justify" }} className="text-muted ">
              <hr />
              Core Curriculum The core curriculum provides students with
              academics, skill building, reading practice, character and wisdom
              training, and knowledge of God and His Word. This complete package
              begins with reading development and progresses through high
              school, giving students a solid foundation for pursuing their life
              goals. More skilled students may progress at a faster rate or may
              accelerate in the areas of their academic strengths. Slower
              students are encouraged to do their best but can work at their
              levels of proficiency and proceed as they are capable. Each core
              subject consists of 12 PACEs (Packet of Accelerated Christian
              Education) per level. Typical students work daily on one PACE in
              each subject and may be performing at varying levels. The
              diagnostic test results help to identify academic weaknesses and
              prescribe a path to help students catch up. Most students complete
              at least 70 PACEs per year, while maintaining academic balance by
              completing about the same number of PACEs in each assigned
              subject.
            </Card.Body>
            <div className="text-center mb-3">
              <Button>Learn More</Button>
            </div>
          </Card>

          <div className="content grid2">
            {testimonal.map((val) => (
              <div
                style={{ backgroundColor: "lightcyan" }}
                className="items shadow"
              >
                <div className="box">
                  <div className="name">
                    <h2 style={{ color: "gold" }}>{val.name}</h2>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonal;
