import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";

const DotNav = () => {
  const [selected, useSelect] = useState("Home");
  return (
    <>
      <header className="py-6">
        <div className="text-white container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
          <Link href="#">
            <h2 className="text-xl">Jacob Wright</h2>
          </Link>
          <div className="hidden md:flex space-x-12 items-center text-lg">
            <Link href="#">
              <a
                className="hover:scale-125 hover:text-blue-200 transition-all 200ms "
                onClick={() => {
                  useSelect("Home");
                }}
              >
                Home
              </a>
            </Link>
            <Link href="#about">
              <a
                className="hover:scale-125 hover:text-blue-200 transition-all 200ms "
                onClick={() => {
                  useSelect("About");
                }}
              >
                About
              </a>
            </Link>
            <Link href="#projects">
              <a
                className="hover:scale-125 hover:text-blue-200 transition-all 200ms "
                onClick={() => {
                  useSelect("Projects");
                }}
              >
                Projects
              </a>
            </Link>
            <Link href="#contact">
              <button
                className="px-6 py-2 bg-blue-500 font-bold hover:scale-110 hover:text-blue-200 transition-all 200ms "
                onClick={() => {
                  useSelect("Contact");
                }}
              >
                Contact
              </button>
            </Link>
          </div>
          <div className="md:hidden">
            <h2 className="w-full h-full text-white">
              <HiMenu />
            </h2>
          </div>
        </div>
      </header>
      <nav className="inline-block lg:mr-24 lg:w-4 fixed left-percentage md:block hidden mt-12">
        <div className="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36">
          <a
            onClick={() => {
              useSelect("Home");
            }}
            id="navHome"
            href="#"
            className={`${
              selected === "Home" ? "selected-circle" : ""
            } nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body hover:scale-125 transition-all duration-200`}
          >
            <span className="bg-blue-500 px-2 py-1 rounded-md ml-10 opacity-0 text-white">
              Home
            </span>
          </a>
          <a
            onClick={() => {
              useSelect("About");
            }}
            id="navAbout"
            href="#about"
            className={`${
              selected === "About" ? "selected-circle" : ""
            } nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body hover:scale-125 transition-all duration-200`}
          >
            <span className="bg-blue-500 px-2 py-1 rounded-md ml-10 opacity-0 text-white">
              About
            </span>
          </a>
          <a
            onClick={() => {
              useSelect("Projects");
            }}
            id="navProjects"
            href="#projects"
            className={`${
              selected === "Projects" ? "selected-circle" : ""
            } nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body hover:scale-125 transition-all duration-200`}
          >
            <span className="bg-blue-500 px-2 py-1 rounded-md ml-10 opacity-0 text-white">
              Projects
            </span>
          </a>
          <a
            onClick={() => {
              useSelect("Contact");
            }}
            id="navContact"
            href="#contact"
            className={`${
              selected === "Contact" ? "selected-circle" : ""
            } nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body hover:scale-125 transition-all duration-200`}
          >
            <span className="bg-blue-500 px-2 py-1 rounded-md ml-10 opacity-0 text-white">
              Contact
            </span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default DotNav;
