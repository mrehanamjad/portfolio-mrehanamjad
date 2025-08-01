"use client"
import gsap from "gsap";
import React from "react";

function Button() {
  return <div>Button</div>;
}

export default Button;

export const ButtonWG = ({children,width,layersWidth, height,layersHeight}:{children: React.ReactNode;width?:string;layersWidth?:string;height?:string;layersHeight?:string;}) => {
  return (
<button
  className="overflow-hidden w-40 p-2 h-16 bg-black text-white border-none rounded-full text-xl font-bold cursor-pointer relative z-10 group flex justify-center items-center"
>{children}
  <span
    className="absolute w-44 h-40 -top-8 -left-2 bg-emerald-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"
  ></span>
  <span
    className="absolute w-44 h-40 -top-8 -left-2 bg-emerald-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"
  ></span>
  <span
    className="absolute w-44 h-40 -top-8 -left-2 bg-emerald-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"
  ></span>
  <span
    className="group-hover:opacity-100  group-hover:duration-1000 duration-100 opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center"
    >{children === "Contact" ? "Connect" : children}</span>
</button>

  );
};

// export const ButtonWG = ({children,width,layersWidth, height,layersHeight}:{children: React.ReactNode;width?:string;layersWidth?:string;height?:string;layersHeight?:string;}) => {
//   return (
// <button
//   className="overflow-hidden w-32 p-2 h-12 bg-black text-white border-none rounded-full text-xl font-bold cursor-pointer relative z-10 group"
// >{children}
//   <span
//     className="absolute w-36 h-32 -top-8 -left-2 bg-emerald-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"
//   ></span>
//   <span
//     className="absolute w-36 h-32 -top-8 -left-2 bg-emerald-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"
//   ></span>
//   <span
//     className="absolute w-36 h-32 -top-8 -left-2 bg-emerald-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"
//   ></span>
//   <span
//     className="group-hover:opacity-100  group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
//     >{children === "Contact" ? "Connect" : children}</span>
// </button>

//   );
// };


export const ButtonCircle = ({children}:{children: React.ReactNode;}) => {

  return (
<button
  className={`overflow-hidden  w-32 h-32 p-2  text-white border-none rounded-full text-xl font-bold cursor-pointer relative z-10 group flex justify-center items-center `}
>{children}
  <span
    className={`absolute w-36 h-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-200 rounded-full transform scale-0 group-hover:scale-100 transition-transform group-hover:duration-500 duration-1000 origin-center`}
  ></span>
  <span
    className={`absolute w-36 h-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-400 rounded-full transform scale-0 group-hover:scale-100  transition-transform group-hover:duration-700 duration-700 origin-center`}
  ></span>
  <span
    className={`absolute w-36 h-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-600 rounded-full transform scale-0 group-hover:scale-100 transition-transform group-hover:duration-1000 duration-500 origin-center`}
  ></span>
  <span
    className={`group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center`}
    >{children === "Contact" ? "Connect" : children}</span>
</button>

  );
};
