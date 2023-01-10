/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
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
import master from "../../../assets/img/svg/card-master.svg";
import maestro from "../../../assets/img/svg/card-maestro.svg";
import visa from "../../../assets/img/svg/card-visa.svg";
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
  const [cardNumber, setCardNumber] = useState<string>("");
  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors,
  } = useForm<PersonalData>({ mode: "onChange" });

  const onSubmit = () => {
    setIsConfirm(true);
    setTimeout(() => navigate("/"), 3000);
  };

  return (
    <BaseModalComponent
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      header="place an order"
    >
      {!isConfirm && (
        <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="order-form__container">
            <div className="person-details">
              <h2 className="person-details__title">Personal details </h2>
              <div className="person-details__item">
                <InputForm
                  type="text"
                  placeholder="Name"
                  name="personName"
                  className="person-details__name form-item"
                  register={register("name", { ...validationName })}
                  onchange={() => clearErrors("name")}
                />
                {errors?.name && <ToolTip text={validationName.message} />}
              </div>

              <div className="person-details__item">
                <InputForm
                  type="tel"
                  placeholder="Phone number"
                  name="phoneNumber"
                  className="person-details__phone-number form-item"
                  register={register("phone", { ...validationPhone })}
                  onchange={() => clearErrors("phone")}
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
                  onchange={() => clearErrors("address")}
                />
                {errors?.address && (
                  <ToolTip text={validationAddress.message} />
                )}
              </div>

              <div className="person-details__item">
                <InputForm
                  type="text"
                  placeholder="E-mail"
                  name="email"
                  className="person-details__email form-item"
                  register={register("email", { ...validationEmail })}
                  onchange={() => clearErrors("email")}
                />
                {errors?.email && <ToolTip text={validationEmail.message} />}
              </div>
            </div>

            <div className="card-details">
              <h2 className="person-details__title">Credit card details</h2>

              <div className="card-data">
                <img className="card-image" alt="card" src={cardPNG} />
                <div className="card-number">
                  <InputForm
                    type="text"
                    name="cardNumber"
                    placeholder="Card number"
                    className="card-number__input"
                    register={register("cardNumber", {
                      ...validationCardNumber,
                    })}
                    onchange={(evt) => {
                      setCardNumber(evt.target.value);
                      clearErrors("cardNumber");
                    }}
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
                    onchange={() => clearErrors("cardDate")}
                  />
                  {errors?.cardDate && (
                    <ToolTip text={validationCardDate.message} />
                  )}
                </div>

                <img
                  className="card-payment"
                  alt="card"
                  src={
                    cardNumber.slice()[0] === "4"
                      ? visa
                      : cardNumber.slice()[0] === "5"
                      ? master
                      : maestro
                  }
                />

                <div className="card-name">
                  <InputForm
                    type="text"
                    placeholder="Cardholder Name"
                    name="personName"
                    className="card-name__input"
                    register={register("cardName", { ...validationName })}
                    onchange={() => clearErrors("cardName")}
                  />
                  {errors?.cardName && (
                    <ToolTip text={validationName.message} />
                  )}
                </div>

                <div className="card-cvv">
                  <InputForm
                    type="text"
                    name="cardCVV"
                    placeholder="CVV"
                    className="card-cvv__input"
                    register={register("cardCvv", { ...validationCardCVV })}
                    onchange={() => clearErrors("cardCvv")}
                  />
                  {errors?.cardCvv && (
                    <ToolTip text={validationCardCVV.message} />
                  )}
                </div>
              </div>
            </div>
          </div>

          <button type="submit">CONFIRM</button>
        </form>
      )}
      {isConfirm && (
        <div className="order-form__container">The order has been placed</div>
      )}
    </BaseModalComponent>
  );
};

export default OrderModal;
