import React from "react";
import "./courses.css";
import { coursesCard } from "../../dummydata";
import ElvisTabeth from "../../img/Elvis-Tabeth2.png";
import userHolder from "../../img/holderUser.jpg";
import { Col, Row, Card, Button } from "react-bootstrap";
import head from "../../img/The-Head.png";

const data = [
  {
    cover: ElvisTabeth,
    name: "Rev. E. Tabeth",
    des: "Ming, BSc, PGCE, QTS. Rhema Bible College Diploma in Christian Ministry",
    email: "etabeth@solacademy.org.uk",
  },
  {
    cover: userHolder,
    name: "Mrs Dass",
    des: "Science teacher",
    email: "joydass@solacademy.org.uk",
  },
  {
    cover: userHolder,
    name: "Mr Sagar",
    des: "ICT and L2 Diploma Reactjs, Node, Python, Deep Learning, Machine Learning, Javascript, MYSQL",
    email: "sagarashraf@solacademy.org.uk",
  },
  {
    cover: userHolder,
    name: "Mr Jackman",
    des: "Music Academy PGCE, QTS",
    email: "anthonyjackman@solacademy.org.uk",
  },
  {
    cover: userHolder,
    name: "Dr Sunday Cookey",
    des: "Governor: Quality of Education and partnerships",
    email: "sundaycookey@solacademy.org.uk",
  },
  {
    cover: userHolder,
    name: "Mr Ayo Jatto",
    des: "Governor of Leadership and Management",
    email: "ayojatto@solacademy.org.uk",
  },
  {
    cover: userHolder,
    name: "Mr Gerald Kalanzi",
    des: "Supervisor",
    email: "geraldkalanzi@solacademy.org.uk",
  },
  {
    cover: userHolder,
    name: "Ms Tara",
    des: "MA Professional Practice, Dance (Inclusive practice). IDTA Level 4 Diploma in Dance Teaching",
    email: "school@solacademy.org.uk",
  },
  {
    cover: userHolder,
    name: "Hong Xu",
    des: "Math Support",
    email: "hungxu@solacademy.org.uk",
  },
  {
    cover: userHolder,
    name: "Ms Jadie Fan",
    des: "English teacher PGCE Level 7, BSc and CELTA Level 5 qualification",
    email: "Jadiefan@solacademy.org.uk",
  },
  {
    cover: userHolder,
    name: "Dr Albert Ngongang",
    des: "Safeguarding Designated Governor",
    email: "Adalbertngongang@solacademy.org.uk",
  },
  {
    cover: userHolder,
    name: "Mrs Kingsley Osemwegie",
    des: "Math support",
    email: "mathsupport@solacademy.org.uk",
  },
  {
    cover: userHolder,
    name: "Daniel Nwandu",
    des: "ICT and L2 Diploma",
    email: "danielnwandu@solacademy.org.uk",
  },
  {
    cover: userHolder,
    name: "Fabien Ketiku",
    des: "ICT and L2 Diploma, Full Stack web developer",
    email: "mailtict@solacademy.org.uk",
  },
  {
    cover: userHolder,
    name: "Mrs Katiana Morais",
    des: "Supervisor",
    email: "Katianamorais@solacademy.org.uk",
  },
  {
    cover: userHolder,
    name: "Faith Ichi",
    des: "Early years",
    email: "faithichi@solacademy.org.uk",
  },
  {
    cover: userHolder,
    name: "Nneoma Igwe",
    des: "Early years",
    email: "neomaigwe@solacademy.org.uk",
  },
  {
    cover: userHolder,
    name: "Marieta Markou",
    des: "Math support",
    email: "marietamarkou@solacademy.org.uk",
  },
  {
    cover: userHolder,
    name: "Mrs Catherine Gale",
    des: "SEND Support PGCE, Cert in Education Teaching Learners with Additional Needs",
    email: "catherinegale@solacademy.org.uk",
  },
];

const CoursesCard = () => {
  return (
    <>
      <section className="coursesCard container">
        <Row className="mb-3">
          <Col>
            <Card
              style={{ backgroundColor: "	#f5fffa" }}
              className="text-center"
            >
              <Card.Body>
                <img
                  src={head}
                  alt={"head"}
                  style={{ width: "300px", height: "300px" }}
                />
                <Card.Title>
                  {" "}
                  <h2>Mrs. I. Tabeth</h2>
                </Card.Title>
                <Card.Text>
                  <p>
                    A very warm welcome to you all! Thank you for visiting our
                    website. I hope that you will gain an insight into the life
                    of Sol Christian Academy by looking at the information we
                    have shared with you.
                  </p>
                  <p>
                    At Sol Christian Academy, we aim to provide a secure, caring
                    and stimulating environment in which children are encouraged
                    to strive to do their best in all aspects of their
                    development. As a school family, we believe that courtesy,
                    respect and concern for others are as important as high
                    standards of achievement in academic work. To this end, we
                    are determined to meet the needs of every child, celebrating
                    the uniqueness of each child. As a school, we work hard to
                    create a lively, engaging and purposeful learning
                    environment in which children will develop a love of
                    learning.
                  </p>
                  <p>
                    As a church school, we believe that the Christian faith
                    underpins all that we do in school and permeates all aspects
                    of school This is clearly summarised in our motto, developed
                    by the children, which states ‘Character-Academics
                    -Leadership’. We actively encourage parents to become
                    involved in their children’s education. We firmly believe
                    that home and school need to work in partnership for the
                    benefit of the children. Working together as a school
                    family, we can ensure that children are both happy and
                    successful at school.
                  </p>
                  <p>
                    Please do not hesitate to contact us if you have anything to
                    discuss, if you are considering registering your child for a
                    place at Sol Christian Academy, if you would like to arrange
                    a visit to look around the school, or you would like any
                    paper copies of the documents within the website.
                  </p>
                </Card.Text>
                <h4>Headteacher</h4>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-2">
          {data.map((val) => (
            <Col lg={4} md={6} sm={6} className="mb-2">
              <Card className="h-100">
                <Card.Body className="px-5 d-flex flex-column">
                  <div className="img text-center">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="text-center">
                    <h3>{val.name}</h3>
                  </div>
                  <div>{val.des}</div>
                  <div>Email: {val.email}</div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </>
  );
};

export default CoursesCard;
