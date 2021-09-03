import { createContext, useContext, useState } from 'react';

const MainContext = createContext();

export function ContextWrapper({ children }) {
  const [name, setName] = useState("Ana");
  const [idade, setIdade] = useState(10);

  return (
    <MainContext.Provider value={name, setName, idade, setIdade}>
      { children }
    </MainContext.Provider>
  );
}

export function useMainContext() {
  return useContext(MainContext);
}