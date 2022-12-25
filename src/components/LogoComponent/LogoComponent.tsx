import React from "react";
import logo from "../../assets/img/svg/logo.svg";

interface LogoProps {
  className?: string;
}

const LogoComponent: React.FC<LogoProps> = ({ className }) => {
  return <img src={logo} alt="online store logo" className={className} />;
};

export default LogoComponent;
