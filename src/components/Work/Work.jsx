import React from "react";
import { Link } from "react-router-dom";
import "./Work.css";
import StalkUs from "../Connect/StalkUs";
const Work = () => {
  return (
    <>
      {/* section 1 */}
      <div className="work_banner">
        <div className="row d-flex justify-content-center align-items-center">
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
            <video width="100%" height="100%" autoPlay muted>
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
              <source
                src="https://contenthub.kraftheinz.com/api/public/content/30d16c48961a4510a99d94ad23439b03?v=25761701"
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        {/* .section3 */}
        <div className="section3">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <video width="" height="" controls className="responsive-iframe">
                <source
                  src="https://contenthub.kraftheinz.com/api/public/content/c0a9f2931bc74435bd373fc33dfcfb33?v=1e44441f"
                  type="video/mp4"
                />
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
                <source
                  src="https://contenthub.kraftheinz.com/api/public/content/ff2a71f6b1ac4aeab38c7b1ab420c646?v=4aa8bb60"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
     {/*    <div className="chat_wrap">
          <img
            className="collab"
            src="https://d2ozwg77fjfk77.cloudfront.net/636/studio/assets/v1666262708312_1559206247/point_click%201.png"
            alt="point-click"
          />{" "}
        </div> */}
        {/* view more button */}
        <div className="view-more">
          <a href="/playlist" alt="view more">
            view more
          </a>
        </div>
      </div>
      <StalkUs />
    </>
  );
};

export default Work;
