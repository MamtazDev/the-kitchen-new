import React, { useEffect, useState } from "react";
import StalkUs from "./../Connect/StalkUs";
import "./Playlist.css";
import kraft from "../../assets/KRAFT.mp4";
import work2 from "../../assets/work-2.mp4";
import heizn from "../../assets/HEINZ.mp4";
import work1 from "../../assets/work1.mp4";

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
                src={work1}
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
                <source src={heizn} type="video/mp4" />
              </video>
            </div>
            <div className="col-lg-6 col-sm-12">
              <video
                width="100%"
                height="auto"
                controls
                className="responsive-iframe"
              >
                <source src={work2} type="video/mp4" />
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
