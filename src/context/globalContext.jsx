import { createContext, useState, useContext } from "react";
import { readFinanzasByUserID } from "../fetchs/fetchFinanzas";
import { readTagsByUserID } from "../fetchs/fetchTags";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  const [userFinanzas, setUserFinanzas] = useState([{}]);
  const [userTags, setUserTags] = useState([{}]);
  const [sideBarSelected, setSideBarSelected] = useState("finanzas");

  const [dialogOpened, setDialogOpened] = useState(false);

  const updateFinanzas = async (id) => {
    const { arrayFinanzas } = await readFinanzasByUserID(id || user._id);
    setUserFinanzas(arrayFinanzas);
  };

  const updateTags = async (id) => {
    const { arrayTags } = await readTagsByUserID(id || user._id);
    setUserTags(arrayTags);
  };

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
        updateFinanzas,
        updateTags,
        dialogOpened,
        setDialogOpened,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
