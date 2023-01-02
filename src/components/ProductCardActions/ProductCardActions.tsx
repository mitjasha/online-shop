import React from "react";
import Button from "../Buttons/Button/Button";
import searchIcon from "../../assets/img/svg/search-icon.svg";
import heartIcon from "../../assets/img/svg/heart-icon.svg";
import cartIcon from "../../assets/img/svg/cart-icon.svg";
import "./ProductCardActions.scss";

interface ProductCardActionsProps {
  className?: string;
}

const ProductCardActions: React.FC<ProductCardActionsProps> = ({
  className,
}) => {
  return (
    <div className={className}>
      <Button className="action-btn">
        <img src={cartIcon} alt="cart" className="cart" />
      </Button>
      <Button className="action-btn">
        <img src={heartIcon} alt="favorities" className="favorities" />
      </Button>
      <Button className="action-btn">
        <img src={searchIcon} alt="modal" className="modal" />
      </Button>
    </div>
  );
};
export default ProductCardActions;
