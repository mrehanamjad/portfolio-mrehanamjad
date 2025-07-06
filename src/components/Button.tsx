import React from "react";

function Button() {
  return <div>Button</div>;
}

export default Button;

export const ButtonWG = ({children}:{children: React.ReactNode;}) => {
  return (
 <button
  type="submit"
  className="relative z-30 flex items-center justify-center gap-2 px-3 py-1.5 mx-auto text-lg text-white font-medium bg-black/5 border-2 rounded-full shadow-xl overflow-hidden group hover:bg-emerald-500 hover:font-bold hover:text-white before:absolute before:left-0 before:w-0 before:h-full before:bg-emerald-500 before:transition-all before:duration-700 before:hover:w-full before:rounded-full before:-z-10"
>
  {children}
  <svg
    className="w-7 h-7 p-2 text-white rotate-45 border border-gray-100 rounded-full duration-300 ease-linear group-hover:rotate-90 group-hover:bg-gray-50 group-hover:border-none"
    viewBox="0 0 14 17"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
      className="fill-gray-100 group-hover:fill-gray-800"
    ></path>
  </svg>
</button>
  );
};
