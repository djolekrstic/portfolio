import { NavLink } from "react-router-dom";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav className="absolute navbar bg-base-200 px-6 py-3 lg:px-12">
      <div className="navbar-start">
        <NavLink
          to="/"
          className="flex hover:gap-x-3 group text-4xl lg:text-5xl text-white font-bold tracking-widest"
        >
          ĐK
        </NavLink>
      </div>

      <MobileMenu />
      <DesktopMenu />
    </nav>
  );
};
export default Navbar;
