/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router";
import Footer from "../components/FooterCreateProfile";
import TitlePage from "../components/TitlePage";

import IconBordered from "../components/IconBordered";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import NextButton from "../components/NextButton";
import { AiOutlineArrowRight } from "react-icons/ai";

import { useRef } from "react";

import { AudiodescContext } from "../App";
import { AudiodescFlag } from "../App";

import ClassLivre from "../assets/indicacao_livre.svg";
import Class10 from "../assets/indicacao_10.svg";
import Class12 from "../assets/indicacao_12.svg";
import Class14 from "../assets/indicacao_14.svg";
import Class16 from "../assets/indicacao_16.svg";
import Class18 from "../assets/indicacao_18.svg";
import ProfileIcon from "../assets/profile_gray.svg";

import AudioDescriacao from "../assets/audioDescricao.jpg";
import PcPhoneIcon from "../assets/pc_phone.svg";
import Libras from "../assets/libras.png";
import AprimorDialogo from "../assets/aprimor_dialogo.svg";
import CC from "../assets/legenda_oculta.svg";

import { BsCheck } from "react-icons/bs";

import audioFile from "../audios/CriandoPerfil.mp3";
import audioFile2 from "../audios/NomePerfil.mp3";
import audioFile3 from "../audios/PerfilGp.mp3";
import audioFile4 from "../audios/DataNasc.mp3";
import audioFile5 from "../audios/PerfilCrianca.mp3";
import audioFile6 from "../audios/LivreBotao.mp3";
import audioFile7 from "../audios/12Anos.mp3";
import audioFile8 from "../audios/12Anos.mp3";
import audioFile9 from "../audios/14Anos.mp3";
import audioFile10 from "../audios/16Anos.mp3";
import audioFile11 from "../audios/18Anos.mp3";
import audioFile12 from "../audios/NBBotao.mp3";
import audioFile13 from "../audios/MasculinoBotao.mp3";
import audioFile14 from "../audios/FemininoBotao.mp3";
import audioFile15 from "../audios/Genero.mp3";
import audioFile16 from "../audios/BotaoSelecao.mp3";
import audioFile17 from "../audios/CaixaTexto.mp3";
import audioFile18 from "../audios/AudiodescBotao.mp3";
import audioFile19 from "../audios/LibrasBotao.mp3";
import audioFile20 from "../audios/LegendasBotao.mp3";
import audioFile21 from "../audios/AprimoramentoDialogoBotao.mp3";
import audioFile22 from "../audios/PortuguesBotao2.mp3";
import audioFile23 from "../audios/IdiomaSelecionado.mp3";
import audioFile24 from "../audios/AvancarBotao2.mp3";
import audioFile25 from "../audios/CriarOutroBtn.mp3";
import audioFile26 from "../audios/ConcordoLGPD.mp3";
import audioFile27 from "../audios/EscolhaAvatar.mp3";
import audioFile28 from "../audios/SaibaMaisBtn.mp3";

import { useAudioPlayer } from "react-use-audio-player";
// import ProfileCard from "../components/ProfileCard";

export default function CreateProfile() {
  const nameRef = useRef();
  const groupRef = useRef();
  const dateRef = useRef();
  const languageRef = useRef();
  const audioDescRef = useRef();
  const signRef = useRef();
  const closedCapRef = useRef();
  const diagEnhanceRef = useRef();
  const advanceRef = useRef();
  const createRef = useRef();
  const lgpdRef = useRef();
  const livreRef = useRef();
  const dezRef = useRef();
  const dozeRef = useRef();
  const quatorzeRef = useRef();
  const dezesseisRef = useRef();
  const dezoitoRef = useRef();
  const kidProfileRef = useRef();
  const maleRef = useRef();
  const femaleRef = useRef();
  const nbRef = useRef();
  const chooseAvatarRef = useRef();
  const saibaMaisRef = useRef();

  const focusedElementRef = useRef("nameRef");
  const selectedIndexRef = useRef(0);

  const [flagAudiodesc, setFlagAudiodesc] = useContext(AudiodescFlag);
  const navigate = useNavigate();

  const [queueIndex, setQueueIndex] = useState(0);
  const audiosObj = {
    advanceRef: [audioFile24],
    createRef: [audioFile25],
    lgpdRef: [audioFile26, audioFile16],
    groupRef: [audioFile3, audioFile16],
    nameRef: [audioFile2, audioFile17],
    livreRef: [audioFile6],
    dezRef: [audioFile7],
    dozeRef: [audioFile8],
    quatorzeRef: [audioFile9],
    dezesseisRef: [audioFile10],
    dezoitoRef: [audioFile11],
    languageRef: [audioFile23, audioFile22],
    audioDescRef: [audioFile18],
    signRef: [audioFile19],
    closedCapRef: [audioFile20],
    diagEnhanceRef: [audioFile21],
    dateRef: [audioFile4, audioFile17],
    kidProfileRef: [audioFile5, audioFile16],
    maleRef: [audioFile15, audioFile13],
    femaleRef: [audioFile15, audioFile14],
    nbRef: [audioFile15, audioFile12],
    chooseAvatarRef: [audioFile27],
    saibaMaisRef: [audioFile28],
  };

  console.log(focusedElementRef.current);

  const { audioContext } = useContext(AudiodescContext);
  const track = useRef(null);
  const audio = useRef(null);
  const audioQueue = [audioFile, ...audiosObj[focusedElementRef.current]];

  const { load, pause } = useAudioPlayer();

  /*useEffect(() => {
    const hasPlayedAudio = localStorage.getItem('hasPlayedAudio3');

    if (!hasPlayedAudio) {
      load(audioFile, {
        autoplay: true
      })
      /*const audio = new Audio(audioFile);
      audio.play().catch((error) => {
        console.error("Falha ao tocar áudio:", error);
      });
      localStorage.setItem('hasPlayedAudio3', 'true');
    }
  }, []);*/

  useEffect(() => {
    // // play once the audio
    // const audio = new Audio(audioFile);
    // audio.play().catch((error) => {
    //   console.error("Falha ao tocar áudio:", error);
    // });
    console.log(focusedElementRef.current);

    document.getElementById(focusedElementRef.current).focus();
    // nameRef.current.focus()

    audioQueue.push(audioFile); // Tem que ser o audio do btn que recebe o foco primeiro na página

    const handleKeyDown = (event) => {
      switch (event.code) {
        case "Digit0":
          pause();
          navigate("/homePage");
          break;
        case "Digit1":
          pause();
          navigate("/radioDifusorSec");
          break;
        case "Digit2":
          pause();
          navigate("/radioDifusorSecL2");
          break;
        case "Digit3":
          pause();
          navigate("/importProfile");
          break;
        case "ContextMenu":
          pause();
          navigate(-1);
          break;
        case "KeyA":
          pause();
          navigate("/tvAberta");
          break;
        case "KeyV":
          pause();
          window.location.reload();
          break;
        case "Digit7":
          pause();
          window.location.reload();
          break;
        case "F2":
          focusedElementRef.current = document.activeElement.id;
          selectedIndexRef.current =
            document.getElementById("languageRef").tabIndex;

          if (flagAudiodesc) {
            pause();
            setFlagAudiodesc(false);
            setQueueIndex(0);
          } else setFlagAudiodesc(true);

          break;
        case "ArrowUp":
          // if focus on groupRef, go to nameRef
          if (document.activeElement === groupRef.current) {
            nameRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile2, {
                autoplay: true,
                onend: () => {
                  load(audioFile17, {
                    autoplay: true,
                  });
                },
              });
            }
          } else if (
            document.activeElement === audioDescRef.current ||
            document.activeElement === signRef.current ||
            document.activeElement === closedCapRef.current ||
            document.activeElement === diagEnhanceRef.current
          ) {
            languageRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile23, {
                autoplay: true,
                onend: () => {
                  load(audioFile22, {
                    autoplay: true,
                  });
                },
              });
            }
          } else if (document.activeElement === languageRef.current) {
            kidProfileRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile5, {
                autoplay: true,
                onend: () => {
                  load(audioFile16, {
                    autoplay: true,
                  });
                },
              });
            }
          } else if (
            document.activeElement === dateRef.current ||
            document.activeElement === livreRef.current ||
            document.activeElement === dezRef.current ||
            document.activeElement === dozeRef.current ||
            document.activeElement === quatorzeRef.current ||
            document.activeElement === dezesseisRef.current ||
            document.activeElement === dezoitoRef.current
          ) {
            groupRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile3, {
                autoplay: true,
                onend: () => {
                  load(audioFile16, {
                    autoplay: true,
                  });
                },
              });
            }
          } else if (document.activeElement === lgpdRef.current) {
            audioDescRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile18, {
                autoplay: true,
              });
            }
          } else if (document.activeElement === createRef.current) {
            diagEnhanceRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile21, {
                autoplay: true,
              });
            }
          } else if (document.activeElement === advanceRef.current) {
            chooseAvatarRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile27, {
                autoplay: true,
              });
            }
          } else if (document.activeElement === chooseAvatarRef.current) {
            nameRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile2, {
                autoplay: true,
                onend: () => {
                  load(audioFile17, {
                    autoplay: true,
                  });
                },
              });
            }
          } else if (
            document.activeElement === maleRef.current ||
            document.activeElement === femaleRef.current ||
            document.activeElement === nbRef.current ||
            document.activeElement === kidProfileRef.current
          ) {
            dateRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile4, {
                autoplay: true,
                onend: () => {
                  load(audioFile17, {
                    autoplay: true,
                  });
                },
              });
            }
          }

          event.preventDefault();

          break;
        case "ArrowDown":
          event.preventDefault();

          // if focus on nameRef, go to groupRef
          if (document.activeElement === nameRef.current) {
            groupRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile3, {
                autoplay: true,
                onend: () => {
                  load(audioFile16, {
                    autoplay: true,
                  });
                },
              });
            }
          }
          // if focus on groupRef, go to languageRef
          else if (
            document.activeElement === dateRef.current ||
            document.activeElement === livreRef.current ||
            document.activeElement === dezRef.current ||
            document.activeElement === dozeRef.current ||
            document.activeElement === quatorzeRef.current ||
            document.activeElement === dezesseisRef.current ||
            document.activeElement === dezoitoRef.current
          ) {
            kidProfileRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile5, {
                autoplay: true,
                onend: () => {
                  load(audioFile16, {
                    autoplay: true,
                  });
                },
              });
            }
          } else if (document.activeElement === groupRef.current) {
            dateRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile4, {
                autoplay: true,
                onend: () => {
                  load(audioFile17, {
                    autoplay: true,
                  });
                },
              });
            }
          } else if (document.activeElement === languageRef.current) {
            audioDescRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile18, {
                autoplay: true,
              });
            }
          } else if (
            document.activeElement === audioDescRef.current ||
            document.activeElement === signRef.current ||
            document.activeElement === closedCapRef.current
          ) {
            lgpdRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile26, {
                autoplay: true,
                onend: () => {
                  load(audioFile16, { autoplay: true });
                },
              });
            }
          } else if (document.activeElement === diagEnhanceRef.current) {
            createRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile25, {
                autoplay: true,
              });
            }
          } else if (document.activeElement === chooseAvatarRef.current) {
            advanceRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile24, {
                autoplay: true,
              });
            }
          } else if (
            document.activeElement === maleRef.current ||
            document.activeElement === femaleRef.current ||
            document.activeElement === nbRef.current ||
            document.activeElement === kidProfileRef.current
          ) {
            languageRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile23, {
                autoplay: true,
                onend: () => {
                  load(audioFile22, { autoplay: true });
                },
              });
            }
          }
          break;
        case "ArrowLeft":
          if (document.activeElement === livreRef.current) {
            dateRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile4, {
                autoplay: true,
                onend: () => {
                  load(audioFile17, {
                    autoplay: true,
                  });
                },
              });
            }
          } else if (document.activeElement === dezRef.current) {
            livreRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile6, {
                autoplay: true,
              });
            }
          } else if (document.activeElement === dozeRef.current) {
            dezRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile7, {
                autoplay: true,
              });
            }
          } else if (document.activeElement === quatorzeRef.current) {
            dozeRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile8, {
                autoplay: true,
              });
            }
          } else if (document.activeElement === dezesseisRef.current) {
            quatorzeRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile9, {
                autoplay: true,
              });
            }
          } else if (document.activeElement === dezoitoRef.current) {
            dezesseisRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile10, {
                autoplay: true,
              });
            }
          } else if (document.activeElement === advanceRef.current) {
            createRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile25, {
                autoplay: true,
              });
            }
          } else if (document.activeElement === createRef.current) {
            saibaMaisRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile28, {
                autoplay: true,
                onend: () => {
                  load(audioFile16, { autoplay: true });
                },
              });
            }
          } else if (document.activeElement === saibaMaisRef.current) {
            lgpdRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile26, {
                autoplay: true,
                onend: () => {
                  load(audioFile16, { autoplay: true });
                },
              });
            }
          } else if (document.activeElement === languageRef.current) {
            audioDescRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile18, {
                autoplay: true,
              });
            }
          } else if (document.activeElement === signRef.current) {
            audioDescRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile18, {
                autoplay: true,
              });
            }
          } else if (document.activeElement === closedCapRef.current) {
            signRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile19, {
                autoplay: true,
              });
            }
          } else if (document.activeElement === diagEnhanceRef.current) {
            closedCapRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile20, {
                autoplay: true,
              });
            }
          } else if (document.activeElement === maleRef.current) {
            kidProfileRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile5, {
                autoplay: true,
                onend: () => {
                  load(audioFile16, {
                    autoplay: true,
                  });
                },
              });
            }
          } else if (document.activeElement === femaleRef.current) {
            maleRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile15, {
                autoplay: true,
                onend: () => {
                  load(audioFile13, {
                    autoplay: true,
                    onend: () => {
                      load(audioFile16, {
                        autoplay: true,
                      });
                    },
                  });
                },
              });
            }
          } else if (document.activeElement === nbRef.current) {
            femaleRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile15, {
                autoplay: true,
                onend: () => {
                  load(audioFile14, {
                    autoplay: true,
                    onend: () => {
                      load(audioFile16, {
                        autoplay: true,
                      });
                    },
                  });
                },
              });
            }
          } else if (document.activeElement === chooseAvatarRef.current) {
            dezoitoRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile11, {
                autoplay: true,
              });
            }
          }

          event.preventDefault();

          break;
        case "ArrowRight":
          if (document.activeElement === dateRef.current) {
            livreRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile6, {
                autoplay: true,
              });
            }
          } else if (document.activeElement === livreRef.current) {
            dezRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile7, {
                autoplay: true,
              });
            }
          } else if (document.activeElement === dezRef.current) {
            dozeRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile8, {
                autoplay: true,
              });
            }
          } else if (document.activeElement === dozeRef.current) {
            quatorzeRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile9, {
                autoplay: true,
              });
            }
          } else if (document.activeElement === quatorzeRef.current) {
            dezesseisRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile10, {
                autoplay: true,
              });
            }
          } else if (document.activeElement === dezesseisRef.current) {
            dezoitoRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile11, {
                autoplay: true,
              });
            }
          } else if (document.activeElement === dezoitoRef.current) {
            chooseAvatarRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile27, {
                autoplay: true,
              });
            }
          } else if (document.activeElement === languageRef.current) {
            closedCapRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile20, {
                autoplay: true,
              });
            }
          } else if (document.activeElement === createRef.current) {
            advanceRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile24, {
                autoplay: true,
              });
            }
          } else if (document.activeElement === audioDescRef.current) {
            signRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile19, {
                autoplay: true,
              });
            }
          } else if (document.activeElement === signRef.current) {
            closedCapRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile20, {
                autoplay: true,
              });
            }
          } else if (document.activeElement === closedCapRef.current) {
            diagEnhanceRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile21, {
                autoplay: true,
              });
            }
          } else if (document.activeElement === lgpdRef.current) {
            saibaMaisRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile28, {
                autoplay: true,
              });
            }
          } else if (document.activeElement === saibaMaisRef.current) {
            createRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile25, {
                autoplay: true,
              });
            }
          } else if (document.activeElement === kidProfileRef.current) {
            maleRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile15, {
                autoplay: true,
                onend: () => {
                  load(audioFile13, {
                    autoplay: true,
                    onend: () => {
                      load(audioFile16, {
                        autoplay: true,
                      });
                    },
                  });
                },
              });
            }
          } else if (document.activeElement === maleRef.current) {
            femaleRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile15, {
                autoplay: true,
                onend: () => {
                  load(audioFile14, {
                    autoplay: true,
                    onend: () => {
                      load(audioFile16, {
                        autoplay: true,
                      });
                    },
                  });
                },
              });
            }
          } else if (document.activeElement === femaleRef.current) {
            nbRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile15, {
                autoplay: true,
                onend: () => {
                  load(audioFile12, {
                    autoplay: true,
                    onend: () => {
                      load(audioFile16, {
                        autoplay: true,
                      });
                    },
                  });
                },
              });
            }
          } else if (document.activeElement === nbRef.current) {
            chooseAvatarRef.current.focus();
            if (flagAudiodesc) {
              pause();
              load(audioFile27, {
                autoplay: true,
              });
            }
          }
          event.preventDefault();

          break;
        case "Escape":
          pause();
          break;
        case "Enter":
          document.activeElement.click();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [flagAudiodesc]);

  useEffect(() => {
    console.log(queueIndex);
    if (flagAudiodesc && queueIndex < audioQueue.length) {
      load(audioQueue[queueIndex], {
        autoplay: true,
        onend: () => {
          setQueueIndex((index) => {
            return queueIndex + 1;
          });
        },
      });
    }
  }, [queueIndex, load, flagAudiodesc]);

  const handleClick = (event) => {
    const e = document.getElementById(event.target.id);

    const classe = e.className;

    if (classe == "flex absolute top-[-1.3rem] left-[-1rem] items-center") {
      e.className = "hidden absolute top-[-1.3rem] left-[-1rem] items-center";
    } else if (
      classe == "hidden absolute top-[-1.3rem] left-[-1rem] items-center"
    ) {
      e.className = "flex absolute top-[-1.3rem] left-[-1rem] items-center";
    }
  };

  const playAudio = (file) => {
    console.log("playAudio");
    // const hasPlayedAudio = localStorage.getItem('hasPlayedAudio2');

    audio.current = new Audio(file);
    track.current = audioContext.createMediaElementSource(audio.current);
    console.log(audio.current);
    track.current.connect(audioContext.destination);

    audio.current.play().catch((error) => {
      console.error("Falha ao tocar áudio:", error);
    });
    // localStorage.setItem('hasPlayedAudio2', 'true');
  };

  const pauseAudio = () => {
    // console.log("pauseAudio")
    // const hasPlayedAudio = localStorage.getItem('hasPlayedAudio2');
    console.log(audio.current);
    if (track.current != null) {
      // const audio = track.current.mediaElement;
      audio.current.pause();
      // localStorage.setItem('hasPlayedAudio2', 'true');
    }
  };

  return (
    <>
      <header className="flex flex-row items-center justify-between text-white w-11/12">
        <TitlePage name="Criando seu Perfil Smart TV" />
        <div className="flex justify-center items-center pt-20 cursor-pointer">
          <img className="w-[100px] h-[59px]" src={PcPhoneIcon} alt="" />
          <h1 className="text-2xl pl-2">Usar Smartphone</h1>
        </div>
      </header>

      <div className="flex justify-center items-evenly">
        <div className="w-11/12 px-5 py-5 bg-zinc-800 flex flex-col justify-center text-white ml-2 mt-14 gap-8">
          <input
            id="nameRef"
            className="text-3xl font-normal bg-zinc-800 text-white border-2 border-white rounded-md p-4"
            type="text"
            placeholder="Nome do Perfil (obrigatório)"
            ref={nameRef}
          />

          <div className="flex justify-start">
            <input
              tabIndex="11"
              ref={groupRef}
              id="groupRef"
              className="text-3xl font-normal bg-zinc-800 text-white border-2 border-white rounded-md p-4"
              type="checkbox"
              placeholder=""
            />
            <h3 className="text-3xl ml-5">
              Este é um Perfil de Grupo (ex.: família, hóspedes...)
            </h3>
          </div>

          <div className="flex justify-start">
            <input
              id="dateRef"
              className="w-5/6 text-3xl font-normal bg-zinc-800 text-white border-2 border-white rounded-md p-4"
              type="password"
              placeholder="Data de nascimento dd/mm/aaaa"
              ref={dateRef}
            />
            <div
              id="livreRef"
              tabIndex="0"
              onClick={handleClick}
              className="flex flex-col ml-5 relative"
              ref={livreRef}
            >
              <div
                id={1}
                className="hidden absolute top-[-1.3rem] left-[-1rem] items-center"
              >
                <BsCheck color="green" size="30px" />
              </div>
              <img id={1} src={ClassLivre} alt="" />
            </div>
            <div
              id="dezRef"
              tabIndex="1"
              onClick={handleClick}
              className="flex flex-col ml-5 relative"
              ref={dezRef}
            >
              <div
                id={2}
                className="hidden absolute top-[-1.3rem] left-[-1rem] items-center"
              >
                <BsCheck color="green" size="30px" />
              </div>
              <img id={2} src={Class10} alt="" />
            </div>
            <div
              id="dozeRef"
              tabIndex="2"
              onClick={handleClick}
              className="flex flex-col ml-5 relative"
              ref={dozeRef}
            >
              <div
                id={3}
                className="hidden absolute top-[-1.3rem] left-[-1rem] items-center"
              >
                <BsCheck color="green" size="30px" />
              </div>
              <img id={3} src={Class12} alt="" />
            </div>
            <div
              id="quatorzeRef"
              tabIndex="3"
              onClick={handleClick}
              className="flex flex-col ml-5 relative"
              ref={quatorzeRef}
            >
              <div
                id={4}
                className="hidden absolute top-[-1.3rem] left-[-1rem] items-center"
              >
                <BsCheck color="green" size="30px" />
              </div>
              <img id={4} src={Class14} alt="" />
            </div>
            <div
              id="dezesseisRef"
              tabIndex="4"
              onClick={handleClick}
              className="flex flex-col ml-5 relative"
              ref={dezesseisRef}
            >
              <div
                id={5}
                className="hidden absolute top-[-1.3rem] left-[-1rem] items-center"
              >
                <BsCheck color="green" size="30px" />
              </div>
              <img id={5} src={Class16} alt="" />
            </div>
            <div
              id="dezoitoRef"
              tabIndex="5"
              onClick={handleClick}
              className="flex flex-col ml-5 relative"
              ref={dezoitoRef}
            >
              <div
                id={6}
                className="hidden absolute top-[-1.3rem] left-[-1rem] items-center"
              >
                <BsCheck color="green" size="30px" />
              </div>
              <img id={6} src={Class18} alt="" />
            </div>
          </div>

          <div className="flex justify-start">
            <input
              tabIndex="13"
              ref={kidProfileRef}
              id="kidProfileRef"
              className="text-2xl font-normal bg-zinc-800 text-white border-2 border-white rounded-md p-4"
              type="checkbox"
              placeholder=""
            />
            <div className="flex">
              <h3 className="text-3xl ml-5">Este é um Perfil de Criança</h3>

              <div tabIndex="6" className="flex ml-20">
                <h3 className="text-3xl mr-5">Gênero</h3>
                <input
                  tabIndex="14"
                  ref={maleRef}
                  id="maleRef"
                  className="mx-1 text-2xl font-normal bg-zinc-800 text-white border-2 border-white rounded-md p-4"
                  type="checkbox"
                  placeholder=""
                />
                <h1 className="mr-2 text-2xl">M</h1>
                <input
                  tabIndex="15"
                  ref={femaleRef}
                  id="femaleRef"
                  className="mx-1 text-2xl font-normal bg-zinc-800 text-white border-2 border-white rounded-md p-4"
                  type="checkbox"
                  placeholder=""
                />
                <h1 className="mr-2 text-2xl">F</h1>
                <input
                  tabIndex="16"
                  ref={nbRef}
                  id="nbRef"
                  className="mx-1 text-2xl font-normal bg-zinc-800 text-white border-2 border-white rounded-md p-4"
                  type="checkbox"
                  placeholder=""
                />
                <h1 className="mr-2 text-2xl">NB</h1>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <h3 className="text-3xl pr-5">Idioma Selecionado</h3>

            <select
              id="languageRef"
              tabIndex={selectedIndexRef.current}
              ref={languageRef}
              placeholder="Selecione um Idioma"
              className="text-lg font-normal text-black border-2 border-white rounded-md p-4 overflow-y-scroll"
            >
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

          <div className="flex align-center justify-evenly text-white flex-grow mt-10 mr-10 mb-10">
            <div
              id="audioDescRef"
              tabIndex="7"
              className="flex items-center justify-start mr-10 w-1/4 relative"
              ref={audioDescRef}
            >
              <div
                id={7}
                className="hidden absolute top-[-1.3rem] left-[-1rem] items-center"
              >
                <BsCheck color="green" size="30px" />
              </div>
              <img
                id={7}
                onClick={handleClick}
                className="w-20 h-20 mr-2 border border-white rounded-lg p-2 hover:scale-105 transition-all duration-400 hover:bg-zinc-700"
                src={AudioDescriacao}
              />
              <h3 className="text-xl text-white">Áudiodescrição</h3>
            </div>

            <div
              id="signRef"
              tabIndex="8"
              className="flex items-center justify-start mx-3 w-1/4 relative"
              ref={signRef}
            >
              <div
                id={8}
                className="hidden absolute top-[-1.3rem] left-[-1rem] items-center"
              >
                <BsCheck color="green" size="30px" />
              </div>
              <img
                id={8}
                onClick={handleClick}
                className="w-20 h-20 mr-2 border border-white rounded-lg p-2 hover:scale-105 transition-all duration-400 hover:bg-zinc-700"
                src={Libras}
              />
              <h3 className="text-xl text-white">Acessível em Libras</h3>
            </div>

            <div
              id="closedCapRef"
              tabIndex="9"
              className="flex items-center justify-start mx-3 w-1/4 relative"
              ref={closedCapRef}
            >
              <div
                id={9}
                className="hidden absolute top-[-1.3rem] left-[-1rem] items-center"
              >
                <BsCheck color="green" size="30px" />
              </div>
              <img
                id={9}
                onClick={handleClick}
                className="w-20 h-20 mr-2 border border-white rounded-lg p-2 hover:scale-105 transition-all duration-400 hover:bg-zinc-700"
                src={CC}
              />
              <h3 className="text-xl text-white">Legendas Ocultas</h3>
            </div>

            <div
              id="diagEnhanceRef"
              tabIndex="10"
              className="flex items-center justify-start mx-3 w-1/4 relative"
              ref={diagEnhanceRef}
            >
              <div
                id={10}
                className="hidden absolute top-[-1.3rem] left-[-1rem] items-center"
              >
                <BsCheck color="green" size="30px" />
              </div>
              <img
                id={10}
                onClick={handleClick}
                className="w-20 h-20 mr-2 border border-white rounded-lg p-2 hover:scale-105 transition-all duration-400 hover:bg-zinc-700"
                src={AprimorDialogo}
              />
              <h3 className="text-xl text-white">Aprimoramento de Diálogo</h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mx-2">
          <img
            tabIndex="17"
            id="chooseAvatarRef"
            ref={chooseAvatarRef}
            className="w-52 pb-5"
            src={ProfileIcon}
          />
          <h3 className="text-3xl text-white text-center">
            Escolha seu avatar
          </h3>
        </div>
      </div>

      {/*<Footer onClick={pause}/>*/}
      <footer className="flex items-center justify-end text-white mb-5 mt-auto pl-3 pr-10 pb-10">
        <div className="font-normal flex justify-end items-center w-full mt-5">
          <div className="w-full bg-zinc-800 flex flex-row items-left justify-left text-white flex-grow mr-10">
            <input
              ref={lgpdRef}
              id="lgpdRef"
              tabIndex="12"
              className="ml-5"
              type="checkbox"
            />
            <h1 className="text-2xl font-normal  ml-10 mr-5">
              Concordo com a coleta e processamento de meus dados para uma
              melhor experiência, em conformidade com a Lei Geral de Proteção de
              Dados Pessoais (LGPD).{" "}
              <a
                id="saibaMaisRef"
                tabIndex="18"
                ref={saibaMaisRef}
                className="text-slate-400"
                href="#"
              >
                Saiba mais.
              </a>
            </h1>
          </div>

          <Link
            onClick={pause}
            to="/createProfile"
            ref={createRef}
            id="createRef"
          >
            <div className="flex font-normal gap-3 items-center">
              <p className="text-2xl mt-1.5 w-24 text-center">Criar Outro</p>
              <IconBordered>
                <AiOutlinePlus size={40} />
              </IconBordered>
            </div>
          </Link>

          <AudiodescFlag.Provider value={[flagAudiodesc, setFlagAudiodesc]}>
            <Link
              id="advanceRef"
              onClick={pause}
              to="/discoverChannels"
              ref={advanceRef}
            >
              <div className="flex font-normal gap-3 items-center pl-5">
                <p className="text-2xl mt-1.5 w-24 text-center">Avançar</p>
                <IconBordered>
                  <AiOutlineArrowRight size={40} />
                </IconBordered>
              </div>
            </Link>
          </AudiodescFlag.Provider>
        </div>
      </footer>
    </>
  );
}
