// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SelectLanguage from "./pages/SelectLanguage.jsx";
import SelectProfile from "./pages/SelectProfile.jsx";
import EPG from "./pages/EPG.jsx";
import EPGInfoDTV from "./pages/EPG-InfoDTV.jsx";
import EPGInitialApp from "./pages/EPG-lnitialApp.jsx";
import ImportProfile from "./pages/ImportProfile.jsx";
import ChangeProfile from "./pages/ChangeProfile.jsx";
import CreateProfile from "./pages/CreateProfile.jsx";
import UserProvider from "./contexts/userContext.jsx";
import RadioDifusor from "./pages/RadioDifusor.jsx";
import RadioDifusorSec from "./pages/RadioDifusorSec.jsx";
import RadioDifusorSecL2 from "./pages/RadioDifusorSecL2.jsx";
import RadioDifusorSeg from "./pages/RadioDifusorSeg.jsx";
import AppCatUI from "./pages/AppCatUI.jsx";
import AppCatUIProfile from "./pages/AppCatUIProfile.jsx";
import DiscoverChannels from "./pages/DiscoverChannels.jsx";
import HomePage from "./pages/HomePage.jsx";
import Fabricante from "./pages/Fabricante.jsx";
import TvAberta from "./pages/TvAberta.jsx";
import TvAbertaSeg from "./pages/RadioDifusorSeg.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "EPG",
        element: <EPG />,
      },
      {
        path: "EPG-InitialApp",
        element: <EPGInitialApp />,
      },
      {
        path: "EPG-InfoDTV",
        element: <EPGInfoDTV />,
      },
      {
        path: "fabricante",
        element: <Fabricante />,
      },
      {
        path: "selectLanguage",
        element: <SelectLanguage />,
      },
      {
        path: "createProfile",
        element: <CreateProfile />,
      },
      {
        path: "selectProfile",
        element: <SelectProfile />,
      },
      {
        path: "homePage",
        element: <HomePage />,
      },
      {
        path: "discoverChannels",
        element: <DiscoverChannels />,
      },
      {
        path: "radioDifusor",
        element: <RadioDifusor />,
      },
      {
        path: "radioDifusorSec",
        element: <RadioDifusorSec />,
      },
      {
        path: "radioDifusorSeg",
        element: <RadioDifusorSeg />,
      },
      {
        path: "radioDifusorSecL2",
        element: <RadioDifusorSecL2 />,
      },
      {
        path: "appCatUI",
        element: <AppCatUI />,
      },
      {
        path: "appCatUIProfile",
        element: <AppCatUIProfile />,
      },
      {
        path: "importProfile",
        element: <ImportProfile />,
      },
      {
        path: "changeProfile",
        element: <ChangeProfile />,
      },
      {
        path: "tvAberta",
        element: <TvAberta />,
      },
      {
        path: "tvAbertaSeg",
        element: <TvAbertaSeg />,
      },
      {
        path: "RadioDifusorSecL2",
        element: <RadioDifusorSecL2 />,
      },
      /* 
      {
        path: "CanalPersonalizadoVirtual",
        element: <CanalPersonalizadoVirtual />,
      },
      */

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </>
);
