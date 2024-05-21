import back from "../../assets/back.jpg";

export default function Featured() {
  return (
    <section>
      <div>
        <div className="w-full mx-auto min-h-screen pb-20 bg-[#18181B] rounded-t-md pt-40">
          <div>
            <h2 className="px-20 dark:text-slate-50 text-[4vw] leading-none font-['NeueMontreal'] font-thin text-[#212121] ">
              Featured project
            </h2>
            <div className="line w-full h-[0.1px] bg-slate-400 mt-12"></div>
          </div>

          <div className="box-part pb-8 mx-auto">
            <div className="w-full px-20 flex  gap-10 relative ">
              {/* Box 1 */}

              <div className="w-1/2 mt-20 relative">
                {/*  Text parts */}
                <div className="flex mb-4 items-center">
                  <div className="h-4 w-4 rounded-full bg-black"></div>
                  <p className="text-[#212121] dark:text-white text-center pl-4 font-['NeueMontreal']">
                    FYDE
                  </p>
                </div>
                {/* Box parts */}
                <div className=" relative w-full rounded-lg h-[75vh] overflow-hidden">
                  <div className="h-full w-full overflow-hidden">
                    <img
                      src={back}
                      alt="images"
                      className="w-full h-full hover:scale-110 bg-cover duration-300"
                    />
                  </div>
                </div>
              </div>

              <div className="w-1/2 mt-20 relative">
                {/*  Text parts */}
                <div className="flex mb-4 items-center">
                  <div className="h-4 w-4 rounded-full bg-black"></div>
                  <p className="text-[#212121] dark:text-white text-center pl-4 font-['NeueMontreal']">
                    FYDE
                  </p>
                </div>
                {/* Box parts */}
                <div className=" relative w-full rounded-lg h-[75vh] overflow-hidden">
                  <div className="h-full w-full overflow-hidden">
                    <img
                      src={back}
                      alt="images"
                      className="w-full h-full hover:scale-110 bg-cover self-stretch duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
