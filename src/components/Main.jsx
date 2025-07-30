import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import background from "../assets/bground.jpg";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1] "
        src={background}
        alt="Background"
      ></img>
      <div className="w-full h-screen absolute  m-auto top-0 left-0 bg-white/10">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center text-white">
          <h1 className="sm:text-5xl text-4xl font-mono">
            Hello, I'm Alberto Velarde
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-2 font-mono">
            I'm a&nbsp;
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                " Programmer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                " Coder",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                paddingLeft: "5px",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-4 max-w-[80px] w-full gap-3">
            <div>
              <a href="https://www.linkedin.com/in/albertovelarde1011/">
                <FaLinkedin className="cursor-pointer " size={30} />
              </a>
            </div>
            <div>
              <a href="https://github.com/JoseAlbertoVelago">
                <FaGithub className="cursor-pointer" size={30} />
              </a>
            </div>
            <div>
              <a href="/cv.pdf">
                <FaFileAlt className="cursor-pointer " size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
