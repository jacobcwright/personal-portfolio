import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineEye } from "react-icons/Hi";
import Pfp from "../public/img/linkedin.png";

function Hero() {
  return (
    <div className="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full h-3/4">
      <div className="flex flex-wrap md:flex-nowrap h-full w-full">
        <nav className="inline-block lg:mr-24 lg:w-4 fixed left-percentage md:block hidden">
          <div className="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36">
            <a
              href="/"
              className="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body hover:scale-125 transition-all duration-200"
            >
              <span className="bg-blue-500 px-2 py-1 rounded-md ml-10 opacity-0 text-white">
                Home
              </span>
            </a>
            <a
              href="/about"
              className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body hover:scale-125 transition-all duration-200"
            >
              <span className="bg-blue-500 px-2 py-1 rounded-md ml-10 opacity-0 text-white">
                About
              </span>
            </a>
            <a
              href="/projects"
              className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body hover:scale-125 transition-all duration-200"
            >
              <span className="bg-blue-500 px-2 py-1 rounded-md ml-10 opacity-0 text-white">
                Projects
              </span>
            </a>
            <a
              href="/contact"
              className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body hover:scale-125 transition-all duration-200"
            >
              <span className="bg-blue-500 px-2 py-1 rounded-md ml-10 opacity-0 text-white">
                Contact
              </span>
            </a>
          </div>
        </nav>

        <div className="flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-36">
          <h1 className="text-white font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left">
            Welcome!
          </h1>
          <div className="w-full flex justify-center md:justify-start">
            <button className="px-8 py-2 bg-blue-500 text-white font-bold mt-12 flex items-center space-x-3 max-h-12">
              <div>
                <HiOutlineEye className="w-8 h-8" />
              </div>
              <span>My work</span>
            </button>
          </div>
        </div>
        <Image
          src={Pfp}
          alt="selfie"
          className="w-3/4 mt-12 md:absolute -mt-6 md:mt-0 right-0 -z-1"
        />
      </div>
    </div>
  );
}

export default Hero;
