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

  const enterCouponFn = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "NewYear2023") {
      const apply = document.createElement("tr");
      (document.querySelector(".total-table__body") as HTMLElement).appendChild(
        apply,
      );
      apply.className = "apply-trow";
      const applyText = document.createElement("p");
      const applyBtn = document.createElement("button");
      apply.appendChild(applyText);
      apply.appendChild(applyBtn);
      applyText.style.width = "60%";
      applyBtn.style.width = "40%";
      applyText.textContent = `Apply ${event.target.value} promo?`;
      applyBtn.textContent = "Apply";
      applyBtn.className = "apply-btn";
    }
    if (event.target.value === "RSSchool") {
      const apply = document.createElement("tr");
      (document.querySelector(".total-table__body") as HTMLElement).appendChild(
        apply,
      );
      apply.className = "apply-trow";
      const applyText = document.createElement("p");
      const applyBtn = document.createElement("button");
      apply.appendChild(applyText);
      apply.appendChild(applyBtn);
      applyText.style.width = "60%";
      applyBtn.style.width = "40%";
      applyText.textContent = `Apply ${event.target.value} promo?`;
      applyBtn.textContent = "Apply";
      applyBtn.className = "apply-btn";
    }
  };

  return (
    <div className="cart-page">
      <div className="container cart-page__container">
        <div className="cart-page__title">
          <span className="cart-page__title-text">
            Shopping Cart ({total.count.toString()})
          </span>
        </div>
        <div className="purchases">
          <PurchasesTable data={data} enterCoupon={enterCouponFn} />
          <table className="total-table">
            <thead className="total-table__header">
              <tr>
                <th className="total-table__header-title">Cart totals</th>
              </tr>
            </thead>
            <tbody className="total-table__body">
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
