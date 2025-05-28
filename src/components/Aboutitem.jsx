import React from "react";

const Aboutitem = ({ title, details }) => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="flex flex-col items-center rounded-full  p-6 bg-white ">
        <p>
          <span className="text-2xl font-mono text-[#001b5e]">{title}</span>
        </p>
        <p className="text-xl font-mono p-3 pt-6">{details}</p>
        <img
          className="w-full max-w-[500px] mt-4 rounded-lg"
          src="/src/assets/myself.png"
          alt="Myself"
        />
      </div>
    </div>
  );
};
export default Aboutitem;
