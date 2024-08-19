/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import IconBordered from "./IconBordered";

import AudioDescriacao from "../assets/audioDescricao.jpg";
import NextButton from "./NextButton";

export default function Footer({ href, btnRef }, ref) {
  return (
    <footer className="flex items-center justify-between text-white mt-auto mb-10 ml-5">
      <div className="font-normal flex gap-5 items-center mb-5">
        <IconBordered>
          <img src={AudioDescriacao} className="w-[85px]" />
        </IconBordered>

        <p ref={btnRef} tabIndex="0" id="audiodescRef" className="text-4xl mt-1.5">Audiodescrição</p>
      </div>

      {href && <NextButton ref={ref} href={href} />}
    </footer>
  );
}
