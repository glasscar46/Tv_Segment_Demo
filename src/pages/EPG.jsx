/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef, useContext } from "react";

import AppsIcon from "../assets/apps-icon.png";
import TvAberta from "../assets/tvAberta.png";
import AnotherIcon from "../assets/popular-recommendation.png";
import UserImg from "../assets/user-img.png";

import Footer from "../components/FooterHomePage";
import HeaderTitleProfile from "../components/HeaderTitleProfile";

import { useNavigate } from "react-router";
import { UrlContext } from "../App";

import { cards, streaming, recommendations } from "../database";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { MdVideoLibrary } from "react-icons/md";

import { AiOutlineStar, AiFillStar, AiOutlineDownload } from "react-icons/ai";
import { LuDownload } from "react-icons/lu";

import TvAbertaIcone from "../assets/TV-ABERTA-icone.png";

import { useAudioPlayer } from "react-use-audio-player";

import { AudiodescContext } from "../App";
import { AudiodescFlag } from "../App";
import audioFile from "../audios/04.mp3";
import audioFile2 from "../audios/HboMax.mp3";
import audioFile3 from "../audios/TvAberta.mp3";
import audioFile4 from "../audios/PrimeVideo.mp3";
import audioFile5 from "../audios/Netflix.mp3";
import audioFile6 from "../audios/Hulu.mp3";
import audioAppsBtn from "../audios/AppsBtn.mp3";

import audioFile7 from "../audios/RedeTv.mp3";
import audioFile8 from "../audios/TvSenado.mp3";
import audioFile9 from "../audios/Globo.mp3";
import audioFile10 from "../audios/RedeUniao.mp3";
import audioFile11 from "../audios/RedeVidaEdu.mp3";
import audioTvAbertaBtn from "../audios/TvAbertaBtn.mp3";

import audioFile12 from "../audios/RecordNews.mp3";
import audioFile13 from "../audios/CancaoNova.mp3";
import audioFile14 from "../audios/RedeCnt.mp3";
import audioFile15 from "../audios/RedeBrTV.mp3";
import audioFile16 from "../audios/TvCamara.mp3";
import audioRecomendBtn from "../audios/RecomendBtn.mp3";

import audioTelespecBtn from "../audios/TelespecBtn.mp3";
import audioConfBtn from "../audios/ConfBtn.mp3";

import "../css/homePage.css";
import RadiodifusorIcon from "../assets/EPG/tv.png";

import IndicacaoLivre from "../assets/indicacao_livre.svg";
import Indicacao10 from "../assets/indicacao_10.svg";
import Indicacao12 from "../assets/indicacao_12.svg";
import Indicacao14 from "../assets/indicacao_14.svg";
import Indicacao16 from "../assets/indicacao_16.svg";
import Indicacao18 from "../assets/indicacao_18.svg";

export default function EPG() {
  const navigate = useNavigate();

  const { urlValue, setUrlValue } = useContext(UrlContext);
  const [currentRecommendations, setCurrentRecommendations] =
    useState(recommendations);

  const [flagAudiodesc, setFlagAudiodesc] = useContext(AudiodescFlag);

  const { load, pause } = useAudioPlayer();

  const { audioContext } = useContext(AudiodescContext);
  const track = useRef(null);
  const audio = useRef(null);
  const audioQueue = [audioFile];

  const apps = [
    audioAppsBtn,
    audioFile2,
    audioFile3,
    audioFile4,
    audioFile5,
    audioFile6,
  ];
  const tv = [
    audioTvAbertaBtn,
    audioFile7,
    audioFile8,
    audioFile9,
    audioFile10,
    audioFile11,
  ];
  const recomends = [
    audioRecomendBtn,
    audioFile12,
    audioFile13,
    audioFile14,
    audioFile15,
    audioFile16,
  ];

  const audioMatrix = [[...apps], [...tv], [...recomends]];

  const currentRowIndexRef = useRef(0);
  const currentElementIndexRef = useRef(0);
  const telespecRef = useRef();
  const confRef = useRef();

  const updateRecommendations = (appName, row) => {
    console.log(appName);
    let app;
    if (row === 0) app = streaming.find((a) => a.name === appName);
    else if (row === 1) app = cards.find((a) => a.name === appName);
    if (app && app.relatedRecommendations) {
      console.log(app.relatedRecommendations);
      setCurrentRecommendations(app.relatedRecommendations);
    }
  };

  const focusableElements = [useRef([]), useRef([]), useRef([]), useRef([])];
  let currentRowIndex = currentRowIndexRef.current;
  let currentElementIndex = currentElementIndexRef.current;

  const openChannel = (channelURL, channelIcon) => {
    setUrlValue(channelURL);
    localStorage.setItem("urlValue", channelURL);
    localStorage.setItem("icon", channelIcon);
    pause();
    navigate("/radioDifusor");
  };

  const playAudioDescription = (audioFile) => {
    const audio = new Audio(audioFile);
    audio.play();
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.code) {
        case "Digit0":
          pause();
          navigate("/homePage");
          break;
        case "Digit1":
          pause();
          navigate("/EPG-InfoDTV");
          break;
        case "Digit2":
          pause();
          navigate("/EPG-InitialApp");
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
          if (flagAudiodesc) {
            pause();
            setFlagAudiodesc(false);
          } else setFlagAudiodesc(true);

          currentRowIndexRef.current = currentRowIndex;
          currentElementIndexRef.current = currentElementIndex;
          break;
        case "ArrowUp":
          event.preventDefault();
          if (currentRowIndex === 0) {
            if (flagAudiodesc) {
              pause();
              load(audioTelespecBtn, {
                autoplay: true,
              });
            }
            document.getElementById("telespecRef").focus();
          } else if (currentRowIndex > 0) {
            currentRowIndex -= 1;
            currentElementIndex = 0;
            focusableElements[currentRowIndex].current[
              currentElementIndex
            ].focus();
            if (flagAudiodesc) {
              pause();
              load(audioMatrix[currentRowIndex][currentElementIndex], {
                autoplay: true,
              });
            }
          } else if (document.activeElement.id === "confRef") {
            focusableElements[currentRowIndex].current[
              currentElementIndex
            ].focus();
            if (flagAudiodesc) {
              pause();
              load(audioMatrix[currentRowIndex][currentElementIndex], {
                autoplay: true,
              });
            }
          }
          break;
        case "ArrowDown":
          event.preventDefault();
          if (currentRowIndex === 2) {
            if (flagAudiodesc) {
              pause();
              load(audioConfBtn, {
                autoplay: true,
              });
            }
            document.getElementById("confRef").focus();
          } else if (document.activeElement === telespecRef.current) {
            if (flagAudiodesc) {
              pause();
              load(audioMatrix[currentRowIndex][currentElementIndex], {
                autoplay: true,
              });
            }
            focusableElements[currentRowIndex].current[
              currentElementIndex
            ].focus();
          } else if (currentRowIndex < focusableElements.length - 1) {
            currentRowIndex += 1;
            currentElementIndex = 0;
            focusableElements[currentRowIndex].current[
              currentElementIndex
            ].focus();
            if (flagAudiodesc) {
              pause();
              load(audioMatrix[currentRowIndex][currentElementIndex], {
                autoplay: true,
              });
            }
          }
          break;
        case "ArrowLeft":
          event.preventDefault();
          if (currentElementIndex > 0) {
            currentElementIndex -= 1;
            focusableElements[currentRowIndex].current[
              currentElementIndex
            ].focus();
          }
          if (flagAudiodesc) {
            pause();
            load(audioMatrix[currentRowIndex][currentElementIndex], {
              autoplay: true,
            });
          }
          break;
        case "ArrowRight":
          event.preventDefault();
          if (
            currentElementIndex <
            focusableElements[currentRowIndex].current.length - 1
          ) {
            currentElementIndex += 1;
            focusableElements[currentRowIndex].current[
              currentElementIndex
            ].focus();
          }
          if (flagAudiodesc) {
            pause();
            load(audioMatrix[currentRowIndex][currentElementIndex], {
              autoplay: true,
            });
          }
          break;
        case "Escape":
          pause();
          break;
        default:
          break;
      }
      // audioQueue.push(audioFile);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [flagAudiodesc]);

  const playAudio = (file) => {
    // console.log("playAudio")
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

  const rowIcons = [AppsIcon, TvAberta, AnotherIcon];
  const rowTitles = ["Aplicativos", "TV Aberta", "Recomendações"];

  const contentRadiodifusores = [
    [
      {
        id: 1,
        indicacao: "14",
        inicio: "13:00", // usar timestamp
        termino: "14:00", // usar timestamp
        starred: false,
        content: "Programa Anterior",
        downloadable: false,
        type: "",
      },
      {
        id: 2,
        indicacao: "16",
        inicio: "13:00", // usar timestamp
        termino: "14:00", // usar timestamp
        starred: false,
        content: "Programa Atual",
        downloadable: false,
        onAir: true,
        live: true,
        type: "",
      },
      {
        id: 3,
        indicacao: "18",
        inicio: "13:00", // usar timestamp
        termino: "14:00", // usar timestamp
        starred: true,
        content: "Programa a Seguir",
        downloadable: false,
        downloaded: true,
        type: "",
      },
    ],
    [
      {
        id: 4,
        indicacao: "12",
        inicio: "12:30", // usar timestamp
        termino: "14:00", // usar timestamp
        starred: false,
        content: "Programa anterior",
        downloadable: true,
        type: "serie",
        serieName: "Temporada X, episódio Y",
        resumo:
          "Primeiras linhas de resumo sobre o programa anterior do radiodifusor 2",
        advice: "Assista agora!",
      },
      {
        id: 5,
        indicacao: "livre",
        inicio: "13:00", // usar timestamp
        termino: "14:00", // usar timestamp
        starred: false,
        resumo:
          "Primeiras linhas de resumo sobre o programa atual do radiodifusor 2",
        content: "Programa Atual Radiodifusor 2",
        downloadable: false,
        live: true,
        onAir: true,
        type: "",
        advice: "Veja do início!",
      },
      {
        id: 6,
        indicacao: "10",
        inicio: "16:30", // usar timestamp
        termino: "17:00", // usar timestamp
        starred: false,
        content: "Programa a Seguir",
        downloadable: false,
        type: "",
        resumo:
          "Primeiras linhas de resumo sobre o programa a seguir do radiodifusor 2",
        advice: "Assista agora!",
      },
    ],
    [
      {
        id: 7,
        indicacao: "14",
        inicio: "13:00", // usar timestamp
        termino: "14:00", // usar timestamp
        starred: false,
        content: "Programa Anterior",
        downloadable: false,
        type: "",
      },
      {
        id: 8,
        indicacao: "12",
        inicio: "13:00", // usar timestamp
        termino: "14:00", // usar timestamp
        starred: false,
        content: "Programa Atual Radiodifusor 3",
        downloadable: true,
        live: true,
        onAir: true,
        type: "",
      },
      {
        id: 9,
        indicacao: "14",
        inicio: "13:00", // usar timestamp
        termino: "14:00", // usar timestamp
        starred: false,
        content: "Programa a Seguir",
        downloadable: false,
        type: "",
      },
    ],
  ];

  const indicacoes = {
    livre: IndicacaoLivre,
    10: Indicacao10,
    12: Indicacao12,
    14: Indicacao14,
    16: Indicacao16,
    18: Indicacao18,
  };

  return (
    <>
      <HeaderTitleProfile />

      <div className="flex  h-full flex-col justify-center items-center mx-5 mt-5 bg-zinc-800">
        {/* <div className="flex w-full bg-red-500 flex-row text-zinc-300">
          <span className="text-3xl">Anterior</span>
          <span className="text-3xl">Agora</span>
          <span className="text-3xl">A seguir</span>
        </div> */}
        <div
          className="flex-flex-col w-full ml-5
        "
        >
          {contentRadiodifusores.map((item, index) => {
            return (
              <div
                className="flex flex-row justify-center align-center h-[200px] mt-10 rounded-lg w-full"
                key={index}
              >
                <div className="flex items-center h-full  mr-16">
                  <div className="flex items-center flex-col">
                    <img src={RadiodifusorIcon} alt="" />
                    <span className="text-white text-lg">
                      Radiodifusor {index + 1}
                    </span>
                  </div>
                </div>

                <button
                  className="flex flex-col items-center justify-center hover:scale-200 mx-5 rounded-lg"
                  onClick={() => {
                    // ... (código existente)
                  }}
                >
                  <BsChevronLeft
                    size={50}
                    className="text-white cursor-pointer"
                  />
                </button>
                <div className="flex flex-1 h-ful">
                  {item.map((programa, indexPrograma) => {
                    return (
                      <button
                        className={
                          "flex p-3 bg-zinc-700 hover:scale-105 hover:border-4 hover:border-white ease-in-out transition-all duration-300 rounded-lg mx-5 flex-1 flex-col items-center justify-between"
                        }
                        key={indexPrograma}
                      >
                        {/* header content */}
                        <div className="flex w-full flex-row items-center gap-2 ">
                          <img
                            src={indicacoes[programa.indicacao]}
                            className="w-8 h-8"
                            alt=""
                          />

                          <span className="text-white cursor-default">
                            {programa.inicio} - {programa.termino}
                          </span>

                          {programa.onAir && (
                            <div className="bg-red-700 text-white py-[0.125rem] px-4 cursor-default">
                              NO AR
                            </div>
                          )}

                          {programa.live && (
                            <div className="text-red-600 font-medium ml-auto bg-white px-4 py-[0.125rem] uppercase cursor-default">
                              ao vivo
                            </div>
                          )}
                        </div>

                        <div className="text-3xl font-bold text-zinc-300 cursor-default">
                          {programa.content}
                        </div>

                        {programa.type === "serie" && (
                          <span className="text-zinc-300 cursor-default">
                            {programa.serieName}
                          </span>
                        )}

                        {programa.resumo && (
                          <span className="text-lg text-zinc-400 mx-2 cursor-default">
                            {programa.resumo}
                          </span>
                        )}

                        {/* footer */}
                        <div className="flex w-full flex-row items-center gap-2">
                          {programa.starred ? (
                            <AiFillStar size={20} fill="#ffdf00" />
                          ) : (
                            <AiOutlineStar size={20} fill="#aaa" />
                          )}

                          {programa.downloadable & !programa.downloaded ? (
                            <LuDownload size={20} className="text-zinc-400 " />
                          ) : programa.downloaded ? (
                            <LuDownload size={20} className="text-[#ffdf00]" />
                          ) : (
                            <></>
                          )}

                          {programa.advice && (
                            <div className=" cursor-default ml-auto px-3 py-[0.125rem] bg-green-800 text-white font-medium">
                              {programa.advice}
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
                <button
                  className="flex flex-col items-center justify-center hover:scale-200 mx-5 rounded-lg"
                  onClick={() => {
                    // ... (código existente)
                  }}
                >
                  <BsChevronRight
                    size={50}
                    className="text-white cursor-pointer"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <Footer btnRef={confRef}>
        <div className="flex-1 w-full flex justify-between">
          <div className="flex items-center">
            <div className="border border-white rounded-md p-1 mr-5 h-[60px] w-[60px] flex items-center justify-center">
              <BsChevronLeft size={50} className="text-white cursor-pointer " />
            </div>{" "}
            <span className="text-3xl max-w-[280px]">
              Voltar aos apps de tv aberta
            </span>
          </div>
          <div className="flex items-center ">
            <span className="text-3xl max-w-[220px] text-right mr-5 ">
              Assista quando quiser
            </span>{" "}
            <div className="border border-white rounded-md p-1 h-[60px] w-[60px] flex items-center justify-center">
              <MdVideoLibrary
                size={50}
                className="text-white cursor-pointer "
              />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
}
