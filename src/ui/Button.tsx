import React from "react";
import { Link } from "react-router-dom";

type ButtonType = "primary" | "secondary" | "icon";

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  to?: string;
  type?: ButtonType;
};

function Button({ children, onClick, className, to }: ButtonProps) {
  if (to) {
    return (
      <Link to={to}>
        <button
          onClick={(e) => onClick?.(e)}
          className={`w-full rounded-xl bg-lime-600 px-4 py-2 text-xl uppercase hover:bg-lime-500 active:bg-lime-700 ${className}`}
        >
          {children}
        </button>
      </Link>
    );
  }
  return (
    <button
      onClick={(e) => onClick?.(e)}
      className={`rounded-xl bg-lime-600 px-4 py-2 text-xl uppercase hover:bg-lime-500 active:bg-lime-700 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
