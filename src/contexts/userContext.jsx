import { createContext, useState } from "react";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const [nome, setNome] = useState("cavalos");
  const [avatar, setAvatar] = useState("");
  const [preferencias, setPreferencias] = useState({});

  return (
    <UserContext.Provider
      value={{
        nome,
        setNome,
        avatar,
        setAvatar,
        preferencias,
        setPreferencias,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
