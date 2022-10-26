import React from "react"
import MentalAI from "./MentalAiShowcase"
import RealProjectShowCase from "./RealShowcase"
import ProphesyAIShowcase from "./ProphesyAIShowcase"
import TokenizdShowcase from "./TokenizdShowcase"
import BrainiacShowcase from "./BrainiacShowcase"

function Projects() {
  return (
    <div className="md:px-14 lg:px-24 w-full h-fit mr-0  flex flex-col justify-between p-12 text-white">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center md:text-left mb-6 md:ml-10">
        Projects
        <p className="text-sm">(Click on titles to view project)</p>
      </h1>
      <div id="projects">
        <ProphesyAIShowcase />
        <BrainiacShowcase />
        <TokenizdShowcase />
        <RealProjectShowCase />
        {/* <MentalAI /> */}
      </div>
    </div>
  )
}

export default Projects
