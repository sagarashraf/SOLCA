import React from "react";
import Back from "../common/back/Back";
import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";
import fee from "../../img/fees.webp";
import ad from "../../img/ad.jpg";

const FeesAndAdmission = () => {
  const url =
    "https://docs.wixstatic.com/ugd/211fb5_1f9bc3ac135144c1a01867674ddad1da.pdf";
  const handleButtonClick = () => {
    window.open(url, "_blank");
  };
  return (
    <>
      <Back title={"Fee And Admission"} />
      <Container fluid>
        {" "}
        <Row>
          <Card>
            <Card.Body>
              <Card.Header>
                <h2>Application Procedure </h2>
              </Card.Header>
              <Card.Text>
                <hr />
                Your child’s application will include the following: ​
                <hr />
                <b>
                  • A Preliminary Application Form must be completed and all
                  relevant documentation presented. <br />• A Diagnostic test
                  must be completed to determine the child’s academic level.
                  <br /> • The pupil’s most recent report card must be made
                  available for evaluation.
                  <br /> • ACE students must bring a copy of their current
                  Supervisor Progress Card.
                  <br /> • A testimonial letter from both the school and church
                  must be handed in.
                  <br /> • A parent and student interview will be conducted with
                  the principal and with the school pastor if needed. <br />•
                  Copies of the child’s birth certificate or ID document and the
                  parent(s) ID document must be handed in.
                  <br /> • The parent(s) must attend a Parent Orientation at the
                  beginning of the year of their child’s registration.
                </b>
              </Card.Text>
              <Row>
                <Col lg={6} md={6}>
                  <Card className=" text-white border-0">
                    <Card.Img src={ad} alt="Card image" />
                  </Card>
                  <div className="text-center">
                    <Button
                      variant="success"
                      className="rounded-0 w-50 mt-3"
                      onClick={handleButtonClick}
                    >
                      Download Form
                    </Button>
                  </div>
                </Col>
                <Col
                  lg={6}
                  md={6}
                  style={{
                    textAlign: "justify",
                  }}
                >
                  <Card.Text>
                    The information which is requested in the document may be
                    stored on a computer and is subject to Data Protection Act
                    1998. The Act requires that all information is strictly
                    confidential and may only be accessed by those with a legal
                    right to see it, e.g. if there is a child protection
                    enquiry. Ther information will not be given to anyone else
                    without your written consent. You have the right to examine,
                    at any reasonable time, information about you or your child
                    which is kept on a computer. You have the right to correct
                    any information which you feel is wrong or misleading.
                    Please contact the Head teacher if you wish to examine the
                    information about you or your child which is kept on
                    computer. The information you give us will help to ensure
                    that all parents receive what the law entitles them to have
                    with regard to their child's education. It will also help us
                    to safeguard and promote your child's welfare at school.
                    Please keep us constantly updated with any changes to the
                    informatiopn on this form.
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
                <h2>Term Dates </h2>
              </Card.Header>
              <Card.Text>
                <hr />
                <h2>Term Dates</h2>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Term</th>
                      <th>Details</th>
                      <th>Dates</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Autumn Term</td>
                      <td>During: 13 Weeks</td>
                      <td>4 September 2023 – 15 December 2023</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Inset Days:</td>
                      <td>04 September 2023</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Term Starts:</td>
                      <td>20 October 2023</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Inset Days:</td>
                      <td>30 October 2023</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Half-Term Starts:</td>
                      <td>15 December 2023</td>
                    </tr>
                    <tr>
                      <td>Spring Term</td>
                      <td>During: 13 Weeks</td>
                      <td>4 January 2023 – 28 March 2024</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Inset Days:</td>
                      <td>04 and 05 January 2024</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Term Starts:</td>
                      <td>08 January 2024</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>CPD/Inset Days Schools Connect 24:</td>
                      <td>06 and 07 February 2024 (school closed)</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Half Term Starts:</td>
                      <td>09 February 2024</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Return after Half-Term:</td>
                      <td>19 February 2024</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Term End:</td>
                      <td>28 March 2024</td>
                    </tr>
                    <tr>
                      <td>Summer Term</td>
                      <td>During: 13 Weeks</td>
                      <td>15 April 2024 – 12 July 2024</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Term Starts:</td>
                      <td>15 April 2024</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Bank Holiday Monday:</td>
                      <td>06 May 2024</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Half-Term Starts:</td>
                      <td>25 May 2024</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Insert Day:</td>
                      <td>03 June 2024</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Term End:</td>
                      <td>12 July 2024</td>
                    </tr>
                  </tbody>
                </Table>
                <hr />
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>{" "}
        <Row>
          <Card>
            <Card.Body>
              <Card.Header>
                <h2>Fees Information </h2>
              </Card.Header>
              <Card.Text>
                <hr />
                School fees are reviewed annually during the Spring Term and may
                increase from one year to the next. Everyone knows that what we
                really value is what we invest in. We believe that our children
                are worth investing in.
                <hr />
                <b>
                  We are committed as a school to serve the vision of providing
                  excellent education with a Christ centered view. We work
                  tirelessly to ensure that this opportunity is available to as
                  many families as possible. We see our families as partners and
                  their financial contribution is kept to a minimum and often
                  complemented by the sacrificial giving of time, resources, and
                  gifts from staff, missionaries, individuals, churches as well
                  as the generous support of volunteers and parents.
                </b>
              </Card.Text>
              <Row>
                <Col lg={6} md={6}>
                  <Card className=" text-white border-0">
                    <Card.Img src={fee} alt="Card image" />
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
                    Agreed fees are payable yearly, termly or on a monthly
                    regular standing order (one month in advance). £50
                    administration fee is payable for the admission process
                    which includes diagnostic testing. Note that where the
                    initial assessment highlights the need for additional
                    support, additional charges may be required to cover any
                    support need, and this will be discussed and agreed with
                    parents.
                  </Card.Text>

                  <Card.Text>
                    <div>
                      <h2>School Fees</h2>
                      <Table border="1" cellPadding="10" cellSpacing="0">
                        <thead>
                          <tr>
                            <th>School</th>
                            <th>Annual</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Infants and Juniors</td>
                            <td>£3900-£4140</td>
                          </tr>
                          <tr>
                            <td>Senior School</td>
                            <td>£3,900-£4800</td>
                          </tr>
                          <tr>
                            <td>Sixth Form</td>
                            <td>£3,900 - £4,800</td>
                          </tr>
                          <tr>
                            <td colSpan="2">
                              Additional 1-1 support is charged @ £18/hr.
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Card.Text>

                  <Card.Text>
                    Early Years School Fees (2 years – 5 years for Pre-School)
                    We participate in 15/30 hours free entitlement scheme 2
                    Years old and (3 years – 5 years) and our fees are available
                    upon request. Deductions are made from the school fees on
                    qualifying for the 15 hours and for 30 hours free childcare
                    entitlement, once an eligibility code has been obtained from
                    30 hours free childcare – GOV.UK (www.gov.uk) For more
                    information please visit the Childcare Choices website.
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default FeesAndAdmission;
