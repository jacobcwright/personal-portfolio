import React, { useEffect, useState } from "react";

const DotNav = () => {
  const [selected, useSelect] = useState("Home");
  return (
    <nav className="inline-block lg:mr-24 lg:w-4 fixed left-percentage md:block hidden">
      <div className="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36">
        <a
          onClick={() => {
            useSelect("Home");
          }}
          id="navHome"
          href="#"
          className={`${
            selected == "Home" ? "selected-circle" : ""
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
            selected == "About" ? "selected-circle" : ""
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
            selected == "Projects" ? "selected-circle" : ""
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
            selected == "Contact" ? "selected-circle" : ""
          } nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body hover:scale-125 transition-all duration-200`}
        >
          <span className="bg-blue-500 px-2 py-1 rounded-md ml-10 opacity-0 text-white">
            Contact
          </span>
        </a>
      </div>
    </nav>
  );
};

export default DotNav;
