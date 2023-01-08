import React from "react";
import { WineInfo } from "../../utils/helpers/interfaces";
import QuantityInput from "../QuantityInput/QuantityInput";
import "./PurchasesTableRow.scss";
import trashIcon from "../../assets/img/svg/trash-icon.svg";

interface PurchasesTableRowProps extends WineInfo {
  cartValue: number;
  classKey: string;
  id: number;
}

const PurchasesTableRow: React.FC<PurchasesTableRowProps> = ({
  title,
  images,
  price,
  cartValue,
  classKey,
  id,
}) => {
  return (
    <tr className="table-row">
      <td className="table-row__img-cell">
        <img
          src={images ? images[1] : ""}
          alt="wine pic"
          className="table-row__img"
        />
      </td>
      <td>
        <p>{title}</p>
      </td>
      <td>
        <p>{price}</p>
      </td>
      <td className="table-row__quantity">
        <QuantityInput cartValue={cartValue} classKey={classKey} id={id} />
      </td>
      <td>
        <p>{price}</p>
      </td>
      <td className="table-row__trash-icon">
        <img src={trashIcon} alt="trash" />
      </td>
    </tr>
  );
};

export default PurchasesTableRow;
