/* eslint-disable react/no-unescaped-entities */
import React from "react";

function About() {
  return (
    <div className="bg-white md:px-14 lg:px-24 w-full h-screen mr-0  flex flex-col justify-between pt-12">
      <div>
        <h1 className="text-[#293241] font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left">
          Hi, I'm Jacob Wright
        </h1>
        <p id="about">
          I'm a software engineer, currently working at GuideCX. My passion is
          doing and creating all that I can to improve my life and the lives of
          those around me. <br />
          I'm a computer science senior at BYU, and will be participating in BYU
          Sandbox 2022, a startup incubator program.
        </p>
      </div>
      <div>
        <h1>My life in photos</h1>
        insert masonry grid of photos here
      </div>
    </div>
  );
}

export default About;
