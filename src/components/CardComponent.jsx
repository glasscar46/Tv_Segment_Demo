/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

export default function CardComponent({ icon, content }, ref) {
  useEffect(() => {});

  return (
    <div className="flex flex-col h-full items-center mt-40 ">
      <img
        className="w-36 h-36 rounded-lg mx-2  hover:scale-105 hover:border-cyan-900 
                focus:scale-105 focus:border-cyan-900 transition duration-500 ease-in-out"
        src={icon}
        alt="card icon"
      />
      <p className="mt-4 text-center">{content}</p>
    </div>
  );
}
