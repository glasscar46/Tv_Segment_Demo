// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

// import { AudiodescContext } from '../App';
// import { AudiodescFlag } from '../App';

export default function Fabricante() {
  const navigate = useNavigate();

  /*const {audioContext} = useContext(AudiodescContext);
    const track = useRef(null);
    const audio = useRef(null);*/

  // const [flagAudiodesc, setFlagAudiodesc] = useContext(AudiodescFlag)

  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log(event.code);
      switch (event.code) {
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    // if (flagAudiodesc) {
    // load(audioFile, {
    //   autoplay: true,
    // });
    // }

    setTimeout(() => {
      // pauseAudio()
      navigate("/selectLanguage");
    }, 6000);
  }, []);

  return (
    <div className="container  align-center justify-center">
      <h1 className="text-9xl text-center text-white font-bold ml-[11%]">
        Fabricante
      </h1>
    </div>
  );
}
