import Image from "next/image";
import Link from "next/link";
import React from "react";
import Pfp from "../public/img/linkedin.png";
import DotNav from "./DotNav";

function Hero() {
  return (
    <div className="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full h-3/4">
      <div className="flex flex-wrap md:flex-nowrap h-full w-full">
        <DotNav />
        <div className="flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-36">
          <h1 className="text-white font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left">
            Welcome!
          </h1>
          <Link
            className="w-full flex justify-center md:justify-start"
            href="#projects"
          >
            <button className="px-8 py-2 bg-blue-500 text-white font-bold mt-12 flex items-center space-x-3 max-h-12 hover:scale-110 transition-all 200ms">
              {/* <div>
                <HiOutlineEye className="w-8 h-8" />
              </div> */}
              <span>View my work</span>
            </button>
          </Link>
        </div>
        <Image
          src={Pfp}
          alt="selfie"
          className="w-3/4 mt-12 md:absolute -mt-6 md:mt-0 right-0 -z-1 hover:scale-105 transition-all 1000ms h-full"
        />
      </div>
    </div>
  );
}

export default Hero;
