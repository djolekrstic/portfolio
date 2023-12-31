import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div id="hero" className="hero min-h-screen">
      <div className="hero-content">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-6xl md:text-7xl xl:text-8xl text-center font-bold tracking-wide">
            Hello, I'm Đorđe.
          </h1>
          <p className="py-8 text-lg md:text-2xl xl:text-4xl text-center tracking-wide">
            Front-end ReactJS Developer, based in Niš, Serbia.
          </p>
          <NavLink to="#projects" className="mt-10 btn btn-lg btn-outline">
            Projects
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Hero;
