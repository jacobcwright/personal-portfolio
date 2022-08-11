/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import realLP from "../public/img/Projects/real-lp.png";
import realApp from "../public/img/Projects/real-app.png";
import Image from "next/image";
import comingSoon from "../public/img/Projects/coming-soon.jpg";

export default function RealProjectShowCase() {
  return (
    <div className="w-full h-full mt-12">
      <Link href="https://mental-ai.vercel.app/" passHref>
        <h1 className="w-full text-6xl text-blue-500 flex justify-center hover:text-blue-300 hover:scale-110 ease-in-out transition-all hover:cursor-pointer underline">
          REAL Dating
        </h1>
      </Link>
      <div className="flex h-full items-center justify-center p-10">
        <div className="container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2">
          <div className="row-span-2 flex flex-col rounded-md border border-slate-200">
            <div className="h-1/2 flex-1">
              <Image
                src={realLP}
                className="w-full object-cover object-right-top"
                alt="REAL-dating-landing-page"
              />
            </div>
            <div className="p-10">
              <h3 className="text-2xl font-medium text-blue-300">
                REAL Dating Landing Page
              </h3>
              <p className="mt-2 text-white-500">
                Online dating without the FAKE. Real people. Real matches. Real
                dating.
              </p>
              <a
                href="https://real-dating.vercel.app/"
                className="mt-2 inline-flex text-blue-500"
              >
                Read More →
              </a>
            </div>
          </div>

          <div className="row-span-2 flex flex-row rounded-md border border-slate-200">
            <div className="h-1/2 flex-1">
              <Image
                src={realApp}
                className="w-full object-cover object-right-top"
                alt="REAL-dating-landing-page"
              />
            </div>
            <div className="p-10">
              <h3 className="text-2xl font-medium text-blue-300">
                REAL Dating Mobile App
              </h3>
              <p className="mt-2 text-white-500">
                Available on iOS and Android. <br />
                Real people. Real matches. Real dating. <br />
                October 2022 Release.
              </p>
              <a
                href="https://real-dating.vercel.app/"
                className="mt-2 inline-flex text-blue-500"
              >
                Read More →
              </a>
            </div>
          </div>

          {/*           
          <div className="flex rounded-md border border-slate-200">
            <div className="flex-1 p-10">
              <h3 className="text-2xl font-medium text-blue-300">
                Mental AI -- Therapist Software
              </h3>
              <p className="mt-2 text-white-500">
                <b className="text-blue-400">
                  Mental Health Therapy Software reimagined.{" "}
                </b>
                Get live data from clients regarding their mental health.
                Receive AI feedback on ways to help improve your client's mental
                health
              </p>
              <a href="/coming-soon" className="mt-2 inline-flex text-blue-500">
                Read More →
              </a>
            </div>

            <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
              <div className="absolute inset-0">
                <Image
                  src={comingSoon}
                  className="h-full w-full object-cover object-left-top"
                  alt="Coming soon"
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
