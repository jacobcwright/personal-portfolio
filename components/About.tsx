/* eslint-disable react/no-unescaped-entities */
import React from "react"
import ImageCard from "./ImageCard"
import jazzParents from "../public/img/jazzparents.png"
import camera from "../public/img/camera.jpg"
import fortworth from "../public/img/fortworth.png"
import eth from "../public/img/eth.png"
import gon from "../public/img/gonthumbs.gif"
import lifting from "../public/img/lifting.png"

function About() {
  return (
    <div className="bg-white md:px-14 lg:px-24 w-full h-fit mr-0 flex flex-col justify-between p-12">
      <div className="md:ml-10">
        <h1 className="text-blue-500 font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left">
          Hi, I'm Jacob Wright
        </h1>
        <p id="about" className="p-5">
          I'm a software engineer, currently working at GuideCX. My passion is
          doing and creating all that I can to improve my life and the lives of
          those around me. <br />
          I'm a computer science senior at BYU, and will be participating in BYU
          Sandbox 2022, a startup incubator program.
        </p>
      </div>
      <div className="h-full w-full pt-8">
        <h1 className="text-[#293241] font-bold text-2xl md:text-3xl lg:text-4xl text-center md:text-left mb-6 md:ml-10">
          My life in photos
        </h1>
        <div className="flex flex-row flex-wrap justify-evenly h-fit w-full flex-grow md:ml-10">
          <ImageCard
            url={jazzParents}
            altSrc="Jazz Game"
            title="Utah Jazz Fan"
            text="I was born and raised as a Utah Jazz Fan! I love watching and playing basketball and many other sports."
            cardStyles={"max-w-sm rounded-2xl shadow-lg overflow-hidden m-3"}
          />
          <ImageCard
            url={camera}
            altSrc="Photography"
            title="Amateur Photographer"
            text="I have recently gotten into photography. I mainly shoot 35mm film, however, I do play with digital cameras a bit."
            cardStyles={"max-w-sm rounded-2xl shadow-lg overflow-hidden m-3"}
          />
          <ImageCard
            url={fortworth}
            altSrc="parents"
            title="Traveling"
            text="Nothing is better than traveling and experiencing new things with those you love."
            cardStyles={"max-w-sm rounded-2xl shadow-lg overflow-hidden m-3"}
          />
          <ImageCard
            url={eth}
            altSrc="Ethereum paintings"
            title="I ❤️ Tech"
            text="I love any and all things technology. Especially Blockchain technology and artificial intelligence."
            cardStyles={"max-w-sm rounded-2xl shadow-lg overflow-hidden m-3"}
          />
          <ImageCard
            url={gon}
            altSrc="Gon from HxH"
            title="Anime"
            text="I grew up watching anime as my Saturday morning cartoons and have loved it ever since. My favorite anime is Hunter x Hunter."
            cardStyles={"max-w-sm rounded-2xl shadow-lg overflow-hidden m-3"}
          />
          <ImageCard
            url={lifting}
            altSrc="Lifting"
            title="Weightlifting"
            text="Lifting weights became a way to maintain my physical health after I stopped avidly playing competitive sports in High School."
            cardStyles={"max-w-sm rounded-2xl shadow-lg overflow-hidden m-3"}
          />
        </div>
      </div>
    </div>
  )
}

export default About
