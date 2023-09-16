import React, { useState } from "react";
import StalkUs from "./../Connect/StalkUs";
import "./Playlist.css";
const Playlist = () => {
  const [showmore, setShowmore] = useState(false);
  const handleshowMore = () => {
    console.log("sksjdfhkds");
    setShowmore(!showmore);
    console.log(showmore);
  };

  return (
    <>
      {/* .section3 */}
      <div className="section3 work_banner" style={{ paddingTop: "50px" }}>
        <div className="row ">
          <div className="col-lg-6 col-sm-12">
            <video
              width="100%"
              height="auto"
              controls
              className="responsive-iframe"
            >
              <source
                src="https://contenthub.kraftheinz.com/api/delivery/v1/khfc-p-001/local-584bf540012248e29b4ff9957cfb3a47?intent=download&expires=2023-09-15T12%3A41%3A26.9137979%2B00%3A00&entityid=7589481&rendition=property%3AMainFile&signature=HfFOtpBCNgk"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="col-lg-6 col-sm-12">
            <video
              width="100%"
              height="auto"
              controls
              className="responsive-iframe"
            >
              <source
                src="https://contenthub.kraftheinz.com/api/delivery/v1/khfc-p-001/local-040442fd824744a98731054450567fc0?intent=download&expires=2023-09-15T12%3A41%3A26.9138768%2B00%3A00&entityid=2787932&rendition=property%3AMainFile&signature=AuCgBYJtEV8"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        {showmore && (
          <div className="row mt-5 mb-5">
            <div className="col-lg-6 col-sm-12">
              <video
                width="100%"
                height="auto"
                controls
                className="responsive-iframe"
              >
                <source
                  src="https://contenthub.kraftheinz.com/api/delivery/v1/khfc-p-001/local-ebe496261de446fc9c68ac1f3b09a9ce?intent=download&expires=2023-09-15T12%3A41%3A26.9139245%2B00%3A00&entityid=2787778&rendition=property%3AMainFile&signature=BO0gak2i8Kc"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="col-lg-6 col-sm-12">
              <video
                width="100%"
                height="auto"
                controls
                className="responsive-iframe"
              >
                <source
                  src="https://contenthub.kraftheinz.com/api/delivery/v1/khfc-p-001/local-ccbbf6c7195e443688d901f2f701f472?intent=download&expires=2023-09-15T12%3A41%3A26.9140244%2B00%3A00&entityid=2787768&rendition=property%3AMainFile&signature=SUTTJn8X0pw"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        )}
        {/* view more button */}
        {showmore ? (
          ""
        ) : (
          <div class="view-more" onClick={handleshowMore}>
            <a type="button" alt="view more">
              Load more
            </a>
          </div>
        )}
      </div>
      <StalkUs />
    </>
  );
};

export default Playlist;
