import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  const string = pathname;
const result = string.replace(/\//g, "");

const toggleBodyOverflow = (overflow) => {
    document.body.style.overflow = overflow ? 'auto' : 'hidden';
  };

  useEffect(() => {
    toggleBodyOverflow(false); // Disable scrolling when animation starts

    return () => {
      toggleBodyOverflow(true); // Enable scrolling when component unmounts
    };
  }, []); // Run effect only on mount and unmount


  return (
    <AnimatePresence mode="wait">
      {children}
      <motion.div
        className="overflow-hidden bg-[#CDEA68] text-[15vw]  z-[500] fixed top-0 left-0  w-full origin-bottom"
        key="div1"
        initial={{ height: "100vw" }}
        animate={{ height: "0" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.32, 1], delay: 0.9 }}
      >
        <motion.div className="bg-transparent font-semibold fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 overflow-hidden text-center uppercase"
        initial={{display:'flex' }}
        animate={{ display:'none' }}
        exit={{}}
        transition={{ duration: 1, ease: [0.22, 1, 0.32, 1],delay:.1  }}
        >
            {
                result === '' ? 'welcome': ` ${result}`

            }
        </motion.div>
      </motion.div>
      <motion.div
        className="bg-[#008667] text-[40px]  z-[500] fixed top-0 left-0 h-screen w-full origin-top "
        key="div2"
        // initial={{ scaleY: 1 }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.32, 1] }}
      ></motion.div>
    </AnimatePresence>
  );
};

export default Layout;
