import Button from "../button/Button";

export default function ProjectShowCase() {
  return (
    <div>
      <div className="min-h-screen max-w-screen-xl mx-auto bg-[#CDEA68] relative pb-10">
        {/* text parts */}
        <div className=" w-full  flex items-center justify-center">
          <h2 className="uppercase selection:bg-transparent font-['FoundersGrotesk'] text-[#212121] leading-[12vw] pt-32 tracking-tight text-[16vw] text-center">
            ready <br />
            to start <br />
            the project
          </h2>
        </div>

        {/* Buttons Parts */}
        <div className="btn flex items-center flex-col justify-center pt-12">
          <Button
            text="start the project"
            variant="borderken"
            className="text-xl uppercase bg-[#212121] text-[#f1f1f1]"
          />
          <p className="text-[#212121] font-medium py-4">OR</p>
          <Button
            text="dhanji.vercel.app"
            variant="borderken"
            className="text-xl uppercase text-[#212121]"
          />
        </div>
      </div>
    </div>
  );
}
