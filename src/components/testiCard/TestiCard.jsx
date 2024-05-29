import Button from "../button/Button";
import jpeg from '../../assets/jpeg.png'
export default function TestiCard() {
  return (
    <div id="insight">
      <div className="h-[90vh]  w-full px-20 relative">
        <div className="grid lg:grid-cols-4 lg:row-span-1 relative h-full place-items-center gap-x-8">
          <div className="bg-[#004D43] h-[50%] relative w-full rounded-lg col-span-2">
            <img src={jpeg} alt="" className="bg-cover h-full w-full"/>
            <Button
              text="2023-2034"
              variant="border"
              className="absolute bottom-5 left-5"
            />
          </div>
          <div className="bg-[#212121] relative h-[50%] w-full rounded-lg cursor-pointer">
            <Button
              text="rating 5.0 on clutch"
              variant="border"
              className="absolute bottom-5 left-5 uppercase tracking-wider"
            />
          </div>
          <div className="bg-[#212121] relative h-[50%] w-full rounded-lg cursor-pointer">
            <Button
              text="bussiness bootcamp alumani"
              variant="border"
              className="absolute bottom-5 left-5 uppercase tracking-tight"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
