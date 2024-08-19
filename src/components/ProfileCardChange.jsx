/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ImageIconRounded from "./ImageIconRounded";
import { BsCheck } from "react-icons/bs";

export default function ProfileCardChange({ icon, name, create, id }) {
  const [href] = /*useState(create ? "/createProfile" : "/discoverChannels");*/"#"

  const handleClick = () => {
    const e = document.getElementById(id)

    let classe = e.className
    classe = classe.split(" ")[0]

    if (classe == "flex") {
      e.className = "hidden justify-center items-center w-full mt-5 border-[2px] rounded-sm"
    } else if (classe == "hidden") {
      e.className = "flex justify-center items-center w-full mt-5 border-[2px] rounded-sm"
    }
  }

  return (
    <>
    <div className="flex flex-col items-center">
      <Link
        className="flex flex-col items-center gap-10 cursor-pointer hover:bg-zinc-700 hover:scale-105 rounded-xl border-2 h-[370px] justify-center transition-all duration-400"
        to={href}
        onClick={handleClick}
      >
        <div className="flex flex-col items-center justify-center  cursor-pointer w-[250px] rounded-sm ">

          <ImageIconRounded icon={icon} />

          <h4 className="text-xl pt-10 font-normal mb-1.5">{name}</h4>
        </div>

      </Link>

      <div id={id} className="hidden justify-center items-center w-full mt-5 border-[2px] rounded-sm" >
        <h3 className="text-2xl text-white">Editar Perfil</h3>
      </div>
    </div>
    </>
  );
}
