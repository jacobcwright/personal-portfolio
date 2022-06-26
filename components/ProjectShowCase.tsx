import React from "react";

interface Props {
  direction: number;
}

export default function ProjectShowCase(props: Props) {
  console.log(props.direction);
  if (props.direction) {
    return (
      <div className="flex flex-row h-screen w-full">
        <div className="h-full w-1/2 border-10 border-red-500">box 1</div>
        <div className="h-full w-1/2 border-10 border-blue-500">box 2</div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-row-reverse h-screen w-full">
        <div className="h-full w-1/2 border-10 border-red-500">box 1</div>
        <div className="h-full w-1/2 border-10 border-blue-500">box 2</div>
      </div>
    );
  }
}
