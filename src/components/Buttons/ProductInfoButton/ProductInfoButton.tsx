import React, { useState } from "react";
import ProductInfoModal from "../../Modal/ProductInfoModal/ProductInfoModal";

interface ProductInfoButtonProps {
  children?: React.ReactNode;
  className?: string;
}

const ProductInfoButton: React.FC<ProductInfoButtonProps> = ({
  children,
  className,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };
  return (
    <>
      <button type="button" className={className} onClick={toggleModal}>
        {children}
      </button>
      <ProductInfoModal
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
      />
    </>
  );
};

export default ProductInfoButton;
