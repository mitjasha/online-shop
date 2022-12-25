import React from "react";
import Button from "../../components/Buttons/Button/Button";
import PurchasesTableRow from "../../components/PurchasesTableRow/PurchasesTableRow";
import "./CartPage.scss";
import data from "../../assets/data/data.json";

const CartPage: React.FC = () => {
  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-page__title">
          <span className="cart-page__title-text">Shopping Cart ({4})</span>
        </div>
        <div className="purchases">
          <table className="purchases-table">
            <thead className="purchases-table__header">
              <tr>
                <th colSpan={2}>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th colSpan={2}>Subtotal</th>
              </tr>
            </thead>
            <tbody className="purchases-table__body">
              <PurchasesTableRow
                title={data.goods[0].title}
                image2={data.goods[0].image2}
                price={data.goods[0].price}
              />
              <PurchasesTableRow
                title={data.goods[1].title}
                image2={data.goods[1].image2}
                price={data.goods[1].price}
              />
              <PurchasesTableRow
                title={data.goods[2].title}
                image2={data.goods[2].image2}
                price={data.goods[2].price}
              />
              <PurchasesTableRow
                title={data.goods[3].title}
                image2={data.goods[3].image2}
                price={data.goods[3].price}
              />
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
