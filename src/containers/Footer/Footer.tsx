import React from "react";
import "./Footer.scss";
import logo from "../../assets/img/svg/logo.svg";
import MainMenuNavigation from "../../components/MainMenuNavigation/MainMenuNavigation";

const Footer: React.FC = () => {
  return (
    <footer className="footer container">
      <MainMenuNavigation />
      <div className="footer__wrapper">
        <img src={logo} alt="online store logo" />
      </div>
    </footer>
  );
};
export default Footer;
