import React from "react";
import Button from "../../components/Buttons/Button/Button";
import data from "../../assets/data/data.json";
import PurchasesTable from "../../containers/PurchasesTable/PurchasesTable";
import "./CartPage.scss";

const CartPage: React.FC = () => {
  return (
    <div className="cart-page">
      <div className="container cart-page__container">
        <div className="cart-page__title">
          <span className="cart-page__title-text">Shopping Cart ({4})</span>
        </div>
        <div className="purchases">
          <PurchasesTable data={data.goods} />
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
