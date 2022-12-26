import React from "react";
import Button from "../../components/Buttons/Button/Button";
import "./Page404.scss";

const Page404: React.FC = () => {
  return (
    <div className="page-404">
      <div className="container page-404__container">
        <h1 className="page-404__heading">404</h1>
        <p className="page-404__description">
          Oops! The page can&apos;t be found
        </p>
        <div className="page-404__line"> </div>
        <p className="page-404__sorry-text">
          We&apos;re really sorry but we can&apos;t find the
          <br /> page you are looking for.
        </p>
        <div className="page-404__homepage-button_wrapper">
          <Button className="page-404__homepage-button">
            Back to the Homepage →
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Page404;
