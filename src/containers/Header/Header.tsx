import React, { useEffect, useState } from "react";
import { AppContextType, useAppContext } from "../../context";
import heartIcon from "../../assets/img/svg/heart-icon.svg";
import cartIcon from "../../assets/img/svg/cart-icon.svg";
import LogoComponent from "../../components/LogoComponent/LogoComponent";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import MainMenuNavigation from "../../components/MainMenuNavigation/MainMenuNavigation";
import "./Header.scss";
import { WineInfo } from "../../utils/helpers/interfaces";

interface HeaderProps {
  data: WineInfo[];
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  const appContext = useAppContext();
  const cart: { [key: string]: number } = Object.assign(
    {},
    ...(appContext as AppContextType).currentCartState,
  );
  const totalSolver = (): number => {
    return data.reduce((prev, curr, index) => {
      return (
        prev + Number(curr.price.slice(1)) * cart[Object.keys(cart)[index]]
      );
    }, 0);
  };
  const cartArr = Object.entries(cart).map((e) => ({ [e[0]]: e[1] }));
  const [total, setTotal] = useState({
    price: totalSolver(),
    count: cartArr.reduce((prev, curr) => {
      return prev + Number(Object.values(curr)[0]);
    }, 0),
  });

  useEffect(() => {
    setTotal({
      price: totalSolver(),
      count: cartArr.reduce((prev, curr) => {
        return prev + Number(Object.values(curr)[0]);
      }, 0),
    });
  }, [appContext]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <LogoComponent />
          <div className="wrapper__items">
            <SearchComponent />
            <div className="shopping-info">
              <div className="total-sum">Total: ${total.price.toFixed(2)}</div>
              <img src={heartIcon} alt="favorities" className="favorities" />
              <div className="cart__container">
                <img src={cartIcon} alt="cart" className="cart" />
                <span className="cart__count">{total.count.toString()}</span>
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
