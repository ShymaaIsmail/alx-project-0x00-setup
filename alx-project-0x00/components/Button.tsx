import { ButtonProps } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProps> = ({className, text, onClick}) => {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
export default Button;
