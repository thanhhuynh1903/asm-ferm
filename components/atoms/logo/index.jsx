import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const Logo = (props) => {
  return (
    <div>
      <span
        className={props.admin ? "fw-bold text-brown" : "fw-bold text-brown"}
      >
        Pet
      </span>
      <span
        className={
          props.admin
            ? "text-blue fw-bold"
            : props.color
            ? "fw-bold text-light"
            : "fw-bold text-primary"
        }
      >
        Hub
      </span>
    </div>
  );
};

export default Logo;
