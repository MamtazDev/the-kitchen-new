import React from "react";
import "./Connect.css";
import { Link } from "react-router-dom";
const Connect = () => {
  return (
    <>
      <div className="banner2">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6 col-sm-12 left_connect_container">
            <div
              role="text"
              className="connect_title"
              aria-label="You can sit with us!"
            >
              You can sit with us!
            </div>
            <div className="connect_description">
              <p
                role="text"
                aria-label="We’re bringing a diverse team of creators, thought-leaders and brand experts to the table to revolutionize the way we work and deliver breakthrough ideas at the speed of culture."
              >
                We’re bringing a diverse team of creators, thought-leaders and
                brand experts to the table to revolutionize the way we work and
                deliver breakthrough ideas at the speed of culture.
              </p>
            </div>
            <div className="button_container">
              <Link
                to="mailto:TheKitchen@kraftheinz.com"
                className="cls_button"
              >
                connect with us
              </Link>
            </div>
          </div>

          <div className="col-lg-6 col-sm-12 ">
            <video width="100%" height="auto" autoPlay muted style={{borderRadius:"7.46612px" ,boxShadow:"9.95483px 9.95483px 0px #eeff67"}}>
              <source
                src="https://d2ozwg77fjfk77.cloudfront.net/kraftuat/kraftbrands/kitchen/v202212011152p/video/TK_PeoplePixels_v2.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Connect;
