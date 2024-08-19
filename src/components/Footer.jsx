/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useRef } from "react";
import { AudiodescContext } from "../App";
import IconBordered from "./IconBordered";

// import { PiSpeakerHighDuotone } from "react-icons/pi";
import AudioDescriacao from "../assets/audioDescricao.jpg";
import libras from "../assets/libras.png";
import { FaHandsAslInterpreting } from "react-icons/fa6";
import NextButton from "./NextButton";

export default function Footer({ href, ids, tabIdxs }, ref) {
  const {audioContext} = useContext(AudiodescContext);
  const track = useRef(null);
  const audio = useRef(null);
  
  const playAudio = (file) => {
    console.log("playAudio")
    // const hasPlayedAudio = localStorage.getItem('hasPlayedAudio2');

    audio.current = new Audio(file);
    track.current = audioContext.createMediaElementSource(audio.current);
    console.log(audio.current)
    track.current.connect(audioContext.destination);

    audio.current.play().catch((error) => {
      console.error("Falha ao tocar áudio:", error);
    });
    // localStorage.setItem('hasPlayedAudio2', 'true');
  }

  const pauseAudio = () => {
    // console.log("pauseAudio")
    // const hasPlayedAudio = localStorage.getItem('hasPlayedAudio2');
    console.log(audio.current)
    if (track.current != null){
      // const audio = track.current.mediaElement;
      audio.current.pause();
      // localStorage.setItem('hasPlayedAudio2', 'true');
    }
  }

  return (
    <footer className="flex items-center justify-between text-white mt-auto pl-10 pr-10 pb-10 mb-20 ml-10">
      <div className="font-normal flex gap-5 items-center mb-5">
        <IconBordered>
          <img src={AudioDescriacao} className="w-[85px]" />
        </IconBordered>

        <p id={ids? ids[0] : ""} tabIndex={tabIdxs[0]} className="text-4xl mt-1.5">Audiodescrição</p>

        <IconBordered>
          {/* <FaHandsAslInterpreting size={40} /> */}
          <img src={libras} className="w-[85px]" />
        </IconBordered>
        <p id={ids? ids[1] : ""} tabIndex={tabIdxs[1]} className="text-4xl mt-1.5">Acessível em Libras</p>
      </div>

      {href && <NextButton ref={ref} href={href} />}
    </footer>
  );
}
