import React from "react";
import Slider from "../../molecules/slider";
import "./index.scss";
import BestSeller from "../../organisms/best-seller";
import AboutUs from "../../organisms/about-us";
import ContactUs from "../../organisms/contact-us";
const Landing = () => {
  return (
    <div>
      <div className="landing-container">
        <Slider />
        <div className="my-5">
          <BestSeller />
        </div>
        <div className="my-3">
          <AboutUs />
        </div>
      </div>
    </div>
  );
};

export default Landing;
