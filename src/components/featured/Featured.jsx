export default function Featured() {
  return (
    <section>
      <div>
        <div className="w-full min-h-screen pb-20 bg-slate-100 rounded-t-md pt-40">
          <div>
            <h2 className="px-20 text-[4vw] leading-none font-['NeueMontreal'] font-thin text-[#212121] ">
              Featured project
            </h2>
            <div className="line w-full h-[0.1px] bg-slate-400 mt-12"></div>
          </div>

          <div className="box-part">
            <div className="w-full px-20 flex flex-wrap gap-10 relative mx-auto">

              {/* Box 1 */}
              
              <div className="w-[48%] mt-20">
                <div className="flex mb-4 items-center">
                  <div className="h-4 w-4 rounded-full bg-black"></div>
                  <p className="text-[#212121] text-center pl-4 font-['NeueMontreal']">
                    FYDE
                  </p>
                </div>

                <div className="w-full rounded-lg bg-red-200 max-h-[80vh] min-h-[80vh]"></div>
              </div>

              <div className="w-[48%] mt-20">
                <div className="flex mb-4 items-center">
                  <div className="h-4 w-4 rounded-full bg-black"></div>
                  <p className="text-[#212121] text-center pl-4 font-['NeueMontreal']">
                    FYDE
                  </p>
                </div>

                <div className="w-full rounded-lg bg-red-200 max-h-[80vh] min-h-[80vh]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
