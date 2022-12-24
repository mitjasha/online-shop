import React from "react";
import Button from "../../components/Buttons/Button/Button";
import PurchasesTableRow from "../../components/PurchasesTableRow/PurchasesTableRow";
import "./CartPage.scss";

const CartPage: React.FC = () => {
  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-page__title">Shopping Cart ({0})</div>
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
                Apply coupon
              </Button>
            </div>
          </div>
          <div className="purchases__total-container">
            <div className="purchases__total-header">Cart totals</div>
            <div className="purchases__total-body">
              <div className="purchases__total-value">Total ${90.0}</div>
              <Button className="purchases__total-button">
                Place an order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartPage;
