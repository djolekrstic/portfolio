import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div id="hero" className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row md:gap-16 xl:gap-0">
        <div className="w-screen flex flex-col justify-center items-center">
          <h1 className="text-6xl md:text-7xl xl:text-8xl text-left font-bold tracking-wide">
            Hello, I'm Đorđe.
          </h1>
          <p className="py-8 text-lg md:text-2xl xl:text-4xl tracking-wide">
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
