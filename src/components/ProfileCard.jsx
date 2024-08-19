/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ImageIconRounded from "../components/ImageIconRounded";

export default function ProfileCard({ icon, name, create, className }) {
  const [href] = useState(create ? "/createProfile" : "/discoverChannels");

  return (
    <Link
      className={`${className} flex flex-col items-center gap-10 cursor-pointer p-14 hover:bg-zinc-700 focus:border-8 hover:scale-105 rounded-xl border-2 h-[370px] justify-center transition-all duration-400`}
      to={href}
    >
      <div className="flex flex-col items-center justify-center  cursor-pointer  rounded-sm ">
        <ImageIconRounded icon={icon} />

        <h4 className="text-xl pt-10 font-normal mb-1.5">{name}</h4>
      </div>
    </Link>
  );
}
