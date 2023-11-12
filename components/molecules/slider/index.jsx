import { Carousel } from "antd";
import React from "react";
import "./index.scss";
import slide1 from "../../../assets/img/landing-slider/slide1.png";
import slide2 from "../../../assets/img/landing-slider/slide2.jpg";
import slide3 from "../../../assets/img/landing-slider/slide3.png";
import slide4 from "../../../assets/img/landing-slider/slide4.jpg";
const contentStyle = {
  height: "280px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};
const Slider = () => {
  return (
    <>
      <Carousel autoplay>
        <div>
          <img
            src={slide1}
            className="slider-img"
            alt="Slide-1"
            style={contentStyle}
          ></img>
        </div>
        <div>
          <img
            src={slide2}
            className="slider-img"
            alt="Slide-2"
            style={contentStyle}
          ></img>
        </div>
        <div>
          <img
            src={slide3}
            className="slider-img"
            alt="Slide-3"
            style={contentStyle}
          ></img>
        </div>
        <div>
          <img
            src={slide4}
            className="slider-img"
            alt="Slide-4"
            style={contentStyle}
          ></img>
        </div>
      </Carousel>
    </>
  );
};

export default Slider;
