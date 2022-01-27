import React from "react";

export default function OneView() {
  const [text1, setText1] = React.useState(0);
  return (
    <div className="h-full w-[96%] bg-contain" style={{ backgroundImage: "url(/imgs/unos.jpg)" }}>
      <div
      className="w-full flex rounded-lg justify-end filter drop-shadow-lg h-full bg-contain bg-right bg-no-repeat"
      style={{ backgroundImage: "url(/imgs/imagenback.png)" }}
    >
      <div className="lg:w-[30%] w-[50%] text-white flex items-center mt-[6%] ml-[10%]">
        {text1==1 && (
          <div className="bg-black bg-opacity-80 p-4 rounded transition duration-500 drop-shadow-[0_0_10px_#5252523e]">
            <img src="/imgs/git.gif" alt="" className="rounded" />
            <p className="drop-shadow-xl transition-all duration-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At nemo
              sequi nulla, ut cum ex vero beatae facere ad, molestiae minima a
              libero veritatis explicabo incidunt quia, voluptas rem doloribus!
            </p>
          </div>
        )}

      </div>
     
      <div className="w-2/5 flex  items-center mb-[-20%] pl-0">
        <button
          onClick={() => setText1(1)}
          className="w-10 animate-pulse drop-shadow-[0_10px_5px_#e30a0a3f]"
        >
          <img src="/imgs/mas.png" alt="" />
        </button>
      </div>
      <div className="w-2/5 flex  items-center mb-[%] pl-0">
        <button
          onClick={() => setText1(2)}
          className="w-10 animate-pulse drop-shadow-[0_10px_5px_#e30a0a3f]"
        >
         <div className="lg:w-[30%] w-[50%] text-white flex items-center mt-[6%] ml-[10%]">
      </div>
          <img src="/imgs/mas.png" alt="" />
        </button>
        {text1==2 && (
          <div className="bg-black bg-opacity-80 w-60 text-white p-4 rounded transition duration-500 drop-shadow-[0_0_10px_#5252523e]">
            <img src="/imgs/gif2.gif" alt="" className="rounded" />
            <p className="drop-shadow-xl transition-all duration-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At nemo
              sequi nulla, ut cum ex vero beatae facere ad, molestiae minima a
              libero veritatis explicabo incidunt quia, voluptas rem doloribus!
            </p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}
