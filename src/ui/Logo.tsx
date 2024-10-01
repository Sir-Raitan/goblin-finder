import { Link } from "react-router-dom";

type LogoType = "regular" | "small" | "large" | "icon";
type LogoProps = {
  className?: string;
  type?: LogoType;
  link?: boolean;
};

const baseStyles = {
  container: "flex items-center justify-center ",
  text: "font-logo text-amber-100 ",
};

const logoStyles: Record<LogoType, Record<string, string>> = {
  regular: {
    container: baseStyles.container + "gap-2",
    img: "h-12 w-12",
    text: baseStyles.text + "text-3xl",
  },
  small: {
    container: baseStyles.container + "gap-1",
    img: "h-8 w-8",
    text: baseStyles.text + "text-xl",
  },
  large: {
    container: baseStyles.container + "gap-2",
    img: "h-16 w-16",
    text: baseStyles.text + "text-5xl",
  },
  icon: {
    container: baseStyles.container + "gap-0",
    img: "h-6 w-6",
    text: baseStyles.text + "hidden",
  },
};

function Logo({ className = "", type = "regular", link = false }: LogoProps) {
  if (link) {
    return (
      <div className={className}>
        <Link to="/" className={logoStyles[type].container}>
          <img className={logoStyles[type].img} src="icons/brand.png" />
          <span className={logoStyles[type].text}>Goblin Finder</span>
        </Link>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className={logoStyles[type].container}>
        <img className={logoStyles[type].img} src="icons/brand.png" />
        <span className={logoStyles[type].text}>Goblin Finder</span>
      </div>
    </div>
  );
}

export default Logo;
