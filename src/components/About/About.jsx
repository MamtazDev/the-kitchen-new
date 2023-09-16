import React from "react";
import Marquee from "./Marquee";
import Accordian from "./Accordian";
import "./About.css";
import Transparent from "./Transparent/Transparent";
import Curious from "./Curious/Curious";
import Collaborative from "./Collaborative/Collaborative";
import PeopleMarquee from "./PeopleMarquee";
import { Link } from "react-router-dom";
import StalkUs from "../Connect/StalkUs";
const About = () => {
  return (
    <>
      <div className="about_container">
        <div className="row d-flex justify-content-center p_25">
          <div className="col-lg-6 col-sm-12 about_left_text">
            <div
              role="text"
              class=" about_title"
              aria-label="You can sit with us!"
            >
              Mission
            </div>
            <div class="about_description">
              <p
                role="text"
                aria-label="We’re bringing a diverse team of creators, thought-leaders and brand experts to the table to revolutionize the way we work and deliver breakthrough ideas at the speed of culture."
              >
                We exist to make Kraft Heinz brands cultural icons.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-sm-12 ">
            <video
              width="100%"
              height="auto"
              autoPlay
              muted
              className="about_video"
            >
              <source
                src="https://d2ozwg77fjfk77.cloudfront.net/636/studio/assets/v1669836608627_821529409/TK_Mission_Web_1.1.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>

      <Marquee />
      <Accordian />
      <Transparent />
      <Curious />
      <Collaborative />
      <PeopleMarquee />
      <div className="banner4">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6 col-sm-12 left_connect_container cls_textContentBox">
            <div class="cls_description2">
              <p
                role="text"
                aria-label="We’re bringing a diverse team of creators, thought-leaders and brand experts to the table to revolutionize the way we work and deliver breakthrough ideas at the speed of culture."
              >
                The more diverse opinions & voices we have, the stronger our
                work and team will be. So let's listen and learn from each
                other. And push to ensure that
              </p>
            </div>
            <div
              role="text"
              class="cls_subdescription"
              aria-label="You can sit with us!"
            >
              <p>everyone on our team has a voice and a seat at the table.</p>
            </div>
            <div class="bottom-image">
              {" "}
              <img
                class="bottom-image"
                src="https://d2ozwg77fjfk77.cloudfront.net/636/studio/assets/v1665646280191_2035437876/TK_Logo_2022-poppy_red.svg"
                title="vector-image"
                alt="vector-image"
                aria-label="vector-image"
              />{" "}
            </div>
          </div>

          <div className="col-lg-6 col-sm-12 ">
            <video width="100%" height="auto" autoPlay muted>
              <source
                src="https://d2ozwg77fjfk77.cloudfront.net/kraftuat/kraftbrands/kitchen/v202212011152p/video/TK_PeoplePixels_v2.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <StalkUs />
    </>
  );
};

export default About;
