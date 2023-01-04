import React from "react";
import heartIcon from "../../assets/img/svg/heart-icon.svg";
import cartIcon from "../../assets/img/svg/cart-icon.svg";
import LogoComponent from "../../components/LogoComponent/LogoComponent";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import MainMenuNavigation from "../../components/MainMenuNavigation/MainMenuNavigation";
import "./Header.scss";

interface HeaderProps {
  cartCount: string;
}

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <LogoComponent />
          <div className="wrapper__items">
            <SearchComponent />
            <div className="shopping-info" style={{ content: `${cartCount}` }}>
              <div className="total-sum">Total: $0.00</div>
              <img src={heartIcon} alt="favorities" className="favorities" />
              <div className="cart__container">
                <img src={cartIcon} alt="cart" className="cart" />
                <span className="cart__count">{cartCount}</span>
              </div>
            </div>
          </div>
        </div>
        <MainMenuNavigation />
      </div>
    </header>
  );
};

export default Header;
