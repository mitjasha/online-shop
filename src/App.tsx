import React from "react";
import Header from "./components/containers/Header/Header";
import Footer from "./components/containers/Footer/Footer";
import MainPage from "./components/containers/MainPage/MainPage";

const App: React.FC = () => (
  <div className="App">
    <Header />
    <MainPage />
    <Footer />
  </div>
);

export default App;
