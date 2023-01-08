import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import cn from "classnames";
import OrderModal from "../../Modal/OrderModal/OrderModal";
import "./BuyNowButton.scss";

interface BuyNowButtonProps {
  children?: React.ReactNode;
  className?: string;
}

const BuyNowButton: React.FC<BuyNowButtonProps> = ({ children, className }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
    <Navigate to="/cart" />;
  };
  const classes = cn("button", className);
  return (
    <>
      <button type="button" className={classes} onClick={toggleModal}>
        {/* <Link to="/cart" className="button-text"> */}
        {children}
        {/* </Link> */}
      </button>
      <OrderModal isVisible={isModalVisible} setIsVisible={setIsModalVisible} />
    </>
  );
};

export default BuyNowButton;
