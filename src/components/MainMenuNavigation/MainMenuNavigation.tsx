import React from "react";
import "./MainMenuNavigation.scss";

const MainMenuNavigation: React.FC = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="list__item">HOME</li>
        <li className="list__item">CATALOGUE</li>
        <li className="list__item">CONTACTS</li>
        <li className="list__item">CART</li>
      </ul>
    </nav>
  );
};

export default MainMenuNavigation;
