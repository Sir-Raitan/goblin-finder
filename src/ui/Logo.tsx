type LogoProps = {
  className?: string;
  type?: "regular" | "small" | "large" | "icon";
};

const styles: Record<NonNullable<LogoProps["type"]>, Record<string, string>> = {
  regular: {
    container: "gap-2",
    img: "h-12 w-12",
    text: "text-3xl",
  },
  small: {
    container: "gap-1",
    img: "h-8 w-8",
    text: "text-xl",
  },
  large: {
    container: "gap-3",
    img: "h-24 w-24",
    text: "text-6xl",
  },
  icon: {
    container: "gap-0",
    img: "h-6 w-6",
    text: "hidden",
  },
};

function Logo({ className = "", type = "regular" }: LogoProps) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <img className={styles[type].img} src="icons/brand.png" />
      <span className="font-logo text-3xl text-amber-100">Goblin Finder</span>
    </div>
  );
}

export default Logo;
