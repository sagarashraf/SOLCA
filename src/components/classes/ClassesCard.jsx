import React from "react";
import Heading from "../common/heading/Heading";
import "./classes.css";
import Awrapper from "./Awrapper";
import nursery from "../../img/nursery.jpg";
import primary from "../../img/Primary.jpg";
import HighSchool from "../../img/HighSchool.jpg";
import College from "../../img/College.jpg";

import { Button, Col, Row } from "react-bootstrap";

const homeAbout = [
  {
    id: 1,
    cover: nursery,
    title: "Nursery",
  },
  {
    id: 1,
    cover: primary,
    title: "Primary",
  },
  {
    id: 1,
    cover: HighSchool,
    title: "High School",
  },
  {
    id: 1,
    cover: College,
    title: "College",
  },
];

const ClassesCard = () => {
  return (
    <>
      <section className="classHome">
        <div className="container ">
          <Row className="mb-4">
            <Heading subtitle="Growing in Knowledge" title="LEARN ANYTHING" />
            {homeAbout.map((val) => {
              return (
                <Col lg={6}>
                  <div className=" item text-center mb-4 ">
                    <div className="items px-5 mx-3">
                      <img
                        fluid
                        style={{ height: "150px", width: "200px" }}
                        src={val.cover}
                        alt=""
                      />
                    </div>

                    <Button variant="warning" className="w-50 mt-2 fw-bold ">
                      {val.title}
                    </Button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </section>
      <Awrapper />
    </>
  );
};

export default ClassesCard;
