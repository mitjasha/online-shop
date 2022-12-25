import React from "react";
import Button from "../../components/Buttons/Button/Button";
// import PurchasesTableRow from "../../components/PurchasesTableRow/PurchasesTableRow";
import "./CartPage.scss";

const CartPage: React.FC = () => {
  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-page__title">
          <span className="cart-page__title-text">Shopping Cart ({0})</span>
        </div>
        <div className="purchases">
          <table className="purchases-table">
            <thead className="purchases-table__header">
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody className="purchases-table__body">
              <tr className="purchases-table__row">
                <td colSpan={4}> </td>
              </tr>
              <tr className="purchases-table__row">
                <td colSpan={4}> </td>
              </tr>
              <tr className="purchases-table__row">
                <td colSpan={4}> </td>
              </tr>
              <tr className="purchases-table__row">
                <td colSpan={4}> </td>
              </tr>
              <tr className="purchases-table__row">
                <td colSpan={4}> </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td className="purchases-table__promo">
                  <input
                    className="purchases-table__promo-input"
                    type="text"
                    placeholder="Coupon code"
                  />
                  <Button className="purchases-table__promo-button">
                    <span>Apply coupon</span>
                  </Button>
                </td>
              </tr>
            </tfoot>
          </table>
          <table className="total-table">
            <thead className="total-table__header">
              <tr>
                <th className="total-table__header-title">Cart totals</th>
              </tr>
            </thead>
            <tbody>
              <tr className="total-table__total">
                <td className="total-table__total-text">
                  Total <span className="total-table__total-value">$90.00</span>
                </td>
              </tr>
              <tr className="total-table__submit">
                <td>
                  <Button className="total-table__submit-button">
                    <span>Place an order</span>
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default CartPage;
