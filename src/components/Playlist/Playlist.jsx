import React, { useEffect, useState } from "react";
import StalkUs from "./../Connect/StalkUs";
import "./Playlist.css";
import kraft from "../../assets/KRAFT.mp4";
const Playlist = () => {
  const [showmore, setShowmore] = useState(false);
  const handleshowMore = () => {
    console.log("sksjdfhkds");
    setShowmore(!showmore);
    console.log(showmore);
  };
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* .section3 */}
      <div className="section3 work_banner" style={{ paddingTop: "80px" }}>
        <div className="row ">
          <div className="col-lg-6 col-sm-12">
            <video
              width="100%"
              height="auto"
              controls
              className="responsive-iframe"
            >
              <source src={kraft} type="video/mp4" />
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
                src="https://contenthub.kraftheinz.com/api/delivery/v1/khfc-p-001/local-040442fd824744a98731054450567fc0?intent=download&expires=2023-09-19T11%3A11%3A12.9914528%2B00%3A00&entityid=2787932&rendition=property%3AMainFile&signature=1PoUI-4p-aA"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        {showmore && (
          <div className="row mt-5 mb-5 second_playlist">
            <div className="col-lg-6 col-sm-12">
              <video
                width="100%"
                height="auto"
                controls
                className="responsive-iframe"
              >
                <source
                  src="https://contenthub.kraftheinz.com/api/delivery/v1/khfc-p-001/local-ebe496261de446fc9c68ac1f3b09a9ce?intent=download&expires=2023-09-19T11%3A11%3A12.9915445%2B00%3A00&entityid=2787778&rendition=property%3AMainFile&signature=bFwdAUk-I4A"
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
                  src="https://contenthub.kraftheinz.com/api/delivery/v1/khfc-p-001/local-ccbbf6c7195e443688d901f2f701f472?intent=download&expires=2023-09-19T11%3A11%3A12.9916925%2B00%3A00&entityid=2787768&rendition=property%3AMainFile&signature=rIlj8cTvDts"
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
