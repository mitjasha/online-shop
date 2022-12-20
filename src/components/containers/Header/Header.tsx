import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img
          // eslint-disable-next-line global-require
          src={require("../../../assets/img/logo.svg")}
          alt="online store logo"
        />
        <div className="wrapper__items">
          <div className="search">
            <img
              // eslint-disable-next-line global-require
              src={require("../../../assets/img/search-icon.png")}
              alt="search"
              className="search-button"
            />
            <input
              type="search"
              className="search-input"
              id="site-search"
              placeholder="Search"
            />
          </div>
          <div className="icons">
            <div>Total: $0.00</div>
            <img // eslint-disable-next-line global-require
              src={require("../../../assets/img/heart-icon.png")}
              alt="heart"
              className="heart-button"
            />
            <img // eslint-disable-next-line global-require
              src={require("../../../assets/img/cart-icon.png")}
              alt="cart"
              className="cart-button"
            />
          </div>
        </div>
      </div>
      <nav className="header__nav">
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
