import React from "react";
import Aboutitem from "./Aboutitem";

const data = [
  {
    title: "Studies - Graphic Designer (Universidad de Sonora)",
    duration: "4 years",
    details:
      "Hello, I'm a web developer. My name is Alberto Velarde. I love technology and enjoy solving problems. ",
  },
];
const About = () => {
  return (
    <div id="about" className="max-w-[1800px]  md:pl-20  p-4 py-20 ">
      <h1 className="text-4xl font-mono text-center text-[#001b5e]">About</h1>
      <div className="">
        {data.map((item, idx) => (
          <Aboutitem
            key={idx}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
