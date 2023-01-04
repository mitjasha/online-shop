import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import CataloguePage from "./pages/CataloguePage/CataloguePage";
import ProductCardPage from "./pages/ProductCardPage/ProductCardPage";
import CartPage from "./pages/CartPage/CartPage";
import Page404 from "./pages/Page404/Page404";
import { CardsState } from "./utils/helpers/interfaces";
import data from "./assets/data/data.json";

let state: CardsState = {
  currentCards: [],
  favourites: [1, 4, 6],
  cart: { 1: 2, 2: 3, 3: 4 },
};

const App: React.FC = () => {
  if (JSON.parse(localStorage.getItem("state") as string)) {
    state = JSON.parse(localStorage.getItem("state") as string);
  } else {
    state.currentCards = Array.from(Array(data.goods.length).keys());
  }

  return (
    <>
      <Header cartCount={state.cart} />
      <main className="main-app">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/catalogue" element={<CataloguePage state={state} />} />
          <Route path="/product/:id" element={<ProductCardPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
