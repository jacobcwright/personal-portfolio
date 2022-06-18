import Image from "next/image";
import React from "react";

type Props = {
  url: any;
  altSrc: string;
  title?: string;
  text?: string;
};

export default function ImageCard(image: Props) {
  return (
    <div className="max-w-sm rounded-2xl shadow-lg overflow-hidden m-3">
      <Image
        className="w-16 h-16 max-h-40"
        src={image.url}
        alt={image.altSrc}
        height={600}
        width={600}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{image.title}</div>
        <p className="text-gray-700 text-base">{image.text}</p>
      </div>
    </div>
  );
}
