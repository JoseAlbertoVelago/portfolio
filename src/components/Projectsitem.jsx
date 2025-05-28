import React from "react";

const Projectsitem = ({ img, title }) => {
  return (
    <div className="relative flex items-center justify-center w-full h-64 shadow-xl shadow-gray-400 rounded-xl group overflow-hidden hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      {/* Imagen de fondo */}
      <img
        src={img}
        alt={title}
        className="absolute w-full h-full object-cover rounded-xl group-hover:opacity-10 transition-opacity duration-300"
      />

      {/* Título centrado */}
      <div className="z-10 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-2xl font-mono text-white tracking-wider">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Projectsitem;
