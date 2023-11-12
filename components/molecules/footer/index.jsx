import {
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  MessageOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import AboutUs from "../../pages/about-us";
import Contact from "../contact";
import Logo from "../../atoms/logo";
import "./index.scss";

const Footer = () => {
  return (
    <footer className="w-100 d-flex flex-column">
      <div className="w-100 d-flex justify-content-center">
        <div className="footer-content py-4 w-75">
          <div className="d-flex offset-sm-2">
            <div className="text-dark col-3">
              <Logo />
              <div className="d-flex align-items-center mt-3">
                <Link to="" className="text-decoration-none">
                  <FacebookOutlined className="fs-icon-3 mr-2" />
                </Link>
                <Link to="" className="text-decoration-none">
                  <InstagramOutlined className="fs-icon-3 mx-2" />
                </Link>
                <Link to="" className="text-decoration-none">
                  <MailOutlined className="fs-icon-3" />
                </Link>
              </div>
            </div>
            <div className="col-3 d-flex flex-column">
              <div className="">
                <Link
                  to=""
                  className="text-uppercase fw-bold text-dark text-decoration-none"
                >
                  <PhoneOutlined className="fs-icon-2" />
                  <span className="offset-1 fw-bold">Help center</span>
                </Link>
              </div>
              <div className="mt-3">
                <Link
                  to=""
                  className="text-uppercase fw-bold text-dark text-decoration-none"
                >
                  <MessageOutlined className="fs-icon-2" />
                  <span className="offset-1 ">FAQ</span>
                </Link>
              </div>
            </div>
            <div className="col-3 d-flex flex-column">
              <Link
                to=""
                className="text-uppercase fw-bold text-dark text-decoration-none"
              >
                <span>About us</span>
              </Link>
              <Link to="" className="text-dark text-decoration-none mt-3">
                Landing
              </Link>
              <Link to="" className="text-dark text-decoration-none mt-1">
                Overview
              </Link>
            </div>
            <div className="col-3 d-flex flex-column">
              <Link
                to=""
                className="text-uppercase fw-bold text-dark text-decoration-none"
              >
                Shopping
              </Link>
              <Link to="" className="text-dark text-decoration-none mt-3">
                All Products
              </Link>
              <Link to="" className="text-dark text-decoration-none mt-1">
                Trending
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-dark text-center bg-secondary w-100 py-3">
        Copyright &copy; PetHub 2023
      </div>
    </footer>
  );
};

export default Footer;
