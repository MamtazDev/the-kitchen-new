import React from "react";
import consumer from "../../assets/Michelangelo_ConsumerConnect.png";
import instagram from "../../assets/Instagram.png";
import linkdin from "../../assets/LinkedIn.png";
import { Link } from "react-router-dom";

const StalkUs = () => {
  return (
    <div className="stalk">
      <div className="stalk_container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6 col-sm-12 stalk_image">
            <a href="" className="cls_footerLogoImg ">
              
              <img src={consumer} alt="" />
            </a>
          </div>
          <div className="col-lg-6 col-sm-12 stalk_menuContainer">
            <h1 className="stalk">stalk us</h1>
            <div>
              <Link to="https://www.instagram.com/thekitchen_kraftheinz/">
                <img className="socialicon " src={instagram} alt="" />
              </Link>
              <Link to="https://www.linkedin.com/company/the-kitchen-chicago">
                
                <img className="socialicon " src={linkdin} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StalkUs;
