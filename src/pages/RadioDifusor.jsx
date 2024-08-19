/* eslint-disable no-unused-vars */
import React, {useEffect } from "react";
import Footer from "../components/FooterRadiodifusor";
import IndicacaoIcon from "../assets/indicacao_livre.svg";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import video6 from "../assets/Record/RECORD_HD.mp4"
import cartavo from "../assets/Cartavo.mp4"

// import brasilVideo from "../assets/brasil.mp4";
// import botafogoVideo from "../assets/botafogo.mp4";
export default function RadioDifusor() {
  const urlValue = localStorage.getItem("urlValue");
  const icon = localStorage.getItem("icon");
  const [counter, setCounter] = React.useState(10);
  const [flag, setFlag] = React.useState(false);
  const navigate = useNavigate();
  const [isOpened, setIsOpened, recomendaBox] = React.useState(false)

  const openChannel = (channelURL) => {
    localStorage.setItem("urlValue", channelURL);
    navigate("/radioDifusor");
  };

  // useEffect(()=>{
  //   if (!isOpened)
  // {
  //   toast(`Localização:  ${import.meta.env.VITE_USER_LOCALIZATION} `, {
  //     position: "top-right",
  //     style: { fontSize: '35px' }, 
  //     autoClose: false
  //   });
  //   setIsOpened(true)
  // }

  //   return ()=> setIsOpened(false)
  //  })

  useEffect(() => {

    const interval = setInterval(() => {
      setCounter((counter) => counter - 1);
    }, 2000);

    if (counter === 0 || counter < 0) {
      // setFlag(true);
      clearInterval(interval);
    }

    document.addEventListener("keydown", (event) => {
      if (event.code === "KeyR" || event.code === "Digit3") {
        window.location.reload();
      }
      else{
        if (event.code === "ArrowDown") {
          setFlag(true)
          //window.location.reload();
          console.log('Recomende')
          toast(`Localização:  ${import.meta.env.VITE_USER_LOCALIZATION} `, {
                 position: "top-right",
                 style: { fontSize: '35px' }, 
                 autoClose: true
          });
          recomendaBox(true)
        }
      }
    });

  }, [icon, flag, counter]);

  useEffect(() => {
    const ws = new WebSocket('ws://192.168.0.106:9000');
    // const ws = new WebSocket('ws://localhost:9000');
    
    ws.onopen = () => {
      // Envia a mensagem para o servidor após a conexão ser estabelecida
      ws.send(JSON.stringify({
        type: 'REQUEST_SHOW_AD',
        delay: 8000 // Solicita o envio de SHOW_AD após 8 segundos
      }));
    };
  
    ws.onmessage = (event) => {
      console.log(event.data);
      const message = JSON.parse(event.data);
      if (message.type === 'SHOW_AD') {
        // Assumindo que você tem acesso às variáveis de ambiente corretamente
        const userLocalization = import.meta.env.VITE_USER_LOCALIZATION;
        
        if (userLocalization === "Asa Sul"){
          toast(`Redirecionando para Conteúdo Regional - ${userLocalization}` , {
            position: "top-center",
            style: { fontSize: '20px' } ,
            autoClose: 5000
          });
          // Supondo que openChannel seja uma função fornecida via props ou contexto
          openChannel(cartavo); // Certifique-se de que 'cartavo' está correto
        }
        if (userLocalization === "Asa Norte"){
          toast(`Redirecionando para Conteúdo Regional - ${userLocalization}` , {
            position: "top-center",
            style: { fontSize: '20px' } ,
            autoClose: 5000
          });
          openChannel(video6); // Certifique-se de que 'video6' está correto
        }
      }
    };
  
    return () => {
      ws.close();
    };
  }, []);
  

  return (
    <>

      
      <div className="flex flex-row h-full items-center mt-10">
        <div className="bg-zinc-900 flex flex-col items-left justify-start text-white w-1/3 h-4/5 ml-10 mr-5">
          <img src={icon} alt="Radio Difusor Icon" />
        </div>

        <div className="bg-zinc-900 flex flex-col h-full items-left justify-left text-white flex-grow ml-5 mr-10 mt-[10rem]">
          <div className="flex flex-col items-center align-center justify-center text-white h-4/5 rounded">
            <div className="flex justify-center items-center h-4/5 zIndex-9">
              {flag ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`${urlValue}`}
                  // src={`${urlValue}&start=20`}
                  // src={'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0&start=20'}
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
                <div className="flex relative bg-black w-100 ">
                  <iframe
                    src={`${urlValue}`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      height: "700px",
                      width: "1366px",
                      transform: "translate(-50%, -50%)",
                    }}
                  />

                  {/* <p className="absolute top-1/2 leading-3 left-[35%] text-white z-20 bg-black p-2 rounded">
                    Conteúdo em tela cheia em: {counter} segundos.
                  </p> */}
                </div>
              )}
            </div>

            <div className="flex flex-col justify-end mb-5">
              <div className="flex flex-row justify-end">
                {/* <img src={BtnFcIcon} alt="Button FC Icon" /> */}
              </div>
              <div className="flex flex-row justify-center">
                {/* <img src={ProgBarIcon} alt="Progress Bar Icon" /> */}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 mt-[15rem]">
            <div className="flex flex-col items-end justify-center w-full p-5 border-r-4 mt-10">
              <h1 className="text-5xl font-normal mb-0">
                Título do Programa Atual
              </h1>
              <h3 className="text-4xl">{new Date().toLocaleTimeString()}</h3>
            </div>

            <div className="flex items-center py-5 pl-5">
              <h1 className="text-3xl pr-5 py-2">
                Descrição informativa sobre o programa atual, podendo ocupar
                duas linhas trunc...
              </h1>
              <img src={IndicacaoIcon} alt="Indicacao Icon" />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer key={location.pathname}/>
      <Footer />
    </>
  );
}
