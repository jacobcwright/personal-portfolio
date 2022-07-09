import React from "react";
import Image from "next/image";

function Carousel(props: { carouselPics: string[] }) {
  return (
    <div className="carousel w-full h-3/4">
      <div id="slide1" className="carousel-item relative w-full">
        <Image src={props.carouselPics[0]} className="w-full" layout="fill" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <Image src={props.carouselPics[1]} className="w-full" layout="fill" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {props.carouselPics.length > 4 ? (
        <div id="slide3" className="carousel-item relative w-full">
          <Image src={props.carouselPics[2]} className="w-full" layout="fill" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      ) : null}
      {props.carouselPics.length > 4 ? (
        <div id="slide4" className="carousel-item relative w-full">
          <Image src={props.carouselPics[3]} className="w-full" layout="fill" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Carousel;
