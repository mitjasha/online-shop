import React, { CSSProperties } from "react";
import "./Buttom.scss";

export interface ButtonProps {
  children?: React.ReactNode;
  to?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  to,
  children,
  className,
  disabled,
  onClick,
  style,
  ...attrs
}) => {
  const classes = `${"button"} ${className}`;
  return (
    <a
      href="/"
      rel="noopener noreferrer"
      className={classes}
      style={style}
      {...attrs}
    >
      {children}
    </a>
  );
};

export default Button;
