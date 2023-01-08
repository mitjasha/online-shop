import React, { useState } from "react";
import Button from "../../components/Buttons/Button/Button";
import CartPagination from "../../components/CartPagination/CartPagination";
import PurchasesTableRow from "../../components/PurchasesTableRow/PurchasesTableRow";
import { WineInfo } from "../../utils/helpers/interfaces";
import useTable from "../../utils/hooks/useTable";
import "./PurchasesTable.scss";

interface PurchasesTableProps {
  data: WineInfo[];
  rowsPerPage?: number;
}

const PurchasesTable: React.FC<PurchasesTableProps> = ({
  data,
  rowsPerPage = 4,
}) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
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
        {slice.map((product, index) => (
          <PurchasesTableRow
            title={product.title}
            images={product.images}
            price={product.price}
            key={product.title.slice(0, 2) + index.toString()}
            cartValue={1}
            classKey={product.title.slice(0, 2) + index.toString()}
          />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={6}>
            <CartPagination
              range={range}
              slice={slice}
              setPage={setPage}
              page={page}
            />
          </td>
        </tr>
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
  );
};

export default PurchasesTable;
