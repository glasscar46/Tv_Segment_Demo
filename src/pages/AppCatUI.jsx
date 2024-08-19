/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "../components/FooterAppCatUI";
import ProfileIcon from "../assets/profile_gray.svg";
import ChevronDownIcon from "../assets/chevron_down.svg";
import TitlePage from "../components/TitlePage";
import ReactAudioPlayer from 'react-audio-player';

export default function AppCatUI() {
  return (
    <>
      {/* div with input for nome and for sobrenome  in row*/}
      <div className="flex flex-col h-full items-end mt-10 mb-5">

        <div className="flex w-full justify-between items-start">
          <TitlePage name="Suas Emissoras de TV 3.0 aberta" />

          <div className="flex flex-row items-center justify-right mr-5 mb-5">
            <h3 className="pr-3 text-2xl text-right text-gray-300">Criar Perfil</h3>
            <img className="w-24" src={ProfileIcon} />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center h-full w-full items-end">

          <div className="bg-zinc-900 grid grid-rows-3 grid-cols-6 text-white gap-5 w-full h-4/5 pl-5 pr-5">
            <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RÁDIODIFUSOR</h1></div>
            <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RÁDIODIFUSOR</h1></div>
            <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RÁDIODIFUSOR</h1></div>
            <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RÁDIODIFUSOR</h1></div>
            <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RÁDIODIFUSOR</h1></div>
            <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RÁDIODIFUSOR</h1></div>
            <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RÁDIODIFUSOR</h1></div>
            <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RÁDIODIFUSOR</h1></div>
            <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RÁDIODIFUSOR</h1></div>
            <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RÁDIODIFUSOR</h1></div>
            <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RÁDIODIFUSOR</h1></div>
            <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RÁDIODIFUSOR</h1></div>
            <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RÁDIODIFUSOR</h1></div>
            <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RÁDIODIFUSOR</h1></div>
            <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RÁDIODIFUSOR</h1></div>
            <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RÁDIODIFUSOR</h1></div>
            <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RÁDIODIFUSOR</h1></div>
            <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RÁDIODIFUSOR</h1></div>
          </div>

          <img src={ChevronDownIcon} />
        </div>

      </div>
      <Footer />
    </>
  );
}
