import React from "react";
import { WineInfo } from "../../utils/helpers/interfaces";
import QuantityInput from "../QuantityInput/QuantityInput";
import "./PurchasesTableRow.scss";

const PurchasesTableRow: React.FC<WineInfo> = ({ title, image2, price }) => {
  return (
    <tr className="table-row">
      <td className="">
        <img src={image2} alt="wine pic" />
      </td>
      <td>
        <p>{title}</p>
      </td>
      <td>
        <p>{price}</p>
      </td>
      <td>
        <QuantityInput />
      </td>
      <td>
        <p>{price}</p>
      </td>
    </tr>
  );
};

export default PurchasesTableRow;
