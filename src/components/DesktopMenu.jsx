import { NavLink } from "react-router-dom";
import { links, social } from "../data";

const DesktopMenu = () => {
  return (
    <>
      {/* DESKTOP MENU */}
      <div className="navbar-center hidden lg:flex">
        <ul className="flex">
          {links.map(({ id, name, route }) => {
            return (
              <li>
                <NavLink
                  key={id}
                  to={route}
                  className={({ isActive }) =>
                    `px-6 text-lg hover:text-xl uppercase hover:text-primary duration-300 ${
                      isActive && "text-primary"
                    }`
                  }
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="flex gap-x-6">
          {social.map(({ id, url, icon }) => {
            return (
              <li key={id}>
                <a
                  href={url}
                  className="text-2xl hover:text-primary"
                  target="__blank"
                >
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default DesktopMenu;
