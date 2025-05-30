import { ButtonProps } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProps> = ({title, styles}) => {
    const baseClasses = 'font-medium text-white bg-blue-600 hover:bg-blue-700 transition';

  return (
    <button className={`${baseClasses} ${styles}`}>
      {title}
    </button>
  );

}
export default Button;
