import React from "react";
import Aboutitem from "./Aboutitem";

const data = [
  {
    title: "Graphic Designer (Universidad de Sonora)",
    duration: "4 years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis incidunt distinctio id delectus doloribus atque aspernatur dignissimos voluptas sapiente ducimus laboriosam, omnis iusto beatae tenetur tempora! Perferendis qui unde commodi.",
  },
];
const About = () => {
  return (
    <div id="about" className="max-w-[1800px]  md:pl-20  p-4 py-10 ">
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
