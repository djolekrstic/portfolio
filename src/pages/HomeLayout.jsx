import { Outlet, useNavigation } from "react-router-dom";
import { Navbar, Loading } from "../components";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <>
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section>
          <Outlet />
        </section>
      )}
    </>
  );
};
export default HomeLayout;
