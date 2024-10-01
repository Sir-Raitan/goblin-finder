import React from "react";

type BoxProps = {
  children?: React.ReactNode;
};
function Box({ children }: BoxProps) {
  return (
    <div className="space-y-4 rounded-lg bg-lime-800 p-6 md:p-10">
      {children}
    </div>
  );
}

export default Box;
