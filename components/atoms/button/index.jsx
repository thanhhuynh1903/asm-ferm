import { Button } from "antd";
import React from "react";
import "./index.scss";
export const ButtonPrimary = (props) => {
  return (
    <Button
      type="primary"
      className="btn-custom btn-primary-custom"
      href={props.href}
    >
      {props.icon}
      {props.label}
    </Button>
  );
};

export const ButtonSuccess = (props) => {
  return (
    <Button className="btn-custom btn-success-custom" href={props.href}>
      {props.icon}
      {props.label}
    </Button>
  );
};

export const ButtonBlue = (props) => {
  return (
    <Button
      type="primary"
      className="btn-blue-custom"
      href={props.href}
      icon={props.icon}
      onClick={props.onClick}
    >
      {props.label}
    </Button>
  );
};

export const ButtonDanger = (props) => {
  return (
    <Button
      type="danger"
      className="btn-danger-custom"
      href={props.href}
      icon={props.icon}
    >
      {props.label}
    </Button>
  );
};

export const ButtonNone = (props) => {
  return (
    <Button
      className="btn-none-custom"
      href={props.href}
      icon={props.icon}
      onClick={props.onClick}
    >
      {props.label}
    </Button>
  );
};

export const ButtonGray = (props) => {
  return (
    <Button
      className="btn-gray-custom text-light"
      href={props.href}
      icon={props.icon}
      onClick={props.onClick}
      type="secondary"
    >
      {props.label}
    </Button>
  );
};
