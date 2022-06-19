import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "./Navbar";
import Image from "next/image";
import DotNav from "./DotNav";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => {
  const [selected, useSelect] = useState("Home");
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/img/jw.png"></link>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DotNav />
      {children}
    </>
  );
};

export default Layout;
