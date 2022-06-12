/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ImageCard from "./ImageCard";
import jazzParents from "../public/img/jazzparents.png";
import camera from "../public/img/camera.jpg";
import fortworth from "../public/img/fortworth.png";
import eth from "../public/img/eth.png";
import gon from "../public/img/gon.gif";
import lifting from "../public/img/lifting.png";

function About() {
  return (
    <div className="bg-white md:px-14 lg:px-24 w-full h-fit mr-0  flex flex-col justify-between p-12">
      <div>
        <h1 className="text-blue-500 font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left">
          Hi, I'm Jacob Wright
        </h1>
        <p id="about" className="p-5">
          I'm a software engineer, currently working at GuideCX. My passion is
          doing and creating all that I can to improve my life and the lives of
          those around me. <br />
          I'm a computer science senior at BYU, and will be participating in BYU
          Sandbox 2022, a startup incubator program.
        </p>
      </div>
      <div className="h-full w-full pt-8">
        <h1 className="text-[#293241] font-bold text-2xl md:text-3xl lg:text-4xl text-center md:text-left mb-6">
          My life in photos
        </h1>
        <div className="flex flex-row flex-wrap justify-evenly h-fit w-full flex-grow ">
          <ImageCard url={jazzParents} altSrc="Jazz Game" />
          <ImageCard url={camera} altSrc="Photography" />
          <ImageCard url={fortworth} altSrc="parents" />
          <ImageCard url={eth} altSrc="Ethereum paintings" />
          <ImageCard url={gon} altSrc="Gon from HxH" />
          <ImageCard url={lifting} altSrc="Lifting" />
        </div>
      </div>
    </div>
  );
}

export default About;
