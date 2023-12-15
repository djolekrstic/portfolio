import { NavLink } from "react-router-dom";
import { DesktopMenu, MobileMenu } from "../components";

const Navbar = () => {
  return (
    <nav className="fixed navbar bg-base-200 px-6 py-3 lg:px-12 z-10">
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
