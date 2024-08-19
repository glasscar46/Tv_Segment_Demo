// eslint-disable-next-line no-unused-vars
import React from "react";
import ProfileCard from "../components/ProfileCard";
import ProfileCardImport from "../components/ProfileCardImport";
import ProfileCardChange from "../components/ProfileCardChange";

import Footer from "../components/FooterProfile.jsx";
import TitlePage from "../components/TitlePage";

export default function ChangeProfile() {
  return (
    <>
      <header className="flex flex-col items-left justify-left text-white">
        <TitlePage name="Deseja trazer seus perfis de usuário Smart TV para uma melhor experiência na TV aberta?" />
      </header>
      <div className="flex flex-col justify-center items-center h-full w-full">
        <div className="p-4 rounded flex items-center justify-center text-white flex-grow my-10 mx-10 gap-8 mr-10 overflow-hidden">
          <ProfileCardChange
            icon={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
            name={"Nome do Perfil 1"}
            id={"import1"}
          />
          <ProfileCardChange
            icon={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
            name={"Nome do Perfil 2"}
            id={"import2"}
          />
          <ProfileCard
            icon={
              "https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX5697474.jpg"
            }
            name={"Criar seu novo perfil"}
            create
          />
        </div>

        <h3 className="text-center w-7/12 my-10 text-2xl text-white mx-10">Em conformidade com a Lei Geral de Proteção de Dados (LGPD), cada radiodifusor solicitará sua permissão para uso dos dados de seu perfil e coleta de outras informações</h3>
      </div>

      <Footer />
    </>
  );
}
