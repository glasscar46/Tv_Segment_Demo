/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import IconBordered from "./IconBordered";
import { Link } from "react-router-dom";

import { AiOutlineArrowLeft } from "react-icons/ai";
import NextButton from "./NextButton";

export default function FooterAppCatUI({ href, className }) {
  return (
    <footer className="flex items-center justify-between text-white mt-auto pl-10 pr-10 pb-10">
      <div className={`font-normal flex justify-between items-center w-full`}>

        <Link className={`${className} focus:border-8`}to="/appCatUI">
          <div className="flex font-normal gap-3 items-center">
            <IconBordered>
              <AiOutlineArrowLeft size={40} />
            </IconBordered>
            <p className="text-2xl mt-1.5 w-52">Voltar para apps de TV aberta</p>
          </div>
        </Link>
      </div>

      {href && <NextButton href={href} />}
    </footer>
  );
}
