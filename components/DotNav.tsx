import React from "react";

const DotNav = () => {
  return (
    <nav className="inline-block lg:mr-24 lg:w-4 fixed left-percentage md:block hidden">
      <div className="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36">
        <a
          href="#"
          className="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body hover:scale-125 transition-all duration-200"
        >
          <span className="bg-blue-500 px-2 py-1 rounded-md ml-10 opacity-0 text-white">
            Home
          </span>
        </a>
        <a
          href="#about"
          className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body hover:scale-125 transition-all duration-200"
        >
          <span className="bg-blue-500 px-2 py-1 rounded-md ml-10 opacity-0 text-white">
            About
          </span>
        </a>
        <a
          href="#projects"
          className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body hover:scale-125 transition-all duration-200"
        >
          <span className="bg-blue-500 px-2 py-1 rounded-md ml-10 opacity-0 text-white">
            Projects
          </span>
        </a>
        <a
          href="#contact"
          className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body hover:scale-125 transition-all duration-200"
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
