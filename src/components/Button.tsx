import React, { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: FC<ButtonProps> = ({ onClick, type = "button", label, ...props }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className=""
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;