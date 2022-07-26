/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import maiDesktop from "../public/img/Projects/mai-desktop-light.png";
import Image from "next/image";
import comingSoon from "../public/img/Projects/coming-soon.jpg";

export default function RealProjectShowCase() {
  return (
    <div className="w-full h-full">
      <Link href="#" passHref>
        <h1 className="w-full text-6xl text-blue-500 flex justify-center hover:text-blue-300 hover:scale-110 ease-in-out transition-all hover:cursor-pointer underline">
          REAL Dating
        </h1>
      </Link>
      <div className="flex h-full items-center justify-center p-10">
        <div className="container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2">
          <div className="row-span-2 flex flex-col rounded-md border border-slate-200">
            <div className="h-1/2 flex-1">
              <Image
                src={comingSoon}
                className="w-full object-cover object-right-top"
                alt="coming-soon"
              />
            </div>
            <div className="p-10">
              <h3 className="text-2xl font-medium text-blue-300">
                REAL Dating Landing Page
              </h3>
              <p className="mt-2 text-white-500">
                Landing Page for the next generation of dating apps. Coming Soon
              </p>
              <a href="#" className="mt-2 inline-flex text-blue-500">
                Read More →
              </a>
            </div>
          </div>
          <div className="row-span-2 flex flex-col rounded-md border border-slate-200">
            <div className="h-1/2 flex-1">
              <Image
                src={comingSoon}
                className="w-full object-cover object-right-top"
                alt="coming-soon"
              />
            </div>
            <div className="p-10">
              <h3 className="text-2xl font-medium text-blue-300">
                REAL Dating Mobile App
              </h3>
              <p className="mt-2 text-white-500">
                Mobile App for the next generation of dating apps. Coming Soon
              </p>
              <a href="#" className="mt-2 inline-flex text-blue-500">
                Read More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
