import React, { useState } from "react";
import {
  DashboardOutlined,
  MenuFoldOutlined,
  BarChartOutlined,
  CopyOutlined,
  UserOutlined,
  InboxOutlined,
  ShoppingOutlined,
  CarOutlined,
  ShopOutlined,
  SettingOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, ConfigProvider, Menu, Space } from "antd";
import { Link } from "react-router-dom";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(
    <Link to="/admin" className="text-decoration-none">
      Dashboard
    </Link>,
    "1",
    <DashboardOutlined />
  ),
  getItem(
    <Link to="/admin/menu" className="text-decoration-none">
      Menu
    </Link>,
    "2",
    <MenuFoldOutlined />
  ),
  getItem(
    <Link to="/admin/reports" className="text-decoration-none">
      Reports
    </Link>,
    "3",
    <BarChartOutlined />
  ),
  getItem(
    <Link to="/admin/articles" className="text-decoration-none">
      Articles
    </Link>,
    "4",
    <CopyOutlined />
  ),
  getItem(
    <Link to="/admin/users" className="text-decoration-none">
      Users
    </Link>,
    "5",
    <UserOutlined />
  ),
  getItem(
    <Link to="/admin/categories" className="text-decoration-none">
      Categories
    </Link>,
    "6",
    <InboxOutlined />
  ),
  getItem(
    <Link to="/admin/shippings" className="text-decoration-none">
      Shippings
    </Link>,
    "7",
    <ShoppingOutlined />
  ),
  getItem(
    <Link to="/admin/orders" className="text-decoration-none">
      Orders
    </Link>,
    "8",
    <CarOutlined />
  ),
  getItem(
    <Link to="/admin/shops" className="text-decoration-none">
      Shops
    </Link>,
    "9",
    <ShopOutlined />
  ),
  getItem(
    <Link to="/admin/setting" className="text-decoration-none">
      Setting
    </Link>,
    "10",
    <SettingOutlined />
  ),
];
const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              darkItemSelectedBg: "",
            },
          },
        }}
      >
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            marginBottom: 16,
            display: "none",
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          style={{ backgroundColor: "#4E73DF", height: "100%", flex: "auto" }}
        />
      </ConfigProvider>
    </div>
  );
};
export default SideBar;
