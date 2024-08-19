/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef, useContext } from "react";
import { RxCountdownTimer } from "react-icons/rx";

import { AiOutlinePicLeft } from "react-icons/ai";

import AppsIcon from "../assets/apps-icon.png";
import TvAberta from "../assets/tvAberta.png";
import AnotherIcon from "../assets/popular-recommendation.png";
import UserImg from "../assets/user-img.png";

import Footer from "../components/FooterHomePage";
import HeaderTitleProfile from "../components/HeaderTitleProfile";

import TvUFMAIcon from "../assets/tv_ufma.jpg";
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
import { FaRegStar } from "react-icons/fa6";

export default function EPGInitialApp() {
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

        <div className=" w-full h-full">
          <div className="grid grid-cols-[1fr_3fr] h-full">
            <div className=" flex  items-center justify-center flex-col gap-10 ">
              <img src={TvUFMAIcon} alt="" className="w-2/3 rounded-full " />
              <p className="text-5xl font-bold text-gray-200">Tv UFMA</p>
              <p className="text-2xl text-gray-400">O seu canal de ideias</p>
            </div>
            <div className="h-full w-full flex flex-col">
              <iframe
                className="flex-1"
                src="https://www.youtube.com/embed/TSNrP06lCZY?si=ZNsUhIjJe_dpF9Jc?controls=0&autoplay=1&loop=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <div className="flex gap-4 my-6">
                <div className="text-xl text-white font-medium w-[150px] bg-red-700 px-8 py-[0.25rem] uppercase flex text-center items-center justify-center">
                  No Ar
                </div>
                <div className="text-xl text-red-700 font-medium w-[150px] bg-white px-8 py-[0.25rem] uppercase flex text-center items-center justify-center">
                  Ao vivo
                </div>
                <div className="text-xl text-white font-medium ml-auto w-[200px] bg-green-700  py-[0.25rem] uppercase flex text-center items-center justify-center">
                  Veja do início
                </div>
              </div>

              <div className="flex mb-10">
                <div className="w-2/3 gap-4 flex flex-col text-gray-200 border-r-8">
                  <h2 className="text-4xl font-bold ">
                    Programa Atual Tv UFMA
                  </h2>
                  <p className="text-2xl">14:10 - 16:30</p>
                </div>
                <div className="text-2xl px-4 text-zinc-300 flex items-center">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam dignissimos rem, odio ratione tenetur in impedit iure
                    laudantium rerum voluptatibus autem officiis dicta
                    distinctio delectus placeat odit exercitationem, blanditiis
                    fuga!
                  </p>

                  <img src={IndicacaoLivre} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className=" p-10 flex  w-full  justify-between text-white">
        <div className="flex items-center">
          <div className="border border-white rounded-2xl p-1 mr-5 h-[100px] w-[100px] flex items-center justify-center">
            <BsChevronLeft size={50} className="text-white cursor-pointer " />
          </div>{" "}
          <span className="text-3xl max-w-[280px]">
            Voltar aos apps de tv aberta
          </span>
        </div>
        <div className="flex items-center">
          <div className="border border-white rounded-2xl p-1 mr-5 h-[100px] w-[100px] flex items-center justify-center">
            <FaRegStar size={50} className="text-white cursor-pointer " />
          </div>{" "}
          <span className="text-3xl max-w-[280px]">
            Adicionar aos favoritos
          </span>
        </div>
        <div className="flex items-center">
          <div className="border border-white rounded-2xl p-1 mr-5 h-[100px] w-[100px] flex items-center justify-center">
            <RxCountdownTimer
              size={50}
              className="text-white cursor-pointer "
            />
          </div>{" "}
          <span className="text-3xl max-w-[280px]">
            Assistir desde o início
          </span>
        </div>
        <div className="flex items-center ">
          <span className="text-3xl max-w-[220px] text-right mr-5 ">
            Abrir o guia de TV aberta
          </span>{" "}
          <div className="border border-white rounded-2xl p-1 h-[100px] w-[100px] flex items-center justify-center">
            <AiOutlinePicLeft
              size={50}
              className="text-white cursor-pointer "
            />
          </div>
        </div>
      </footer>
    </>
  );
}
