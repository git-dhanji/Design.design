import { motion } from "framer-motion";

export default function Marquee() {
  return (
    <div className="bg-zinc-900">
      <div className="marquee bg-[#004D43] overflow-hidden w-full h-[60vh] flex items-center rounded-t-lg">
        <motion.div
          initial={{ x: "-20%" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 50 }}
          className="text-nowrap  border-t-[2px] border-b-[2px] border-zinc-500 flex gap-8 "
        >
          {["we are pochi.", "we are pochi.", "we are pochi.","we are pochi.", "we are pochi.", "we are pochi.","we are pochi."].map(
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
