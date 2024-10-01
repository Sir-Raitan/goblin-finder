import React from "react";

type BottomContainerProps = {
  animated?: boolean;
  className?: string;
  children?: React.ReactNode;
};

function BottomContainer({
  children,
  className = "",
  animated = false,
}: BottomContainerProps) {
  return (
    <div
      className={`${animated && "animate-expand-vertical overflow-hidden"} z-10 rounded-t-lg bg-lime-950 px-6 text-stone-50 ${className}`}
    >
      <div className={`${animated && "animate-fade-in"} pb-24 pt-10`}>
        {children}
      </div>
    </div>
  );
}

export default BottomContainer;
