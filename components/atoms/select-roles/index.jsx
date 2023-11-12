import React, { useEffect, useState } from "react";
import { Form, Select, Space } from "antd";
import api from "../../../config/axios";
const { Option } = Select;
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const RoleSelection = ({ roles, status, user }) => {
  return (
    <Form.Item
      name={["user", "roles"]}
      label="Roles"
      rules={[
        {
          type: "array",
        },
      ]}
      initialValue={
        status === "update"
          ? user
            ? user.roles.map((role) => role.id)
            : []
          : []
      }
    >
      <Select
        mode="multiple"
        style={{
          width: "100%",
        }}
        placeholder="Roles"
        onChange={handleChange}
        optionLabelProp="label"
      >
        {roles.map((role) => (
          <Option key={role.id} value={role.id} label={role.name}>
            <Space>
              <span role="img" aria-label={role.name}>
                {role.name.slice(0, 2).toUpperCase()}
              </span>
              {role.name}
            </Space>
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};
export default RoleSelection;
