import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import CataloguePage from "./pages/CataloguePage/CataloguePage";
import ProductCardPage from "./pages/ProductCardPage/ProductCardPage";
import CartPage from "./pages/CartPage/CartPage";
import Page404 from "./pages/Page404/Page404";

const App: React.FC = () => (
  <>
    <Header />
    <main className="main-app">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalogue" element={<CataloguePage />} />
        <Route path="/product" element={<ProductCardPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </main>
    <Footer />
  </>
);

export default App;
