import React from "react";
import Button from "../../components/Buttons/Button/Button";
import redWine from "../../assets/img/jpg/red-main.jpg";
import whiteWine from "../../assets/img/jpg/white-main.jpg";
import sparklingWine from "../../assets/img/jpg/sparkling-main.jpg";
import roseWine from "../../assets/img/jpg/rose-main.jpg";
import couponImg from "../../assets/img/jpg/christmas-coupon.jpg";
import harvestImg from "../../assets/img/jpg/harvest-2021.jpg";
import couponBtnImg from "../../assets/img/svg/gift-coupon.svg";
import "./MainPage.scss";

const categoryImageArray = [
  { url: redWine, alt: "red wine" },
  { url: whiteWine, alt: "white wine" },
  { url: sparklingWine, alt: "sparkling wine" },
  { url: roseWine, alt: "rose wine" },
];

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
            <Button className="preview__button">CATALOGUE</Button>
            <Button className="preview__button">CART</Button>
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
              <Button className="coupon__button">
                <img src={couponBtnImg} alt="coupon" />
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
              {categoryImageArray.map((elem) => (
                <img
                  key={elem.alt}
                  src={elem.url}
                  alt={elem.alt}
                  className="categories__image"
                />
              ))}
            </div>
            <div className="categories__buttons">
              <Button className="categories__button">RED WINE</Button>
              <Button className="categories__button">WHITE WINE</Button>
              <Button className="categories__button">SPARKLING WINE</Button>
              <Button className="categories__button">ROSÉ WINE</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="harvest">
        <div className="container">
          <hr className="break-line" />
          <div className="harvest__wrapper">
            <div className="harvest__info">
              <h2 className="harvest__title">
                The 2021 Wine Harvests - The good and the bad
              </h2>
              <hr className="title__line" />
              <p className="harvest__text">
                Making an over-arching statement on something as complex as the
                wine harvest in one country is a tall order, let alone making
                such a statement on the harvest around the world. Different
                harvesting times, a distinct set of environmental factors and
                contrasting rules for each grape variety makes the job of a
                winemaker a real (but definitively rewarding) struggle. However,
                we can certainly have a look at some of the highlights for the
                2021 harvest.
              </p>
              <Button className="harvest__button">LEARN MORE</Button>
            </div>
            <img
              src={harvestImg}
              alt="glasses of wine"
              className="harvest__image"
            />
          </div>
          <hr className="break-line" />
        </div>
      </section>
    </main>
  );
};
export default MainPage;
