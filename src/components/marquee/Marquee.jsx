import { motion } from "framer-motion";

export default function Marquee() {
  return (
    <div className="bg-zinc-900">
      <div className="marquee bg-[#004D43] overflow-hidden w-full h-[60vh] flex items-center rounded-t-lg">
        <motion.div
          initial={{ x: "-20%" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
          className="text  text-nowrap  border-t-[2px] border-b-[2px] border-zinc-500 flex gap-4 "
        >
          {["we are devin", "we are devi", "we are devin"].map(
            (elem, index) => (
              <motion.h1
                key={index}
                className="text-[27vw] pb-9 uppercase leading-[21vw] font-['FoundersGrotesk']"
              >
                {elem}
              </motion.h1>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
}
