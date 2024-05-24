
import LocomotiveScroll from "locomotive-scroll";
import { Footer, Navbar } from "./components/index";
import { Outlet } from "react-router-dom";

export default function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer />
    </>
  );
}
