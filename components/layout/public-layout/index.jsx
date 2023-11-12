import { Component } from "react";
import NavigationBar from "../../molecules/navigation-bar";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "../../pages/home";
import Footer from "../../molecules/footer";

class PublicLayout extends Component {
  render() {
    return (
      <div id="layout">
        <NavigationBar />
        <Outlet />
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    );
  }
}

export default PublicLayout;
