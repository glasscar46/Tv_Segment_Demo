import React from "react";

export default function ImageIconRounded({ icon }) {
  return (
    <div className="flex w-40 h-40 rounded-full bg-coverrounded-[100000px]  h-42 overflow-hidden items-center justify-center ">
      <img src={icon} alt="" className="w-full h-full" />
    </div>
  );
}
