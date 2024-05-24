/* eslint-disable no-unused-vars */
import {
  Footer,
  Testimonial,
  LandingPage,
  Navbar,
  About,
  Eyes,
  Featured,
  Marquee,
  ProjectShowCase,
  TestiCard,
} from "./components/index";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState } from "react";

const MainLayout = () => (
  <div className="w-full h-screen text-white">
    <Navbar />
    <LandingPage />
    <Marquee />
    <About />
    <Eyes />
    <Featured />
    <Testimonial />
    <TestiCard />
    <ProjectShowCase />
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
]);

export default function App() {
  

  const locomotiveScroll = new LocomotiveScroll();
  return <RouterProvider router={router} />;
}
