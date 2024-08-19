/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import IconBordered from "./IconBordered";

// import { PiSpeakerHighDuotone } from "react-icons/pi";
import Settings from "../assets/settings.svg";
import NextButton from "./NextButton";

export default function Footer(
  { href, btnRef, dynamicContent, children },
  ref
) {
  return (
    <footer className="flex items-center justify-between text-white mt-10 mx-10">
      <div
        ref={btnRef}
        tabIndex="2"
        id="confRef"
        className="font-normal flex gap-5 items-center mb-5 w-full"
      >
        {children ? children : <Conf />}
      </div>

      {href && <NextButton ref={ref} href={href} />}
    </footer>
  );
}

export function Conf() {
  return (
    <div className="">
      <IconBordered>
        <img src={Settings} className="w-[35px]" />
      </IconBordered>

      <p className="text-3xl">Configurações</p>
    </div>
  );
}
