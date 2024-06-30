import React from "react";
import Back from "../common/back/Back";
import { Container, Row, Card, Col, Button } from "react-bootstrap";
import Attendence from "../../img/Attendence.png";
import homework from "../../img/homework.jpg";
import Rewards from "../../img/Rewards.png";
import uniform from "../../img/uniform.jpg";
import uniformtwo from "../../img/uniformtwo.jpg";

const SchoolPolicies = () => {
  const handleButtonClick = () => {
    window.open("https://www.edplace.com/student/", "_blank");
  };
  return (
    <>
      <Back title={"School Policies"} />
      <Container fluid>
        <Row>
          <Card>
            <Card.Body>
              <Card.Header>
                <h2>Attendance</h2>
              </Card.Header>
              <Card.Text>
                <hr />
                We expect students to attend at all times. If a student does not
                attend school they will not learn. A student’s regular
                attendance and punctuality are a parent’s or guardian’s legal
                responsibility.
                <hr />
                <b>
                  Recent changes to Government Guidelines regarding acceptable
                  school attendance levels state:
                </b>
              </Card.Text>
              <Row>
                <Col lg={6} md={6}>
                  <Card className=" text-white border-0">
                    <Card.Img src={Attendence} alt="Card image" />
                  </Card>
                </Col>
                <Col
                  lg={6}
                  md={6}
                  style={{
                    textAlign: "justify",
                  }}
                >
                  <Card.Text>
                    All students must achieve at least 95% attendance as
                    instructed by LEA and any child falling below 95% will now
                    be contacted by the School and meetings will be arranged to
                    discuss how attendance can be improved. All parents of a
                    student who will not be attending school through illness or
                    for other unforeseen reasons are required to telephone the
                    school office before 7:30 am to give the reason. A note,
                    signed by a parent or guardian, confirming the reason, must
                    be brought after every absence otherwise the absence will be
                    logged as unauthorized. By law, only the School can
                    authorize an absence.
                  </Card.Text>

                  <Card.Text>
                    The Local Education Authority’s Educational Welfare Service
                    investigates unexplained absences. Students must attend
                    regularly. We believe that student attainment and success
                    are closely linked to regular attendance. Dental or medical
                    treatment should be arranged after school.
                  </Card.Text>

                  <Card.Text>
                    If, in very exceptional circumstances, you need to request
                    absence from school for your child during school time you
                    should apply to the School in writing in advance of the
                    leave. Research indicates that two weeks’ absence can
                    seriously affect potential examination results.
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Card>
            <Card.Body>
              <Card.Header>
                <h2>Homework</h2>
              </Card.Header>
              <Card.Text>
                <hr />
                Homework is designed to aid the learning process and to train
                students to organise themselves and to be responsible for their
                own work. All subjects are expected to set a reasonable amount
                of homework at least once a week, to mark homework regularly and
                to write helpful comments for improvement or commendations
                alongside students’ work.
                <br />
                <Button
                  onClick={handleButtonClick}
                  variant="success"
                  className="rounded-0"
                >
                  View Homework
                </Button>
                <hr />
                <b>
                  Curriculum Leaders are expected to keep a check on the
                  quantity and quality of homework given and marking undertaken
                  by Teachers. Monitors monitor Diaries and inform the
                  Supervisors of shortfalls, gaps or overloads in the amount of
                  homework given. Each student is issued with a Student Diary at
                  the beginning of each School Year. It is very important that
                  this diary is not defaced, damaged or lost. Replacements cost
                  £2.00 and can be obtained from the Student Reception.
                </b>
              </Card.Text>
              <Row>
                <Col
                  lg={6}
                  md={6}
                  style={{
                    textAlign: "justify",
                  }}
                >
                  <Card.Text>
                    In the Student Diary, students record:
                    <br /> a) Their own daily timetable
                    <br /> b) Their homework timetable
                    <br /> c) The homework as it is set
                    <br />
                    For this purpose, the Planner has a double page for each
                    week, with separate dated days which should be signed by
                    both parents and Tutor each week.
                  </Card.Text>

                  <Card.Text>
                    <Card.Text>
                      <h4 className="text-success">Show My Homework:</h4>
                      <p>
                        Homework requirements are to be written on the day it is
                        set along with the date on which it is to be handed in.
                        Extra details can be written in exercise books. Time
                        should be given within a lesson for homework details to
                        be written down and checked by the Subject Teacher where
                        necessary.
                      </p>
                    </Card.Text>
                  </Card.Text>

                  <Card.Text>
                    Parents have a PIN to access details of their son/daughter’s
                    homework. This system will mean parents will be able to see
                    all homework set and be able to support the School by
                    helping to ensure deadlines are met.
                  </Card.Text>
                </Col>
                <Col lg={6} md={6}>
                  <Card className=" text-white border-0">
                    <Card.Img src={homework} alt="Card image" />
                  </Card>
                </Col>
              </Row>

              <Row>
                <Card className="border-0">
                  <Card.Body>
                    <Card.Header>
                      <h2>Rewards & Sanctions</h2>
                    </Card.Header>
                    <Card.Text>
                      <hr />
                      Visitors often comment on the calm environment of the
                      School which is something we are proud of. This
                      environment is the result of the desire of students to
                      learn and teachers to make that learning experience
                      interesting and enjoyable.
                      <br />
                      The role of rewards and praise in recognizing and
                      promoting SOL Christian Academy’s values is a key
                      component of developing the potential of our students by
                      giving them encouragement and praise; praise is a key
                      component of good teaching and good staff/student
                      relationships. Good behavior is also best promoted and
                      developed by drawing attention to and rewarding
                      well-behaved and hardworking students. Praise is used
                      appropriately, and sincerely and will be linked to
                      tangible examples of a student’s strengths or effort.
                      <br />
                      Students’ hard work, good behavior and demonstration of
                      the School’s core values are recognized and celebrated by
                      teachers in many different ways, including:
                      <hr />
                      <b>
                        Recent changes to Government Guidelines regarding
                        acceptable school attendance levels state:
                        <br /> Verbal praise <br /> • Positive feedback
                        <br /> • Positive letters
                        <br /> • Merits
                        <br /> • Assembly Trophy
                      </b>
                    </Card.Text>
                    <Row>
                      <Col
                        lg={6}
                        md={6}
                        style={{
                          textAlign: "justify",
                        }}
                      >
                        <Card.Text>
                          Student’s efforts and achievements are rewarded in
                          Assembly on Friday. At Sol Christian Academy we will
                          support those who are experiencing behavioural,
                          emotional, social or other difficulties that might
                          impede self-discipline and effective learning. Whilst
                          we believe the most effective way of managing
                          behaviour is to praise and reward good behaviour,
                          there are occasions and circumstances when other
                          support is required. Where students are having
                          difficulty conforming to the expected standards of
                          behaviour various strategies and systems may be
                          employed to help them improve.
                        </Card.Text>

                        <Card.Text>
                          <b>
                            In the Learning Centre, some examples of strategies
                            that teachers may deploy include:{" "}
                          </b>
                          <br />• Challenging the students by reminding them of
                          godly characters
                          <br /> • Moving a student to another seat
                          <br /> • Writing the students name on the board as a
                          warning <br />• Putting a note in their Student
                          Planner (FAO parents/carers and tutor) <br />• Phone
                          call, email or letter home <br /> • Recording the
                          incident on the student’s file through SIMs
                          <br /> • Referring the incident to the Curriculum
                          Leader (for subject issues) or the Supervisor (for
                          pastoral issues)
                        </Card.Text>

                        <Card.Text>
                          Discipline is firm, fair and consistent. If further
                          punishment is required, it usually consists of a
                          detention, referral to a senior member of staff or a
                          warning letter. Exclusions, either internal or when
                          students are asked to stay away from school for a set
                          time are also used for serious offences. On rare
                          occasions, when a member of the Senior Leadership Team
                          is involved, parents may be invited to the School to
                          discuss particular issues.
                        </Card.Text>
                      </Col>
                      <Col lg={6} md={6}>
                        <Card className=" text-white border-0">
                          <Card.Img src={Rewards} alt="Card image" />
                        </Card>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Row>
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Card>
            <Card.Body>
              <Card.Header>
                <h2>Uniform</h2>
              </Card.Header>
              <Card.Text>
                <hr />
                <b>
                  Uniform gives our students a sense of ‘Unity’ and by dressing
                  correctly students can show pride in their school. Students
                  are required to wear uniform at all times. All students must
                  wear the uniform listed below.
                </b>
                <hr />
              </Card.Text>
              <Row>
                <Col lg={6} md={6}>
                  <Card className=" text-white border-0">
                    <Card.Img src={uniform} alt="Card image" />
                  </Card>
                </Col>
                <Col
                  lg={6}
                  md={6}
                  style={{
                    textAlign: "justify",
                  }}
                >
                  <Card.Text>
                    <b>
                      Dress Code & General Guidelines: <br />• Jewellery is not
                      permitted in school except for girls who may wear one pair
                      of studs or sleepers in their ears if pierced.
                      <br /> • Body piercing is not permitted.
                      <br /> • Hair for boys must be worn short.
                      <br /> • For girls, long hair must be tied back or a
                      headband worn.
                      <br /> • Hair colouring is not permitted nor fashion or
                      ‘Punk’ styles <br />• No mobile phones or bleepers are
                      allowed in school unless prior written permission has been
                      given
                    </b>
                    <hr />
                    <b>Dress Code & General Guidelines</b> <br /> • Boys’ shirt,
                    golden, collar: 36cm / 14″ (12-14 years)
                    <br /> • Boys’ shirt, golden, collar: 41cm / 16″ (16 years){" "}
                    <br />• Girls’ blouse, golden, 71cm / 28″ (8-9 years) <br />
                    • Girls’ blouse, golden, 76cm / 30″ (9-10 years)
                  </Card.Text>

                  <Card.Text>
                    <Button variant="success">Place Order</Button>
                    <Button variant="success">Uniform List</Button>
                    <Button variant="success">Uniform Order Form</Button>
                  </Card.Text>
                  <Card className=" text-white border-0 mt-5">
                    <Card.Img src={uniformtwo} alt="Card image" />
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

export default SchoolPolicies;
