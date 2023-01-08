import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import CataloguePage from "./pages/CataloguePage/CataloguePage";
import ProductCardPage from "./pages/ProductCardPage/ProductCardPage";
import CartPage from "./pages/CartPage/CartPage";
import Page404 from "./pages/Page404/Page404";
import { CardsState, WineInfo } from "./utils/helpers/interfaces";
import data from "./assets/data/data.json";
import AppContext, { AppContextType } from "./context";

let state: CardsState = {
  currentCards: [],
  favourites: [],
};

let cartState: { [key: string]: number }[] = [];

const App: React.FC = () => {
  if (JSON.parse(localStorage.getItem("state") as string)) {
    state = JSON.parse(localStorage.getItem("state") as string);
  } else {
    state.currentCards = Array.from(Array(data.goods.length).keys());
  }

  if (JSON.parse(localStorage.getItem("cartState") as string)) {
    cartState = JSON.parse(localStorage.getItem("cartState") as string);
  }

  const [currentCartState, setCurrentCartState] =
    useState<AppContextType["currentCartState"]>(cartState);

  const cartFilter = (): WineInfo[] => {
    const cartKeys = currentCartState.flatMap(Object.keys);
    const cartData: WineInfo[] = [];
    for (let i = 0; i < cartKeys.length; i += 1) {
      cartData[i] = data.goods[Number(cartKeys[i])];
    }
    return cartData;
  };

  useEffect(() => {
    localStorage.setItem("cartState", JSON.stringify(currentCartState));
  }, [cartFilter()]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AppContext.Provider value={{ currentCartState, setCurrentCartState }}>
      <Header data={cartFilter()} />
      <main className="main-app">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/catalogue" element={<CataloguePage state={state} />} />
          <Route path="/product/:id" element={<ProductCardPage />} />
          <Route path="/cart" element={<CartPage data={cartFilter()} />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
      <Footer />
    </AppContext.Provider>
  );
};

export default App;
