import React from "react";
import { ButtonBlue, ButtonGray } from "../../atoms/button";
import { Space, Table, Tooltip } from "antd";
import "./index.scss";
import api from "../../../config/axios";
import CreateUserModal from "../../molecules/create-user-modal";
import DeleteUser from "../../atoms/delete-user";
const UsersTable = ({
  loading,
  users,
  numberOfEach,
  totalUsers,
  roles,
  refresh,
  setRefresh,
}) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      className: "col-1",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Avatar",
      dataIndex: "photos",
      key: "photos",
      className: "col-2",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      className: "col-2",
      ellipsis: {
        showTitle: false,
      },
      render: (email) => (
        <Tooltip placement="topLeft" title={email}>
          {email}
        </Tooltip>
      ),
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      className: "col-1",
      ellipsis: {
        showTitle: false,
      },
      render: (firstName) => (
        <Tooltip placement="topLeft" title={firstName}>
          {firstName}
        </Tooltip>
      ),
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
      className: "col-1",
      ellipsis: {
        showTitle: false,
      },
      render: (lastName) => (
        <Tooltip placement="topLeft" title={lastName}>
          {lastName}
        </Tooltip>
      ),
      sorter: (a, b) => a.lastName.localeCompare(b.lastName),
    },
    {
      title: "Roles",
      dataIndex: "roles",
      key: "roles",
      className: "col-2",
      ellipsis: {
        showTitle: false,
      },
      filters: roles.map((role) => ({ text: role.name, value: role.name })),
      filterSearch: true,
      filterMode: "tree",
      render: (roles) =>
        roles.length > 0 ? roles.map((role) => role.name).join(", ") : "User",
      onFilter: (value, record) =>
        record.roles
          ? record.roles
              .map((role) => role.name)
              .join()
              .includes(value)
          : false,
    },
    {
      title: "Status",
      dataIndex: "enabled",
      key: "enabled",
      className: "col-1",
      render: (enabled, record) => (
        <Tooltip placement="topLeft" title="Click to change user status!">
          <Space className="w-100">
            {enabled ? (
              <Tooltip placement="topLeft" title="Click to disabled user!">
                <ButtonBlue
                  label="Active"
                  className="w-100"
                  onClick={(e) => {
                    updateStatus(record.id, enabled);
                  }}
                />
              </Tooltip>
            ) : (
              <Tooltip placement="topLeft" title="Click to active user!">
                <ButtonGray
                  label="Disable"
                  className="w-100 d-flex justify-content-center text-center"
                  onClick={(e) => {
                    updateStatus(record.id, enabled);
                  }}
                />
              </Tooltip>
            )}
          </Space>
        </Tooltip>
      ),
      filters: [
        {
          text: "Active",
          value: true,
        },
        {
          text: "Disabled",
          value: false,
        },
      ],
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value, record) => record.enabled === value,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      className: "col-1",
      render: (item, record) => (
        <Space>
          <CreateUserModal
            refresh={refresh}
            setRefresh={setRefresh}
            roles={roles}
            url="update/user"
            status="update"
            user={record}
          />
          <DeleteUser
            id={record.id}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        </Space>
      ),
    },
  ];
  const updateStatus = async (id, enabled) => {
    const response = await api.put(
      `/users/edit/enabled?id=${id}&enabled=${!enabled}`
    );
    if (response.status === 200) {
      setRefresh(refresh + 1);
    }
    console.log(response);
  };
  return (
    <div>
      <Table
        loading={loading}
        columns={columns}
        dataSource={users}
        pagination={{
          defaultPageSize: numberOfEach,
          pageSizeOptions: ["4", "10", "20", "50", "100"],
        }}
      />
    </div>
  );
};

export default UsersTable;
