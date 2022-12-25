import React from "react";
import "./MainPage.scss";

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
      </div>
    </main>
  );
};
export default MainPage;
