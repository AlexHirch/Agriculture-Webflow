import React, { useEffect } from "react";
import "../styles/license.scss";

const LicensePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div style={{ backgroundColor: "#FAFAFA", width: "100%" }}>
        <div className="LicensePage">
          <p>Licenses</p>
        </div>
      </div>
      <div className="License">
        <div className="box">
          <h1>Icon & Graphics</h1>
          <div className="left">
            <p>
              Icons and Graphics are manually designed by the <span>VictorFlow</span>
              Templates team. You may download these and edit them to fit your
              website without asking for permission or providing credit.
            </p>
            <p>
              Upon purchasing Software UI Kit Template our team grants you a
              nonexclusive, worldwide copyright license to download, copy,
              modify, and use the icons.``
            </p>
          </div>
        </div>
        <div className="box">
          <h1>Photography</h1>
          <div className="left">
            <p>
              All images used in the Organick Webflow Template are licensed for
              free personal and commercial use. If you'd like to use any
              specific image, you can check the licenses and download the images
              for free on Unsplash, Pexels‍. And Freepik.
            </p>
            <h2>Unsplash</h2>
            <h4>
              Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
              Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image
              14, Image 15, Image 16, Image 17, Image 18, Image 19, Image 20,
              Image 21, Image 22, Image 23, Image 24, Image 25,
            </h4>
            <h2>Pixcel</h2>
            <h4>
              Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
              Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image
              14, Image 15, Image 16, Image 17,{" "}
            </h4>
          </div>
        </div>
        <div className="box">
          <h1>Font</h1>
          <div className="left">
            <h5>
              Organick template uses free licensed Google Fonts. Please check{" "}
              <span>Roboto, Yellowtail</span>{" "}
              and <span>Open Sans.</span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default LicensePage;
