import React from "react";
import "./Footer.scss";
import logo from "../../assets/img/svg/logo.svg";
import MainMenuNavigation from "../../components/MainMenuNavigation/MainMenuNavigation";

const Footer: React.FC = () => {
  return (
    <footer className="footer container">
      <MainMenuNavigation />
      <div className="footer__wrapper">
        <div className="logo-wrapper">
          <img src={logo} alt="online store logo" />
        </div>
        <div className="phone-wrapper">
          <div className="phone">+375 (25) 123-45-67</div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
