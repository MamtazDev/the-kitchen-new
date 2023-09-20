import React from "react";
import { Link } from "react-router-dom";
import "./Work.css";
import StalkUs from "../Connect/StalkUs";
import heizn from "../../assets/HEINZ.mp4";
import work2 from "../../assets/work-2.mp4";
import work1 from "../../assets/work1.mp4";
const Work = () => {
  return (
    <>
      {/* section 1 */}
      <div className="work_banner">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 col-sm-12 left_work_container">
            <div
              role="text"
              className="work_title"
              aria-label="You can sit with us!"
            >
              Turning the table on how work is made.
            </div>
            <div className="work_description">
              <p
                role="text"
                aria-label="We’re bringing a diverse team of creators, thought-leaders and brand experts to the table to revolutionize the way we work and deliver breakthrough ideas at the speed of culture."
              >
                We're revolutionizing the way we work to empower agility,
                ownership and risk taking with one shared goal - to make the
                best work of our lives.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-sm-12 ">
            <video width="100%" height="100%" autoPlay muted loop>
              <source
                src="https://d2ozwg77fjfk77.cloudfront.net/636/studio/assets/v1669837128309_506500362/TK_TurningTables_1.1.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        {/* section 2 */}
        <div className="section2_work">
          <h1 className="work">work</h1>
          <div className="container_wrap">
            <video
              width=""
              height="auto"
              controls
              className="responsive-iframe1"
            >
              <source src={work1} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* .section3 */}
        <div className="section3">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <video width="" height="" controls className="responsive-iframe">
                <source src={work2} type="video/mp4" />
              </video>
            </div>
            <div className="col-lg-6 col-sm-12">
              <video
                width=""
                height=""
                controls
                className="responsive-iframe frame3"
                style={{ marginLeft: "" }}
              >
                <source src={heizn} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="chat_wrap">
          <img
            className="collab"
            src="https://d2ozwg77fjfk77.cloudfront.net/636/studio/assets/v1666262708312_1559206247/point_click%201.png"
            alt="point-click"
          />{" "}
        </div>
        {/* view more button */}
        <div className="view-more">
          <Link to="/playlist" alt="view more">
            view more
          </Link>
        </div>
      </div>
      <StalkUs />
    </>
  );
};

export default Work;
