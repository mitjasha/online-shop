import React from "react";
import "./Header.css";
import heartIcon from "../../../assets/img/heart-icon.svg";
import cartIcon from "../../../assets/img/cart-icon.svg";
import logo from "../../../assets/img/logo.svg";

const Header: React.FC = () => {
  return (
    <header className="header container">
      <div className="header__wrapper">
        <img src={logo} alt="online store logo" />
        <div className="wrapper__items">
          <form className="search">
            <input type="submit" className="search__submit" value="" />
            <input
              type="search"
              className="search__input"
              id="site-search"
              placeholder="Search"
            />
          </form>
          <div className="icons">
            <div className="icons__total">Total: $0.00</div>
            <img src={heartIcon} alt="heart" className="icons__heart" />
            <img src={cartIcon} alt="cart" className="icons__cart" />
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
