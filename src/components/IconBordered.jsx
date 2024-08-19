import React from "react";

export default function IconBordered({ children, background }) {
  return (
    <div className={`hover:bg-zinc-700 hover:scale-105 transition-all duration-400 p-2 border border-white rounded-lg ${background}`}>
      {children}
    </div>
  );
}
