import React, { useState } from "react";
import { ButtonNone } from "../button";
import { Trash2Fill } from "react-bootstrap-icons";
import { Button, Modal, Space, message } from "antd";
import api from "../../../config/axios";

const DeleteUser = ({ id, refresh, setRefresh }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const showModal = async () => {
    setOpen(true);
  };

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Delete user successfully",
    });
  };
  const error = (data) => {
    messageApi.open({
      type: "error",
      content: data,
    });
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setConfirmLoading(false);
      setOpen(false);
      //   success();
      setRefresh(refresh + 1);
    }, 300);
    success();
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const deleteUser = async (id, callback) => {
    try {
      const response = await api.post(`/users/delete?id=${id}`);
      console.log(response);
      callback(response.status, response.data.message);
      return response;
    } catch (e) {
      callback(e.status, e.response.data.message);
    }
  };
  const onSubmit = () => {
    deleteUser(id, (status, data) => {
      if (status === 200) {
        console.log("status: " + status);
        handleOk();
      } else {
        error(data);
      }
    });
  };
  return (
    <>
      {contextHolder}
      <ButtonNone
        icon={<Trash2Fill className="mb-1 fs-5" />}
        onClick={showModal}
      />
      <Modal
        open={open}
        title="Are you sure to delete?"
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={confirmLoading}
        destroyOnClose={true}
        footer={[
          <Space>
            <Button key="back" onClick={handleCancel} danger>
              Cancel
            </Button>
            <Button
              key="submit"
              type="primary"
              loading={confirmLoading}
              onClick={onSubmit}
            >
              Submit
            </Button>
          </Space>,
        ]}
      >
        <p>This action cannot be undone!</p>
      </Modal>
    </>
  );
};

export default DeleteUser;
