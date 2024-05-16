import { FaArrowUpLong } from "react-icons/fa6";

export default function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstrcture mt-40 px-20">

        {/*  ________All Hero Text _________ */}
        {["We Create", "Eye Opening", "Persentations"].map((elem, index) => (
          <div
            className="masker flex items-center justify-start overflow-hidden "
            key={index}
          >

            {/* ___Image part before Text_______ */}
            {index === 1 && (
              <div className=" rounded-md w-[8vw] bg-slate-100 h-[5.4vw] mr-1 mt-[1.8vh]"></div>
            )}

            <h1 className=" uppercase text-[7vw] font-bold font-FoundersGrotesk  tracking-tighter  leading-[5.9vw]">
              {elem}
            </h1>
          </div>
        ))}
      </div>

      {/* __________Hr div with text_______  */}
      <div className="px-20 border-t-[1px] border-zinc-700 mt-48 flex justify-between">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((elem, index) => (
          <div
            className="text-lg cursor-pointer leading-none tracking-normal font-thin py-3"
            key={index}
          >
            {elem}
          </div>
        ))}

        {/* ___________start project Btn with arrow_______ */}
        <div className="parent btn py-3 flex items-center gap-4 group ">
          <button className="child cursor-pointer border-[1.5px] border-slate-600 px-4 py-1 tracking-normal rounded-full uppercase text-center dark:hover:bg-slate-100 dark:hover:text-zinc-950 duration-200 ease-in-out">
            Start the project
          </button>

          <button className="child cursor-pointer border-slate-600 border-[1px] dark:hover:bg-slate-100 dark:hover:text-zinc-950 duration-200 ease-in-out p-2 rounded-full rotate-45">
            <FaArrowUpLong />
          </button>
        </div>
      </div>
    </div>
  );
}
