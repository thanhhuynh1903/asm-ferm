import React from "react";
import { Button, Result } from "antd";
import UnauthorizedImage from "../../../../assets/img/error/unauthorized-403.png";
const ServerError = () => (
  // <Result
  //   status="500"
  //   title="500"
  //   subTitle="Sorry, something went wrong."
  //   extra={<Button type="primary">Back Home</Button>}
  // />
  <div class="not-found col-12 d-flex justify-content-center flex-column align-items-center">
    <div class="not-found__content col-12 col-sm-8 col-xs-6 d-flex justify-content-center flex-column align-items-center px-3">
      <img class="unauthorized-image" alt={UnauthorizedImage} />
      <span class="not-found__title2">FORBIDDEN</span>
      <span class="not-found__content mt-3 text-center">
        Unfortunately, you don't have permission to access this page.
      </span>
      <button class="button-primary mt-3">Back to home</button>
    </div>
  </div>
);
export default ServerError;
