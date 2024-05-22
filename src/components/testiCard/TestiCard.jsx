import Button from "../button/Button";

export default function TestiCard() {
  return (
    <div>
      <div className="h-[90vh]  w-full px-20 relative">
        <div className="grid grid-cols-4 relative h-full place-items-center gap-8">
          <div className="bg-[#004D43] h-[50%] relative w-full rounded-lg col-span-2">
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
