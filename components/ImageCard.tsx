import Image from "next/image";
import React from "react";

type Props = {
  url: any;
  altSrc: string;
  title?: string;
  text?: string;
  cardStyles?: any;
  textStyles?: any;
};

export default function ImageCard(image: Props) {
  return (
    // <div className="max-w-sm rounded-2xl shadow-lg overflow-hidden m-3">
    <div className={image.cardStyles}>
      <Image
        src={image.url}
        alt={image.altSrc}
        className="w-full h-fit"
        height={800}
        width={800}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-blue-500">
          {image.title}
        </div>
        {/* <p className="text-blue-500 text-base">{image.text}</p> */}
        <p className={image.textStyles}>{image.text}</p>
      </div>
    </div>
  );
}
