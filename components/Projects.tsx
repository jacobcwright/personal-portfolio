import React from "react";
import ProjectShowCase from "./ProjectShowCase";

function Projects() {
  return (
    <div
      id="projects"
      className="md:px-14 lg:px-24 w-full h-screen mr-0  flex flex-col justify-between p-12 text-white"
    >
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center md:text-left mb-6">
        Projects
      </h1>
      <ProjectShowCase />
      <p>This page is under construction</p>
    </div>
  );
}

export default Projects;
