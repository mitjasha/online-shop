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
  };

  const classes = cn("info-button", className);
  return (
    <div>
      <button type="button" className={classes} onClick={toggleModal}>
        {children}
      </button>
      <ProductInfoModal
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
        id={id}
      />
    </div>
  );
};

export default ProductInfoButton;
