import { createContext, useContext, useState } from "react";

export const MenuContext = createContext(null);

export const MenuContextProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(null);
  return (
    <MenuContext.Provider value={{ showMenu, setShowMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

//custom hook

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (context == undefined) {
    throw new Error("Menu context is not defined");
  }
  return context;
};
