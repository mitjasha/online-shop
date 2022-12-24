import React from "react";
import Button from "../../components/Buttons/Button/Button";
import PurchasesTableRow from "../../components/PurchasesTableRow/PurchasesTableRow";
import "./CartPage.scss";

const CartPage: React.FC = () => {
  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-page__title">
          <span className="cart-page__title-text">Shopping Cart ({0})</span>
        </div>
        <div className="purchases">
          <div className="purchases__table-container">
            <div className="purchases__wrapper">
              <div className="purchases__table-header"> </div>
              <PurchasesTableRow />
              <PurchasesTableRow />
            </div>
            <div className="purchases__table-footer">
              <input
                className="purchases__table-promo-input"
                type="text"
                placeholder="Coupon code"
              />
              <Button className="purchases__table-promo-button">
                <span>Apply coupon</span>
              </Button>
            </div>
          </div>
          <div className="purchases__total-container">
            <div className="purchases__total-header">
              <span>Cart totals</span>
            </div>
            <div className="purchases__total-body">
              <div className="purchases__total-value">
                <span>Total ${90.0}</span>
              </div>
              <Button className="purchases__total-button">
                <span>Place an order</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartPage;
