/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef, useContext } from "react";

import AppsIcon from "../assets/apps-icon.png";
import TvAberta from "../assets/tvAberta.png";
import AnotherIcon from "../assets/popular-recommendation.png";
import ProfileIcon from "../assets/profile.svg";
import UserImg from "../assets/user-img.png";
import Footer from "../components/FooterHomePage";
import { useNavigate } from "react-router";
import { UrlContext } from "../App";

import { cards, streaming, recommendations } from "../database";
import { BsChevronRight } from "react-icons/bs";

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

export default function HomePage() {
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

  return (
    <>
      <div className="flex justify-end">
        <div className="flex flex-col w-1/4 justify-center items-end h-full mr-5">
          <div
            ref={telespecRef}
            tabIndex="1"
            id="telespecRef"
            className="flex flex-row items-center justify-end mt-10 p-10 focus-within:border-sky-500"
          >
            <h3 className="pr-3 text-2xl text-right text-sky-400">
              Telespectador
            </h3>
            <img className="w-24" src={UserImg} />
          </div>
        </div>
      </div>

      <AudiodescFlag.Provider value={[flagAudiodesc, setFlagAudiodesc]}>
        <div className="flex flex-col h-full justify-center items-center">
          {[streaming, cards, currentRecommendations].map((row, rowIndex) => (
            <div className="flex flex-row justify-center align-center h-[250px] mt-10 rounded-lg">
              <button
                className="flex flex-col justify-center w-36 mx-3 align items-center mr-10"
                onClick={() => {
                  if (rowIndex === 0) {
                    // navigate('/aplicativos');
                  } else if (rowIndex === 1) {
                    pause();
                    navigate("/tvAberta");
                  } else {
                    // navigate('/talvezGoste');
                  }
                }}
              >
                <img
                  className="w-[8rem] h-[7rem] rounded-full"
                  src={rowIcons[rowIndex]}
                  ref={(el) => {
                    focusableElements[rowIndex].current[0] = el;
                    if (el) {
                      el.onfocus = () => {
                        el.style.transform = "scale(1.1)";
                        // Atualize as recomendações
                      };
                      el.onblur = () => (el.style.transform = "scale(1)");
                    }
                  }}
                  tabIndex={0}
                  onClick={() => {
                    if (rowIndex === 0) {
                      // navigate('/aplicativos');
                    } else if (rowIndex === 1) {
                      pause();
                      navigate("/tvAberta");
                    } else {
                      // navigate('/talvezGoste');
                    }
                  }}
                />
                <p className="text-xl text-center text-white ">
                  {rowTitles[rowIndex]}
                </p>
              </button>
              <div className="flex flex-row items-center align-center justify-center text-white h-full rounded w-full cursor-pointer gap-5">
                {row.map((card, cardIndex) => (
                  <button
                    className="flex flex-col items-center justify-center hover:scale-200 w-[200px] mx-3 rounded-lg"
                    ref={(el) => {
                      focusableElements[rowIndex].current[cardIndex + 1] = el;
                      if (el) {
                        el.onfocus = () => (el.style.transform = "scale(1.1)");
                        el.onblur = () => (el.style.transform = "scale(1)");
                      }
                    }}
                    tabIndex={0}
                    onClick={() => {
                      if (
                        card.icon === TvAberta ||
                        card.icon === TvAbertaIcone
                      ) {
                        pause();
                        navigate("/tvAberta");
                      } else {
                        openChannel(card.content, card.icon);
                      }
                    }}
                    onFocus={() => {
                      if (rowIndex < 2) {
                        // Para todas as linhas exceto a última
                        updateRecommendations(card.name, rowIndex); // Atualize as recomendações
                      }
                    }}
                  >
                    <div className="focus:border-cyan-200  hover:border-cyan-900  ">
                      <img
                        className="w-[240px] h-[135px] rounded-lg mx-2  hover:scale-200 transition duration-500 ease-in-out "
                        src={card.icon}
                        alt="card icon"
                        onFocus={() => {
                          updateRecommendations(rowTitles[rowIndex]); // Atualize as recomendações
                        }}
                      />
                    </div>
                  </button>
                ))}
              </div>
              <button
                className="flex flex-col items-center justify-center hover:scale-200 w-[5px] mx-[10px] rounded-lg"
                onClick={() => {
                  // ... (código existente)
                }}
              >
                <BsChevronRight className="w-[30px] h-[30px] text-white cursor-pointer" />
              </button>
            </div>
          ))}
        </div>
      </AudiodescFlag.Provider>
      <Footer btnRef={confRef} />
    </>
  );
}
