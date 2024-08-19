/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useContext, useState } from 'react';

import TitlePage from '../components/TitlePage';
import IconBordered from "../components/IconBordered";

import { AudiodescContext } from '../App';
import { AudiodescFlag } from '../App';

import AudioDescriacao from "../assets/audioDescricao.jpg";
import libras from "../assets/libras.png";
import audioFile from "../audios/01.mp3";
import audioFile2 from "../audios/SelecioneIdiomaTitulo.wav";
import audioFile3 from "../audios/PortuguesBotao.mp3";
import audioFile4 from "../audios/AvancarBotao.mp3";
import audioFile5 from "../audios/AudiodescricaoBotao.mp3";
import audioFile6 from "../audios/AcessivelLibras.mp3";
import { FaHandsAslInterpreting } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import '../App.css';
import ReactAudioPlayer from 'react-audio-player';
import { useAudioPlayer } from 'react-use-audio-player';

export default function SelectLanguage() {
  const selectRef = useRef();
  const advanceButtonRef = useRef();
  const audiodescRef = useRef();
  const signRef = useRef();
  const [flagAudiodesc, setFlagAudiodesc] = useContext(AudiodescFlag);
  
  const {audioContext} = useContext(AudiodescContext);
  const track = useRef(null);
  const audio = useRef(null);

  const { load, pause } = useAudioPlayer();

  const [queueIndex, setQueueIndex] = useState(0)
  const audiosObj = {
    "advanceRef": [audioFile4],
    "selectRef": [audioFile3],
    "audiodescRef": [audioFile5],
    "signRef": [audioFile6],
  }
  
  const focusedElementRef = useRef('selectRef')
  const selectedIndexRef = useRef(0)
  const audioQueue = [audioFile, audioFile2, ...audiosObj[focusedElementRef.current]]

  /*useEffect(() => {
    const hasPlayedAudio = localStorage.getItem('hasPlayedAudio2');

    if (!hasPlayedAudio) {
      load(audioFile, {autoplay: true})
      /*const audio = new Audio(audioFile);
      audio.play().catch((error) => {
        console.error("Falha ao tocar áudio:", error);
      });
      localStorage.setItem('hasPlayedAudio2', 'true');
    }
  }, []);*/

  useEffect(() => {
    // open page with focus in input
    // pauseAudio()
    // selectRef.current.focus();
    document.getElementById(focusedElementRef.current).focus()

    // audioQueue.push([...audioQueue, ...audiosObj[focusedElementRef.current]])

    const handleKeyDown = (event) => {
      switch (event.code) {
        case 'ArrowUp':
          event.preventDefault();
          if (document.activeElement === selectRef.current && selectRef.current.selectedIndex > 0) {
            selectRef.current.selectedIndex -= 1;
          }
          if (document.activeElement === audiodescRef.current || document.activeElement === signRef.current || document.activeElement === advanceButtonRef.current) {
            selectRef.current.focus()
            if(flagAudiodesc) {
              pause()
              load(audioFile3, {autoplay: true})
            }
          }
          break;
        case 'ArrowDown':
          event.preventDefault();
          if (selectRef.current.selectedIndex < selectRef.current.length - 1) {
            selectRef.current.selectedIndex += 1;
          }
          break;
        case 'ArrowRight':
          event.preventDefault();
          if (document.activeElement === selectRef.current || document.activeElement === signRef.current) {
            advanceButtonRef.current.focus();
            if(flagAudiodesc) {
              pause()
              load(audioFile4, {
                autoplay: true
              })
            }
          }
          else if (document.activeElement === audiodescRef.current) {
            signRef.current.focus();
            if(flagAudiodesc) {
              pause()
              load(audioFile6, {
                autoplay: true
              })
            }
          }
          break;
        case 'ArrowLeft':
          event.preventDefault();
          if (document.activeElement === advanceButtonRef.current) {
            signRef.current.focus();
            if(flagAudiodesc) {
              pause()
              load(audioFile6, {
                autoplay: true
              })
            }
          }
          else if (document.activeElement === signRef.current) {
            audiodescRef.current.focus();
            if(flagAudiodesc) {
              pause()
              load(audioFile5, {
                autoplay: true
              })
            }
          }
          else if (document.activeElement === selectRef.current) {
            audiodescRef.current.focus();
            if(flagAudiodesc) {
              pause()
              load(audioFile5, {
                autoplay: true
              })
            }
          }
          else if (document.activeElement === advanceRef.current) {
            signRef.current.focus();
            if(flagAudiodesc) {
              pause()
              load(audioFile6, {
                autoplay: true
              })
            }
          }
          break;
        case 'Enter':
          event.preventDefault();
          if (document.activeElement === advanceButtonRef.current) {
            advanceButtonRef.current.click();
          }
          break;
        case 'Escape':
          pause()
          break;
        case 'F2':
          focusedElementRef.current = document.activeElement.id
          selectedIndexRef.current = selectRef.current.selectedIndex

          if (flagAudiodesc) {
            pause()
            setFlagAudiodesc(false)
            setQueueIndex(0)
          }
          else setFlagAudiodesc(true)
          break;
        case 'Digit0':
          pause()
          navigate('/homePage');
          break;
        case 'Digit1':
          pause()
          navigate('/radioDifusorSec');
          break;
        case 'Digit2':
          pause()
          navigate('/radioDifusorSecL2');
          break;
        case 'Digit3':
          pause()
          navigate('/importProfile');
          break;
        case 'ContextMenu':
          pause()
          navigate(-1);
          break;
        case 'KeyA':
          pause()
          navigate('/tvAberta');
          break;
        case 'KeyV':
          pause()
          window.location.reload();
          break;
        case 'Digit7':
          pause()
          window.location.reload();
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    /*audioQueue.forEach(element => {
      playAudio(element)
    })*/
    /*if(flagAudiodesc) {
      playAudio(audioQueue[0])
      audio.current.addEventListener("ended", (e) => {
        console.log("Cabou o audio")
        audioQueue.shift()
        playAudio(audioQueue[0])
      })
    }*/

    // Limpando o evento quando o componente é desmontado
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };

  }, [flagAudiodesc]);

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
    // console.log("playAudio")
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
      {/*<ReactAudioPlayer
        src="../audios/01.mp3"
        autoPlay={true}
        controls={false}
      />*/}
      <header className="flex flex-col items-left justify-left text-white">
        <TitlePage name="Selecione o idioma" />
      </header>

      <div className="bg-zinc-800 p-4 rounded flex flex-col items-left justify-left text-white flex-grow my-10 mx-10 gap-8 mr-10 overflow-hidden">
        <h2 className="text-zinc- text-5xl font-semibold">Idiomas</h2>

        <select id="selectRef" tabIndex={selectedIndexRef} ref={selectRef} className="text-4xl font-normal text-black border-2 border-white rounded-md p-4 overflow-y-scroll">
          <option value="">Português</option>
          <option value="">Inglês</option>
          <option value="">Espanhol</option>
          <option value="">Francês</option>
          <option value="">Alemão</option>
          <option value="">Italiano</option>
          <option value="">Japonês</option>
          <option value="">Mandarim</option>
          <option value="">Russo</option>
          <option value="">Coreano</option>
          <option value="">Árabe</option>
          <option value="">Hindi</option>
          <option value="">Bengali</option>
          <option value="">Punjabi</option>
          <option value="">Turco</option>
          <option value="">Tâmil</option>
          <option value="">Telugu</option>
          <option value="">Marathi</option>
          <option value="">Vietnamita</option>
          <option value="">Urdu</option>
          <option value="">Javanês</option>
          <option value="">Gujarati</option>
          <option value="">Polonês</option>
          <option value="">Ucraniano</option>
          <option value="">Persa</option>
          <option value="">Malaio</option>
          <option value="">Xangainês</option>
          <option value="">Oriá</option>
          <option value="">Panjabi</option>
        </select>
      </div>

      <footer className="flex items-center justify-between text-white mt-auto pl-10 pr-10 pb-10">
        <div className="font-normal flex gap-5 items-center">
          <IconBordered>
            <img src={AudioDescriacao} className="w-[85px]" />
          </IconBordered>

          <p ref={audiodescRef} tabIndex="0" id="audiodescRef" className="text-4xl mt-1.5 focus:border-white-400">Audiodescrição</p>

          <IconBordered>
            {/* <FaHandsAslInterpreting size={40} /> */}
            <img src={libras} className="w-[85px]" />
          </IconBordered>
          <p ref={signRef} tabIndex="1" id="signRef" className="text-4xl mt-1.5">Acessível em Libras</p>
        </div>

        <AudiodescFlag.Provider value={[flagAudiodesc, setFlagAudiodesc]}>
          <Link
            id="advanceRef"
            onClick={pauseAudio}
            ref={advanceButtonRef}
            className="flex items-center rounded border border-white p-4 text-4xl hover:bg-emerald-600 focus:bg-emerald-600 transition-all duration-300 gap-2"
            to={'/selectProfile'}
            >
            Avançar
            <BsArrowRightShort size={30} />
          </Link>
        </AudiodescFlag.Provider>

      </footer >
    </>
  );
}
