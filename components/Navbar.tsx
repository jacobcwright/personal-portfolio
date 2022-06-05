import React from "react";
import Link from "next/link";
// import { HiMenu } from "react-icons/Hi";

function Navbar() {
  return (
    <header className="py-6">
      <div className="text-white container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <Link href="/">
          <h2 className="text-xl">Jacob Wright</h2>
        </Link>
        <div className="hidden md:flex space-x-12 items-center text-lg">
          <Link href="/">
            <a className="hover:scale-125 hover:text-blue-200 transition-all 200ms ">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="hover:scale-125 hover:text-blue-200 transition-all 200ms ">
              About
            </a>
          </Link>
          <Link href="/projects">
            <a className="hover:scale-125 hover:text-blue-200 transition-all 200ms ">
              Projects
            </a>
          </Link>
          <Link href="/contact">
            <button className="px-6 py-2 bg-blue-500 font-bold hover:scale-110 hover:text-blue-200 transition-all 200ms ">
              Contact
            </button>
          </Link>
        </div>
        {/* <div className="md:hidden">
          <HiMenu className="w-full h-6" />
        </div> */}
      </div>
    </header>
  );
}

export default Navbar;
