import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer";
import BackToTop from "../components/backToTop";

function layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <BackToTop />
    </>
  );
}

export default layout;
