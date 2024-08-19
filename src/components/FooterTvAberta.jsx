/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import IconBordered from "./IconBordered";
import { Link } from "react-router-dom";

import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import NextButton from "./NextButton";
import icon from "../assets/icon.png";

export default function FooterTvAberta({ href }) {
    return (
        <footer className="flex items-center justify-end text-white mb-5 mt-auto pl-3 pr-10 pb-10 flex-col">
            <div className="font-normal flex items-center w-full mt-5 flex-row justify-between">

                <Link tabIndex="0" id="homeRef" to="/homePage">
                    {/* <div className="flex font-normal gap-3 items-center ml-10">
                        <IconBordered>
                            <AiOutlineHome size={40} />
                        </IconBordered>
                        <p className="text-2xl mt-1.5 w-24 text-center">Home Smartv</p>
                    </div> */}
                </Link>



                <Link tabIndex="1" id="guiaProgRef" to="#">
                    {/* <div className="flex font-normal gap-3 items-center align-middle mr-10">
                        <p className="text-xl mt-1.5 w-24 text-center mr-12">Guia de
                            Programação</p>
                        <IconBordered>
                            <img src={icon} />
                        </IconBordered>
                    </div> */}
                </Link>
            </div>
            <div className="w-full flex flex-row items-left justify-left text-white flex-grow mt-5">
                <h1 className="text-xl font-normal mx-[20%]">
                    <p className="text-center">
                        Em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD), cada radiodifusor
                        solicitará sua permissão para uso dos dados de seu perfil e coleta de outras informações
                    </p>
                </h1>
            </div>

            {href && <NextButton href={href} />}
        </footer>
    );
}
