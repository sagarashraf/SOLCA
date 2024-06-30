import React from "react";
import "./classes.css";
import Back from "../common/back/Back";
import ClassesCard from "./ClassesCard";
import ReactPlayer from "react-player";
import { Card, Row, Col, ListGroup, Button } from "react-bootstrap";
import url from "../../img/media/file.mp4";
import cri from "../../img/talking.jpg";
import books from "../../img/books.png";
import classes from "../../img/SchoolClasses.png";
const points = [
  "Overall effectiveness: Good",
  "Effectiveness of leadership and management: Good",
  "Quality of teaching, learning and assessment: Good",
  "Personal development, behaviour and welfare: Good",
  "Outcomes for pupils: Good",
  "Early years provision: Good",
];
const coreSubjects = [
  "Math (Levels K-12)",
  "English (Levels K–12)",
  "Literature and Creative Writing (Levels 2–8)",
  "Social Studies (Levels K–12)",
  "Science (Levels K–12)",
  "Word Building (Levels K–9)",
  "Bible Reading (Levels 1–6)",
];

const media = [
  "Readmaster® improves reading rate and comprehension skills for Levels 1–12.",
  "Typemaster® teaches computer keyboard skills for Levels 1–6.",
  "Math Builder® provides drill and practice in math concepts for Levels 1–6.",
  "Word Builder improves spelling, word usage, and pronunciation for Levels 2–8.",
];
const BulletCards = ({ points, title }) => {
  return (
    <div className="cards-container text-center">
      <Card bg={"secondary"}>
        <Card.Header className="fw-bold">{title}</Card.Header>
        <ListGroup variant="flush">
          {points.map((point, index) => (
            <ListGroup.Item key={index}>{point}</ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};

const Classes = () => {
  const handleButtonClick = () => {
    window.open(
      "https://solchristianacademy-my.sharepoint.com/personal/zoelletabeth_solacademy_org_uk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fzoelletabeth%5Fsolacademy%5Forg%5Fuk%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2F139831%5F1%2EPDF&parent=%2Fpersonal%2Fzoelletabeth%5Fsolacademy%5Forg%5Fuk%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files&ga=1",
      "_blank"
    );
  };
  return (
    <>
      <Back title="About Us" />
      <Card>
        <Card.Body>
          <Row>
            <Col lg={6} md={12}>
              <ReactPlayer
                className="react-player"
                url={"https://www.youtube.com/watch?v=uDB95icrYtE"}
                width="100%"
                height="100%"
                controls
              />
            </Col>
            <Col lg={6} md={12}>
              <div className="text-center mb-3">
                <h3 style={{ color: "gold" }}>
                  SOL Christian Academy was also inspected on 12-14 June 2019.
                </h3>
              </div>
              <BulletCards points={points} title={"Featured"} />
              <div className="text-center">
                {" "}
                <Button
                  className="mt-3"
                  variant="success"
                  onClick={handleButtonClick}
                >
                  Read Full Report
                </Button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <ClassesCard />
      <Card>
        <Card.Body>
          <hr />
          <h6>
            Accelerated Christian Education is a Bible-based, Christian K–12
            curriculum, consisting of reading programs, core curriculum,
            required electives, and additional instruction programs. Some
            courses are enhanced with CDs, DVDs, and computer software.
          </h6>
          <hr />
        </Card.Body>

        <Card>
          <Card.Img variant="top" src={cri} />
          <Card.Body>
            <Card.Text>
              <h4>Core Curriculum</h4>
              <hr />
              The core curriculum provides students with academics, skill
              building, reading practice, character and wisdom training, and
              knowledge of God and His Word. This complete package begins with
              reading development and progresses through high school, giving
              students a solid foundation for pursuing their life goals. More
              skilled students may progress at a faster rate or may accelerate
              in the areas of their academic strengths. Slower students are
              encouraged to do their best but can work at their levels of
              proficiency and proceed as they are capable. Each core subject
              consists of 12 PACEs (Packet of Accelerated Christian Education)
              per level. Typical students work daily on one PACE in each subject
              and may be performing at varying levels. The diagnostic test
              results help to identify academic weaknesses and prescribe a path
              to help students catch up. Most students complete at least 70
              PACEs per year, while maintaining academic balance by completing
              about the same number of PACEs in each assigned subject.
              <hr />
            </Card.Text>
            <Row>
              <Col lg={6} md={12}>
                <BulletCards points={coreSubjects} title={"Featured"} />
                <h6 className="mt-2">Multimedia Readmaster</h6>Multimedia
                Readmaster Plus is an educational software suite that enhances
                students’ educational experiences while challenging their
                learning. Readmaster Plus offers four distinct computer software
                programs:
                <hr />
                <BulletCards points={media} title={"Readmaster"} />
              </Col>
              <Col lg={6} md={12}>
                <Card className="text-white border-0">
                  <Card.Img src={books} alt="Card image" />
                </Card>
              </Col>
            </Row>
            <Row className="mt-3">
              {[
                {
                  color: "Secondary",
                  title: "Electives and Additional Instruction Programs",
                  des: "To enhance the core curriculum, A.C.E. offers several other programs and courses beneficial to academic growth and development. Each of these courses adds interest and enhancement to the core curriculum and other learning activities.",
                },
                {
                  color: "Success",
                  title: "Learning Centres",
                  des: "At the start of the school day, each student settles into their own ‘office’ and focuses on the day’s academic goals in the Learning Centre. While the mind is fresh, there is a quietness to concentrate on the central skills of reading, writing, and mathematics. Students in the Learning Centre work on PACEs at their speed and according to their ability. Using this method allows the staff to devote more time to each child. If a child is unable to solve a problem, he or she can call on the Supervisor for help. The Supervisor then works carefully with the child until the difficulty has been overcome. Academic electives, stand-alone educational software, and learning-to-read programs are added for enhanced learning opportunities. Practical lessons are included throughout the day and allow students to work in a group setting. This encourages teamwork and critical thinking skills outside of PACE work. To help parents understand this unique style of learning they must complete the ‘Parent’s Orientation Course’.  It takes two evenings to complete and is an excellent way for parents to understand the A.C.E program of learning, and how a student works at their own PACE under supervision within the school.",
                },
              ].map((variant) => (
                <Col lg={12} md={12}>
                  <Card
                    bg={variant.color.toLowerCase()}
                    key={variant}
                    text={
                      variant.color.toLowerCase() === "light" ? "dark" : "white"
                    }
                    className="mb-2"
                  >
                    <Card.Body>
                      <Card.Title>{variant.title} </Card.Title>
                      <Card.Text>{variant.des}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <Row>
              <Col lg={6} md={12}>
                <Card className="text-white border-0">
                  <Card.Img src={classes} alt="Card image" />
                </Card>
              </Col>
              <Col lg={6} md={12}>
                {[
                  {
                    color: "Primary",
                    title: "Fees Information",
                    des: "School fees are reviewed annually during the Spring Term and may increase from one year to the next.  Everyone knows that what we really value is what we invest in. We believe that our children are worth investing in. Continue reading...",
                  },
                  {
                    color: "Secondary",
                    title: "Term Dates",
                    des: "Term Dates are specific periods when academic sessions occur, including start and end dates of terms, as well as scheduled breaks and holidays within the academic year Continue reading...",
                  },
                  {
                    color: "Success",
                    title: "Prospectus",
                    des: "The Academy is run on the principle of cooperation, which depends on trust and commitment, where parents and teachers help and support one another; pooling resources of time, gifts and finances to provide excellent individualised Christian education to children. Continue reading...",
                  },
                  {
                    color: "Danger",
                    title: "Application Procedure",
                    des: " A Preliminary Application Form must be completed and all relevant documentation presented. Continue reading...",
                  },
                ].map((variant) => (
                  <Card
                    bg={variant.color.toLowerCase()}
                    key={variant.color}
                    text={
                      variant.color.toLowerCase() === "light" ? "dark" : "white"
                    }
                    className="mb-2 w-100"
                  >
                    <Card.Body>
                      <Card.Title>{variant.title} </Card.Title>
                      <Card.Text>{variant.des}</Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Card>
    </>
  );
};

export default Classes;
