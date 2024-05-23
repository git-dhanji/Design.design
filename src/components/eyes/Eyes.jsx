import { useEffect, useState } from "react";

export default function Eyes() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angel = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angel - 180);
    });
  }, []);
  return (
    
      <div className="w-full h-screen overflow-hidden ">
        <div data-scroll data-scroll-section data-scroll-speed="-.6" className='h-full relative bg-cover bg-center w-full  bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
          <div className="absolute gap-14 flex  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
            {/* _____First Circle -_________ */}
            <div className="h-[15vw] w-[15vw] bg-zinc-100 rounded-full flex items-center justify-center">
              <div className="relative h-2/3 w-2/3 bg-zinc-900 rounded-full flex items-center justify-center">
                <div
                  style={{
                    transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                  }}
                  className="h-10  w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
                >
                  <div className="h-[2vw] w-[2vw] bg-zinc-100 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* ____________Second Circle -_________ */}
            <div className="h-[15vw] w-[15vw] bg-zinc-100 rounded-full flex items-center justify-center">
              <div className="relative h-2/3 w-2/3 bg-zinc-900 rounded-full flex items-center justify-center">
                <div
                  style={{
                    transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                  }}
                  className="h-10 w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
                >
                  <div className="h-[2vw] w-[2vw] bg-zinc-100 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
