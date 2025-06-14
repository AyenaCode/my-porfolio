import { Link } from "react-router";

type ButtonProps = {
  children: string;
  varient?: "primary" | "secondary" | "outline";
  className?: string;
  link?: boolean;
  route?: string;
};
export const Button = ({
  link = false,
  route = "#",
  ...buttonProps
}: ButtonProps) => {
  let background = "";

  switch (buttonProps.varient) {
    case "primary":
      background = "bg-blue-900 hover:bg-blue-900/80";
      break;
    case "secondary":
      background = "bg-amber-600 hover:bg-amber-600/80";
      break;
    case "outline":
      background = "border-[#242424] hover:border-white hover:bg-gray-800";
      break;
    default:
      break;
  }

  const CLASSNAME = `transition rounded-xl border hover:cursor-pointer px-6 py-3 ${background} ${buttonProps.className}`;

  return link ? (
    <Link to={route} className={CLASSNAME}>
      {buttonProps.children}
    </Link>
  ) : (
    <button className={CLASSNAME}>{buttonProps.children}</button>
  );
};
