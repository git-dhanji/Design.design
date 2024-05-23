import About from "./components/about/About";
import Eyes from "./components/eyes/Eyes";
import Featured from "./components/featured/Featured";
import { LandingPage, Navbar } from "./components/index";
import Marquee from "./components/marquee/Marquee";
import ProjectShowCase from "./components/projectShowCase/ProjectShowCase";
import TestiCard from "./components/testiCard/TestiCard";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./components/footer/Footer";
import LocomotiveScroll from "locomotive-scroll";

export default function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
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
}
