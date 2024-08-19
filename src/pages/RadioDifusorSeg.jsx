/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import { sportRecommendations, olympicSports } from '../database';
import { useAudioPlayer } from 'react-use-audio-player';
import { MdOutlineSubtitles } from "react-icons/md";
import IconBordered from "../components/IconBordered";

export default function RadioDifusor() {
    const { load, pause } = useAudioPlayer();
    const videoRef = useRef(null);
    const [name, setName] = useState(localStorage.getItem("sportName") ? localStorage.getItem("sportName") : "Ciclismo");
    const [flag, setFlag] = useState(false);
    const [showRecs, setShowRecs] = useState(false);
    const [showSportMenu, setShowSportMenu] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(sportRecommendations[name][0][0]);
    const currentRowIndexRef = useRef(0);
    const currentCardIndexRef = useRef(0)
    const rowRefs = [useRef([]), useRef([])];

    function getThumbnailUrl(videoId) {
        if (!videoId) return "";
        return `https://img.youtube.com/vi/${videoId}/0.jpg`
    }

    function setPreferredSport(preferredSport) {
        localStorage.setItem('sportName', preferredSport)
        setName(preferredSport)
        setCurrentVideo(sportRecommendations[preferredSport][0][0])
        setShowSportMenu(false)
        setTimeout(() => setFlag(false), 1000)
    }
    const fullVideoStyle = { position: "absolute", top: 10, left: 10, width: "99vw", height: "99vh", zIndex: 10, objectFit: "cover" }
    const VideoStyle = { position: "absolute", top: 10, left: "30vw", width: "70vw", height: "99vh", zIndex: 10, objectFit: "fill" }

    useEffect(() => {
        // Iniciamos o index em 0 para linhas e cartões
        let currentRowIndex = currentRowIndexRef.current;
        let currentCardIndex = currentCardIndexRef.current;

        const handleKeyDown = (event) => {
            switch (event.code) {
                case 'ArrowUp':
                    event.preventDefault();
                    setFlag(true)
                    if (currentRowIndex > 0) {
                        currentRowIndex -= 0;
                    }
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    setFlag(false)
                    if (currentRowIndex < rowRefs.length - 1) {
                        currentRowIndex += 0;
                    }

                    break;
                case 'ArrowLeft':
                    event.preventDefault();
                    if (showSportMenu && currentCardIndex > 0 && (document.activeElement.id !== "guiaProgRef" || document.activeElement.id !== "homeRef")) {
                        currentCardIndex -= 1;
                        rowRefs[currentRowIndex].current[currentCardIndex].focus();
                    }

                    break;
                case 'ArrowRight':
                    event.preventDefault();
                    if (showSportMenu && currentCardIndex < rowRefs[currentRowIndex].current.length - 1 && (document.activeElement.id !== "guiaProgRef" || document.activeElement.id !== "homeRef")) {
                        currentCardIndex += 1;
                        rowRefs[currentRowIndex].current[currentCardIndex].focus();
                    }

                    break;
                case 'Escape':
                    pause()
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
                case 'F2':
                    currentRowIndexRef.current = currentRowIndex
                    currentCardIndexRef.current = currentCardIndex
                    break;
                default:
                    break;
            }

            rowRefs[currentRowIndex].current[currentCardIndex].focus();
        };
        const videoElement = videoRef.current;
        videoElement.addEventListener("click", (event)=>{
            videoElement.play()
        })
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", (event) => {
            if (event.code === "ArrowDown") {
                setFlag(true)
                setShowRecs(false)
                event.preventDefault();
            }
            if (event.code === "ArrowUp") {
                setFlag(false)
                setShowRecs(false)
                event.preventDefault();
            }
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                setFlag(false)
                setShowRecs(!showRecs)
                event.preventDefault();
            }
        });

    }, [flag, showSportMenu, showRecs, currentVideo]);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.muted = false;
            videoElement.load();
            videoElement.play().catch(error => {
                console.error('Video playback failed:', error);
            });
        }
    }, [currentVideo]);

    return (
        <>
            <div >
                <div className="bg-zinc-900 flex flex-col items-left justify-start text-white w-1/4 ml-5 ">
                    {
                        !showSportMenu ?
                            (<div>
                                <img style={{borderRadius:"10px"}} src={olympicSports.find((s) => s.name == name).icon} alt="Radio Difusor Icon" />
                                <div className="flex flex-row justify-start font-normal gap-1 items-center mt-10" style={{cursor: "pointer"}} onClick={() => setShowSportMenu(true)}>
                                    <IconBordered >
                                        <MdOutlineSubtitles size={40} />
                                    </IconBordered>
                                    <p className="text-2xl">Troca esporte</p>
                                </div>
                            </div>)
                            : (<div>
                                <h1 className="text-2xl text-white text-center">As olimpíadas vão começar!</h1>
                                <h1 className="text-2xl text-white text-center mb-10">Qual esporte você prefere assistir?</h1>
                                <div className="grid grid-cols-2 gap-10 mx-10">
                                    {
                                        olympicSports.map((card, index) => (
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
                                                onClick={() => setPreferredSport(card.name)}
                                            >
                                                <img style={{borderRadius:"1rem"}} className="w-[250px] h-[120px]" src={card.icon} alt="Channel Icon" />
                                            </button>))
                                    }
                                </div>
                            </div>)
                    }
                </div>
            </div>
            {console.log(currentVideo)}
            <video ref={videoRef} autoPlay={true} muted={true} loop style={flag ? VideoStyle : fullVideoStyle}>
                <source src={currentVideo} type="video/mp4" />
            </video>
            {showRecs &&
                <>
                    <div style={{
                        width: "100vw",
                        height: "100vh",
                        zIndex: 11,
                        position: "absolute",
                        background: "grey",
                        opacity: 0.7
                    }}></div>
                    <div className="flex flex-row flex-wrap items-center justify-center mt-[5rem] mb-[3rem]" style={{ zIndex: 12, alignContent: "space-between" }} >
                        <div />
                        {sportRecommendations[name].filter(x => x !== currentVideo).slice(0, 4).map((item, index) =>
                            <div style={{cursor:"pointer"}} onClick={() => {setCurrentVideo(item[0]); setShowRecs(false)}} className="flex mr-[2rem]" key={index}>
                                <img width={300} src={getThumbnailUrl(item[1])} style={{ borderRadius: "2rem", boxShadow: "10px 10px 10px grey" }} />
                            </div>)
                        }
                    </div>
                </>}
        </>
    );
}
