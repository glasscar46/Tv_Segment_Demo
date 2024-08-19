// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useContext, useState } from 'react';
import { useNavigate } from "react-router";
import { useAudioPlayer } from 'react-use-audio-player';

import ProfileCard from "../components/ProfileCard";
import ProfileCard2 from "../components/ProfileCardImport";

import Footer from "../components/FooterProfile.jsx";
import TitlePage from "../components/TitlePage";

import audioFile from "../audios/DesejaTrazerPerfis.mp3";
import audioFile2 from "../audios/LGPD2.mp3";
import audioFile3 from "../audios/ImportarTds.mp3";
import audioFile4 from "../audios/ImportarSel.mp3";
import audioFile5 from "../audios/voltarBtn.mp3";

import audioFileCard from "../audios/NomePerfil1.mp3";
import audioFileCard2 from "../audios/NomePerfil2.mp3";
import audioFileCard3 from "../audios/NomePerfil3.mp3";
import audioFileCard4 from "../audios/NomePerfil3.mp3";
import audioFileCard5 from "../audios/CriarPerfil.mp3";

import { AudiodescFlag } from '../App';

export default function ImportProfile() {
  const [flagAudiodesc, setFlagAudiodesc] = useContext(AudiodescFlag);
  const navigate = useNavigate();

  const { load, pause } = useAudioPlayer();

  const cards = ["card0", "card1", "card2", "card3", "card4"]
  const isImport = useRef(false)
  const isVoltarBtn = useRef(false)

  const [queueIndex, setQueueIndex] = useState(0)
  const audiosObj = {
    "card0": [audioFileCard],
    "card1": [audioFileCard2],
    "card2": [audioFileCard3],
    "card3": [audioFileCard4],
    "card4": [audioFileCard5],
    "import0": [audioFile3],
    "import1": [audioFile4],
    "voltarBtn": [audioFile5],
  }
  
  const focusedElementRef = useRef(0)

  /*const aux = isVoltarBtn.current? [...audiosObj["voltarBtn"]] : [...audiosObj[cards[focusedElementRef.current]]]
  const aux2 = isImport.current? audiosObj[isImport.current] : aux

  console.log(aux)
  console.log(aux2)*/

  const audioQueue = [audioFile, audioFile2/*, ...aux2*/]

  useEffect(() => {
    // open page with focus in input
    // pauseAudio()
    // selectRef.current.focus();
    if (isVoltarBtn.current) {
      document.getElementsByClassName(isVoltarBtn.current)[0].focus()
      isVoltarBtn.current = false
    } else if (isImport.current) {
      document.getElementsByClassName(isImport.current)[0].focus()
      isImport.current = false
    } else {
      document.getElementsByClassName(cards[focusedElementRef.current])[0].focus()  
    }

    // audioQueue.push([...audioQueue, ...audiosObj[focusedElementRef.current]])

    const handleKeyDown = (event) => {
      switch (event.code) {
        case 'ArrowUp':
          if (document.activeElement.className.split(' ')[0] === "import0" || document.activeElement.className.split(' ')[0] === "import1") {
            document.getElementsByClassName(cards[focusedElementRef.current])[0].focus()
          } else if (document.activeElement.className.split(' ')[0] === "voltarBtn") {
            document.getElementsByClassName("import0")[0].focus()
            if (flagAudiodesc) {
              pause()
              load(audioFile3, {
                autoplay: true
              })
            }
          }
          break;
        case 'ArrowDown':
          event.preventDefault();
          if (document.activeElement.className.split(' ')[0] !== "import0" && document.activeElement.className.split(' ')[0] !== "import1") {
            document.getElementsByClassName("import0")[0].focus()
            if (flagAudiodesc) {
              pause()
              load(audioFile3, {
                autoplay: true
              })
            }
          } else if (document.activeElement.className.split(' ')[0] === "import0" || document.activeElement.className.split(' ')[0] === "import1") {
            document.getElementsByClassName("voltarBtn")[0].focus()
            if (flagAudiodesc) {
              pause()
              load(audioFile5, {
                autoplay: true
              })
            }
          }
          break;
        case 'ArrowRight':
          event.preventDefault();
          if (document.activeElement.className.split(' ')[0] === "voltarBtn") {
            document.getElementsByClassName("import0")[0].focus()
            if(flagAudiodesc) {
              pause()
              load(audioFile3, {
                autoplay: true
              })
            }
          } else if (document.activeElement.className.split(' ')[0] === "import0") {
            document.getElementsByClassName("import1")[0].focus()
            if(flagAudiodesc) {
              pause()
              load(audioFile4, {
                autoplay: true
              })
            }
          } else if (focusedElementRef.current < cards.length-1) {
            document.getElementsByClassName(cards[++focusedElementRef.current])[0].focus();
            if(flagAudiodesc) {
              pause()
              load(...audiosObj[cards[focusedElementRef.current]], {
                autoplay: true
              })
            }
          }
          break;
        case 'ArrowLeft':
          event.preventDefault();
          if (document.activeElement.className.split(' ')[0] === "voltarBtn") {
            if(flagAudiodesc) {
              pause()
              load(audioFile5, {
                autoplay: true
              })
            }
          } else if (document.activeElement.className.split(' ')[0] === "import1") {
            document.getElementsByClassName("import0")[0].focus()
            if(flagAudiodesc) {
              pause()
              load(audioFile3, {
                autoplay: true
              })
            }
          } else if (focusedElementRef.current > 0) {
            document.getElementsByClassName(cards[--focusedElementRef.current])[0].focus();
            if(flagAudiodesc) {
              pause()
              load(...audiosObj[cards[focusedElementRef.current]], {
                autoplay: true
              })
            }
          }
          break;
        case 'Enter':
          event.preventDefault();
          if (document.activeElement.className.split(' ')[0] !== "import0" && document.activeElement.className.split(' ')[0] !== "import1" && document.activeElement.className.split(' ')[0] !== "voltarBtn") {
            document.getElementsByClassName(cards[focusedElementRef.current])[0].click();
          } else if (document.activeElement.className.split(' ')[0] === "voltarBtn") {
            navigate(-1);
          }
          break;
        case 'Escape':
          pause()
          break;
        case 'F2':
          // focusedElementRef.current = document.activeElement.id
          if (document.activeElement.className.split(' ')[0] === "import0") {
            isImport.current = "import0"
          } else if (document.activeElement.className.split(' ')[0] === "import1") {
            isImport.current = "import1"
          } else if (document.activeElement.className.split(' ')[0] === "voltarBtn") {
            isVoltarBtn.current = "voltarBtn"
          }

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
          setQueueIndex(() => {return queueIndex + 1})
        }
      });
    }
      
  }, [queueIndex, load, flagAudiodesc])

  return (
    <>
      <header className="flex flex-col items-left justify-left text-white">
        <TitlePage name="Deseja trazer seus perfis de usuário Smart TV para uma melhor experiência na TV aberta?" />
      </header>
      <div className="flex flex-col justify-center items-center h-full w-full">
        <div className="p-4 rounded flex items-center justify-center text-white flex-grow my-10 mx-10 gap-8 mr-10 overflow-hidden">
          <ProfileCard2
            className="card0"
            tabIndex="0"
            icon={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
            name={"Nome do Perfil 1"}
            id={"check1"}
          />
          <ProfileCard2
            className="card1"
            tabIndex="1"
            icon={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
            name={"Nome do Perfil 2"}
            id={"check2"}
          />
          <ProfileCard2
            className="card2"
            tabIndex="2"
            icon={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
            name={"Nome do Perfil 3"}
            id={"check3"}
          />
          <ProfileCard2
            className="card3"
            tabIndex="3"
            icon={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
            name={"Nome do Perfil 4"}
            id={"check4"}
          />
          <ProfileCard
            className="card4"
            tabIndex="4"
            icon={
              "https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX5697474.jpg"
            }
            name={"Criar seu novo perfil"}
            create
          />
        </div>

        <div className="text-white text-2xl flex justify-center items-center w-2/4 h-1/6 gap-4">
            <div tabIndex="5" className="import0 flex rounded-md border-2 w-full h-full justify-center items-center hover:bg-zinc-700 focus:border-8 hover:scale-105 transition-all duration-400">Importar Todos</div>
            <div tabIndex="6" className="import1 flex rounded-md border-2 w-full h-full justify-center items-center hover:bg-zinc-700 focus:border-8 hover:scale-105 transition-all duration-400">Importar Selecionados</div>
        </div>

        <h3 className="text-center w-7/12 my-10 text-2xl text-white mx-10">Em conformidade com a Lei Geral de Proteção de Dados (LGPD), cada radiodifusor solicitará sua permissão para uso dos dados de seu perfil e coleta de outras informações</h3>
      </div>

      <Footer tabIndex="7" className="voltarBtn"/>
    </>
  );
}
