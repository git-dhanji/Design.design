import React from "react";
import Button from '../button/Button'

export default function Footer() {
  return (
    <section className="font-['FoundersGrotesk']">
      <div className="h-screen p-20 flex w-full relative bg-[#212121] text=[#f1f1f1]">
        {/* Left section */}
        <div className="left w-1/2 h-full flex items-start justify-between flex-col">
          <h2 className="uppercase text-[9vw] leading-[6.5vw] font-['FoundersGrotesk']">
            eye- <br /> opening
          </h2>
          <p className="lowercase tracking-wider text-[3vw] pb-4 leading-none font-['NeueMontreal'] font-semibold">
            Pochi.
          </p>
        </div>

        {/* Right section */}
        <div className="right left w-1/2 h-full relative">
          <h2 className="uppercase text-[9vw] leading-[6.5vw] font-['FoundersGrotesk'] ">
            presentations
          </h2>

          <div className="linsk ">
            {/* social links */}
            <div className="">
              <ul className="mt-24 inline-block">
                {["Instagram", "Behance", "Facebook", "Linkedin"].map(
                  (elem, inde) => (
                    <li
                      key={inde}
                      className="text-[#f1f1f1] list-disc ml-3 mt-1 leading-5 tracking-normal  cursor-pointer font-['NeueMontreal']"
                    >
                      {elem}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* page navigation */}
            <div className=" absolute bottom-8 left-0">
              <ul className="mt-24 ">
                {["Home", "About-us", "insights", "Contact-us"].map(
                  (elem, inde) => (
                    
                    <Button
                    key={inde}
                    variant="border"
                    text={elem}
                    className="mx-4 hover:bg-white  hover:transition-transform hover:text-[#212121] duration-300"
                    
                    />
                  )
                )}
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
