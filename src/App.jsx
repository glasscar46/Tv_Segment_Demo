/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState } from "react";

import { Outlet, useNavigate } from "react-router";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// create a context with urlValue and setUrlValue
export const UrlContext = React.createContext({
  urlValue: "",
  setUrlValue: () => {},
});

export const AudiodescContext = React.createContext({
  audioContext: new AudioContext(),
});

export const AudiodescFlag = React.createContext();

export default function App() {
  const navigate = useNavigate();

  const [flagAudiodesc, setFlagAudiodesc] = useState(true);

  useEffect(() => {
    if (navigate) {
      navigate("/tvAbertaSeg");
    }
    toast(`Localização:  ${import.meta.env.VITE_USER_LOCALIZATION} `, {
      position: "top-right",
      style: { fontSize: '35px' }, 
      autoClose: false
    });
  }, [navigate]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log(event.code);
      if (event.type === "click") {
        event.preventDefault();
        event.code = "Enter";
      }

      switch (event.code) {
        case "Escape":
          event.preventDefault();
          navigate(-1);
          break;
        case "KeyA":
          event.preventDefault();
          navigate("/tvAbertaSeg");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);

  return (
    <UrlContext.Provider value={{ urlValue: "", setUrlValue: () => {} }}>
      <main className="bg-zinc-900 flex flex-col w-100 h-full min-h-screen">
        <div className="bg-zinc-900 flex flex-col justify-center w-100 h-1 min-h-screen overflow-hidden">
          <AudiodescFlag.Provider value={[flagAudiodesc, setFlagAudiodesc]}>
            <Outlet />
          </AudiodescFlag.Provider>
        </div>
      </main>
      <ToastContainer key={location.pathname} />
    </UrlContext.Provider>
  );
}
