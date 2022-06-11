/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ImageCard from "./ImageCard";
import hawaiifamily from "../public/img/aesthetic.png";
import camera from "../public/img/camera.jpg";
import fortworth from "../public/img/fortworth.jpg";
import eth from "../public/img/eth.jpg";
import gon from "../public/img/gon.gif";

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
      <div className="h-full w-full">
        <h1>My life in photos</h1>
        <div className="flex flex-row flex-wrap justify-evenly h-screen w-full flex-grow ">
          <ImageCard url={hawaiifamily} altSrc="hawaii" />
          <ImageCard url={camera} altSrc="Photography" />
          <ImageCard url={fortworth} altSrc="parents" />
          <ImageCard url={eth} altSrc="Ethereum paintings" />
          <ImageCard url={gon} altSrc="Gon from HxH" />
        </div>
      </div>
    </div>
  );
}

export default About;
