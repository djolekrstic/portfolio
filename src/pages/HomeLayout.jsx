import { ScrollRestoration, useNavigation } from "react-router-dom";
import { Loading } from "../components";
import { About, Footer, Hero, Navbar, Projects } from "../Layout";

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
      <Footer />
    </>
  );
};
export default HomeLayout;
