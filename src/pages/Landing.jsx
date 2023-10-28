import { NavLink } from "react-router-dom";
import heroImg from "../assets/hero.svg";

const Landing = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row md:gap-16 xl:gap-0">
        <div className="xl:w-1/2">
          <h1 className="text-6xl md:text-7xl xl:text-8xl text-left font-bold">
            Hello,
            <br />
            I'm Đorđe.
          </h1>
          <p className="py-8 text-lg md:text-2xl xl:text-4xl leading-normal tracking-wide">
            Front-end ReactJS Developer,
            <br />
            based in Serbia.
          </p>
          <NavLink to="projects" className="btn btn-lg btn-outline">
            Projects
          </NavLink>
        </div>
        <img
          src={heroImg}
          alt="hero-img"
          className="pt-16 md:pt-0 w-4/5 sm:w-1/2"
        />
      </div>
    </div>
  );
};
export default Landing;
