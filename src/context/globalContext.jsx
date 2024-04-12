import { createContext, useState, useContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  const [userFinanzas, setUserFinanzas] = useState([{}]);
  const [userTags, setUserTags] = useState([{}]);
  const [sideBarSelected, setSideBarSelected] = useState("finanzas");

  const resetSession = () => {
    setIsLogged(false);
    setUser({});
    setToken("");
    setUserFinanzas([{}]);
    setUserTags([{}]);
  };

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        setIsLogged,
        user,
        setUser,
        token,
        setToken,
        userFinanzas,
        setUserFinanzas,
        userTags,
        setUserTags,
        resetSession,
        sideBarSelected,
        setSideBarSelected,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
