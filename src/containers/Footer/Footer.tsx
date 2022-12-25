import React from "react";
import "./Footer.scss";
import LogoComponent from "../../components/LogoComponent/LogoComponent";
import MainMenuNavigation from "../../components/MainMenuNavigation/MainMenuNavigation";
import MediaLinks from "../../components/MediaLinks/MediaLinks";
import youtubeIcon from "../../assets/img/svg/youtube-icon.svg";
import vkIcon from "../../assets/img/svg/vk-icon.svg";
import fbIcon from "../../assets/img/svg/facebook-icon.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <MainMenuNavigation />
        <div className="footer__info">
          <div className="footer__logo">
            <LogoComponent />
          </div>
          <a href="tel:+375291234567" className="footer__phone">
            +375 (25) 123-45-67
          </a>
          <div className="footer__media">
            <MediaLinks
              link="https://www.youtube.com/"
              img={youtubeIcon}
              alt="youtube"
            />
            <MediaLinks link="http://vk.com/" img={vkIcon} alt="vkontakte" />
            <MediaLinks
              link="https://www.facebook.com/"
              img={fbIcon}
              alt="facebook"
            />
          </div>
          <p className="footer__authors">© LITTLE BUMBLEBEES</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
