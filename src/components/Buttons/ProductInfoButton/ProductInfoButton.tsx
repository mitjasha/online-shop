import React, { useState } from "react";
import cn from "classnames";
import ProductInfoModal from "../../Modal/ProductInfoModal/ProductInfoModal";
import "./ProductInfoButton.scss";

interface ProductInfoButtonProps {
  children?: React.ReactNode;
  className?: string;
  id: number;
}

const ProductInfoButton: React.FC<ProductInfoButtonProps> = ({
  children,
  className,
  id,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
    console.log(id);
  };

  const classes = cn("info-button", className);
  return (
    <>
      <button type="button" className={classes} onClick={toggleModal}>
        {children}
      </button>
      <ProductInfoModal
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
        id={id}
      />
    </>
  );
};

export default ProductInfoButton;
