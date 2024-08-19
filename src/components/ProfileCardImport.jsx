/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ImageIconRounded from "./ImageIconRounded";
import { BsCheck } from "react-icons/bs";

export default function ProfileCard2({ icon, name, create, id, className }) {
  const [href] = /*useState(create ? "/createProfile" : "/discoverChannels");*/"#"

  const handleClick = () => {
    const e = document.getElementById(id)

    const classe = e.className

    if (classe == "flex justify-end items-center w-full") {
      e.className = "hidden justify-end items-center w-full"
    } else if (classe == "hidden justify-end items-center w-full") {
      e.className = "flex justify-end items-center w-full"
    }
  }

  return (
    <Link
      className={`${className} flex flex-col items-center gap-10 cursor-pointer focus:border-8 hover:bg-zinc-700 hover:scale-105 rounded-xl border-2 h-[370px] justify-center transition-all duration-400`}
      to={href}
      onClick={handleClick}
    >
      <div className="flex flex-col items-center justify-center  cursor-pointer w-[250px] rounded-sm ">
        <div id={id} className="hidden justify-end items-center w-full" ><BsCheck color="green" size="60px"/></div>

        <ImageIconRounded icon={icon} />

        <h4 className="text-xl pt-10 font-normal mb-1.5">{name}</h4>
      </div>
    </Link>
  );
}
