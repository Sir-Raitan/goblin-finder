import React from "react";

type BottomContainerProps = {
  animated?: boolean;
  children?: React.ReactNode;
};

function BottomContainer({ children, animated = false }: BottomContainerProps) {
  return (
    <div
      className={`${animated && "animate-expand-vertical overflow-hidden"} z-10 rounded-t-lg bg-lime-950 px-6 pb-24 pt-10 text-stone-50`}
    >
      <div className={`${animated && "animate-fade-in"}`}>{children}</div>
    </div>
  );
}

export default BottomContainer;
