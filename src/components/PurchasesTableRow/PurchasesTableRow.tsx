import React from "react";
import { WineInfo } from "../../utils/helpers/interfaces";
import QuantityInput from "../QuantityInput/QuantityInput";
import "./PurchasesTableRow.scss";
import trashIcon from "../../assets/img/svg/trash-icon.svg";

const PurchasesTableRow: React.FC<WineInfo> = ({ title, images, price }) => {
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
        <QuantityInput cartValue={1} />
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
