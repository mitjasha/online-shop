import React, { useEffect } from "react";
import { WineInfo } from "../../utils/helpers/interfaces";
import "./CartPagination.scss";

interface CartPaginationProps {
  range: number[];
  setPage: (value: number) => void;
  page: number;
  slice: WineInfo[];
}

const CartPagination: React.FC<CartPaginationProps> = ({
  range,
  setPage,
  page,
  slice,
}) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);

  return (
    <div className="cart-pagination">
      {range.map((el, index) => (
        <button
          key={`number${index.toString()}`}
          className={`cart-pagination__button cart-pagination__button_${
            page === el ? "active" : "inactive"
          }`}
          onClick={() => setPage(el)}
          type="button"
        >
          {el}
        </button>
      ))}
    </div>
  );
};
export default CartPagination;
