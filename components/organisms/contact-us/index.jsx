import { Button, Form, Input } from "antd";
import React from "react";
import "./index.scss";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h3 className="mb-3">Contact Us</h3>
      <Form
        name="contact-us"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 20,
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
          <Input />
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
          <Input />
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
          <Input.TextArea />
        </Form.Item>
        <div className="d-flex justify-content-center">
          <Button
            type="primary"
            htmlType="submit"
            style={{ background: "#E74646" }}
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ContactUs;
