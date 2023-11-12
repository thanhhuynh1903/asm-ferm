import { Component } from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../../molecules/nav-admin";
import SideBar from "../../molecules/side-bar/index";
import FooterAM from "../../molecules/footer-admin";
import "./index.scss";
import { FloatButton } from "antd";
class AdminLayout extends Component {
  render() {
    return (
      <div id="admin-layout">
        <div className="d-flex w-100" id="admin-layout-content">
          <div className="col-2 col-sm-1 col-md-3 col-lg-2 vh-100 sticky-top">
            <SideBar />
          </div>
          <div
            className="col-10 col-sm-11 col-md-9 col-lg-10"
            id="right-layout"
          >
            <div className="sticky-top">
              <NavigationBar />
            </div>
            <Outlet />
            <FloatButton.BackTop visibilityHeight={300} />
            <div className="mt-auto">
              <FooterAM />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminLayout;
