import  { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';

export default function OpenLinks() {
  const controls = useAnimation();
  const listControls = useAnimation();

  const listofurl = [
    { name: "Home", loction: "/" },
    { name: "About", loction: "/About" },
    { name: "Insights", loction: "/Insight" },
    { name: "Our works", loction: "/works" },
    { name: "Contact", loction: "/contact" },
  ];

  useEffect(() => {
    const animateSequence = async () => {
      await controls.start({ width:'100%', transition: { duration: 0.3 } });
      for (let i = 0; i < listofurl.length; i++) {
        await listControls.start((index) => index === i ? { x: 0, opacity: 1, transition: { duration: 0.2 } } : {});
      }
    };

    animateSequence();
  }, [controls, listControls, listofurl.length]);

  return (
    <motion.div
      className={`md:hidden absolute z-[100] h-screen w-full dark:bg-[#212121] bg-white dark:text-[#f1f1f1] text-[#212121]`}
      initial={{ width: 0 }}
      animate={controls}
    >
      <div className="w-full h-full relative">
        <div className="links w-full h-full flex justify-center items-center dark:bg-[#212121] bg-white dark:text-[#f1f1f1] text-[#212121]">
          <ul className='overflow-hidden'>
            {listofurl.map((elem, index) => (
              <motion.li
                key={index}
                custom={index}
                initial={{ x: -100, opacity: 0 }}
                animate={listControls}
                className="pb-4 z-[70]"
              >
                <Link
                  to={elem.loction}
                  className="uppercase text-[8vw] leading-none tracking-wider font-semibold font-['NeueMontreal'] duration-300 text-start hover:text-[#CDEA68] transition-all hover:tracking-widest"
                >
                  {elem.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
