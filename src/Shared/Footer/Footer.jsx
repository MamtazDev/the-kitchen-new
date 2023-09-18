import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="copyright copyright_wrap">
        <div className="copyright-text">
          2022 The Kitchen. ©2022 Kraft Foods. ©2022 H.J. Heinz Company Brands
          LLC. All Rights Reserved
        </div>
        <div className="c-menu">
          <div>chicago</div>| <div>toronto</div>
        </div>
      </div>

      <div id="footer_count">
        
        <div className="copyright1 copyright_wrap content">
          
          <div className="privacy-wrapper">
            
            <div className="cls_footerLink">
              
              <a
                href="https://www.myfoodandfamily.com/privacynotice"
                target="_blank"
                aria-label="Privacy Policy"
                rel="noopener noreferrer"
                role="link"
              >
                
                Privacy Policy
              </a>
            </div>
            <span className="cls_footerBorder" aria-hidden="true">
              |
            </span>
            <div className="cls_footerLink">
              
              <a
                href="https://www.myfoodandfamily.com/useragreement"
                target="_blank"
                aria-label="Terms of Use"
                rel="noopener noreferrer"
                role="link"
              >
                
                Terms of Use
              </a>
            </div>
            <span className="cls_footerBorder" aria-hidden="true">
              |
            </span>
            <script> var productListJson1 = null; </script>
            <div className="cls_footerLink">
              <a
                href="https://www.myfoodandfamily.com/privacynotice#dontSellPersonalInfo"
                target="_blank"
                aria-label="Do Not Sell or Share My Personal Information"
                rel="noopener noreferrer"
                role="link"
              >
                
                Do Not Sell or Share My Personal Information
              </a>
            </div>
            <span className="cls_footerBorder" aria-hidden="true">
              |
            </span>
            <div className="cls_footerLink">
              
              <a
                href="https://www.myfoodandfamily.com/privacynotice#donotusemysensitivepersonalinfo"
                target="_blank"
                aria-label="Limit the Use of My Sensitive Personal Information"
                rel="noopener noreferrer"
                role="link"
              >
                
                Limit the Use of My Sensitive Personal Information
              </a>
            </div>
            <span className="cls_footerBorder" aria-hidden="true">
              |
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
