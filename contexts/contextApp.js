import { createContext, useState, useContext } from "react";

const casosContext = createContext("");
export const useCasosCtx = () => useContext(casosContext);
export const CasosProvider = ({ children }) => {
  
  const [views,setViews] = useState(1);

  return (
    //@ts-ignore
    <casosContext.Provider value={{setViews,views}}>
      {children}
    </casosContext.Provider>
  );
};