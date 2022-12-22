import React from "react";
import "./Header.scss";
import heartIcon from "../../assets/img/svg/heart-icon.svg";
import cartIcon from "../../assets/img/svg/cart-icon.svg";
import logo from "../../assets/img/svg/logo.svg";
import Search from "../../components/search/search";

const Header: React.FC = () => {
  return (
    <header className="header container">
      <div className="header__wrapper">
        <img src={logo} alt="online store logo" />
        <div className="wrapper__items">
          <Search />
          <div className="shopping-info">
            <div className="total-sum">Total: $0.00</div>
            <img src={heartIcon} alt="favorities" className="favorities" />
            <img src={cartIcon} alt="cart" className="cart" />
          </div>
        </div>
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
