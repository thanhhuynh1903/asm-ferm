import React from "react";
import loginImage from "../../../assets/img/login/login";
import { Form } from "antd";
import RegisterForm from "../../molecules/register-form";
import Logo from "../../atoms/logo/index";
import "./index.scss";
const Register = () => {
  return (
    <div className="w-100 px-0 px-lg-5 d-flex justify-content-center">
      <div className="w-75">
        <div
          className="d-flex w-100"
          style={{
            borderRadius: "20px",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          }}
        >
          <div className="col-sm-0 col-0 col-md-6 img ">
            <img
              src={loginImage}
              alt="Login"
              style={{ borderRadius: "20px 0 0 20px", objectFit: "cover" }}
            ></img>
          </div>
          <div className="col-12 col-md-6 form-container">
            <div className="mx-3 py-3 mx-sm-5 fs-5">
              <Logo />
            </div>
            <h3 className="text-dark text-center">Register</h3>
            <div className="py-4 bg-light d-flex align-items-center justify-content-center">
              <div className="w-100 offset-sm-2 input-container">
                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
