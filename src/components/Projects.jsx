import React from "react";
import Projectsitem from "./Projectsitem";
import weatherapp from "/src/assets/weatherapp.png";
import todolist from "/src/assets/todolist.png";
import calculator from "/src/assets/calculator.png";
import ssn from "/src/assets/ssn.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[750px] m-auto md:pl-20 p-4 py-12">
      <h1 className="text-4xl font-mono text-center text-[#001b5e]">
        Projects
      </h1>

      <div className="grid sm:grid-cols-2 gap-8 text-center py-10">
        <Link to="/ssn">
          <Projectsitem img={ssn} title="Search Science News" />
        </Link>{" "}
        <div>
          <a href="/public/weather/index.html">
            <Projectsitem img={weatherapp} title="Weather App" />
          </a>
        </div>
        <div>
          <a href="/public/toDoList/index.html">
            <Projectsitem img={todolist} title="To do list" />
          </a>
        </div>
        <div>
          <a href="/public/calculator/index.html">
            <Projectsitem img={calculator} title="Calculator" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
