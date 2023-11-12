import { Rate } from "antd";
import React from "react";

const Star = ({ value }) => {
  return (
    <div>
      <Rate disabled defaultValue={value} />
    </div>
  );
};

export default Star;
