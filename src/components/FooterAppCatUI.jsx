/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import IconBordered from "./IconBordered";

import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineSubtitles } from "react-icons/md";
import NextButton from "./NextButton";

export default function FooterAppCatUI({ href }) {
  return (
    <footer className="flex flex-col items-center justify-center text-white mt-auto pl-10 pr-10 pb-10">
      <div className="font-normal flex justify-between items-center w-full">

        <div className="flex font-normal gap-3 items-center">
          <IconBordered>
            <BiHomeAlt size={70} />
          </IconBordered>
          <p className="text-3xl mt-1.5">Home</p>
        </div>

        <div className="flex font-normal gap-3 items-center">
          <p className="text-3xl mt-1.5">Guia de Programação</p>
          <IconBordered>
            <MdOutlineSubtitles size={70} />
          </IconBordered>
        </div>
      </div>

      <h3 className="text-xl w-2/3 text-center">Em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD), cada radiodifusor solicitará sua permissão para uso dos dados de seu perfil e coleta de outras informações</h3>
      {href && <NextButton href={href} />}
    </footer>
  );
}
