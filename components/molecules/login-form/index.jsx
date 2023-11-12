import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import Register from "../../pages/register";
import "./index.scss";
import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { LoginContext } from "../login-context/index.jsx";
import { useEffect, useState, useContext } from "react";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const LoginForm = () => {
  const { login } = useContext(LoginContext);
  const responseMessage = (response) => {
    console.log(response);
    login(true);
    //setUser({ name: "thienbao860", imageUrl: "new-image-url" });
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  <div className="w-75">
    <Form
      name="basic"
      wrappercol={{
        span: 25,
      }}
      style={{
        maxWidth: 340,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className="d-flex justify-content-center">
        <h2>Login with Google</h2>
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      </div>
    </Form>
  </div>;
};
export default LoginForm;
