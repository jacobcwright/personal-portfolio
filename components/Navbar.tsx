import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <header>
      {/* "flex flex-col items-center justify-between bg-gray-500 p-4 shadow-md w-full h-16 fixed top-0 z-50 */}
      <div className="flex flex-col items-center justify-between bg-red-500">
        <Link href="/">
          <h1>Jacob Wright</h1>
        </Link>
        <div className="navItems">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
          <a href="/contact">
            <button>Contact</button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
