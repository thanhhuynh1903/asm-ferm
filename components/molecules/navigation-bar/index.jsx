import React, { useState } from "react";
import { Container, Form, Image, Nav, Navbar } from "react-bootstrap";
import { navigationLinks } from "../../../model/routes";
import Logo from "../../atoms/logo/index";
import "./index.scss";
import {
  BellOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import Account from "../../atoms/account-button";
import { ButtonPrimary } from "../../atoms/button";
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
      expand="md"
      bg="none"
      className={color ? "navbar-bg sticky-top" : "navbar sticky-top"}
    >
      <Container>
        <Navbar.Brand className="navbar-brand">
          <Logo color={color} unlink={true} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-auto">
            {navigationLinks.map((link) => (
              <Nav.Link
                key={link.id}
                href={link.path}
                className={color ? "fw-5 text-light" : "fw-5"}
              >
                {link.name}
              </Nav.Link>
            ))}
          </Nav>
          {/* <Form.Group>
            <Form.Control type="search"></Form.Control>
          </Form.Group> */}
          {/* <SearchOutlined style={{ color: "#fff", margin: "10px" }} />
          <ShoppingCartOutlined style={{ color: "#fff", margin: "10px" }} />
          <BellOutlined style={{ color: "#fff", margin: "10px" }} />
          <Account /> */}
          <div>
            <ButtonPrimary
              label="Register or Login"
              href="/login"
            ></ButtonPrimary>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
