import { UserOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import "./index.scss";
import React from "react";
import { Link } from "react-router-dom";
const items = [
  {
    key: "1",
    label: (
      <Link rel="noopener noreferrer" to="#" className="text-decoration-none">
        Profile
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link rel="noopener noreferrer" to="#" className="text-decoration-none">
        Logout
      </Link>
    ),
  },
];
const Account = () => {
  return (
    <>
      <Dropdown menu={{ items }} placement="bottomRight" arrow>
        <Button
          danger
          className="d-flex justify-content-center align-items-center account-btn"
        >
          <UserOutlined className="user-outline" />
        </Button>
      </Dropdown>
    </>
  );
};

export default Account;
