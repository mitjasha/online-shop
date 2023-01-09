import React, { useEffect, useState } from "react";
import { AppContextType, useAppContext } from "../../context";
import heartIcon from "../../assets/img/svg/heart-icon.svg";
import cartIcon from "../../assets/img/svg/cart-icon.svg";
import LogoComponent from "../../components/LogoComponent/LogoComponent";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import MainMenuNavigation from "../../components/MainMenuNavigation/MainMenuNavigation";
import SearchResult from "../../components/SearchResult/SearchResult";
import "./Header.scss";
import { WineInfo } from "../../utils/helpers/interfaces";
import totalSolver from "../../utils/helpers/totalSum";

interface HeaderProps {
  data: WineInfo[];
  initData: WineInfo[];
}

const Header: React.FC<HeaderProps> = ({ data, initData }) => {
  const appContext = useAppContext();
  const cart: { [key: string]: number } = Object.assign(
    {},
    ...(appContext as AppContextType).currentCartState,
  );

  const cartArr = Object.entries(cart).map((e) => ({ [e[0]]: e[1] }));
  const [total, setTotal] = useState({
    price: totalSolver(data, cart),
    count: cartArr.reduce((prev, curr) => {
      return prev + Number(Object.values(curr)[0]);
    }, 0),
  });

  const [searchedKeyword, setSearchedKeyword] = useState("");

  useEffect(() => {
    setTotal({
      price: totalSolver(data, cart),
      count: cartArr.reduce((prev, curr) => {
        return prev + Number(Object.values(curr)[0]);
      }, 0),
    });
  }, [appContext]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedKeyword(event.target.value);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <LogoComponent />
          <div className="wrapper__items">
            <SearchComponent
              onSearchChange={handleSearchChange}
              searchedKeyword={searchedKeyword}
            />
            {searchedKeyword && (
              <div className="livesearch">
                {initData
                  .filter((elem) => elem.title.includes(searchedKeyword))
                  .map((elem, index) => (
                    <SearchResult
                      classname="livesearch__item"
                      data={elem}
                      id={initData.findIndex((object) => {
                        return object === elem;
                      })}
                      key={elem.title + index.toString()}
                    />
                  ))}
              </div>
            )}
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
