/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import IconBordered from "./IconBordered";
import { Link } from "react-router-dom";

import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import NextButton from "./NextButton";

export default function FooterAppCatUI({ href }) {
  return (
    <footer className="flex items-center justify-end text-white mb-5 mt-auto pl-3 pr-10 pb-10">
      <div className="font-normal flex justify-end items-center w-full mt-5">

        <div className="w-full bg-zinc-800 flex flex-row items-left justify-left text-white flex-grow mr-10">
          <input className="ml-5" type="checkbox" />
          <h1 className="text-2xl font-normal  ml-10 mr-5">
            Concordo com a coleta e processamento de meus dados para uma melhor experiência, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD). <a className="text-slate-400" href="#">Saiba mais.</a>
          </h1>
        </div>

        <Link to="/createProfile">
          <div className="flex font-normal gap-3 items-center">
            <p className="text-2xl mt-1.5 w-24 text-center">Criar Outro</p>
            <IconBordered>
              <AiOutlinePlus size={40} />
            </IconBordered>
          </div>
        </Link>

        <Link to="/discoverChannels">
          <div className="flex font-normal gap-3 items-center pl-5">
            <p className="text-2xl mt-1.5 w-24 text-center">Avançar</p>
            <IconBordered>
              <AiOutlineArrowRight size={40} />
            </IconBordered>
          </div>
        </Link>
      </div>

      {href && <NextButton href={href} />}
    </footer>
  );
}
