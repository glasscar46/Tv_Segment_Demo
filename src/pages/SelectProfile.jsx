/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useContext, useState } from "react";
import { useLocation, useNavigation } from "react-router-dom";

import Footer from "../components/Footer";
import TitlePage from "../components/TitlePage";

import { Link } from "react-router-dom";
import ImageIconRounded from "../components/ImageIconRounded";
import UserImg from '../assets/user-img.png'
import audioFile from "../audios/ConfiguracaoInicialPerfil.mp3";
import audioFile2 from "../audios/ContinuarSemPerfil.mp3";
import audioFile3 from "../audios/AdicionarPerfil.mp3";
import audioFile4 from "../audios/AudiodescricaoBotao.mp3";
import audioFile5 from "../audios/AcessivelLibras.mp3";

import { AudiodescContext } from "../App";
import { AudiodescFlag } from "../App";

import { useAudioPlayer } from "react-use-audio-player";

export default function SelectProfile() {
  const location = useLocation();
  const navigate = useNavigation();
  const linksRef = useRef([]);
  linksRef.current = [
    "/discoverChannels",
    "/discoverChannels",
    "/discoverChannels",
    "/discoverChannels",
  ];

  const {audioContext} = useContext(AudiodescContext);
  const track = useRef(null);
  const audio = useRef(null);
  
  const [queueIndex, setQueueIndex] = useState(0)
  const audiosObj = {
    "linksRef0": [audioFile2],
    "linksRef1": [audioFile3],
    "audiodescRef": [audioFile4],
    "signRef": [audioFile5]
  }

  const focusedElementRef = useRef('linksRef0');
  const audioQueue = [audioFile, ...audiosObj[focusedElementRef.current]]

  const { load, pause } = useAudioPlayer()


  const [flagAudiodesc, setFlagAudiodesc] = useContext(AudiodescFlag);

  /*useEffect(() => {
    // pauseAudio()
    pause()
    // audioContext = new AudioContext()

    const hasPlayedAudio = localStorage.getItem('hasPlayedAudio99');

    if (!hasPlayedAudio) {
      playAudio(audioFile)
      /*const audio = new Audio(audioFile);
      audio.play().catch((error) => {
        console.error("Falha ao tocar áudio:", error);
      });
      localStorage.setItem('hasPlayedAudio99', 'true');
    }
  }, []);*/


  useEffect(() => {

    // linksRef.current[0].focus();
    console.log(audioQueue)

    document.getElementById(focusedElementRef.current).focus()
    audioQueue.push(audioFile); // Tem que ser o audio do btn que recebe o foco primeiro na página

    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'F2':
          focusedElementRef.current = document.activeElement.id

          if (flagAudiodesc) {
            pause()
            setFlagAudiodesc(false)
            setQueueIndex(0)
          }
          else setFlagAudiodesc(true)
          break;
        case "ArrowLeft":
          if (linksRef.current[0] === document.activeElement) {
            linksRef.current[4].focus();
          } else if (linksRef.current[1] === document.activeElement) {
            linksRef.current[0].focus();
            if(flagAudiodesc) {
              pause()
              load(audioFile2, {
                autoplay: true
              })
            }
          } else if (linksRef.current[2] === document.activeElement) {
            linksRef.current[1].focus();
          } else if (linksRef.current[3] === document.activeElement) {
            linksRef.current[2].focus();
          }
          else if (document.activeElement.id === "signRef") {
            document.getElementById("audiodescRef").focus()
            if(flagAudiodesc) {
              pause()
              load(audioFile4, {
                autoplay: true
              })
            }
          }
          /*else {
            linksRef.current[0].focus();
          }*/
          break;
        case "ArrowRight":
          if (linksRef.current[0] === document.activeElement) {
            linksRef.current[1].focus();
            if(flagAudiodesc) {
              pause()
              load(audioFile3, {
                autoplay: true
              })
            }
          } else if (linksRef.current[1] === document.activeElement) {
            linksRef.current[2].focus();
          } else if (linksRef.current[2] === document.activeElement) {
            linksRef.current[3].focus();
          } else if (linksRef.current[3] === document.activeElement) {
            linksRef.current[4].focus();
          } 
          else if (document.activeElement.id === "audiodescRef") {
            document.getElementById("signRef").focus()
            if(flagAudiodesc) {
              pause()
              load(audioFile5, {
                autoplay: true
              })
            }
          }
          else {
            linksRef.current[0].focus();
          }
          
          break;
        case "ArrowUp":
          if (document.activeElement.id === "signRef"){
            linksRef.current[1].focus()
            if(flagAudiodesc) {
              pause()
              load(audioFile3, {
                autoplay: true
              })
            }
          }
          else if (document.activeElement.id === "audiodescRef") {
            linksRef.current[0].focus()
            if(flagAudiodesc) {
              pause()
              load(audioFile2, {
                autoplay: true
              })
            }
          }

          // linksRef.current[2].focus();
          break;
        case "ArrowDown":
          //linksRef.current[3].focus();
          if (document.activeElement === linksRef.current[0]){
            document.getElementById("audiodescRef").focus()
            if(flagAudiodesc) {
              pause()
              load(audioFile4, {
                autoplay: true
              })
            }
          }
          else if (document.activeElement === linksRef.current[1]){
            document.getElementById("signRef").focus()
            if(flagAudiodesc) {
              pause()
              load(audioFile5, {
                autoplay: true
              })
            }
          }
          break;
        case 'Enter':
          event.preventDefault();
          document.activeElement.click();
          break;
        case 'Escape':
          event.preventDefault();
          pause()
          navigate(-1)
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [location, navigate, flagAudiodesc]);

  useEffect(() => {
    console.log(queueIndex)
    if(flagAudiodesc && queueIndex < audioQueue.length){

      load(audioQueue[queueIndex], {
        autoplay: true,
        onend: () => {
          setQueueIndex(index => {return queueIndex + 1})
        }
      });
    }
      
  }, [queueIndex, load, flagAudiodesc])

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
    <>
      <header className="flex flex-col items-left justify-left text-white">
        <TitlePage name="Configuração Inicial de Perfil" />
      </header>

      <div className="p-4 rounded flex items-center justify-center text-white flex-grow my-10 mx-10 gap-8 mr-10 overflow-hidden">
        <AudiodescFlag.Provider value={[flagAudiodesc, setFlagAudiodesc]}>
          <Link
            id="linksRef0"
            className="flex flex-col items-center gap-10 cursor-pointer p-14 hover:bg-zinc-700 hover:scale-105 rounded-xl border-2 h-[370px] justify-center transition-all duration-400 focus:border-[10px]"
            to={"/discoverChannels"}
            ref={(el) => linksRef.current[0] = el}
            onClick={pause}
          >
            <div className="flex flex-col items-center justify-center  cursor-pointer  rounded-sm w-[360px]">
              <ImageIconRounded icon={UserImg} />
              <h4 className="text-2xl pt-10 font-normal mb-1.5">Continuar sem criar Perfil</h4>
            </div>
          </Link>
        </AudiodescFlag.Provider>

        <AudiodescFlag.Provider value={[flagAudiodesc, setFlagAudiodesc]}>
          <Link
            id="linksRef1"
            className="flex flex-col items-center gap-10 cursor-pointer p-14 hover:bg-zinc-700 hover:scale-105 rounded-xl border-2 h-[370px] justify-center transition-all duration-400 focus:border-[10px]"
            to={"/createProfile"}
            ref={(el) => linksRef.current[1] = el}
            onClick={pause}
          >
            <div className="flex flex-col items-center justify-center  cursor-pointer  rounded-sm w-[360px]">
              <ImageIconRounded icon={"https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX5697474.jpg"} />
              <h4 className="text-2xl pt-10 font-normal mb-1.5">Adicionar Perfil</h4>
            </div>
          </Link>
        </AudiodescFlag.Provider>

      </div>

      <Footer tabIdxs={['1', '2']} ids={["audiodescRef", "signRef"]}/>
    </>
  );
}
