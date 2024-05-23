import { motion } from "framer-motion";

export default function Marquee() {
  return (
    <div data-scroll data-scroll-section  data-scroll-speed=".2" className="bg-zinc-900">
      <div className="marquee bg-[#004D43] overflow-hidden w-full h-[60vh] flex items-center rounded-t-lg">
        <motion.div className="text-nowrap  border-t-[2px] border-b-[2px] border-zinc-500 flex">
          <motion.h1
            initial={{ x: "0" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 6 }}
            animate={{ x: "-100%" }}
            className="text-[27vw] pb-9  uppercase leading-[21vw] font-['FoundersGrotesk'] pr-12"
          >
            we are pochi
          </motion.h1>
          <motion.h1
            initial={{ x: "0" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 6 }}
            animate={{ x: "-100%" }}
            className="text-[27vw] pb-9  uppercase leading-[21vw] font-['FoundersGrotesk'] pr-12"
          >
            we are pochi
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
}
