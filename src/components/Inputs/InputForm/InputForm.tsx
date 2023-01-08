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
  onchange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: React.FC<InputFormProps> = ({
  className,
  placeholder,
  type,
  register,
  onchange,
}) => (
  <input
    className={cn("input-form", className)}
    type={type}
    placeholder={placeholder}
    {...register}
    onChange={onchange}
  />
);

export default InputForm;
