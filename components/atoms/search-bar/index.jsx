import React from "react";
import "./index.scss";
import Search from "antd/es/input/Search";
const SearchBarAM = ({ onSearch }) => {
  return (
    <Search
      placeholder="Search for..."
      allowClear
      enterButton
      onSearch={onSearch}
      size="large"
    />
  );
};

export default SearchBarAM;
