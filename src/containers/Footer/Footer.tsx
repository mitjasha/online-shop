import React from "react";
import "./Footer.scss";
import logo from "../../assets/img/svg/logo.svg";
import MainMenuNavigation from "../../components/MainMenuNavigation/MainMenuNavigation";
import youtubeIcon from "../../assets/img/svg/youtube-icon.svg";
import vkIcon from "../../assets/img/svg/vk-icon.svg";
import fbIcon from "../../assets/img/svg/facebook-icon.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <MainMenuNavigation />
        <div className="footer__info">
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
            >
              <img src={youtubeIcon} alt="youtube" />
            </a>
            <a href="http://vk.com/" target="_blank" rel="noopener noreferrer">
              <img src={vkIcon} alt="vkontakte" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fbIcon} alt="facebook" />
            </a>
          </div>
          <div className="athors-wrapper">
            <p>© LITTLE BUMBLEBEES</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
