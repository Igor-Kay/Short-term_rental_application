"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  icon?: IconType;
  small?: boolean;
  outline?: boolean;
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon: Icon,
  small,
  outline,
  disabled,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
      relative 
      disabled:opacity-70 
      disabled:cursor-not-allowed 
      rounded-lg 
      hover:opacity-80 
      transition 
      w-full
      ${
        outline
          ? "bg-white border-black text-black"
          : "bg-rose-500 border-rose-500 text-white"
      }
      ${
        small
          ? "text-sm font-light py-1 border-[1px]"
          : "text-md font-semibold py-3 border-2"
      }`}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};

export default Button;