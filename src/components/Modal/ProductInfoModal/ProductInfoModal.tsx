import React from "react";
import BaseModalComponent from "../BaseModalComponent/BaseModalComponent";
import "./ProductInfoModal.scss";

interface ProductInfoModalProps {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}

const ProductInfoModal: React.FC<ProductInfoModalProps> = ({
  isVisible,
  setIsVisible,
}) => {
  return (
    <BaseModalComponent
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      header="place to order"
    >
      {" "}
    </BaseModalComponent>
  );
};

export default ProductInfoModal;
