import React from "react";
import MentalAI from "./MentalAiShowcase";

function Projects() {
  return (
    <div
      id="projects"
      className="md:px-14 lg:px-24 w-full h-fit mr-0  flex flex-col justify-between p-12 text-white"
    >
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center md:text-left mb-6 md:ml-10">
        Projects
      </h1>
      <MentalAI />
    </div>
  );
}

export default Projects;
