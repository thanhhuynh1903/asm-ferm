import Logo from "../../atoms/logo/index";
import React from "react";
import { Button, Form, Input } from "antd";
import "./index.scss";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Contact = () => {
  return (
    <div>
      <Logo />
      <div className="">
        <Form
          name="contact-us"
          labelCol={{
            span: 3,
          }}
          wrapperCol={{
            span: 14,
          }}
          style={{
            width: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[
              {
                required: true,
                message: "Please input your full name!",
              },
            ]}
          >
            <Input
              style={{
                borderRadius: "20px",
                border: "none",
                background: "rgb(245,237,235)",
                backgroundImage:
                  "linear-gradient(180deg, rgb(240,227,222) 0%, rgb(245,237,235) 97%)",
                boxShadow:
                  "rgb(240,227,222) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
              }}
            />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              style={{
                borderRadius: "20px",
                border: "none",
                background: "rgb(245,237,235)",
                backgroundImage:
                  "linear-gradient(180deg, rgb(240,227,222) 0%, rgb(245,237,235) 97%)",
                boxShadow:
                  "rgb(240,227,222) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
              }}
            />
          </Form.Item>
          <Form.Item
            label="Message"
            name="message"
            rules={[
              {
                required: true,
                message: "Please input your message!",
              },
            ]}
          >
            <Input.TextArea
              style={{
                borderRadius: "20px",
                border: "none",
                background: "rgb(245,237,235)",
                backgroundImage:
                  "linear-gradient(180deg, rgb(240,227,222) 0%, rgb(245,237,235) 97%)",
                boxShadow:
                  "rgb(240,227,222) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
              }}
            />
          </Form.Item>
          <div className="d-flex justify-content-center">
            <Button
              type="primary"
              htmlType="submit"
              style={{
                borderRadius: "20px",
                background: "rgb(255, 120, 82)",
                backgroundImage:
                  "linear-gradient(to top, rgb(255,120,82) 0%, rgb(255,160,134) 97%);",
                color: "#FFF4F1",
              }}
              className="px-5 mx-auto"
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
