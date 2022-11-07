/* eslint-disable react/no-unescaped-entities */
import React from "react"
import Link from "next/link"

export default function BrainiacShowcase() {
  return (
    <div className="w-full h-full">
      <Link href="https://brainiac-ai.com/" passHref>
        <h1 className="w-full text-6xl text-blue-500 flex justify-center hover:text-blue-300 hover:scale-110 ease-in-out transition-all hover:cursor-pointer underline">
          Brainiac
        </h1>
      </Link>
      <div className="flex h-full sm:p-10 items-start pt-5 flex-col sm:flex-row justify-evenly">
        <div className="flex flex-col items-start w-full">
          <h1 className="text-3xl font-medium text-blue-300">
            Brainiac Web App
          </h1>
          <p className="text-xl my-3">
            Uses NLP to generate a personalized cover letter based on the user's
            resume and a job description.
          </p>
          <video
            src="/brainiac-demo.mp4"
            autoPlay
            loop
            muted
            className="w-full"
          />
          <p className="text-xl my-3">
            <u>Coming soon...</u> Using NLP to generate a personalized resume,
            school essays, and more.
          </p>
        </div>
      </div>
    </div>
  )
}
