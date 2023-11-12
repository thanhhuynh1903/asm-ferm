import { Button, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { CloudDownloadFill } from "react-bootstrap-icons";
import { useEffect } from "react";
import api from "../../../config/axios";

const exportPDF = async () => {
  const response = await api.get("/users/export/pdf");
  if (response.status === 200) {
    const data = await response.data;
    <embed src={`data:application/pdf;base64,${data}`} />;
  }
};
const items = [
  {
    key: "1",
    label: (
      <Link rel="noopener noreferrer" to="" className="text-decoration-none">
        Export to PDF
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link rel="noopener noreferrer" to="" className="text-decoration-none">
        Export to Excel
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link rel="noopener noreferrer" to="" className="text-decoration-none">
        Export to SVG
      </Link>
    ),
  },
];
const ExportDropdown = () => {
  useEffect(() => {
    exportPDF();
  });
  return (
    <div>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomRight"
      >
        <Button
          className="btn-custom"
          style={{ border: "1px solid #4E73DF" }}
          icon=<CloudDownloadFill style={{ color: "#A7B9EF" }} />
        >
          Export
        </Button>
      </Dropdown>
    </div>
  );
};
export default ExportDropdown;
