import React from "react";
import BaseModalComponent from "../BaseModalComponent/BaseModalComponent";
import cardPNG from "../../../assets/img/png/card.png";

interface OrderModalProps {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ isVisible, setIsVisible }) => {
  return (
    <BaseModalComponent
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      header="place an order"
    >
      <form noValidate className="">
        <div className="person-details">
          <h2>Personal details </h2>

          <input
            type="text"
            placeholder="Name"
            name="personName"
            className="person-details__name form-item"
          />

          <input
            type="text"
            placeholder="Phone number"
            name="phoneNumber"
            className="person-details__phone-number"
          />

          <input
            type="text"
            placeholder="Delivery address"
            name="adress"
            className="person-details__adress form-item"
          />

          <input
            type="text"
            placeholder="E-mail"
            name="email"
            className="person-details__email"
          />
        </div>

        <div className="card-details">
          <h2>Credit card details</h2>

          <div className="card-data">
            <img alt="card" src={cardPNG} />

            <input
              type="text"
              name="cardNumber"
              placeholder="Card number"
              className="card__number"
            />

            <input
              type="text"
              name="cardDate"
              placeholder="Name"
              className="card__name"
            />

            <input
              type="text"
              name="cardCVV"
              placeholder="CVV"
              className="card__cvv-data"
            />
          </div>
        </div>

        <button type="submit">CONFIRM</button>
      </form>
    </BaseModalComponent>
  );
};

export default OrderModal;
