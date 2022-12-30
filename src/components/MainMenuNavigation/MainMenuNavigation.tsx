import React from "react";
import Button from "../Buttons/Button/Button";
import "./MainMenuNavigation.scss";

const MainMenuNavigation: React.FC = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="list__item">
          <Button to="/">HOME</Button>
        </li>
        <li className="list__item">
          <Button to="/catalogue">CATALOGUE</Button>
        </li>
        <li className="list__item">
          <Button to="/contacts">CONTACTS</Button>
        </li>
        <li className="list__item">
          <Button to="/cart">CART</Button>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenuNavigation;
