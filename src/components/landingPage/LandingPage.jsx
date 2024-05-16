export default function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstrcture mt-40 px-20">
        {["We Create", "Eye Opening", "Persentations"].map((elem, index) => (
          <div className="masker" key={index}>
            <h1 className=" uppercase text-8xl font-bold font-FoundersGrotesk  tracking-[-0.4rem]  leading-[6vw]">
              {elem}
            </h1>
          </div>
        ))}
      </div>

      <div className=" border-t-[1px] border-zinc-700 mt-32"></div>
    </div>
  );
}
