/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import IconBordered from "./IconBordered";
import { Link } from "react-router-dom";

import { MdOutlineSubtitles } from "react-icons/md";
import NextButton from "./NextButton";

export default function FooterAppCatUI({ href }) {
  return (
    <footer className="flex items-center justify-between text-white mt-5 pl-5 pr-5 pb-5">
      <div className="font-normal flex justify-between items-center w-full">
        <Link to="#">
          <div className="flex flex-col justify-center font-normal gap-1 items-center">
            <IconBordered>
              <MdOutlineSubtitles size={40} />
            </IconBordered>
            <p className="text-2xl mt-1.5">Guia de Programação</p>
          </div>
        </Link>
      </div>

      {href && <NextButton href={href} />}
    </footer>
  );
}
