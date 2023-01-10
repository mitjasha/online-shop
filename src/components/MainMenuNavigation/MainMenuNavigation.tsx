import React from "react";
import Button from "../Buttons/Button/Button";
import "./MainMenuNavigation.scss";

const MainMenuNavigation: React.FC = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="list__item">
          <Button to="/" className="main-menu-btn">
            HOME
          </Button>
        </li>
        <li className="list__item">
          <Button to="/catalogue" className="main-menu-btn">
            CATALOGUE
          </Button>
        </li>
        <li className="list__item">
          <Button to="/contacts" className="main-menu-btn">
            CONTACTS
          </Button>
        </li>
        <li className="list__item">
          <Button to="/cart" className="main-menu-btn">
            CART
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenuNavigation;
