import React from "react";
import BaseModalComponent from "../BaseModalComponent/BaseModalComponent";

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
      {" "}
    </BaseModalComponent>
  );
};

export default OrderModal;
