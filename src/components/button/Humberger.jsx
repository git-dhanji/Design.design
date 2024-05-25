/* eslint-disable react/prop-types */

const Humberger = ({ cross = false, color = "#f1f1f1", handleClick }) => {
  return (
    <div
      className="relative  w-12 h-6 py-2 overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      <div
        style={{ background: `${color}` }}
        className={`duration-700  ease-in-out absolute ${!cross && "top-[0px]"} rounded-full  w-full  h-[1px]  ${cross && "transform -translate-x-1/2 -translate-y-1/2 rotate-[25deg] top-1/2 left-1/2 duration-700 ease-in-out "}`}
      ></div>
      <div
        style={{ background: `${color}` }}
        className={`duration-700  ease-in-out absolute ${!cross && "bottom-1"} rounded-full  w-full h-[1px] bg-[${color}] ${cross && "transform -translate-x-1/2 -translate-y-1/2 -rotate-[25deg] top-1/2 left-1/2 duration-700 transition-all"}`}
      ></div>

      <div
        style={{ background: `${color}` }}
        className={`duration-700 bottom-[14px]  ease-in-out absolute ${!cross && "bottom-[13px] w-full duration-700"} rounded-full h-[1px] bg-[${color}] ${cross && " duration-500 transition-all w-0"}`}
      ></div>
    </div>
  );
};

export default Humberger;
