/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import ProfileIcon from "../assets/profile.svg";
import RadioDifusorIcon from "../assets/radiodifusor_icon.svg";
import IndicacaoIcon from "../assets/indicacao_livre.svg";
import TvBrasil from "../assets/image6.png";
import PlayIcon from "../assets/play.svg";
import BtnFcIcon from "../assets/btn_fc.svg";
import ProgBarIcon from "../assets/prog_bar.svg";
import TitlePage from "../components/TitlePage";

import { cards, streaming, recommendationsApps } from "../database";

export default function RadioDifusorSec() {
  const rowRefs = [useRef([]), useRef([])];
  const urlValue = localStorage.getItem("urlValue");
  const icon = localStorage.getItem("icon");
  const [counter, setCounter] = React.useState(10);
  const [flag, setFlag] = React.useState(false);

  const openChannel = (channelURL) => {
    localStorage.setItem("urlValue", channelURL);
    // window.location.reload();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => counter - 1);
    }, 10000);

    if (counter === 0 || counter < 0) {
      setFlag(true);
      clearInterval(interval);
    }

    let currentRowIndex = 0;
    let currentCardIndex = 0;

    const handleKeyDown = (event) => {
      switch (event.code) {
        case "ArrowUp":
          event.preventDefault();
          // Verificamos se não estamos na primeira linha para não sair do intervalo
          if (currentRowIndex > 0) {
            currentRowIndex -= 1;
          }
          break;
        case "ArrowDown":
          event.preventDefault();
          // Verificamos se não estamos na última linha para não sair do intervalo
          if (currentRowIndex < rowRefs.length - 1) {
            currentRowIndex += 1;
          }
          break;
        case "ArrowLeft":
          event.preventDefault();
          // Verificamos se não estamos no primeiro card para não sair do intervalo
          if (currentCardIndex > 0) {
            currentCardIndex -= 1;
          }
          break;
        case "ArrowRight":
          event.preventDefault();
          // Verificamos se não estamos no último card para não sair do intervalo
          if (currentCardIndex < rowRefs[currentRowIndex].current.length - 1) {
            currentCardIndex += 1;
          }
          break;
        default:
          break;
      }
      // Focamos no card atual
      rowRefs[currentRowIndex].current[currentCardIndex].focus();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      // cleanup localstorage
      // localStorage.removeItem("urlValue");
    };
  }, [icon, flag, counter]);

  const handleClick = () => {
    let disc = document.getElementById("disclaimer");

    disc.className += " h-0";
    setInterval(() => {
      for (const child of disc.children) {
        child.className = "hidden";
      }
    }, 50);
    setInterval(() => {
      disc.className = "hidden";
    }, 100);
  };

  return (
    <>
      <div className="flex flex-col h-full items-center mt-10">
        <div className="bg-zinc-900 flex flex-row h-full w-11/12 items-center justify-center text-white flex-grow mb-5">
          <div className="flex justify-center w-1/4 mr-10">
            <img className="w-full" src={TvBrasil} />
          </div>

          <div className="flex flex-col items-center align-center justify-center text-white bg-zinc-900 h-full rounded w-11/12">
            <div className="flex justify-center items-center h-4/5 zIndex-9">
              {flag ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/w1DAHKloWSM?si=Rv2Y5J2nfpz3L3tq&amp;?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    height: "100%",
                    width: "100%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ) : (
                <div className="flex relative bg-black w-100">
                  <iframe
                    src={`https://www.youtube.com/embed/w1DAHKloWSM?si=Rv2Y5J2nfpz3L3tq&amp;?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0`}
                    allow="autoplay; encrypted-media"
                    // allowFullScreen
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      height: "500px",
                      width: "800px",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                  {/* <p className="absolute top-1/2 leading-3 left-[27%] text-white z-20 bg-black p-2 rounded">
                    Conteúdo em tela cheia em: {counter} segundos.
                  </p> */}
                  1
                </div>
              )}
            </div>
            {/*<div className="flex justify-center items-center h-4/5">
              <img src={PlayIcon} />
            </div>

            <div className="flex flex-col justify-end mb-5">
              <div className="flex flex-row justify-end mr-10">
                <img className="w-48" src={BtnFcIcon} />
              </div>
              <div className="flex flex-row justify-center">
                <img className="w-11/12" src={ProgBarIcon} />
              </div>
            </div>*/}
          </div>

          <div className="flex flex-col w-1/4 justify-between items-start ml-10 h-full">
            <div className="flex flex-row items-center justify-end">
              <h3 className="pr-3 text-2xl text-right text-sky-400">
                Nome do Telespectador
              </h3>
              <img className="w-24" src={ProfileIcon} />
            </div>

            <div className="flex flex-col w-full justify-center items-start">
              <div className="flex flex-col items-start justify-center w-full mb-5">
                <h1 className="text-3xl font-normal mb-0">
                  Título do Programa Atual
                </h1>
                <h3 className="text-2xl">
                  {/*hh:mm - hh:mm*/}
                  {new Date().toLocaleTimeString()}
                </h3>
              </div>

              <div className="flex flex-col justify-start items-start ">
                <h1 className="text-2xl pr-5 py-2">
                  Descrição informativa sobre o programa atual, ocupando o
                  espaço que o radiodifusor preferir
                </h1>
                <img src={IndicacaoIcon} />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 grid grid-cols-1 grid-rows-3 text-white gap-5 w-11/12 h-4/5 ml-5 mr-5 mb-10">
          {[recommendationsApps].map((row, rowIndex) => (
            <>
              <div className="flex flex-row justify-center align-center">
                <div className="flex flex-row items-center align-center justify-center text-white h-full rounded w-full cursor-pointer">
                  {row.map((card, cardIndex) => (
                    <>
                      <button
                        className="flex flex-col items-center "
                        ref={(el) => {
                          rowRefs[rowIndex].current[cardIndex] = el;
                          if (el) {
                            el.onfocus = () =>
                              (el.style.transform = "scale(1.07)");
                            el.onblur = () => (el.style.transform = "scale(1)");
                          }
                        }}
                        tabIndex={0}
                        onClick={() => openChannel(card.content, card.icon)} // Estamos passando a URL do cartão para a função openChannel
                      >
                        <div className="mx-3 focus:border-cyan-200  hover:border-cyan-900 ">
                          <img
                            className=" h-[200px] rounded-lg mx-2  hover:scale-105
                                          focus:scale-120 transition duration-500 ease-in-out
                                         "
                            src={card.icon}
                            alt="card icon"
                          />
                        </div>
                      </button>
                    </>
                  ))}
                </div>
              </div>
            </>
          ))}

          {/*<div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RECOMENDAÇÃO</h1></div>
          <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RECOMENDAÇÃO</h1></div>
          <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RECOMENDAÇÃO</h1></div>
          <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RECOMENDAÇÃO</h1></div>
          <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RECOMENDAÇÃO</h1></div>
          <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RECOMENDAÇÃO</h1></div>
          <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RECOMENDAÇÃO</h1></div>
          <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RECOMENDAÇÃO</h1></div>
          <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RECOMENDAÇÃO</h1></div>
          <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RECOMENDAÇÃO</h1></div>*/}
        </div>
      </div>
      <div
        id="disclaimer"
        className="w-full flex items-center justify-center px-10 absolute bottom-0 bg-gray-400 opacity-90 h-48 transition-all duration-400"
      >
        <h3 className="text-3xl">
          Os aplicativos do Radiodifusor 1 necessitam coletar informações de seu
          perfil e de seus hábitos de consumo para lhe entregar uma experiência
          personalizada. Leia nossa Política de Privacidade.
        </h3>
        <div className="text-2xl flex flex-col justify-center items-center text-white">
          <div
            onClick={handleClick}
            className="border-2 border-black-700 w-[250px] flex justify-center items-center bg-slate-800 mb-5 rounded-xl p-3 cursor-pointer hover:bg-zinc-700 hover:scale-105 border-2 transition-all duration-400"
          >
            Concordo
          </div>
          <div
            onClick={handleClick}
            className="border-2 border-black-700 w-[250px] flex justify-center items-center bg-slate-800 rounded-xl p-3 cursor-pointer hover:bg-zinc-700 hover:scale-105 transition-all duration-400"
          >
            Não Concordo
          </div>
        </div>
      </div>
    </>
  );
}
