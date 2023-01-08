import React from "react";
import PurchasesTable from "../../containers/PurchasesTable/PurchasesTable";
import OrderButton from "../../components/Buttons/OrderButton/OrderButton";
import "./CartPage.scss";
import { WineInfo } from "../../utils/helpers/interfaces";

interface CartPageProps {
  data: WineInfo[];
}

const CartPage: React.FC<CartPageProps> = ({ data }) => {
  return (
    <div className="cart-page">
      <div className="container cart-page__container">
        <div className="cart-page__title">
          <span className="cart-page__title-text">Shopping Cart ({4})</span>
        </div>
        <div className="purchases">
          <PurchasesTable data={data} />
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
                  <OrderButton className="total-table__submit-button">
                    Place an order
                  </OrderButton>
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
