import React from "react";
import { Card } from "react-bootstrap";
import Heading from "../common/heading/Heading";
import head from "../../img/The-Head.png";
import ofset from "../../img/ofset.jpg";

const homeAbout = [
  {
    id: 1,
    cover: "https://img.icons8.com/dotty/80/000000/storytelling.png",
    title: "Nurturing Christian Values",
    desc: " We are a safe, loving, and supportive Christian family that cherishes each child's individuality and uniqueness as created in the image of God. Our environment nurtures the talents given by God to inspire pupils to achieve and succeed, fostering a sense of awe and wonder of God’s world.",
  },
  {
    id: 1,
    cover: "https://img.icons8.com/ios/80/000000/diploma.png",
    title: "Lifelong Faith and Moral Guidance",
    desc: " We lay the foundations of lifelong faith through Gospel values and sincere, meaningful prayer. Our guidance helps pupils determine their own personal moral values while promoting respect and understanding of other races, religions, and ways of life.",
  },
  {
    id: 1,
    cover: "https://img.icons8.com/ios/80/000000/athlete.png",
    title: "Inclusive, Christ-Centered Education",
    desc: "Our Christ-centered curriculum offers a breadth of experiences and ensures equality of opportunity for all. We aim to develop future citizens who cherish the world they live in and understand their responsibilities within it.",
  },
];
const HeadTeacherMessage = () => {
  return (
    <>
      <div className="text-center">
        <img src={head} alt={"head"} width={500} height={500} />
        <h2>Mrs. I. Tabeth</h2>
      </div>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row"></div>
          <div className="right row">
            <Heading
              subtitle="Head Teacher’s Welcome"
              title=" nurturing Christian family that values individuality, inspires success, instills faith, and offers a Christ-centered, inclusive education"
            />

            <div className="items">
              {homeAbout.map((val) => {
                return (
                  <div className="item flexSB">
                    <i className="fa fa-star"></i>
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
            <h3 className="text-muted">A.C.E Curriculum.</h3>
            <p style={{ color: "green" }} className=" px-5 text-center">
              <hr />
              <p style={{ textAlign: "justify" }}>
                Accelerated Christian Education was founded in 1970 by Donald
                and Esther Howard in Garland, Texas. The ministry began solely
                upon God’s leading to meet the need for an individualized,
                Biblically-based education for children. They desired to assist
                parents, pastors, and school staff in the Lord’s command of
                Deuteronomy 6:7; And thou shalt teach them diligently unto thy
                children, and shalt talk to them when thou sittest in thine
                house, and when thou walkest by the way, and when thou liest
                down, and when thou risest up.
              </p>
              <hr />
              <p style={{ textAlign: "justify" }}>
                Mr. and Mrs. Howard started the first Learning Center in their
                home, but in just one year had five schools joining their staff
                training! By 1974, more than 500 schools across the U.S. had
                implemented the program. A.C.E. has taken a conventionally
                styled textbook and divided it into bite-sized workbooks called
                PACEs (Packets of Accelerated Christian Education) which are
                full of self-instructional activities designed to develop
                thinking skills and create mastery learning.
              </p>
              <hr />
              <p style={{ textAlign: "justify" }}>
                A.C.E. has been adding programs for students to participate in
                activities outside of the classroom since 1973. Regional and
                International Student Conventions help students grow closer to
                the Lord Jesus Christ and demonstrate their achievements in a
                wide range of categories from chess to Bible, basketball to art.
                Service Adventures and Educational Assistance Programs in
                foreign countries allow students to step outside their comfort
                zones, share Christ’s love with schools in need, and be involved
                in reaching children.
              </p>
              <p style={{ textAlign: "justify" }}>
                The first international school using the A.C.E. curriculum
                opened in 1974 in Winnipeg, Manitoba, Canada. However,
                throughout the years, separate warehouses opened in Australia,
                the Philippines, Russia, the United Kingdom, and Africa. Today
                A.C.E. serves more than 6,000 schools and countless homeschool
                families around the globe. We use the mastery-based
                Individualized Learning Programme provided by Accelerated
                Christian Education (ACE). It forms the basis of our curriculum
                which is grounded on Biblical principles and the development of
                Christian character and values. It is used worldwide by
                thousands of schools and covers the main academic areas of
                English, Maths, Science, and Social Sciences (History and
                Geography), with a wide range of elective subjects.
              </p>
              <p style={{ textAlign: "justify" }}>
                All studies are predicated on an understanding that God is the
                originator of all things, and the Bible is the benchmark for
                life. Students work at the level best suited to their ability
                and progress at the rate that best meets their needs. The ACE
                program approaches subjects with a carefully constructed and
                consistent method of study; variety is provided by the wide
                range of subjects available, and by the supplementary afternoon
                programme.
              </p>
            </p>
            <hr />
            <div className="d-flex justify-content-center align-items-center">
              <img className="w-100 h-100" src={ofset} alt="ofset" />
            </div>
          </Card.Body>
        </Card>
      </section>
      {/* <Awrapper /> */}
    </>
  );
};

export default HeadTeacherMessage;
