import { NavLink } from "react-router-dom";
import { links, social } from "../data";
import { useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";

const MobileMenu = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      {/* MOBILE MENU */}
      <div className="navbar-end lg:hidden z-10">
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            checked={showLinks}
            onClick={() => setShowLinks(!showLinks)}
          />
          {/* hamburger icon */}
          <FaBars className="swap-off w-6 h-6 lg:w-8 lg:h-8" />
          {/* close icon */}
          <FaX className="swap-on w-6 h-6 lg:w-8 lg:h-8 z-10" />
        </label>
        <div
          className={`overflow-hidden absolute left-0 top-0 bg-base-200 w-0 h-screen transition-all duration-500 ease-in-out ${
            showLinks && "w-full sm:w-96"
          }`}
        >
          <div>
            <div className="mt-16">
              <ul>
                {links.map(({ id, name, route }) => {
                  return (
                    <li>
                      <NavLink
                        key={id}
                        to={route}
                        className={({ isActive }) =>
                          `${
                            isActive && "bg-base-100"
                          } block px-6 py-3 text-3xl uppercase active:bg-base-100`
                        }
                        onClick={() => setShowLinks(!showLinks)}
                      >
                        {name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mx-6 my-6">
              <ul className="flex gap-x-8">
                {social.map(({ id, url, icon }) => {
                  return (
                    <li key={id}>
                      <a
                        href={url}
                        className="text-5xl active:text-base-100"
                        target="__blank"
                      >
                        {icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MobileMenu;
