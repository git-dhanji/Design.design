/* eslint-disable react/prop-types */

export default function PageRef({name="pagename"}) {
  return (
    <div>
      <div className="h-80 max-h-screen dark:bg-[#212121] dark:text-[#f1f1f1]">
        <div className="relative h-full w-full flex justify-center items-center">
            <h1 className="text-[12vw] font-semibold uppercase  font-['NeueMontreal']">{name}</h1>
        </div>
      </div>
    </div>
  );
}
