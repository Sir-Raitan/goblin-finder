type SideContainerProps = {
  children?: React.ReactNode;
  className?: string;
};

function SideContainer({ children, className = "" }: SideContainerProps) {
  return (
    <div
      className={`animate-expand-horizontal relative w-96 overflow-y-auto overflow-x-clip rounded-l-lg bg-lime-950 ${className}`}
    >
      <div className="absolute right-0 w-96 animate-fade-in p-3">
        {children}
      </div>
    </div>
  );
}

export default SideContainer;
