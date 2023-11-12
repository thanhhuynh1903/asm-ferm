import React from "react";
import { Outlet } from "react-router-dom";

const NoLayout = () => {
  return (
    <div id="no-layout">
      <div className="w-100">
        <Outlet />
      </div>
    </div>
  );
};

export default NoLayout;
