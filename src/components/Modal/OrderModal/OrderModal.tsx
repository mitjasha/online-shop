import React from "react";
import { useForm } from "react-hook-form";
import {
  validationAddress,
  validationCardCVV,
  validationCardDate,
  validationCardNumber,
  validationEmail,
  validationName,
  validationPhone,
} from "./OrderModalConst";
import BaseModalComponent from "../BaseModalComponent/BaseModalComponent";
import cardPNG from "../../../assets/img/png/card.png";
import InputForm from "../../Inputs/InputForm/InputForm";
import ToolTip from "../../ToolTip/ToolTip";
import "./OrderModal.scss";

interface OrderModalProps {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}

interface PersonalData {
  name: string;
  phone: string;
  address: string;
  email: string;
  cardNumber: string;
  cardDate: string;
  cardName: string;
  cardCvv: string;
}

const OrderModal: React.FC<OrderModalProps> = ({ isVisible, setIsVisible }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<PersonalData>({ mode: "onChange" });

  const onSubmit = () => {
    reset();
  };

  return (
    <BaseModalComponent
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      header="place an order"
    >
      <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="person-details">
          <h2>Personal details </h2>
          <div className="person-details__item">
            <InputForm
              type="text"
              placeholder="Name"
              name="personName"
              className="person-details__name form-item"
              register={register("name", { ...validationName })}
            />
            {errors?.name && <ToolTip text={validationName.message} />}
          </div>

          <div className="person-details__item">
            <InputForm
              type="tel"
              placeholder="Phone number"
              name="phoneNumber"
              className="person-details__phone-number"
              register={register("phone", { ...validationPhone })}
            />
            {errors?.phone && <ToolTip text={validationPhone.message} />}
          </div>

          <div className="person-details__item">
            <InputForm
              type="text"
              placeholder="Delivery address"
              name="address"
              className="person-details__address form-item"
              register={register("address", { ...validationAddress })}
            />
            {errors?.address && <ToolTip text={validationAddress.message} />}
          </div>

          <div className="person-details__item">
            <InputForm
              type="text"
              placeholder="E-mail"
              name="email"
              className="person-details__email"
              register={register("email", { ...validationEmail })}
            />
            {errors?.email && <ToolTip text={validationEmail.message} />}
          </div>
        </div>

        <div className="card-details">
          <h2>Credit card details</h2>

          <div className="card-data">
            <img alt="card" src={cardPNG} />
            <div className="card-number">
              <InputForm
                type="text"
                name="cardNumber"
                placeholder="Card number"
                className="card-number"
                register={register("cardNumber", { ...validationCardNumber })}
              />
              {errors?.cardNumber && (
                <ToolTip text={validationCardNumber.message} />
              )}
            </div>

            <div className="card-date">
              <InputForm
                type="text"
                name="cardDate"
                placeholder="Date"
                className="card-date__input"
                register={register("cardDate", { ...validationCardDate })}
              />
              {errors?.cardDate && (
                <ToolTip text={validationCardDate.message} />
              )}
            </div>

            <div className="card-name">
              <InputForm
                type="text"
                placeholder="Cardholder Name"
                name="personName"
                className="card-name__input"
                register={register("cardName", { ...validationName })}
              />
              {errors?.cardName && <ToolTip text={validationName.message} />}
            </div>

            <div className="card-cvv">
              <InputForm
                type="text"
                name="cardCVV"
                placeholder="CVV"
                className="card-cvv__input"
                register={register("cardCvv", { ...validationCardCVV })}
              />
              {errors?.cardCvv && <ToolTip text={validationCardCVV.message} />}
            </div>
          </div>
        </div>

        <button type="submit">CONFIRM</button>
      </form>
    </BaseModalComponent>
  );
};

export default OrderModal;
