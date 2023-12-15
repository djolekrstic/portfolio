import { ScrollRestoration, useNavigation } from "react-router-dom";
import { Loading } from "../components";
import { About, Hero, Navbar, Projects } from "../Layout";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <>
      <ScrollRestoration />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-element">
          <Hero />
          <About />
          <Projects />
        </section>
      )}
    </>
  );
};
export default HomeLayout;
