import React from "react";
import Marquee from "../Marquee";
import Accordian from "./Accordian";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <h1>Mission</h1>
          </div>
          <div className="col-lg-6 col-sm-12"></div>
        </div>
      </div>
      <Marquee />
      <Accordian />
    </>
  );
};

export default About;
