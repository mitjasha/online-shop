import React from "react";
import BaseModalComponent from "../BaseModalComponent/BaseModalComponent";
import "./ProductInfoModal.scss";

interface ProductInfoModalProps {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
  id: number;
}

const ProductInfoModal: React.FC<ProductInfoModalProps> = ({
  isVisible,
  setIsVisible,
  id,
}) => {
  return (
    <BaseModalComponent
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      header="place an order"
    >
      {`${id}`}
    </BaseModalComponent>
  );
};

export default ProductInfoModal;
