import { createContext, useContext } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {

  return (
    <DataContext.Provider value={}>
      { children }
    </DataContext.Provider>
  )
}

const useData = () => useContext(DataContext);

export { DataProvider, useData };