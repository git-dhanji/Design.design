/* eslint-disable no-unused-vars */

import LocomotiveScroll from "locomotive-scroll";
import { Footer, Humberger, Navbar ,OpenLinks} from "./components/index";
import { Outlet } from "react-router-dom";

export default function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <Navbar/>
      {/* <OpenLinks/> */}
      {/* <Humberger/> */}
      {/* <Outlet /> */}
      {/* <Footer /> */}
    </>
  );
}
