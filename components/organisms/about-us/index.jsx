import React from "react";
import AboutUsImage from "../../../assets/img/landing-about-us/about-us.jpg";
import "./index.scss";
import { Button } from "react-bootstrap";
import { ButtonPrimary } from "../../atoms/button";
const AboutUs = () => {
  return (
    <div className="d-flex about-us-container">
      <div className="w-lg-25 w-md-25 w-50 about-us-img mr-4">
        <img src={AboutUsImage} alt="AboutUs"></img>
      </div>
      <div className="w-lg-75 w-md-75 w-50 pl-4">
        <h3>About Us</h3>
        <span>
          We serve a best service and provide many product for cat and dog
        </span>
        <div className="mt-3">
          <div>
            <ButtonPrimary label="Read more"></ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
