import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal, Space, Switch, message } from "antd";
import RoleSelection from "../../atoms/select-roles";
import { ButtonBlue, ButtonNone } from "../../atoms/button";
import { PlusCircleFill } from "react-bootstrap-icons";
import api from "../../../config/axios";
import AvatarUser from "../../atoms/avatar";
import { FormOutlined } from "@ant-design/icons";
const CreateUserModal = ({ url, refresh, setRefresh, roles, status, user }) => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [image, setImage] = useState({});
  const [switchStatus, setSwitchStatus] = useState(false);
  const [postData, setPostData] = useState({
    loading: false,
    error: false,
    data: [],
  });
  const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 16,
      offset: 1,
    },
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
    },
  };
  const showModal = () => {
    setOpen(true);
  };
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Create new user successfully",
    });
  };
  const error = (data) => {
    messageApi.open({
      type: "error",
      content: data,
    });
  };
  const handleOk = (form) => {
    setConfirmLoading(true);
    setTimeout(() => {
      setConfirmLoading(false);
      setOpen(false);
      form.resetFields();
      success();
      setRefresh(refresh + 1);
    }, 1000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const postNewUser = async (formContent, callback) => {
    try {
      console.log(formContent);
      const formData = new FormData();
      formData.append("user", JSON.stringify(formContent));
      formData.append("file", image);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const response = await api.post(url, formData, config);
      callback(response.status, response.data);
      return response;
    } catch (e) {
      callback(e.status, e.response.data.message);
    }
  };
  const onSubmit = (values) => {
    setPostData({ ...postData, loading: true, error: false });
    postNewUser(values, (status, data) => {
      if (status === 201) {
        setPostData({ ...postData, loading: false, data: data });
        handleOk(form);
        setImage(null);
      } else {
        setPostData({
          ...postData,
          loading: false,
          error: true,
        });
        error(data);
      }
    });
  };
  const getFile = (e) => {
    console.log(e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const initialStatus = async () => {
    await user;
    console.log(user);
    user ? setSwitchStatus(user.enabled) : setSwitchStatus(false);
    console.log(switchStatus);
  };
  useEffect(() => {
    initialStatus();
  }, [user]);
  return (
    <>
      {contextHolder}
      {status === "create" ? (
        <ButtonBlue
          label=<span>Create new user</span>
          icon={<PlusCircleFill className="fs-5" />}
          onClick={showModal}
        />
      ) : (
        <ButtonNone
          icon={<FormOutlined className="w-100" />}
          onClick={showModal}
        />
      )}
      <Modal
        title="Create new user"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        destroyOnClose={true}
        okText="Submit"
        cancelText="Cancel"
        footer={[
          <Form.Item
            wrapperCol={{
              ...layout.wrapperCol,
              offset: 8,
            }}
            key={1}
          >
            <Space>
              <Button key="Cancel" htmlType="reset" onClick={handleCancel}>
                Cancel
              </Button>
              <Button
                type="primary"
                form="AddUser"
                key="Submit"
                htmlType="submit"
                loading={postData.loading}
                onClick={() => {
                  form
                    .validateFields()
                    .then((values) => {
                      onSubmit(values.user);
                    })
                    .catch((info) => {
                      console.log("Validate Failed:", info);
                    });
                }}
              >
                Submit
              </Button>
            </Space>
          </Form.Item>,
        ]}
      >
        <Form
          {...layout}
          form={form}
          name="AddUser"
          style={{
            maxWidth: 600,
          }}
          validateMessages={validateMessages}
          preserve={false}
          scrollToFirstError
        >
          <Form.Item
            name={["user", "photos"]}
            getValueFromEvent={getFile}
            className="d-flex justify-content-center"
          >
            <AvatarUser setImage={setImage} />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[
              {
                required: true,
              },
              {
                type: "email",
              },
            ]}
            initialValue={status === "update" ? (user ? user.email : "") : ""}
          >
            <Input
              placeholder="Email"
              disabled={status === "update" ? true : false}
            />
          </Form.Item>
          <Form.Item
            name={["user", "firstName"]}
            label="First Name"
            rules={[
              {
                required: true,
              },
            ]}
            initialValue={
              status === "update" ? (user ? user.firstName : "") : ""
            }
          >
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item
            name={["user", "lastName"]}
            label="Last Name"
            rules={[
              {
                required: true,
              },
            ]}
            initialValue={
              status === "update" ? (user ? user.lastName : "") : ""
            }
          >
            <Input placeholder="Last Name" />
          </Form.Item>
          <Form.Item
            name={["user", "password"]}
            label="Password"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Password is required!",
              },
              ({ getFieldValue }) => ({
                validator: (_, value) => {
                  if (!value || /^.{8,20}$/.test(value)) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Password must be 8-20 characters!")
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["user", "password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue(["user", "password"]) === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The confirm password does not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <RoleSelection roles={roles} status={status} user={user} />

          <Form.Item
            name={["user", "enabled"]}
            label="Enabled"
            valuePropName="checked"
            initialValue={status === "create" ? false : switchStatus}
          >
            <Switch />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default CreateUserModal;
