

export default function About() {


  return (
    
      <div
        id="about"
        className="about bg-[#CDEA68] min-h-dvh w-full pt-20 rounded-t-lg"
      >
        <section>
          <div className="heading-about px-20">
            <p className="text-[3.5vw] leading-none tracking-normal font-['NeueMontreal'] text-[#212121]">
              Ochi is a strategic partner for fast-growing tech <br />{" "}
              businesses that need to raise funds, sell products,
              <br /> ex­plain com­plex ideas, and hire great people.
            </p>
          </div>
        </section>
        <section>
          <div className="relative h-[45dvh] px-20 font-['NeueMontreal'] py-4 mt-14 border-t-[1px] border-b-[1px] border-slate-400 flex justify-between ">
            <div className="text-[#212121] text-lg text-nowrap w-[60%]">
              What you can expect:
            </div>

            <div className="right-text flex  relative  justify-between">
              <div className=" text-[#212121] text-base w-[40%]  ml-32">
                <div className="pb-10">
                  We create tailored presentations to help you persuade your
                  colleagues, clients, or investors. Whether it’s live or
                  digital, delivered for one or a hundred people.
                </div>

                <div className="">
                  We believe the mix of strategy and design (with a bit of
                  coffee) is what makes your message clear, convincing, and
                  captivating.
                </div>
              </div>
              <div className="">
                <ul className="mt-24">
                  {["Instagram", "Behance", "Facebook", "Linkedin"].map(
                    (elem, inde) => (
                      <li
                        key={inde}
                        className="text-[#212121] border-b-[1px] rounded-sm cursor-pointer border-[#212121]"
                      >
                        {elem}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="w-full flex justify-between px-20 py-4">
            <div className="left">
              <h3 className="text-[4vw] leading-none tracking-normal font-['NeueMontreal'] text-[#212121]">
                Our approach:
              </h3>
              <button className="bg-[#212121] rounded-full py-4 px-6 text-center uppercase relative leading-none mt-4 flex items-center gap-8">
                Read MOre <div className="w-2 h-2 bg-white rounded-full"></div>
              </button>
            </div>
            <div className="right w-[51%] overflow-hidden rounded-xl">
              <img
                className="object-cover"
                src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
  );
}
