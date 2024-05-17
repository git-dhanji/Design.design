import About from "./components/about/About";
import { LandingPage, Navbar } from "./components/index";
import Marquee from "./components/marquee/Marquee";

export default function App() {
  return (
    <div className="w-full h-screen text-white">
      <Navbar />
      <LandingPage />
      <Marquee/>
      <About/>
    </div>
  );
}
