/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useContext, useState } from 'react';
import ProfileIcon from "../assets/profile.svg";
import Footer from '../components/FooterHomePage';
import FooterTvAberta from '../components/FooterTvAberta';
import { useNavigate } from "react-router";
import { UrlContext } from "../App";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { universityApps } from '../database';

import audioFile2 from "../audios/RedeMundial.mp3";
import audioFile3 from "../audios/Athenas.mp3";
import audioFile4 from "../audios/MN.mp3";
import audioFile5 from "../audios/Gazeta.mp3";
import audioFile6 from "../audios/Globo.mp3";
import audioFile7 from "../audios/Aparecida.mp3";

import audioFile8 from "../audios/NovoTempo.mp3";
import audioFile9 from "../audios/TvEvang.mp3";
import audioFile10 from "../audios/RedeBr.mp3";
import audioFile11 from "../audios/Band.mp3";
import audioFile12 from "../audios/Futura.mp3";
import audioFile13 from "../audios/RedeVida.mp3";

import audioFile14 from "../audios/TvNazare.mp3";
import audioFile15 from "../audios/TvCamara.mp3";
import audioFile16 from "../audios/Tvp.mp3";
import audioFile17 from "../audios/Record.mp3";
import audioFile18 from "../audios/SBT.mp3";
import audioFile19 from "../audios/CanalSaude.mp3";

import audioFile20 from "../audios/IFMA.mp3";
import audioFile21 from "../audios/CanalGov.mp3";
import audioFile22 from "../audios/TvBrasil.mp3";
import audioFile from "../audios/SuasEmissoras.mp3";
import audioFileBtn from "../audios/GuiaProgBtn.mp3";
import audioFileBtn2 from "../audios/HomeBtn.mp3";
import audioFileLGPD from "../audios/LGPD2.mp3";

import { AudiodescContext } from '../App';
import { AudiodescFlag } from '../App';

import { useAudioPlayer } from 'react-use-audio-player';


export default function TvAberta() {
    const {audioContext} = useContext(AudiodescContext);
    const track = useRef(null);
    const audio = useRef(null);
    const guiaProgRef = useRef();
    const homeRef = useRef();

    const { load, pause } = useAudioPlayer();

    const [queueIndex, setQueueIndex] = useState(0)

    const focusedElementRef = useRef('selectRef')
    const selectedIndexRef = useRef(0)
    const audioQueue = [audioFile, audioFileLGPD]

    const [flagAudiodesc, setFlagAudiodesc] = useContext(AudiodescFlag)

    const currentRowIndexRef = useRef(0);
    const currentCardIndexRef = useRef(0)

    const rowRefs = [useRef([]), useRef([])];
    const navigate = useNavigate();
    // useContext
    const { urlValue, setUrlValue } = useContext(UrlContext);

    const emissoras = [audioFile22, audioFile21, audioFile20, audioFile19,
        audioFile18, audioFile17, audioFile16, audioFile15, audioFile14,
        audioFile13, audioFile12, audioFile11, audioFile10, audioFile9,
        audioFile8, audioFile7, audioFile6, audioFile5, audioFile4,
        audioFile3, audioFile2]

    const openChannel = (channelURL, channelIcon) => {
        setUrlValue(channelURL);
        localStorage.setItem("urlValue", channelURL);
        localStorage.setItem("icon", channelIcon);

        navigate("/radioDifusor");
    }

    // https://stackoverflow.com/questions/26866425/array-index-to-matrix-index
    const arrayToMatrixIdx = (lineLength, arrayIdx) => {
        const row = Math.floor(arrayIdx / lineLength)
        const column = arrayIdx % lineLength

        return [row, column]
    }

    useEffect(() => {
        // Iniciamos o index em 0 para linhas e cartões
        let currentRowIndex = currentRowIndexRef.current;
        let currentCardIndex = currentCardIndexRef.current;

        const handleKeyDown = (event) => {
            switch (event.code) {
                case 'ArrowUp':
                    event.preventDefault();
                    // Verificamos se não estamos na primeira linha para não sair do intervalo
                    if (currentRowIndex > 0) {
                        currentRowIndex -= 0;
                        // currentCardIndex = 0;  // reset card index when moving to another row
                    }
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    // go down one line in the grid and maintain the current card index
                    if (currentRowIndex < rowRefs.length - 1) {
                        currentRowIndex += 0;
                    }
                    
                    break;
                case 'ArrowLeft':
                    event.preventDefault();
                    // Verificamos se não estamos no primeiro card para não sair do intervalo
                    if (currentCardIndex > 0 && (document.activeElement.id !== "guiaProgRef" || document.activeElement.id !== "homeRef")) {
                        currentCardIndex -= 1;
                        rowRefs[currentRowIndex].current[currentCardIndex].focus();
                    }
                   
                    break;
                case 'ArrowRight':
                    event.preventDefault();
                    // Verificamos se não estamos no último card para não sair do intervalo
                    if (currentCardIndex < rowRefs[currentRowIndex].current.length - 1 && (document.activeElement.id !== "guiaProgRef" || document.activeElement.id !== "homeRef")) {
                        currentCardIndex += 1;
                        rowRefs[currentRowIndex].current[currentCardIndex].focus();
                    }
                   
                    break;
                case 'Escape':
                    pause()
                    break;
                case 'Digit1':
                  break;
                case 'KeyA':
                  pause()
                  navigate('/tvAberta');
                  break;
                case 'KeyR':
                    window.location.reload();
                    break;
                case 'Digit3':
                    window.location.reload();
                    break;
                case 'KeyV':
                  pause()
                  window.location.reload();
                  break;
                case 'Digit7':
                  pause()
                  window.location.reload();
                  break;
                case 'F2':
                  currentRowIndexRef.current = currentRowIndex
                  currentCardIndexRef.current = currentCardIndex
                  break;
                default:
                    break;
            }

            // rowRefs[currentRowIndex].current[currentCardIndex].focus();
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        console.log(queueIndex)
          
      }, [queueIndex, load])

    

    return (
        <>
            <h1 className="text-4xl text-white text-center mt-20">Suas Emissoras de TV Aberta</h1>

            <div className="flex flex-row h-full items-center mt-40">
                <div className="flex flex-col h-full items-left justify-left text-white flex-grow ml-5 mr-10">
                    <div className="flex flex-col items-center align-center justify-center text-white h-4/5 rounded">
                        <div className="flex justify-center items-center h-4/5 zIndex-9">
                            <div className="grid grid-cols-6 gap-10 mx-10">
                                {universityApps.map((card, index) => (
                                    <button
                                        key={index}
                                        ref={(el) => {
                                            rowRefs[0].current[index] = el
                                            if (el) {
                                                el.onfocus = () => el.style.transform = "scale(1.3)";
                                                el.onblur = () => el.style.transform = "scale(1)";
                                            }
                                        }}
                                        tabIndex={0}
                                        className="flex flex-col items-center justify-center rounded-lg bg-zinc-900"
                                        onClick={() => openChannel(card.content, card.icon)}
                                    >
                                        <img className="w-[240px] h-[135px]" src={card.icon} alt="Channel Icon" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer key={window.location.pathname}/>
            <FooterTvAberta />
        </>
    )
}