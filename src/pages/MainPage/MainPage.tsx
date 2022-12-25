import React from "react";
import "./MainPage.scss";
import redWine from "../../assets/img/jpg/red-main.jpg";
import whiteWine from "../../assets/img/jpg/white-main.jpg";
import sparklingWine from "../../assets/img/jpg/sparkling-main.jpg";
import roseWine from "../../assets/img/jpg/rose-main.jpg";

const MainPage: React.FC = () => {
  return (
    <main className="main">
      <div className="container">
        <section className="preview">
          <h1 className="preview__quote">
            I drink wine and
            <br />I know things
          </h1>
          <p className="quote-author">Tyrion Lannister</p>
          <div className="preview__buttons">
            <button type="button" className="preview__button">
              CATALOGUE
            </button>
            <button type="button" className="preview__button">
              CART
            </button>
          </div>
        </section>
        <section className="categories">
          <div className="categories__wrapper">
            <div>
              <img src={redWine} alt="red wine" className="categories__image" />
              <img
                src={whiteWine}
                alt="white wine"
                className="categories__image"
              />
              <img
                src={sparklingWine}
                alt="sparkling wine"
                className="categories__image"
              />
              <img
                src={roseWine}
                alt="rose wine"
                className="categories__image"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
export default MainPage;
