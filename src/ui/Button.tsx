import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function Button({ children, onClick, className }: ButtonProps) {
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
