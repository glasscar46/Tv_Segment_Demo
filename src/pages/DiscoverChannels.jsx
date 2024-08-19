/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef, useContext } from 'react'
import TitlePage from '../components/TitlePage';
import AppCard from '../components/AppCard';
import Footer from '../components/FooterDiscoverChannels';
import { useNavigate } from 'react-router-dom';
import { cards, streaming, universityApps } from '../database';
import TvAberta from '../assets/tvAberta.png';

import { useAudioPlayer } from 'react-use-audio-player';

import { AudiodescContext } from '../App';
import { AudiodescFlag } from '../App';

import audioFile from "../audios/ConfTV.mp3";
import audioFile2 from "../audios/ProcurandoEmissoras.mp3";
import audioFile3 from "../audios/FecharBusca.mp3";
import audioFile4 from "../audios/Toque3Fechar.mp3";
import audioFile5 from "../audios/RegiaoIdentificada.mp3";
import audioFile6 from "../audios/PaisBrasil.mp3";
import audioFile7 from "../audios/CidadeSP.mp3";
import audioFile8 from "../audios/Buscando.mp3";
import audioFile9 from "../audios/IniciarBusca.mp3";
import audioFile10 from "../audios/Progresso0.mp3";
import audioFile11 from "../audios/Progresso20.mp3";
import audioFile12 from "../audios/AppsEncontrados15.mp3";
import audioFile13 from "../audios/CanaisEncontrados.mp3";
import audioFile14 from "../audios/AudiodescricaoBotao.mp3";

export default function DiscoverChannels() {
    const [scanProgress, setScanProgress] = useState(0);
    const [channelsFound, setChannelsFound] = useState([]);
    const [streamingFound, setStreamingFound] = useState([]);
    const [scanComplete, setScanComplete] = useState(false);
    const [isScanning, setIsScanning] = useState(false);
    const navigate = useNavigate();
    const startRef = React.useRef();
    const audiodescRef = React.useRef();

    const [flagAudiodesc, setFlagAudiodesc] = useContext(AudiodescFlag);

    const loadAudio = () => {
        const queue = [audioFile10]
        const queue2 = [audioFile5, audioFile6, audioFile7]
        if (isScanning) {
            return [audioFile11, ...queue2, audioFile8]
        } else if (scanComplete) {
            return [audioFile12, audioFile13, ...queue2, audioFile3, audioFile4]
        }

        return [...queue, audioFile9]
    }

    const { load, pause } = useAudioPlayer();
    const audiosObj = {
        "startRef": loadAudio(),
        "audiodescRef": [audioFile14]
    }

    const {audioContext} = useContext(AudiodescContext);
    const track = useRef(null);
    const audio = useRef(null);

    const focusedElementRef = useRef('startRef')

    const [queueIndex, setQueueIndex] = useState(0)
    const audioQueue = [audioFile, audioFile2, ...audiosObj[focusedElementRef.current]]

    /*useEffect(() => {
        const hasPlayedAudio = localStorage.getItem('hasPlayedAudi4');

        if (!hasPlayedAudio) {
            playAudio(audioFile)
            /*audio.current = new Audio(audioFile);
            audio.current.play().catch((error) => {
                console.error("Falha ao tocar áudio:", error);
            });
            localStorage.setItem('hasPlayedAudio4', 'true');
        }
    }, []);*/

    useEffect(() => {
        document.getElementById(focusedElementRef.current).focus()
        // startRef.current.focus();
        audioQueue.push(audioFile); // Tem que ser o audio do btn que recebe o foco primeiro na página

        const handleKeyDown = (event) => {
            switch (event.code) {
                case 'ArrowDown':
                  if (document.activeElement === startRef.current) {
                    document.getElementById("audiodescRef").focus()
                    if(flagAudiodesc) {
                      pause()
                      load(audioFile14, {autoplay: true})
                    }
                  }
                  
                  break;
                case 'ArrowUp':
                  if (document.activeElement.id === "audiodescRef") {
                    startRef.current.focus()
                    if(flagAudiodesc) {
                      pause()
                      if (isScanning) {
                        load(audioFile8, {autoplay: true})
                      } else if (scanComplete) {
                        load(audioFile3, {autoplay: true})
                      } else {
                        load(audioFile9, {autoplay: true})
                      }
                    }
                  }
                  
                  break
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
                case 'F2':
                  focusedElementRef.current = document.activeElement.id

                  if (flagAudiodesc) {
                    pause()
                    setFlagAudiodesc(false)
                    setQueueIndex(0)
                  }
                  else setFlagAudiodesc(true)
                  break;
                case 'Escape':
                    pause()
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
    }, [/*scanProgress*/flagAudiodesc])

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
          
      }, [queueIndex, load, flagAudiodesc, scanComplete, isScanning])

    const startScan = () => {
        pause()
        setQueueIndex(0)
        setScanProgress(0);
        setChannelsFound([]);
        setScanComplete(false);
        setIsScanning(true);

        const scanInterval = setInterval(() => {
            setScanProgress(oldProgress => {
                if (oldProgress >= 100) {
                    clearInterval(scanInterval);
                    setScanComplete(true);
                    setIsScanning(false)
                    setQueueIndex(0)
                    return 100;
                }
                return oldProgress + 10;
            });

            setChannelsFound(oldChannels => {
                const newChannel = universityApps[oldChannels.length];
                if (newChannel) {
                    return [...oldChannels, newChannel];
                }
                return oldChannels;
            });
        }, 1000);

        setStreamingFound(oldStreaming => {
            const newStreaming = streaming[oldStreaming.length];
            if (newStreaming) {
                return [...oldStreaming, newStreaming];
            }
            return oldStreaming;
        });
    };


    const handleButtonClick = async () => {
        if (scanComplete) {
            pause()
            navigate("/homePage");
        } else {
            await startScan();
        }
    };

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
                <TitlePage name="Configurando a sua TV..." />
            </header>

            <div className='flex flex-col items-center justify-between'>

                <div className='scan-progress flex flex-row text-white m'
                    style={{ width: `${scanProgress}%` }}>
                </div>
                <p className='scan-info text-4xl font-semibold text-white text-center mt-5 mb-5'>Procurando por Emissoras de TV aberta de sua região...</p>

                <p className='scan-info text-2xl text-white text-center'>Progresso: {scanProgress}%</p>
                <p className='scan-info text-2xl text-white text-center mb-5'>Apps de TV Aberta Encontrados: {channelsFound.length + streamingFound.length}</p>
                {/* max width then breakline */}
                <div className='channels-container flex flex-row items-center justify-center w-200 h-100 flex-wrap'>
                    {channelsFound.map((card, index) => (
                        <div className='app-card overflow-y-auto' key={index}>
                            {card.icon !== TvAberta ? <AppCard icon={card.icon} /> : <></>}

                        </div>
                    ))}
                    <br />
                    {/* {streamingFound.map((streaming, index) => (
                        <div className='app-card mb-5' key={index}>
                            {streaming.icon !== TvAberta ? <AppCard icon={streaming.icon} /> : <></>}
                        </div>
                    ))} */}
                </div>

                <div className='flex flex-col items-center justify-center'>
                    {scanComplete ? <>
                        <p className='scan-info text-2xl text-white text-center mb-10'>
                            Região Identificada:
                        </p>

                        <p className='scan-info text-2xl text-white text-center mb-10'>
                            <strong>País</strong>: Brasil  <br /> <strong>Cidade</strong>: São Luís
                        </p>
                    </>
                        : null}
                </div>
                <AudiodescFlag.Provider value={[flagAudiodesc, setFlagAudiodesc]}>
                    <button id="startRef" ref={startRef} onClick={handleButtonClick} className='scan-button text-white text-center p-8 rounded-e-sm m-5 text-3xl' style={scanComplete ? { backgroundColor: "#E7625F" } : { backgroundColor: "green" }}>
                        {scanComplete ? 'Fechar Busca' : isScanning ? 'Buscando...' : 'Iniciar Busca'}
                    </button>
                </AudiodescFlag.Provider>
            </div >
            <Footer btnRef={audiodescRef.current}/>
        </>
    )
}