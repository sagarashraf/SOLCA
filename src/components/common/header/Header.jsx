import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/staff&faculties">Staff and Faculties</Link>
            </li>
            <li>
              <Link to="/OurSchool">Our School</Link>
            </li>
            <li>
              <Link to="/Academics">Academics</Link>
            </li>
            <li>
              <Link to="/School-Policies">Policies</Link>
            </li>
            <li>
              <Link to="/fees-and-Admission">Fee and Admission</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="start">
            <div className="button">
              <Link className="text-white" to="/fees-and-Admission">
                Application Form
              </Link>
            </div>
          </div>

          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
