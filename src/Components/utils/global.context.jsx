import { createContext, useState } from "react";

export const initialState = {
  temas: {
    light : {
      nav : 'lightblue',
      home: 'white',
      footer: 'white',
      letras:'black',
      contact: 'white',
      fav: 'white'
    },
    dark: {
      nav: 'lightblue',
      home: 'darkgray',
      footer: 'darkgray',
      letras: 'white',
      contact:'darkgray',
      fav:'darkgray'
    }
  }
}
export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [tema, setTema] = useState(initialState.temas.light)

  const handleTheme = ()=> {
    setTema((t) => (t === initialState.temas.light ? initialState.temas.dark : initialState.temas.light ) )
  } 
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo


  return (
    <ContextGlobal.Provider value={{tema, handleTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};