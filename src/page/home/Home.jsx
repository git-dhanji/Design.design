import { LandingPage,Marquee,About,Eyes,Featured,Testimonial,TestiCard,ProjectShowCase } from "../../components";


export default function Home() {
  return (
    <div className="text-[#f1f1f1]">
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Testimonial />
      <TestiCard />
      <ProjectShowCase />
    </div>
  );
}
