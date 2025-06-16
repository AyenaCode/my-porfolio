import { Navigation } from "./Navigation";
import { Link } from "react-router";

export const Header = () => {
  return (
    <div className="flex justify-between">
      <Navigation></Navigation>
      <div>
        <Link to="/github">mygithub</Link>
        <Link to="/linkedin">mylikdin</Link>
      </div>
    </div>
  );
};
