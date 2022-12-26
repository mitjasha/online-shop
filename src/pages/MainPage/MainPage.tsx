import React from "react";
import "./MainPage.scss";
import redWine from "../../assets/img/jpg/red-main.jpg";
import whiteWine from "../../assets/img/jpg/white-main.jpg";
import sparklingWine from "../../assets/img/jpg/sparkling-main.jpg";
import roseWine from "../../assets/img/jpg/rose-main.jpg";
import Button from "../../components/Buttons/Button/Button";
import couponImg from "../../assets/img/jpg/christmas-coupon.jpg";

const MainPage: React.FC = () => {
  return (
    <main className="main">
      <section className="preview">
        <div className="container">
          <h1 className="preview__quote">
            I drink wine and
            <br />I know things
          </h1>
          <p className="quote-author">Tyrion Lannister</p>
          <div className="preview__buttons">
            <Button
              className="preview__button"
              style={{ backgroundColor: "#998431", border: "none" }}
            >
              CATALOGUE
            </Button>
            <Button
              className="preview__button"
              style={{ backgroundColor: "#998431", border: "none" }}
            >
              CART
            </Button>
          </div>
        </div>
      </section>
      <section className="coupon">
        <div className="container">
          <hr className="break-line" />
          <div className="coupon__wrapper">
            <img src={couponImg} alt="sparkling wine" className="coupon__img" />
            <div className="coupon__info">
              <p className="coupon__text">
                MAKE THE MOST MAGICAL NIGHT OF THE YEAR MEMORABLE WITH OUR WINE
                COLLECTION!
              </p>
              <p className="coupon__text">
                GET <span className="text__bold">10%</span> OFF WITH OUR
                CHRISTMAS COUPON
              </p>
              <Button
                className="coupon__button"
                style={{ backgroundColor: "#998431", border: "none" }}
              >
                COPY COUPON
              </Button>
            </div>
          </div>
          <hr className="break-line" />
        </div>
      </section>
      <section className="categories">
        <div className="container">
          <div className="categories__wrapper">
            <h2 className="categories__title">SHOP BY CATEGORY</h2>
            <div className="categories__images">
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
            <div className="categories__buttons">
              <Button
                className="categories__button"
                style={{
                  backgroundColor: "#e5e5e5",
                  border: "1px solid black",
                }}
              >
                RED WINE
              </Button>
              <Button
                className="categories__button"
                style={{
                  backgroundColor: "#e5e5e5",
                  border: "1px solid black",
                }}
              >
                WHITE WINE
              </Button>
              <Button
                className="categories__button"
                style={{
                  backgroundColor: "#e5e5e5",
                  border: "1px solid black",
                }}
              >
                SPARKLING WINE
              </Button>
              <Button
                className="categories__button"
                style={{
                  backgroundColor: "#e5e5e5",
                  border: "1px solid black",
                }}
              >
                ROSÉ WINE
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default MainPage;
