/* eslint-disable no-unused-vars */

import LocomotiveScroll from "locomotive-scroll";
import { Footer, Navbar } from "./components/index";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";

export default function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <Navbar />
      <Layout>
        <Outlet />
      </Layout>
      <Footer />
    </>
  );
}
