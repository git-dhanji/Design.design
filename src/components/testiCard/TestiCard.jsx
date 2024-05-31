import Button from "../button/Button";
import jpeg from '../../assets/jpeg.png';

export default function TestiCard() {
  return (
    <div id="insight">
      <div className="h-screen lg:h-[90vh] w-full px-5 py-4 lg:px-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-2 h-full place-content-center">
          <div className="bg-[#004D43] lg:col-span-2 h-[50vh] relative rounded-lg">
            <img src={jpeg} alt="" className="object-cover h-full w-full" />
            <Button
              text="2023-2034"
              variant="border"
              className="absolute bottom-5 left-5"
            />
          </div>
          <div className="bg-[#212121] col-span-2 md:col-auto h-[25vh] lg:h-[50vh] relative rounded-lg cursor-pointer">
            <Button
              text="Rating 5.0 on Clutch"
              variant="border"
              className="absolute bottom-5 left-5 uppercase tracking-wider"
            />
          </div>
          <div className="bg-[#212121] col-span-2 md:col-auto h-[25vh] lg:h-[50vh] relative rounded-lg cursor-pointer">
            <Button
              text="Business Bootcamp Alumni"
              variant="border"
              className="absolute bottom-5 left-5 uppercase tracking-tight"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
