import React from "react";
import { Button, Result } from "antd";
import ServerErrorImage from "../../../../assets/img/error/server-error-500.avif";
const UnauthorizedPage = () => (
  // <Result
  //   status="403"
  //   title="403"
  //   subTitle="Sorry, you are not authorized to access this page."
  //   extra={<Button type="primary">Back Home</Button>}
  // />
  <div class="not-found col-12 d-flex justify-content-center flex-column align-items-center">
    <div class="not-found__content col-12 col-sm-8 col-xs-8 d-flex justify-content-center flex-column align-items-center">
      <img
        src={ServerErrorImage}
        class="server-error__image"
        alt="Server Error"
      />
      <span class="not-found__title2">INTERNAL SERVER ERROR</span>
      <span class="not-found__content mt-3 text-center">
        The server encountered an internal error or misconfiguration and was
        unable to complete your request.
      </span>
      <button class="button-primary mt-3">Back to home</button>
    </div>
  </div>
);
export default UnauthorizedPage;
