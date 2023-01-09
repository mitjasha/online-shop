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

  const appliedArr: string[] = [];

  const enterCouponFn = (event: React.ChangeEvent<HTMLInputElement>) => {
    const applyBtn = document.querySelector(
      ".purchases-table__promo-button",
    ) as HTMLButtonElement;
    const tableBody = document.querySelector(
      ".total-table__body",
    ) as HTMLElement;
    if (
      (event.target.value === "NewYear2023" ||
        event.target.value === "RSSchool") &&
      !appliedArr.includes(event.target.value)
    ) {
      applyBtn.disabled = false;
      applyBtn.addEventListener(
        "click",
        () => {
          if (!document.querySelector(".applied-list")) {
            const applied = document.createElement("tr");
            applied.className = "applied-list";
            applied.textContent = "Applied coupons:";
            tableBody.appendChild(applied);
            (
              document.querySelector(".total-table__total-value") as HTMLElement
            ).style.textDecoration = "line-through";
            const newPriceRow = document.createElement("tr");
            (
              document.querySelector(".total-table__total") as HTMLElement
            ).after(newPriceRow);
            const newPriceText = document.createElement("td");
            const newPriceTotal = document.createElement("span");
            newPriceRow.appendChild(newPriceText);
            newPriceRow.appendChild(newPriceTotal);
            newPriceText.className = "total-table__total-text";
            newPriceTotal.className = "total-table__total-value new-price";
            newPriceRow.className = "new-price-row";
            newPriceTotal.textContent = `$${(
              Number(total.price.toFixed(2)) -
              (Number(total.price.toFixed(2)) / 100) * 10
            ).toFixed(2)}`;
            newPriceText.textContent = "NEW PRICE";
            (
              document.querySelector(".total-table__submit") as HTMLElement
            ).style.paddingTop = "20px";
          }
          if (!appliedArr.includes(event.target.value)) {
            if (appliedArr.length !== 0) {
              (
                document.querySelector(".new-price") as HTMLElement
              ).textContent = `$${(
                Number(total.price.toFixed(2)) -
                (Number(total.price.toFixed(2)) / 100) * 20
              ).toFixed(2)}`;
            }
            appliedArr.push(event.target.value);
            const listItem = document.createElement("tr");
            listItem.className = "applied-item";
            listItem.textContent = `${event.target.value} -10%`;
            tableBody.appendChild(listItem);
          } else applyBtn.disabled = true;
        },
        { once: true },
      );
    } else applyBtn.disabled = true;
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
