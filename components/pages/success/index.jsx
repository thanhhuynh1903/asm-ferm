import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";
const Success = () => (
  <Result
    icon={<SmileOutlined />}
    title="Great, we have done all the operations!"
    extra={<Button type="primary">Next</Button>}
  />
);
export default Success;
