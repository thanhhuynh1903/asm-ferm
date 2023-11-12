import React from "react";
import SearchBarAM from "../../atoms/search-bar";
import "./index.scss";
import ExportDropdown from "../export-dropdown";
import Sort from "../sort";
const UMHeader = ({ sort, setSort }) => {
  return (
    <div className="w-100 d-flex justify-content-between">
      <div>
        <SearchBarAM />
      </div>
      <div className="d-flex">
        <Sort sort={sort} setSort={setSort} />
        <ExportDropdown />
      </div>
    </div>
  );
};

export default UMHeader;
