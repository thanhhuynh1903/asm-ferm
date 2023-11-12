import React from "react";
import { Button, Result } from "antd";
import NotFoundImage from "../../../../assets/img/error/not-found-404.avif";
const NotFound = () => (
  // <Result
  //   status="404"
  //   title="404"
  //   subTitle="Sorry,the page you visited does not exist.."
  //   extra={
  //     <Button type="primary" href="/home">
  //       Back Home
  //     </Button>
  //   }
  // />
  <div class="not-found col-12 d-flex justify-content-center flex-column align-items-center">
    <div class="not-found__content col-12 col-sm-8 col-xs-6 d-flex justify-content-center flex-column align-items-center px-3">
      <img class="not-found-image" src={NotFoundImage} alt="Not Found" />
      <span class="not-found__title2">OOPS! NOTHING WAS FOUND</span>
      <span class="not-found__content mt-3 text-center">
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </span>
      <button class="button-primary mt-3">Back to home</button>
    </div>
  </div>
);
export default NotFound;
