import React from "react";
import Back from "../common/back/Back";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import ReactPlayer from "react-player";
import url from "../../img/media/file.mp4";
import reading from "../../img/Reading.png";
import infant from "../../img/Infant.png";
import kid4 from "../../img/kid4.png";
import senior from "../../img/senior.png";
const points = [
  "Overall effectiveness: Good",
  "Effectiveness of leadership and management: Good",
  "Quality of teaching, learning and assessment: Good",
  "Personal development, behaviour and welfare: Good",
  "Outcomes for pupils: Good",
  "Early years provision: Good",
];

const pace = [
  {
    color: "Primary",
    details:
      "They note their goals, the concepts they will learn, a Bible verse, and a corresponding character trait. This helps them understand expectations and take responsibility for their learning.",
  },
  {
    color: "Secondary",
    details:
      "Words are introduced in a computer-controlled manner, ensuring students learn their meanings and pronunciations before use. Repetition is used to ensure mastery.",
  },
  {
    color: "Success",
    details:
      "These elements are included in each lesson to enhance engagement and understanding. Innovative learning activities are used to reinforce the material.",
  },
  {
    color: "Danger",
    details:
      "Each PACE includes several quizzes (Checkups) that cover different colors of the material. If students do not achieve mastery, weak areas are identified for further review before progressing.",
  },
  {
    color: "Warning",
    details:
      "After completing activities and Checkups, students prepare for a Self Test. They evaluate their own understanding, and a supervisor or tutor assesses readiness for the final PACE Test. Upon completion, the PACE is turned in, and the PACE Test is taken the next school morning to objectively measure mastery.",
  },
];

const BulletCards = ({ points, title }) => {
  return (
    <div className="cards-container text-center">
      <Card className="rounded-0" bg={"secondary"}>
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
const linksDataInfants = {
  "BBC Bitesize KS1": "http://www.bbc.co.uk/bitesize/ks1/",
  "ICT Games": "http://www.ictgames.com/resources.html",
  "BBC Schools Digger":
    "http://www.bbc.co.uk/schools/digger/5_7entry/5_7.shtml",
  "Crickweb KS1 Numeracy": "http://www.crickweb.co.uk/ks1numeracy.html",
  Topmarks: "http://www.topmarks.co.uk",
  "E4 Education Games": "http://www.games.e4education.co.uk/groupone",
  "Oxford Owl Phonics Made Easy":
    "http://www.oxfordowl.co.uk/for-home/reading-site/expert-help/phonics-made-easy",
  "Crickweb KS1 Literacy": "http://www.crickweb.co.uk/ks1literacy.html",
  "Kids Spell (Create your own spelling lists & games)": "KS1 & KS2",
  "Fun Brain (Maths, reading and spelling games)": "KS1 & KS2",
  "Learning Games for Kids (Spelling and word games)": "KS1 & KS2",
  "Eduplace.com (Levelled spelling and vocabulary games)": "KS1 & KS2",
  "PrimaryGames.com (Spelling rules, incl. vowels, blends, plurals etc)":
    "KS1 & KS2",
  "ICT Games.com (Look, cover, check game)": "KS1 & KS2",
  "Manythings.org (Aimed at ESL students but includes useful spelling & vocabulary games)":
    "KS2",
  "Spelling City (Vocabulary and spelling interactive activities, printable worksheets, games)":
    "KS2",
  "Maths Games for Kids (Counting, multiplication, and more)":
    "http://www.topmarks.co.uk/maths-games/5-7-years/counting",
  "Granny Prix (Multiplication)":
    "http://www.multiplication.com/games/play/granny-prix",
  "Hit the Button (Maths skills)":
    "http://www.topmarks.co.uk/maths-games/hit-the-button",
  "Maths Zone (Maths only games)": "Maths only games",
  "BBC Bitesize KS1 Maths": "http://www.bbc.co.uk/bitesize/ks1/maths/",
  "Primary Games Arena (Games for all subjects and age groups)":
    "http://primarygamesarena.com/Years",
};
const linksDatajunior = {
  "Kids Spell (Create your own spelling lists & games) (KS1 & KS2)":
    "KS1 & KS2",
  "Fun Brain (Maths, reading and spelling games) (KS1 & KS2)": "KS1 & KS2",
  "Learning Games for Kids (Spelling and word games) (KS1 & KS2)": "KS1 & KS2",
  "Eduplace.com (Levelled spelling and vocabulary games) (KS1 & KS2)":
    "KS1 & KS2",
  "PrimaryGames.com (Spelling rules, incl. vowels, blends, plurals etc) (KS1 & KS2)":
    "KS1 & KS2",
  "ICT Games.com (Look, cover, check game) (KS1 & KS2)": "KS1 & KS2",
  "Manythings.org (Aimed at ESL students but includes useful spelling & vocabulary games) (KS2)":
    "KS2",
  "Spelling City (Vocabulary and spelling interactive activities, printable worksheets, games) (KS2)":
    "KS2",
  "BBC Schools Digger (7-9 years)":
    "http://www.bbc.co.uk/schools/digger/7_9entry/7_9.shtml",
  "BBC Schools Digger (9-11 years)":
    "http://www.bbc.co.uk/schools/digger/9_11entry/9_11shtml",
  "BBC Bitesize KS2": "http://www.bbc.co.uk/bitesize/ks2",
  Topmarks: "www.topmarks.co.uk",
  "Crickweb KS2 Literacy": "http://www.crickweb.co.uk/ks2literacy.html",
  "BBC Spellits (Spelling games) (KS2)": "KS2",
  "BBC Bitesize (Spelling and grammar) (KS2)": "KS2",
  "Arcademic Skill Builders (Literacy and maths games)":
    "Literacy and maths games",
  "Crickweb (Literacy and maths educational games) (KS2)": "KS2",
  "Math Playground": "http://www.mathplayground.com/games.html",
  "Maths Champs": "http://www.mathschamps.co.uk/#home",
  "Primary Games Arena (Games for all subjects and all age groups)":
    "http://primarygamesarena.com/Years",
};
const linksDataSenior = {
  "BBC KS3": "http://www.bbc.co.uk/education/levels/z4kw2hv",
  "BBC KS3 Biology": "http://www.bbc.co.uk/education/subjects/zng4d2p",
  "BBC KS3 Chemistry": "http://www.bbc.co.uk/education/subjects/zs6hvcw",
  "BBC KS3 Computer Science": "http://www.bbc.co.uk/education/subjects/z34k7ty",
  "BBC KS3 English": "http://www.bbc.co.uk/education/subjects/z3kw2hv",
  "BBC KS3 ICT": "http://www.bbc.co.uk/education/subjects/zrq7hyc",
  "BBC KS3 Maths": "http://www.bbc.co.uk/education/subjects/zqhs34j",
  "BBC KS3 Physics": "http://www.bbc.co.uk/education/subjects/zpm6fg8",
  "BBC KS3 Science": "http://www.bbc.co.uk/education/subjects/zng4d2p",
  "BBC KS3 French": "http://www.bbc.co.uk/education/subjects/z9dqxnb",
  "BBC KS3 Geography": "http://www.bbc.co.uk/education/subjects/zrw76sg",
  "BBC KS3 History": "http://www.bbc.co.uk/education/subjects/zk26n39",
  "BBC KS3 Spanish": "http://www.bbc.co.uk/education/subjects/zr9d7ty",
  "BBC GCSE": "http://www.bbc.co.uk/education/levels/z98jmp3",
  "BBC GCSE Art and Design": "http://www.bbc.co.uk/education/subjects/zybbkqt",
  "BBC GCSE Biology (Single Science)":
    "http://www.bbc.co.uk/education/subjects/zng4d2p",
};

const Academics = () => {
  const handleButtonClick = () => {
    window.open(
      "https://solchristianacademy-my.sharepoint.com/personal/zoelletabeth_solacademy_org_uk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fzoelletabeth%5Fsolacademy%5Forg%5Fuk%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2F139831%5F1%2EPDF&parent=%2Fpersonal%2Fzoelletabeth%5Fsolacademy%5Forg%5Fuk%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files&ga=1",
      "_blank"
    );
  };
  return (
    <>
      <Back title="Academics" />
      <Container fluid>
        <Row className="p-5">
          <Col lg={6} md={12}>
            <Card className="">
              <Card.Body>
                <ReactPlayer
                  className="react-player"
                  url={"https://www.youtube.com/watch?v=uDB95icrYtE"}
                  width="100%"
                  height="100%"
                  controls
                />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12}>
            <Card bg="success">
              <Card.Body>
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
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Card border="danger">
            <Card.Header className="text-center">
              <h4>Packet of Accelerated Christian Education (PACE®)</h4>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col lg={6} md={6}>
                  <ReactPlayer
                    className="react-player"
                    url={url}
                    width="100%"
                    height="100%"
                    controls
                  />
                </Col>
                <Col lg={6} md={6}>
                  <Card.Title>
                    <br />
                    <br />
                    <br />
                    <hr />
                    Accelerated Christian Education® has taken the conventional
                    style textbook and divided it into bite-sized, achievable
                    worktexts called PACEs. Each PACE is similar to a unit in a
                    textbook. Each level consists of 12 PACEs in each subject.
                    PACEs integrate Godly character-building lessons into the
                    academic content, and self-instructional activities are
                    carefully designed to develop thinking skills and create
                    mastery learning.
                    <hr />
                  </Card.Title>
                </Col>
              </Row>

              <Card.Text>
                <Row className="mt-4">
                  <p className="text-muted">
                    Accelerated Christian Education® has taken the conventional
                    style textbook and divided it into bite-sized, achievable
                    worktexts called PACEs. Each PACE is similar to a unit in a
                    textbook. Each level consists of 12 PACEs in each subject.
                    PACEs integrate Godly character-building lessons into the
                    academic content, and self-instructional activities are
                    carefully designed to develop thinking skills and create
                    mastery learning.
                  </p>
                  <p className="text-muted">
                    A.C.E. stands out from other curriculum providers with its
                    individualized, self-instructional, mastery-based approach.
                    With minimal assistance, PACEs allow students to absorb
                    subject material according to their own learning ability
                    rather than being pushed forward or held back by their age.
                    For instance, a student placed in the fifth grade by a
                    conventional school may be taking PACEs in Level 4 math,
                    Level 5 science, and Level 5 English in the A.C.E. program.
                    Students may move ahead in some subject areas and proceed at
                    a slower pace in others.
                  </p>
                  <h3 className="text-success">What’s inside?</h3>

                  {pace.map((variant) => (
                    <Card
                      bg={variant.color.toLowerCase()}
                      key={variant.color}
                      text={
                        variant.color.toLowerCase() === "light"
                          ? "dark"
                          : "white"
                      }
                      className="mb-2 w-100"
                    >
                      <Card.Body>
                        <Card.Text>{variant.details}</Card.Text>
                      </Card.Body>
                    </Card>
                  ))}
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <Row className="my-4">
          <Card className="rounded-0">
            <Card.Body>
              <hr />
              Accelerated Christian Education is a Bible-based, Christian K–12
              curriculum, consisting of reading programs, core curriculum,
              required electives, and additional instruction programs. Some
              courses are enhanced with CDs, DVDs, and computer software.
              <hr />
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Card className="rounded-0">
            <Card.Body>
              <Card.Title>
                <h1 className="text-success">Reading Development</h1>
              </Card.Title>
              <Card.Title>Beginning Reading for Young Children</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                ABCs with Ace and Christi
              </Card.Subtitle>
              <Card.Text>
                This 12- to 15-week program is designed for those who have not
                been to school or who do not yet know how to read. To enroll,
                the student must pass both parts of the Pretest and show the
                proper maturity level as determined by the Coordination
                Development Tests. This program will prepare children for the
                individualized instruction of the PACE curriculum. The lively
                and entertaining phonetically-based program features cartoon
                characters, songs, poems, displays, and character-building
                activities.
              </Card.Text>
              <Row>
                <Col lg={6} md={6}>
                  <Card className=" text-white border-0">
                    <Card.Img src={reading} alt="Card image" />
                  </Card>
                </Col>
                <Col lg={6} md={6}>
                  <Card.Title>
                    <h3 className="text-success">
                      Second-Language Reading Programs
                    </h3>
                  </Card.Title>
                  <Card.Title>ABCs for English Learners</Card.Title>
                  <Card.Text>
                    This full-year program is designed for children aged 5–9 who
                    have passed the Pretest. The Pretest helps to determine if a
                    student is ready to learn to read. This program combines
                    Speaking English with Ace and Christi and ABCs with Ace and
                    Christi. It allows students to learn to read and speak.
                  </Card.Text>
                  <Card.Title>
                    <h3 className="text-success">Bible Reading</h3>
                  </Card.Title>
                  <Card.Text>
                    This program reinforces reading skills with Scripture
                    selections for Levels 2–6. (In Level 1, the instructor reads
                    to the students.) Readings demonstrate Christian principles
                    and complement character-building activities included in the
                    ABCs with Ace and Christi program.
                  </Card.Text>
                  <Card.Title>
                    <h3 className="text-success"> Readmaster Plus</h3>
                  </Card.Title>
                  <Card.Text>
                    Readmaster Plus is a computer program designed to increase a
                    student’s proficiency in reading and comprehension, typing,
                    spelling, and basic arithmetic. Readmaster Plus offers four
                    distinct computer software programs: Readmaster®,
                    Typemaster®, Math Builder®, and Word Builder.
                  </Card.Text>
                  <Card.Title>
                    <h3 className="text-success"> RVideophonics</h3>
                  </Card.Title>
                  <Card.Text>
                    This DVD program is designed for English-speaking adults and
                    students 9 years of age and up, who have never learned to
                    read or who need remediation. The course will help improve
                    their phonetic reading skills and develop writing skills.
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="rounded-0">
            <Card.Body>
              <Row>
                <Col lg={6} md={12}>
                  <Card className=" text-white border-0 rounded-0">
                    <Card.Img src={infant} alt="Card image" />
                  </Card>
                </Col>
                <Col lg={6} md={12}>
                  <Card bg="light" className="rounded-0">
                    <Card.Body>
                      <div>
                        <h2>Useful Educational Links for Infants</h2>
                        <ul>
                          {Object.entries(linksDataInfants).map(
                            ([name, url]) => (
                              <li key={name}>
                                <a
                                  href={url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {name}
                                </a>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={12}>
                  <Card bg="light" className="rounded-0">
                    <Card.Body>
                      <div>
                        <h2>Useful Educational Links for Juniors</h2>
                        <ul>
                          {Object.entries(linksDatajunior).map(
                            ([name, url]) => (
                              <li key={name}>
                                <a
                                  href={url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {name}
                                </a>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={6} md={12}>
                  <Card className=" text-white border-0">
                    <Card.Img src={kid4} alt="Card image" />
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={12}>
                  <Card className=" text-white border-0 rounded-0">
                    <Card.Img src={senior} alt="Card image" />
                  </Card>
                </Col>
                <Col lg={6} md={12}>
                  <Card bg="light" className="rounded-0">
                    <Card.Body>
                      <div>
                        <h2>Useful Educational Links for Infants</h2>
                        <ul>
                          {Object.entries(linksDataSenior).map(
                            ([name, url]) => (
                              <li key={name}>
                                <a
                                  href={url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {name}
                                </a>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default Academics;
