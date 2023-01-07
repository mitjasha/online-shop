import React, { useEffect, useState } from "react";
import heartIcon from "../../assets/img/svg/heart-icon.svg";
import cartIcon from "../../assets/img/svg/cart-icon.svg";
import LogoComponent from "../../components/LogoComponent/LogoComponent";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import MainMenuNavigation from "../../components/MainMenuNavigation/MainMenuNavigation";
import "./Header.scss";

interface HeaderProps {
  cart: { [key: string]: number };
}

const Header: React.FC<HeaderProps> = ({ cart }) => {
  const cartArr = Object.entries(cart).map((e) => ({ [e[0]]: e[1] }));
  const [total, setTotal] = useState({
    price: 500,
    count: cartArr.reduce((prev, curr) => {
      return prev + Number(Object.values(curr)[0]);
    }, 0),
  });
  console.log(Object.keys(cart));

  useEffect(() => {
    setTotal({
      price: 500,
      count: cartArr.reduce((prev, curr) => {
        return prev + Object.values(curr)[0];
      }, 0),
    });
    console.log("eff");
  }, [cart]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <LogoComponent />
          <div className="wrapper__items">
            <SearchComponent />
            <div className="shopping-info">
              <div className="total-sum">Total: $0.00</div>
              <img src={heartIcon} alt="favorities" className="favorities" />
              <div className="cart__container">
                <img src={cartIcon} alt="cart" className="cart" />
                <span className="cart__count">{total.count}</span>
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
