import { FaArrowUpLong } from "react-icons/fa6";
import Button from "../button/Button";
import { motion } from "framer-motion";
import pochi from "../../assets/pochi.png";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleGoProject = () => {
    navigate("/start-project");
  };

  return (
    <section
      data-scroll
      data-scroll-speed="-.3"
      className="mx-auto h-auto pb-10 bg-zinc-900  pt-1 font-['NeueMontreal']  max-w-screen-xl "
    >
      <div className="textstrcture sm:mt-40 max-mobile-s:mt-28 md:px-20 sm:px-10 mx-auto mobile-s:px-5 px-5 xl:px-0">
        {/*  ________All Hero Text _________ */}
        {["We Create", "Eye Opening", "Persentations"].map((elem, index) => (
          <div
            className="masker  dark:text-[#f1f1f1]  flex items-center justify-start max-mobile-s:justify-center font-['NeueMontreal'] leading-none "
            key={index}
          >
            {/* ___Image part before Text_______ */}
            {index === 1 && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "8vw" }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 1 }}
                className="max-mobile-s:hidden sm:block rounded-sm w-[8vw] bg-slate-100 h-[5.4vw] mr-1 mt-[1.8vh] relative overflow-hidden max-mobile-s:mt-0"
              >
                <img src={pochi} className="w-full h-full object-cover" />
              </motion.div>
            )}




            <h1 className=" uppercase sm:text-[8.5vw] max-mobile-s:text-5xl max-mobile-s:leading-[38px] leading-none  xl:text-[8vw] xl:leading-[4.5vw] font-['FoundersGrotesk'] sm:leading-[5.9vw] ">
              {elem}
            </h1>
          </div>
        ))}
      </div>

      {/* __________Hr div with text_______  */}
      <div className="overflow-hidden border-t-[1px]  sm:px-20  sm:pt-6 xl:px-0 border-zinc-700  sm:mt-48 flex justify-between  flex-wrap max-mobile-s:mt-20 ">
        <div className="w-[60%] flex justify-between items-center max-mobile-s:w-full max-mobile-s:block max-mobile-s:text-center ">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((elem, index) => (
            <div
              className="px-5  dark:text-[#f1f1f1] cursor-pointer leading-none tracking-normal font-thin py-3 sm-px-10 sm-px-20
               "
              key={index}
            >
              {elem}
            </div>
          ))}
        </div>

        {/* ___________start project Btn with arrow_______ */}
        <div
          onClick={handleGoProject}
          className="parent btn flex justify-between gap-x-8 text-[#f1f1f1] items-center  max-mobile-s:w-full  max-mobile-s:px-5 max-mobile-s:justify-center max-mobile-s:pt-10"
        >
          <Button
            text="start the project"
            variant="border"
            className="uppercase text-nowrap m: "
          />

          <button className="child max-mobile-s:hidden cursor-pointer border-slate-600 border-[1px] dark:hover:bg-slate-100 dark:hover:text-zinc-950 duration-200 ease-in-out p-2 rounded-full rotate-45">
            <FaArrowUpLong />
          </button>
        </div>
      </div>
    </section>
  );
}
