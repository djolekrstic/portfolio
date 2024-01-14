import onlineGamesDesktop from "../assets/onlineGames-desktop.png";
import onlineGamesMobile from "../assets/onlineGames-mobile.png";

const Projects = () => {
  return (
    <section id="projects" className="pt-24 lg:pt-36">
      <div>
        <h2 className="text-white text-5xl">Projects</h2>
      </div>
      <div className="mt-24 flex flex-col items-center gap-24">
        <div className="w-full lg:w-3/5 flex flex-col gap-8">
          <h3 className="text-white text-5xl">onlineGames</h3>
          <p className="text-content text-xl leading-10 tracking-wide ">
            React-powered ecommerce demo, showcases an online game store built
            for modern user experiences. React and React Router deliver
            lightning-fast navigation, while React Query and Redux orchestrate
            smooth data fetching and state management. I leveraged Axios for
            efficient API communication, and Sass for crafting pixel-perfect,
            adaptable styles.
          </p>
          <div className="flex gap-8">
            <a
              href="https://github.com/djolekrstic/onlineStore"
              target="__blank"
              className="px-6 py-2 text-white bg-primary hover:bg-sky-600"
            >
              GITHUB
            </a>
            <a
              href="https://djkonlinegames.netlify.app"
              target="__blank"
              className="px-6 py-2 text-white bg-primary hover:bg-sky-600"
            >
              LIVE PREVIEW
            </a>
          </div>
        </div>
        <div className="w-fit mockup-window border bg-base-200">
          <div className="flex justify-center bg-base-100">
            <img src={onlineGamesDesktop} className="hidden lg:block" />
            <img src={onlineGamesMobile} className="lg:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
