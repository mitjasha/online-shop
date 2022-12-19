import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-search">
        <img src="../../../assets/logo.svg" alt="online store logo" />
      </div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="list__item">HOME</li>
          <li className="list__item">CATALOGUE</li>
          <li className="list__item">CONTACTS</li>
          <li className="list__item">CART</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
