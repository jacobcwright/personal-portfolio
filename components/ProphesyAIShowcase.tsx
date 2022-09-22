/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import maiDesktop from "../public/img/Projects/mai-desktop-light.png";
import Image from "next/image";
import comingSoon from "../public/img/Projects/coming-soon.jpg";

export default function ProphesyAIShowcase() {
  return (
    <div className="w-full h-full">
      <Link href="https://prophesy-ai.com/" passHref>
        <h1 className="w-full text-6xl text-blue-500 flex justify-center hover:text-blue-300 hover:scale-110 ease-in-out transition-all hover:cursor-pointer underline">
          Prophesy AI
        </h1>
      </Link>
      <div className="flex h-screen sm:p-10 items-start pt-5 flex-col sm:flex-row justify-evenly">
        <div className="w-full sm:w-1/4 border-white ">
          <video autoPlay loop muted src="/demo3.mp4" />
        </div>
        <div className="flex flex-col items-start w-1/3">
          <h1 className="text-3xl font-medium text-blue-300">
            Prophesy AI Web App
          </h1>
          <p className="text-xl my-6">
            Uses python web scraping to scrape data from the popular social
            sites and uses machine learning to predict social trends.
          </p>
          <p className="text-xl my-6">
            Built and launched MVP in 6 days and signed first paying customer 1
            day later
          </p>
          <h1 className="text-3xl font-medium text-blue-300">Coming soon...</h1>
          <h2 className="text-xl my-6">
            <u>Visual Trend Prediction:</u> Predict visual/video content trends
            on Instagram & Tiktok
          </h2>
          <h2 className="text-xl my-6">
            <u>Market Landscape Analysis:</u> Identify users standing within the
            market in relation to their competitors
          </h2>
        </div>
      </div>
    </div>
  );
}
