import React, { useEffect, useState } from "react";
import PurchasesTable from "../../containers/PurchasesTable/PurchasesTable";
import OrderButton from "../../components/Buttons/OrderButton/OrderButton";
import "./CartPage.scss";
import { WineInfo } from "../../utils/helpers/interfaces";
import { AppContextType, useAppContext } from "../../context";
import totalSolver from "../../utils/helpers/totalSum";

interface CartPageProps {
  data: WineInfo[];
}

const CartPage: React.FC<CartPageProps> = ({ data }) => {
  const appContext = useAppContext();
  const cart: { [key: string]: number } = Object.assign(
    {},
    ...(appContext as AppContextType).currentCartState,
  );
  const cartArr = Object.entries(cart).map((e) => ({ [e[0]]: e[1] }));
  const [total, setTotal] = useState({
    price: totalSolver(data, cart),
    count: cartArr.reduce((prev, curr) => {
      return prev + Number(Object.values(curr)[0]);
    }, 0),
  });

  useEffect(() => {
    setTotal({
      price: totalSolver(data, cart),
      count: cartArr.reduce((prev, curr) => {
        return prev + Number(Object.values(curr)[0]);
      }, 0),
    });
  }, [appContext]);

  return (
    <div className="cart-page">
      <div className="container cart-page__container">
        <div className="cart-page__title">
          <span className="cart-page__title-text">
            Shopping Cart ({total.count.toString()})
          </span>
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
                  Total{" "}
                  <span className="total-table__total-value">
                    ${total.price.toFixed(2)}
                  </span>
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
