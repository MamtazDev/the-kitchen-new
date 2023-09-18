import React from "react";
import welcomeKitchen from "../../assets/welcome_to_the_kitchen_sticker.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner1_border">
      <div
        className="banner d-flex justify-content-center align-items-center"
        id="banner_one"
      >
        <div className="banner_left_text">
          <div
            role="text"
            className="cls_Title"
            aria-label="Welcome to The Kitchen"
          >
            Welcome to The Kitchen
          </div>
          <div className="cls_description">
            <p
              role="text"
              aria-label="We're the in-house agency at Kraft Heinz. Built to cook up bold ideas for our iconic brands that are powered by culture, creativity and collaboration. "
            >
              We're the in-house agency at Kraft Heinz. Built to cook up bold
              ideas for our iconic brands that are powered by culture,
              creativity and collaboration.
            </p>
          </div>
        </div>
        <div className="cls_imageContent object ">
          <img
            className="img-fluid cls_imagebannerCont"
            src={welcomeKitchen}
            alt=""
          />
        </div>
      </div>
      <div className="videooo">
        <video width="100%" height="auto" controls className="" >
          <source
            src="https://contenthub.kraftheinz.com/api/public/content/ff2a71f6b1ac4aeab38c7b1ab420c646?v=4aa8bb60"
            type="video/mp4"
          />
        </video>
        <div className="point_click">
          <img
          width={200}
          className="poin_image"
            alt="point-click"
            src="https://d2ozwg77fjfk77.cloudfront.net/636/studio/assets/v1665402708194_120193136/point_click.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
