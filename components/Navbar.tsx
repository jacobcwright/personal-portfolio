import React from "react";
import Link from "next/link";

type Props = {};

function Navbar({}: Props) {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>{" "}
      |{" "}
      <Link href="/about">
        <a>About</a>
      </Link>{" "}
      |{" "}
      <Link href="/projects">
        <a>Projects</a>
      </Link>{" "}
      | <a href="/contact">Contact</a>
    </nav>
  );
}

export default Navbar;
