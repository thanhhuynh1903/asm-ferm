import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { navigationLinks } from "../../../model/routes";
import logo from "../../../assets/img/logo/logo.png";
import "./index.scss";
import { UserOutlined, BellFilled } from "@ant-design/icons";
import SearchBarAM from "../../atoms/search-bar";
import "./index.scss";
import Logo from "../../atoms/logo";
import { Dropdown } from "antd";
import { Link } from "react-router-dom";
const items = [
  {
    key: "1",
    label: (
      <Link
        rel="noopener noreferrer"
        to="/profile"
        className="text-decoration-none"
      >
        Profile
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link
        rel="noopener noreferrer"
        to="/Logout"
        className="text-decoration-none"
      >
        Logout
      </Link>
    ),
  },
];
export default function NavigationBar() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 60) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <Navbar
      expand="sm"
      className={
        color
          ? "bg-white sticky-top shadow-sm w-100 py-2"
          : "navbar sticky-top shadow-sm w-100 py-2"
      }
    >
      <Container>
        <Navbar.Brand href="/" className="navbar-brand">
          <Logo admin="true" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex justify-content-between w-100 px-3">
            {/* <SearchBarAM /> */}
          </div>
          <BellFilled className="icon-primary mx-3" />
          <Dropdown menu={{ items }} placement="bottomLeft">
            <div className="border-left-custom d-flex pl-2 pl-lg-3 align-items-center">
              <span className="text-dark border-left d-xl-inline d-lg-inline d-md-inline d-sm-none d-xs-none mx-3">
                Admin
              </span>
              <div className="rounded-circle d-flex justify-content-center align-items-center account-circle">
                <UserOutlined className="text-light fs-icon" />
              </div>
            </div>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
