import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import cn from "classnames";
import "./InputForm.scss";

interface InputFormProps {
  className: string;
  placeholder: string;
  type: string;
  name?: string;
  register: UseFormRegisterReturn;
}

const InputForm: React.FC<InputFormProps> = ({
  className,
  placeholder,
  type,
  register,
}) => (
  <input
    className={cn("input-form", className)}
    type={type}
    placeholder={placeholder}
    {...register}
  />
);

export default InputForm;
