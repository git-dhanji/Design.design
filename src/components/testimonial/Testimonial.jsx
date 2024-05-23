import modelMaleImage from "../../assets/modelMaleImage.jpg";
import Button from "../button/Button";

export default function Testimonial() {
  const listData_ls = [
    {
      project_name: "Planetly",
      project_manager: "Dhanji Sharma",
      read_more: "READ",
    },
    {
      project_name: "Raijuro",
      project_manager: "slaou slavia",
      read_more: "READ",
    },
    {
      project_name: "Sangdhya",
      project_manager: "sanghtdy Sharma",
      read_more: "READ",
    },
    {
      project_name: "Davanci",
      project_manager: "Avinash prasad",
      read_more: "READ",
    },
    {
      project_name: "Radheswari",
      project_manager: "The salvier",
      read_more: "READ",
    },
    {
      project_name: "Xmentor",
      project_manager: "Eliot juliot",
      read_more: "READ",
    },
  ];
  return (
    <div>
      <div className="h-auto min-h-screen w-full py-4">
        {/* Client Reviews  section text*/}
        <div className="text border-b-[1px] border-gray-600 pb-10">
          <h2 className="px-20 pt-10 text-[3vw] font font-['NeueMontreal'] tracking-wider leading-none capitalize text-md from-neutral-50 ">
            Clients Reviews
          </h2>
        </div>
        {/* Client Reviews  section text*/}
        <div className="h-auto py-8 px-20 w-full relative flex">
          {/*  Review Left part */}
          <div className="w-1/2 relative  h-full flex flex-col">
            <div className=" flex w-full justify-between">
              <p className="font-['NeueMontreal'] tracking-wider leading-none capitalize text-md  text-[16px]">
                Pro.Chin altman
              </p>
              <div className="pr-40 relative">
                <div>
                  <p className="font-['NeueMontreal'] tracking-wider leading-none capitalize text-md  text-[16px]">
                    Services:
                  </p>
                  <div className="flex flex-col justify-start items-start pt-16 gap-5">
                    {/* <button className="border-[1px] flex items-center justify-center border-slate-100 rounded-full py-2 text-center leading-none px-4">
                      Superstar
                    </button>
                    <button className="border-[1px] border-slate-100 rounded-full py-2 text-center leading-none px-4">
                      Lapata Lady
                    </button> */}
                    <Button text="Superstar" variant="border" />
                    <Button text="Lapata Lady" variant="border" />
                  </div>
                </div>
              </div>
            </div>
            <p className="pt-12 mt-12  pr-12 border-t-[1px] border-slate-400">
              They were transparent about the time and the stages of the
              project. The end product is high quality, and I feel confident
              about how they were handholding the client through the process. I
              feel like I can introduce them to someone who needs to put a sales
              deck together from scratch, and they would be able to handhold the
              client experience from 0 to 100 very effectively from story to
              design. 5/5
            </p>
          </div>

          {/*  Review Right part  */}
          <div className="w-1/2 h-full bg-cyan-300  overflow-hidden rounded-lg hover:scale-95 duration-500">
            <img
              src={modelMaleImage}
              alt="testimonial iamge review"
              className="bg-cover duration-500 hover:scale-125"
            />
          </div>
        </div>

        {/*  List start here  */}
        <div>
          {/* Top line div */}
          <div className="h-[0.5px] w-full bg-slate-600 mt-4"></div>
          <div>
            {listData_ls.map((elem, index) => (
              <div
                key={index}
                className=" grid grid-cols-3   justify-between px-20 h-14 items-center border-b-[1px] border-slate-600"
              >
                <p className="text-white font-['NeueMontreal'] tracking-wider leading-none capitalize text-md">
                  {elem.project_name}
                </p>

                <p className="text-white font-['NeueMontreal'] tracking-wider leading-none capitalize text-md   w-10/12 text-start pl-[200px]">
                  {elem.project_manager}
                </p>

                <p className="text-white font-['NeueMontreal'] tracking-wider leading-none capitalize text-md text-right">
                  {elem.read_more}
                </p>
              </div>
            ))}
          </div>
          {/* bottom line div */}
          <div className="h-[0.5px] w-full bg-slate-600"></div>
        </div>
      </div>
    </div>
  );
}
