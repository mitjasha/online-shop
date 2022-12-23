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
          <div>+375 (25) 123-45-67</div>
        </div>
        <div className="media-wrapper">
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube"
          >
            <i aria-hidden="true" />
          </a>
          <a
            href="http://vk.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="vk"
          >
            <i aria-hidden="true" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <i aria-hidden="true" />
          </a>
        </div>
        <div className="athors-wrapper">
          <div>© LITTLE BUMBLEBEES</div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
