import React from "react";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
// import MainPage from "./pages/MainPage/MainPage";
import CataloguePage from "./pages/CataloguePage/CataloguePage";
// import ProductCardPage from "./pages/ProductCardPage/ProductCardPage";
// import CartPage from "./pages/CartPage/CartPage";
// import Page404 from "./pages/Page404/Page404";

const App: React.FC = () => (
  <div className="App">
    <Header />
    {/* <MainPage /> */}
    <CataloguePage />
    {/* <ProductCardPage />
    <CartPage />
    <Page404 /> */}
    <Footer />
  </div>
);

export default App;
