"use client";
import { Fragment } from "react";
import "./test.css";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const ToggleButton = () => {
  return (
    <Fragment>
      <div className="inner absolute lef10 top-10 bg-purple-500 p-3 rounded-full cursor-pointer"></div>
      {/* <div className="container">
        <div className="inner absolute right-10 top-10">
          <span>i</span>
          <h1>Hey</h1>
          <p>This is an informative card that will tell you something that's... well, important!</p>
        </div>
      </div>

      <div
        className={
          "inner absolute right-10 top-40 bg-yellow-500 p-3 rounded-xl w-[400px] cursor-pointer transition-all duration-500 hover:bg-purple-700"
        }
      >
        <span className="text-black font-bold transition-colors duration-500 relative mr-5 mt-10">i</span>
        <h1 className="text-white m-0">Hey</h1>
        <p className="text-white text-sm">This is an informative card that will tell you something that's... well, important!</p>
      </div> */}
    </Fragment>
  );
};
// <header className="fixed top-0 left-0 min-w-4/5 transition-all duration-200 min-h-screen bg-purple-800/50">
//   <button className="p-2 scale-[1.25] space-y-1 absolute top-10 left-5 rounded-full bg-primary transition-all duration-200">
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//       <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//     </svg>
//   </button>
// </header>

export default ToggleButton;
