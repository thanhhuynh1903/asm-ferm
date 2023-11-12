import { Button } from "antd";
import React, { useState } from "react";
import { ArrowDownUp } from "react-bootstrap-icons";

const Sort = ({ sort, setSort }) => {
  return (
    <div>
      <Button
        className="btn-custom"
        style={{ border: "1px solid #4E73DF" }}
        icon=<ArrowDownUp style={{ color: "#A7B9EF" }} />
        onClick={() => {
          setSort(!sort);
        }}
      >
        Sort
      </Button>
    </div>
  );
};

export default Sort;
