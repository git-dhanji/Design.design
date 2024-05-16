export default function Marquee() {
  return (
    <div className="bg-zinc-900">
      <div className="marquee bg-[#004D43] overflow-hidden w-full h-[50vh] flex items-center rounded-t-lg">
        <div className="text  text-nowrap  border-t-[2px] border-b-[2px] border-zinc-500 flex gap-4 tra">
          {["we are devin", "we are devi", "we are devin"].map(
            (elem, index) => (
              <h1 key={index} className="text-[27vw] pb-9 uppercase leading-[21vw] font-['FoundersGrotesk']">{elem}</h1>
            )
          )}
        </div>
      </div>
    </div>
  );
}
