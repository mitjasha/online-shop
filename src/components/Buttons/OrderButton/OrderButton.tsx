import React, { useState } from "react";
import OrderModal from "../../Modal/OrderModal/OrderModal";

interface OrderButtonProps {
  children?: React.ReactNode;
  className?: string;
}

const OrderButton: React.FC<OrderButtonProps> = ({ children, className }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };
  return (
    <>
      <button type="button" className={className} onClick={toggleModal}>
        {children}
      </button>
      <OrderModal isVisible={isModalVisible} setIsVisible={setIsModalVisible} />
    </>
  );
};

export default OrderButton;
