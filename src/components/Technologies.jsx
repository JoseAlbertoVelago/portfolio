import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiHtml5Fill } from "react-icons/ri";
import { RiCss3Fill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { motion } from "framer-motion";
import circuit from "../assets/circuit.jpg";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div
      id="technologies"
      className="relative max-w-[1100px] m-auto p-4 py-20 min-h-screen"
    >
      {/* Fondo de la imagen */}
      <div className="absolute inset-0 z-0">
        <img
          src={circuit}
          alt="Circuit Background"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <h1 className="relative z-10 text-4xl font-mono text-center text-[#001b5e]">
        Technologies
      </h1>

      <div className="relative z-10 flex flex-wrap items-center justify-center gap-8 pt-40">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-orange-500 p-5"
        >
          <RiHtml5Fill className="text-7xl text-orange-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-blue-800 p-5"
        >
          <RiCss3Fill className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-yellow-300 p-5"
        >
          <RiJavascriptFill className="text-7xl text-yellow-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-cyan-400 p-5"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-green-400 p-4 text-7xl"
        >
          <img
            className="w-20 h-20 object-contain"
            src="/src/assets/tailwind.png"
            alt="Tailwind CSS Logo"
          />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-blue-300 p-4 text-7xl"
        >
          <img
            className="w-20 h-20 object-contain"
            src="/src/assets/postgres.png"
            alt="Postgresql Logo"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
